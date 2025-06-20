// 货物信息解析工具函数
import { getAirportCity, formatAirportDisplay } from './airport-codes';
import { parseAddressAndFindAirports } from './address-parser';

export interface CargoInfo {
  name: string;
  weight: number; // kg
  volume: number; // cbm
  pallets: number;
  pieces: number;
  dimensions: Dimension[];
  destination?: string; // 目的地
  destinationCode?: string; // 机场代码
  origin?: string; // 货物所在地
  packageType?: 'pallets' | 'boxes' | 'pieces' | 'wooden_boxes'; // 包装类型
  singlePalletWeight?: number; // 临时字段：单个托盘重量
  dimensionDetails?: DimensionDetail[]; // 尺寸明细计算过程
}

export interface Dimension {
  length: number; // 尺寸值
  width: number; // 尺寸值
  height: number; // 尺寸值
  quantity: number;
  unit: 'm' | 'cm' | 'mm'; // 尺寸单位
}

export interface CalculationResult {
  totalWeight: number; // kg
  totalVolume: number; // cbm
  volumeWeight: number; // kg (体积重)
  chargeableWeight: number; // kg (计费重)
  totalPieces: number;
  density: number; // kg/cbm (密度/比重)
}

export interface DimensionDetail {
  name: string;
  length: number;
  width: number;
  height: number;
  volume: number;
  unit?: 'm' | 'cm' | 'mm';
  quantity?: number;
}

// 智能字符清理和标准化函数
function normalizeText(text: string): string {
  let normalizedText = text;

  // 1. 拼写纠错
  const corrections = {
    // 重量单位纠错
    'k9': 'kg',
    'kd': 'kg',
    'k8': 'kg',
    'k0': 'kg',
    'kq': 'kg',
    'ke': 'kg',
    'k7': 'kg',
    'k6': 'kg',
    'k5': 'kg',
    'k4': 'kg',
    'k3': 'kg',
    'k2': 'kg',
    'k1': 'kg',
    // 体积单位纠错
    'cbm9': 'cbm',
    'cbmd': 'cbm',
    'cb9': 'cbm',
    // 尺寸单位纠错
    'mm9': 'mm',
    'mmd': 'mm',
    'cm9': 'cm',
    'cmd': 'cm'
  };

  for (const [wrong, correct] of Object.entries(corrections)) {
    const regex = new RegExp(wrong, 'gi');
    normalizedText = normalizedText.replace(regex, correct);
  }

  // 2. 统一分隔符 - 将各种分隔符标准化为单个斜杠
  normalizedText = normalizedText
    .replace(/\/\/+/g, '/') // 双斜杠或多斜杠 -> 单斜杠
    .replace(/\?\?+/g, '') // 多个问号 -> 删除
    .replace(/\?/g, '') // 单个问号 -> 删除
    .replace(/\s*\/\s*/g, '/') // 斜杠前后的空格 -> 去除
    .replace(/\s*\*\s*/g, '*') // 星号前后的空格 -> 去除
    .replace(/\s+/g, ' ') // 多个空格 -> 单个空格
    .trim(); // 去除首尾空格

  return normalizedText;
}

// 保持向后兼容
function correctSpellingErrors(text: string): string {
  return normalizeText(text);
}

// 解析货物信息文本
export function parseCargoText(text: string): Partial<CargoInfo> {
  // 🔥🔥🔥 V113 简洁版 - 修复传统格式优先级问题 🔥🔥🔥
  console.log('🔥🔥🔥 V113 DEBUG: parseCargoText 函数开始执行! 🔥🔥🔥');
  console.log('🔥🔥🔥 输入文本:', text);

  // 先进行字符清理和标准化
  const correctedText = normalizeText(text);
  console.log('🚀 parseCargoText 被调用!', { input: text, normalized: correctedText });

  // 🔍 调试：追踪产品名称设置的每一步
  console.log('🔍 开始解析流程，初始化 result.name = undefined');

  const result: Partial<CargoInfo> = {};

  // 🔥 新增：解析优先级标志，防止高优先级解析结果被覆盖
  let parsingPriority = 0; // 0=未解析, 1=传统格式, 2=BOM格式, 3=特殊格式

  // 🔥 最高优先级：强制检查BOM格式
  if (correctedText.includes('BOM') && correctedText.includes('CTN')) {
    console.log('🔥 检测到BOM和CTN关键词，强制解析BOM格式');

    // 超简单的数字提取 - 按顺序提取前3个数字
    const numbers = correctedText.match(/\d+(?:\.\d+)?/g);
    console.log('🔢 提取到的所有数字:', numbers);

    if (numbers && numbers.length >= 3) {
      const pieces = Number.parseFloat(numbers[0]); // 460
      const weight = Number.parseFloat(numbers[1]); // 2800
      const volume = Number.parseFloat(numbers[2]); // 34

      result.pieces = pieces;
      result.weight = weight;
      result.volume = volume;
      result.destinationCode = 'BOM';
      result.destination = 'BOM,孟买,Mumbai';
      result.packageType = 'boxes';
      result.name = '普货';

      console.log('🎯 强制BOM解析结果:', result);
      return result;
    }
  }

  // 🔥 标签格式解析 - 支持"产品："、"毛重："等格式
  if (correctedText.includes('产品：') || correctedText.includes('毛重：') || correctedText.includes('木箱尺寸')) {
    console.log('🔍 检测到标签格式，开始解析...');

    const labelResult = parseLabelFormat(correctedText);
    if (labelResult.success && labelResult.data) {
      console.log('✅ 标签格式解析成功');
      return labelResult.data;
    }
  }

  // 🔥 新增：多crate格式解析 - 优先级最高，因为格式非常明确
  if (correctedText.includes('crate') && (correctedText.includes('sheets') || correctedText.includes('total'))) {
    console.log('🔍 检测到多crate格式，开始解析...');

    const crateResult = parseMultiCrateFormat(correctedText);
    if (crateResult.success && crateResult.data) {
      console.log('✅ 多crate格式解析成功，继续地址检测...');

      // 🔥 进行地址检测 - 修正为目的地
      const detectedAirport = detectAddressInText(correctedText);
      if (detectedAirport) {
        crateResult.data.destinationCode = detectedAirport;
        crateResult.data.destination = formatAirportDisplay(detectedAirport);
        console.log(`🛬 地址检测成功，设置目的地: ${detectedAirport}`);
      }

      return crateResult.data;
    }
  }

  // 优先处理空运格式 - 机场代码识别
  const lines = correctedText.trim().split('\n').filter(line => line.trim());

  // 🔥 修复机场代码识别和产品名称提取
  const airportCodeMatches = correctedText.match(/\b([A-Z]{3})\b/g);
  console.log('🔍 搜索到的机场代码:', airportCodeMatches);

  if (airportCodeMatches) {
    for (const code of airportCodeMatches) {
      console.log(`🔍 检查机场代码: ${code}`);
      const cityName = getAirportCity(code);
      console.log(`🔍 机场代码 ${code} 对应城市:`, cityName);

      if (cityName) {
        result.destinationCode = code;
        result.destination = formatAirportDisplay(code);
        console.log(`🛫 识别到机场代码: ${code} -> ${result.destination}`);

        // 🔥 立即提取产品名称，避免被后续逻辑覆盖
        const firstLine = correctedText.split('\n')[0]?.trim();
        console.log(`🔍 第一行原始内容: "${firstLine}"`);

        if (firstLine?.includes(code)) {
          // 🔥 增强：更好的产品名称提取逻辑
          console.log(`🔍 分析第一行: "${firstLine}"`);

          const afterAirportCode = firstLine.split(code)[1]?.trim();
          const beforeAirportCode = firstLine.split(code)[0]?.trim();

          console.log(`🔍 机场代码后面: "${afterAirportCode}"`);
          console.log(`🔍 机场代码前面: "${beforeAirportCode}"`);

          // 🔥 特别处理：优先提取机场代码后面的产品名称（如"WAW设备及配件"）
          if (afterAirportCode && afterAirportCode.length >= 2 && afterAirportCode.length <= 20) {
            // 🔥 进一步清理：移除可能的标点符号
            const cleanedName = afterAirportCode.replace(/^[，。；、\s]+|[，。；、\s]+$/g, '').trim();
            if (cleanedName.length >= 2) {
              result.name = cleanedName;
              console.log(`✅ 步骤1-从机场代码后提取产品名称: "${result.name}"`);
              console.log(`🔒 设置名称后立即跳出循环，防止覆盖`);
              break; // 🔥 找到名称后立即跳出，防止被覆盖
            }
          } else if (beforeAirportCode && beforeAirportCode.length >= 2 && beforeAirportCode.length <= 20) {
            // 🔥 清理前面的产品名称
            const cleanedName = beforeAirportCode.replace(/^[，。；、\s]+|[，。；、\s]+$/g, '').trim();
            if (cleanedName.length >= 2) {
              result.name = cleanedName;
              console.log(`✅ 步骤1-从机场代码前提取产品名称: "${result.name}"`);
              console.log(`🔒 设置名称后立即跳出循环，防止覆盖`);
              break; // 🔥 找到名称后立即跳出，防止被覆盖
            }
          } else {
            console.log(`⚠️ 机场代码前后都没有找到合适的产品名称`);
          }
        } else {
          console.log(`⚠️ 第一行不包含机场代码 ${code}`);
        }

        break; // 找到第一个有效的机场代码就停止
      } else {
        console.log(`⚠️ ${code} 不是有效的机场代码`);
      }
    }
  } else {
    console.log('⚠️ 未找到任何三字机场代码');
  }

  // 检查第一行是否为单独的三字机场代码
  if (lines.length > 0 && !result.destinationCode) {
    const firstLine = lines[0].trim();
    if (firstLine.match(/^[A-Z]{3}$/)) {
      const airportCode = firstLine;
      const cityName = getAirportCity(airportCode);
      if (cityName) {
        result.destinationCode = airportCode;
        result.destination = formatAirportDisplay(airportCode);
      }
    }
  }

  // 如果没有找到，检查文本中是否包含三字机场代码
  if (!result.destinationCode) {
    // 匹配文本中的三字机场代码，前后可以有空格或其他字符
    const airportCodeMatch = correctedText.match(/\b([A-Z]{3})\b/g);
    console.log('🔍 后备机场代码搜索结果:', airportCodeMatch);

    if (airportCodeMatch) {
      for (const code of airportCodeMatch) {
        console.log(`🔍 检查后备机场代码: ${code}`);
        const cityName = getAirportCity(code);
        console.log(`🔍 机场代码 ${code} 对应城市:`, cityName);

        if (cityName) {
          result.destinationCode = code;
          result.destination = formatAirportDisplay(code);
          console.log(`🛫 后备逻辑识别到机场代码: ${code} -> ${result.destination}`);

          // 🔥 添加产品名称提取逻辑
          const firstLine = correctedText.split('\n')[0]?.trim();
          console.log(`🔍 后备逻辑-第一行内容: "${firstLine}"`);

          if (firstLine?.includes(code)) {
            const afterAirportCode = firstLine.split(code)[1]?.trim();
            const beforeAirportCode = firstLine.split(code)[0]?.trim();

            console.log(`🔍 后备逻辑-机场代码后面: "${afterAirportCode}"`);
            console.log(`🔍 后备逻辑-机场代码前面: "${beforeAirportCode}"`);

            // 🔥 特别处理：优先提取机场代码后面的产品名称（如"WAW设备及配件"）
            if (afterAirportCode && afterAirportCode.length >= 2 && afterAirportCode.length <= 20) {
              // 🔥 进一步清理：移除可能的标点符号
              const cleanedName = afterAirportCode.replace(/^[，。；、\s]+|[，。；、\s]+$/g, '').trim();
              if (cleanedName.length >= 2) {
                result.name = cleanedName;
                console.log(`✅ 后备逻辑-从机场代码后提取产品名称: "${result.name}"`);
              }
            } else if (beforeAirportCode && beforeAirportCode.length >= 2 && beforeAirportCode.length <= 20) {
              // 🔥 清理前面的产品名称
              const cleanedName = beforeAirportCode.replace(/^[，。；、\s]+|[，。；、\s]+$/g, '').trim();
              if (cleanedName.length >= 2) {
                result.name = cleanedName;
                console.log(`✅ 后备逻辑-从机场代码前提取产品名称: "${result.name}"`);
              }
            }
          }

          break; // 找到第一个有效的机场代码就停止
        }
      }
    }
  }

  // 🔥 修正：智能地址检测 - 业务逻辑修正：地址默认为目的地
  if (!result.destinationCode) {
    console.log('🏠 开始智能地址检测...');

    // 尝试检测国际地址格式（主要是美国地址，作为目的地）
    const addressPatterns = [
      // 完整地址格式: 241 N Congress Ave, Delray Beach, FL 33445
      /\b\d+.*?[A-Za-z\s]+(Ave|Street|St|Road|Rd|Blvd|Drive|Dr|Lane|Ln|Way|Circle|Cir),\s*([A-Za-z\s]+),\s*([A-Z]{2})\s*\d{5}/gi,
      // 简化格式: Delray Beach, FL 33445
      /\b([A-Za-z\s]+),\s*([A-Z]{2})\s*\d{5}/gi,
      // 更简格式: Miami, FL
      /\b([A-Za-z\s]+),\s*([A-Z]{2})\b/gi
    ];

    for (const pattern of addressPatterns) {
      const matches = correctedText.matchAll(pattern);
      for (const match of matches) {
        const possibleAddress = match[0];
        console.log(`🔍 检测到可能的地址: "${possibleAddress}"`);

        const addressResult = parseAddressAndFindAirports(possibleAddress);
        if (addressResult.primaryAirport) {
          console.log(`✅ 地址解析成功，推荐机场: ${addressResult.primaryAirport.code}`);

          // 🔥 业务逻辑修正：设置为目的地（因为起运地通常是中国）
          result.destinationCode = addressResult.primaryAirport.code;
          result.destination = formatAirportDisplay(addressResult.primaryAirport.code);

          console.log(`🛬 根据地址"${addressResult.address?.city}, ${addressResult.address?.state}"设置目的地: ${result.destinationCode}`);
          break;
        }
      }
      if (result.destinationCode) break; // 找到就停止
    }
  }

  // 🔥 修复：扩展传统格式解析 - 支持更多分隔符类型，提高优先级
  const traditionalPatterns = [
    // 原有的分号分隔格式
    /(\d+(?:\.\d+)?)\s*(?:kgs?|KGS?|公斤)\s*[;；]\s*(\d+(?:\.\d+)?)\s*(?:cbm|CBM|方|立方|m3)\s*[;；]\s*(\d+(?:\.\d+)?)\s*(?:托|pallet)/i,
    // 新增：逗号分隔格式
    /(\d+(?:\.\d+)?)\s*(?:kgs?|KGS?|公斤)\s*[,，]\s*(\d+(?:\.\d+)?)\s*(?:cbm|CBM|方|立方|m3)\s*[,，]\s*(\d+(?:\.\d+)?)\s*(?:托|pallet)/i,
    // 新增：冒号分隔格式
    /(\d+(?:\.\d+)?)\s*(?:kgs?|KGS?|公斤)\s*[:：]\s*(\d+(?:\.\d+)?)\s*(?:cbm|CBM|方|立方|m3)\s*[:：]\s*(\d+(?:\.\d+)?)\s*(?:托|pallet)/i,
    // 新增：斜杠分隔格式
    /(\d+(?:\.\d+)?)\s*(?:kgs?|KGS?|公斤)\s*[\/]\s*(\d+(?:\.\d+)?)\s*(?:cbm|CBM|方|立方|m3)\s*[\/]\s*(\d+(?:\.\d+)?)\s*(?:托|pallet)/i,
    // 新增：混合分隔符格式 (支持任意分隔符组合)
    /(\d+(?:\.\d+)?)\s*(?:kgs?|KGS?|公斤)\s*[;；,，:：\/]\s*(\d+(?:\.\d+)?)\s*(?:cbm|CBM|方|立方|m3)\s*[;；,，:：\/]\s*(\d+(?:\.\d+)?)\s*(?:托|pallet)/i,
  ];

  for (const pattern of traditionalPatterns) {
    const traditionalFormatMatch = correctedText.match(pattern);
    if (traditionalFormatMatch) {
      result.weight = Number.parseFloat(traditionalFormatMatch[1]); // 重量
      result.volume = Number.parseFloat(traditionalFormatMatch[2]); // 体积
      result.pallets = Number.parseFloat(traditionalFormatMatch[3]); // 托盘数
      result.pieces = result.pallets; // 托盘数=件数
      result.packageType = 'pallets';
      parsingPriority = 1; // 🔥 设置传统格式优先级
      console.log(`📦 传统格式识别成功: 重量=${result.weight}kg, 体积=${result.volume}cbm, 托盘=${result.pallets}托`);
      console.log(`🔒 设置解析优先级为1，防止后续覆盖`);
      break; // 找到匹配就停止
    }
  }

  // 🔥 修复：优先提取产品名称，排除机场代码 - 在传统格式解析后立即执行
  const firstLine = correctedText.split('\n')[0]?.trim();
  if (firstLine) {
    // 🔥 关键修复：如果第一行包含机场代码，提取机场代码后面的部分作为产品名称
    if (result.destinationCode && firstLine.includes(result.destinationCode)) {
      // 提取机场代码之后的文本作为产品名称
      const afterAirportCode = firstLine.split(result.destinationCode)[1]?.trim();
      if (afterAirportCode && afterAirportCode.length >= 2 && afterAirportCode.length <= 20) {
        result.name = afterAirportCode;
        console.log(`✨ 步骤2-从第一行提取产品名称: "${result.name}" (排除机场代码 ${result.destinationCode})`);
      }
    } else if (!firstLine.match(/^\s*[A-Z]{3}\s*$/) && !firstLine.match(/\d+.*(?:kg|cbm|cm|方|托|件|箱)/)) {
      // 如果第一行不是纯机场代码，且不包含数据信息，作为产品名称
      const cleanName = firstLine.replace(/[?？]/g, '').trim();

      // 🔥 修复：检查是否包含机场代码，如果包含则只取机场代码后面的部分
      if (result.destinationCode && cleanName.includes(result.destinationCode)) {
        const nameAfterCode = cleanName.split(result.destinationCode)[1]?.trim();
        const nameBeforeCode = cleanName.split(result.destinationCode)[0]?.trim();

        if (nameAfterCode && nameAfterCode.length >= 2 && nameAfterCode.length <= 20) {
          result.name = nameAfterCode;
          console.log(`📝 步骤3-第一行产品名称(排除机场代码): "${result.name}"`);
        } else if (nameBeforeCode && nameBeforeCode.length >= 2 && nameBeforeCode.length <= 20) {
          result.name = nameBeforeCode;
          console.log(`📝 步骤3-第一行产品名称(机场代码前): "${result.name}"`);
        }
      } else if (cleanName.length >= 2 && cleanName.length <= 20) {
        result.name = cleanName;
        console.log(`📝 步骤4-第一行产品名称: "${result.name}"`);
      }
    }
  }

  // 识别货物所在地 - 支持多种格式
  let originMatch = correctedText.match(/货在(.+?)(?=\s|$)/);
  if (originMatch) {
    result.origin = originMatch[1].trim();
  }

  // 支持 "深圳BHM" 格式，提取地点
  if (!result.origin) {
    const cityAirportMatch = correctedText.match(/(深圳|广州|上海|北京|武汉|成都|重庆|天津|青岛|大连|厦门|佛山|东莞|义乌|宁波|苏州|无锡|杭州|南京|合肥|郑州|济南|石家庄|太原|西安|兰州|银川|西宁|乌鲁木齐|长春|哈尔滨|沈阳|海口|三亚|昆明|贵阳|南宁|拉萨|呼和浩特)\s*[A-Z]{3}/);
    if (cityAirportMatch) {
      result.origin = cityAirportMatch[1];
    }
  }

  // 支持 "在深圳或者广州" 格式，优先选择深圳
  if (!result.origin) {
    const multiCityMatch = correctedText.match(/在\s*(深圳|广州|上海|北京)[^，。；\n]*或[^，。；\n]*(深圳|广州|上海|北京)/);
    if (multiCityMatch) {
      // 优先选择深圳，其次广州，再其次上海，最后北京
      const cities = [multiCityMatch[1], multiCityMatch[2]];
      if (cities.includes('深圳')) {
        result.origin = '深圳';
      } else if (cities.includes('广州')) {
        result.origin = '广州';
      } else if (cities.includes('上海')) {
        result.origin = '上海';
      } else {
        result.origin = cities[0];
      }
    }
  }

  // 支持 "香港到墨西哥" 格式，提取起运地
  if (!result.origin) {
    originMatch = correctedText.match(/(.+?)到[^，。；\n]+[A-Z]{3}/);
    if (originMatch) {
      const origin = originMatch[1].trim();
      // 确保不是很长的描述
      if (origin.length <= 10 && !origin.match(/\d+|kg|cbm|cm|箱/)) {
        result.origin = origin;
      }
    }
  }

  // 支持 "香港飞到捷克布拉格" 格式，提取起运地
  if (!result.origin) {
    originMatch = correctedText.match(/(.+?)飞到[^，。；\n]+[A-Z]{3}/);
    if (originMatch) {
      const origin = originMatch[1].trim();
      // 确保不是很长的描述
      if (origin.length <= 10 && !origin.match(/\d+|kg|cbm|cm|箱/)) {
        result.origin = origin;
      }
    }
  }

  // 🔥 优先处理BOM/CTN格式 - 强制优先级，避免被其他解析覆盖
  const bomPattern = /([A-Z]{3})\s+(\d+(?:\.\d+)?)\s*(?:CTN|ctns|ctn|CTNS)\s*[\/]?\s*(?:GW|gw|毛重|Gross Weight|NW|nw|净重|Net Weight)?\s*(\d+(?:\.\d+)?)\s*(?:KG|kg|kgs|KGS)\s*[\/]?\s*(\d+(?:\.\d+)?)\s*(?:CBM|cbm|方|立方|m3)/i;
  const bomMatch = correctedText.match(bomPattern);

  if (bomMatch) {
    console.log('🔥 BOM格式匹配成功:', bomMatch);

    const airportCode = bomMatch[1]; // BOM
    const pieces = Number.parseFloat(bomMatch[2]); // 460
    const weight = Number.parseFloat(bomMatch[3]); // NW2800或GW3270
    const volume = Number.parseFloat(bomMatch[4]); // 34

    // 设置机场代码和目的地
    const cityName = getAirportCity(airportCode);
    if (cityName) {
      result.destinationCode = airportCode;
      result.destination = formatAirportDisplay(airportCode);
    }

    // 强制设置解析结果，优先级最高
    result.pieces = pieces;
    result.weight = weight;
    result.volume = volume;
    result.packageType = 'boxes';
    parsingPriority = 2; // 🔥 设置BOM格式优先级

    console.log('🔥 BOM解析结果:', { pieces, weight, volume, destination: result.destination });

    // 设置默认货物名称
    if (!result.name) {
      result.name = '普货';
    }

    // 直接返回结果，不再执行后续解析
    return result;
  }

  // 🔥 新增：托盘重量体积格式解析 - "重量：23托 重量:9765 KGS\n尺寸：1.2*1.0*1.54m\n体积：42 CBM"
  console.log('🔍 开始托盘重量体积格式解析...');
  const palletFormatPatterns = [
    // "重量：23托 重量:9765 KGS\n尺寸：1.2*1.0*1.54m\n体积：42 CBM" 格式
    /重量[：:]\s*(\d+)\s*托.*?重量[：:]\s*(\d+(?:\.\d+)?)\s*(?:KGS?|kgs?|公斤).*?尺寸[：:].*?(\d+(?:\.\d+)?)\s*[×x*]\s*(\d+(?:\.\d+)?)\s*[×x*]\s*(\d+(?:\.\d+)?)\s*m.*?体积[：:]\s*(\d+(?:\.\d+)?)\s*(?:CBM|cbm|方)/is,
    // "23托 9765KG 1.2*1.0*1.54m 42CBM" 格式（简化版）
    /(\d+)\s*托.*?(\d+(?:\.\d+)?)\s*(?:KGS?|kgs?|公斤).*?(\d+(?:\.\d+)?)\s*[×x*]\s*(\d+(?:\.\d+)?)\s*[×x*]\s*(\d+(?:\.\d+)?)\s*m.*?(\d+(?:\.\d+)?)\s*(?:CBM|cbm|方)/is,
    // "重量：23托，总重：9765kg，体积：42cbm" 格式（一行版）
    /重量[：:]\s*(\d+)\s*托[，,]?\s*(?:总?重量?|重)[：:]\s*(\d+(?:\.\d+)?)\s*(?:KGS?|kgs?|公斤)[，,]?\s*体积[：:]\s*(\d+(?:\.\d+)?)\s*(?:CBM|cbm|方)/i,
  ];

  for (let i = 0; i < palletFormatPatterns.length; i++) {
    const pattern = palletFormatPatterns[i];
    const match = correctedText.match(pattern);
    console.log(`🔍 尝试托盘格式模式 ${i}: ${pattern} -> ${match ? '匹配' : '无匹配'}`);

    if (match) {
      console.log(`🔍 托盘格式匹配结果:`, match);

      let palletCount: number, totalWeight: number, length: number, width: number, height: number, totalVolume: number;

      if (i === 0) {
        // "重量：23托 重量:9765 KGS\n尺寸：1.2*1.0*1.54m\n体积：42 CBM" 格式
        [, palletCount, totalWeight, length, width, height, totalVolume] = match.map((m, idx) => idx === 0 ? m : Number.parseFloat(m)) as [string, number, number, number, number, number, number];
      } else if (i === 1) {
        // "23托 9765KG 1.2*1.0*1.54m 42CBM" 格式
        [, palletCount, totalWeight, length, width, height, totalVolume] = match.map((m, idx) => idx === 0 ? m : Number.parseFloat(m)) as [string, number, number, number, number, number, number];
      } else {
        // 一行版格式（无尺寸信息）
        [, palletCount, totalWeight, totalVolume] = match.map((m, idx) => idx === 0 ? m : Number.parseFloat(m)) as [string, number, number, number];
        // 设置默认尺寸值
        length = width = height = 0;
      }

      // 计算单个托盘重量
      const singlePalletWeight = totalWeight / palletCount;

      result.pieces = palletCount;
      result.pallets = palletCount;
      result.weight = totalWeight;
      result.volume = totalVolume; // 🔥 使用明确给出的体积，不重新计算
      result.packageType = 'pallets';

      // 🔥 只有在有有效尺寸信息时才设置尺寸
      if (length > 0 && width > 0 && height > 0) {
        result.dimensions = [{
          length,
          width,
          height,
          unit: 'm',
          quantity: palletCount
        }];
      }

      // 设置默认产品名称
      if (!result.name || result.name === '普货') {
        result.name = '普货';
      }

      console.log(`📦 托盘格式识别成功: ${palletCount}托盘, 单托盘${singlePalletWeight.toFixed(2)}kg, 总重${totalWeight}kg, 总体积${totalVolume}cbm${length > 0 ? `, 尺寸${length}×${width}×${height}m` : ''}`);
      parsingPriority = 3; // 设置高优先级，防止被覆盖
      break;
    }
  }

  // 🔥 新增：结构化商品信息解析 - "Comm: 运动装备\n数量：17箱\n尺寸：每箱48 x 48 x 58 厘米\n总重量：400 公斤"
  console.log('🔍 开始结构化商品信息解析...');
  const structuredPatterns = [
    // "数量：17箱\n尺寸：每箱48 x 48 x 58 厘米\n总重量：400 公斤" 格式
    /数量[：:]\s*(\d+)\s*箱.*?尺寸[：:].*?(\d+(?:\.\d+)?)\s*[×x]\s*(\d+(?:\.\d+)?)\s*[×x]\s*(\d+(?:\.\d+)?)\s*(?:厘米|cm).*?总重量[：:]\s*(\d+(?:\.\d+)?)\s*(?:公斤|kg)/is,
    // "17箱\n每箱48 x 48 x 58 厘米\n400 公斤" 格式（简化版）
    /(\d+)\s*箱.*?每箱\s*(\d+(?:\.\d+)?)\s*[×x]\s*(\d+(?:\.\d+)?)\s*[×x]\s*(\d+(?:\.\d+)?)\s*(?:厘米|cm).*?(\d+(?:\.\d+)?)\s*(?:公斤|kg)/is,
    // "数量：17箱，尺寸：48 x 48 x 58cm，重量：400kg" 格式（一行版）
    /数量[：:]\s*(\d+)\s*箱[，,]?\s*尺寸[：:].*?(\d+(?:\.\d+)?)\s*[×x]\s*(\d+(?:\.\d+)?)\s*[×x]\s*(\d+(?:\.\d+)?)\s*(?:厘米|cm)[，,]?\s*(?:总?重量|重)[：:]\s*(\d+(?:\.\d+)?)\s*(?:公斤|kg)/i,
  ];

  for (let i = 0; i < structuredPatterns.length; i++) {
    const pattern = structuredPatterns[i];
    const match = correctedText.match(pattern);
    console.log(`🔍 尝试结构化模式 ${i}: ${pattern} -> ${match ? '匹配' : '无匹配'}`);

    if (match) {
      console.log(`🔍 结构化匹配结果:`, match);

      let quantity: number, length: number, width: number, height: number, totalWeight: number;

      if (i === 0) {
        // "数量：17箱...尺寸：...48 x 48 x 58...总重量：400" 格式
        [, quantity, length, width, height, totalWeight] = match.map((m, idx) => idx === 0 ? m : Number.parseFloat(m)) as [string, number, number, number, number, number];
      } else if (i === 1) {
        // "17箱...每箱48 x 48 x 58...400公斤" 格式
        [, quantity, length, width, height, totalWeight] = match.map((m, idx) => idx === 0 ? m : Number.parseFloat(m)) as [string, number, number, number, number, number];
      } else {
        // 一行版格式
        [, quantity, length, width, height, totalWeight] = match.map((m, idx) => idx === 0 ? m : Number.parseFloat(m)) as [string, number, number, number, number, number];
      }

      // 计算单件重量和总体积
      const singleWeight = totalWeight / quantity;
      const singleVolumeInCubicMeters = (length * width * height) / 1000000; // cm³ -> m³
      const totalVolume = singleVolumeInCubicMeters * quantity;

      result.pieces = quantity;
      result.weight = totalWeight;
      result.volume = totalVolume;
      result.packageType = 'boxes';

      // 设置尺寸信息
      result.dimensions = [{
        length,
        width,
        height,
        unit: 'cm',
        quantity
      }];

      // 提取产品名称（如果有Comm:前缀）
      const commMatch = correctedText.match(/Comm[：:]\s*(.+?)(?:\n|$)/i);
      if (commMatch && (!result.name || result.name === '普货')) {
        const productName = commMatch[1].trim();
        if (productName && productName.length <= 20) {
          result.name = productName;
        }
      }

      // 如果没有提取到产品名称，使用默认值
      if (!result.name || result.name === '普货') {
        result.name = '普货';
      }

      console.log(`📦 结构化格式识别成功: ${quantity}箱, 单件${singleWeight.toFixed(2)}kg, 总重${totalWeight}kg, 单件体积${singleVolumeInCubicMeters.toFixed(6)}cbm, 总体积${totalVolume.toFixed(3)}cbm, 尺寸${length}×${width}×${height}cm`);
      parsingPriority = 3; // 设置高优先级，防止被覆盖
      break;
    }
  }

  // 🔥 新增：箱规格式解析 - "箱规：45*35*30cm，一件重是8.08kg 15箱"
  console.log('🔍 开始箱规格式解析...');
  const boxSpecPatterns = [
    // "箱规：45*35*30cm，一件重是8.08kg 15箱" 格式
    /箱规[：:]\s*(\d+(?:\.\d+)?)\*(\d+(?:\.\d+)?)\*(\d+(?:\.\d+)?)\s*cm[，,]?\s*一件重是(\d+(?:\.\d+)?)kg\s+(\d+)箱/i,
    // "45*35*30cm，一件重是8.08kg 15箱" 格式（无"箱规："前缀）
    /(\d+(?:\.\d+)?)\*(\d+(?:\.\d+)?)\*(\d+(?:\.\d+)?)\s*cm[，,]?\s*一件重是(\d+(?:\.\d+)?)kg\s+(\d+)箱/i,
    // "箱规：45*35*30cm，单件8.08kg，15箱" 格式（变体）
    /箱规[：:]\s*(\d+(?:\.\d+)?)\*(\d+(?:\.\d+)?)\*(\d+(?:\.\d+)?)\s*cm[，,]?\s*单件(\d+(?:\.\d+)?)kg[，,]?\s*(\d+)箱/i,
  ];

  for (let i = 0; i < boxSpecPatterns.length; i++) {
    const pattern = boxSpecPatterns[i];
    const match = correctedText.match(pattern);
    console.log(`🔍 尝试箱规模式 ${i}: ${pattern} -> ${match ? '匹配' : '无匹配'}`);

    if (match) {
      console.log(`🔍 箱规匹配结果:`, match);

      let length: number, width: number, height: number, singleWeight: number, quantity: number;

      if (i === 0 || i === 2) {
        // 带"箱规："前缀的格式
        [, length, width, height, singleWeight, quantity] = match.map((m, idx) => idx === 0 ? m : Number.parseFloat(m)) as [string, number, number, number, number, number];
      } else {
        // 无前缀的格式
        [, length, width, height, singleWeight, quantity] = match.map((m, idx) => idx === 0 ? m : Number.parseFloat(m)) as [string, number, number, number, number, number];
      }

      // 计算总重量和总体积
      const totalWeight = singleWeight * quantity;
      const singleVolumeInCubicMeters = (length * width * height) / 1000000; // cm³ -> m³
      const totalVolume = singleVolumeInCubicMeters * quantity;

      result.pieces = quantity;
      result.weight = totalWeight;
      result.volume = totalVolume;
      result.packageType = 'boxes';

      // 设置尺寸信息
      result.dimensions = [{
        length,
        width,
        height,
        unit: 'cm',
        quantity
      }];

      // 设置产品名称
      if (!result.name || result.name === '普货') {
        result.name = '普货'; // 可以根据需要提取更具体的名称
      }

      console.log(`📦 箱规格式识别成功: ${quantity}箱, 单件${singleWeight}kg, 总重${totalWeight}kg, 单件体积${singleVolumeInCubicMeters.toFixed(6)}cbm, 总体积${totalVolume.toFixed(3)}cbm, 尺寸${length}×${width}×${height}cm`);
      parsingPriority = 3; // 设置高优先级，防止被覆盖
      break;
    }
  }

  // 🔥 新增：中文数字+"托"/"件"的识别
  console.log('🔍 开始中文数字解析...');
  const chineseNumberPatterns = [
    // "135KG, 一托" 格式 - 重量在前，件数在后
    /(\d+(?:\.\d+)?)\s*(?:KG|kg|公斤).*?([一二三四五六七八九十1-9])\s*托/i,
    // "一托, 135KG" 格式 - 件数在前，重量在后
    /([一二三四五六七八九十1-9])\s*托.*?(\d+(?:\.\d+)?)\s*(?:KG|kg|公斤)/i,
    // "一托", "二托", "三托" 等格式，支持重量和体积
    /([一二三四五六七八九十1-9])\s*托.*?(\d+(?:\.\d+)?)\s*(?:KG|kg|公斤).*?(\d+(?:\.\d+)?)\s*(?:CBM|cbm|方)/i,
    // "一件", "二件" 等格式
    /([一二三四五六七八九十1-9])\s*件.*?(\d+(?:\.\d+)?)\s*(?:KG|kg|公斤).*?(\d+(?:\.\d+)?)\s*(?:CBM|cbm|方)/i,
    // "一件, 135KG" 格式 - 件数+重量（可能没有体积）
    /([一二三四五六七八九十1-9])\s*件.*?(\d+(?:\.\d+)?)\s*(?:KG|kg|公斤)/i,
    // "135KG, 一件" 格式 - 重量在前，件数在后
    /(\d+(?:\.\d+)?)\s*(?:KG|kg|公斤).*?([一二三四五六七八九十1-9])\s*件/i,
    // 🔥 新增：处理"单个托盘120KG"这种格式
    /单个托盘(\d+(?:\.\d+)?)\s*(?:KG|kg|公斤)/i,
    // 🔥 新增：处理"单个/每个 + 重量"格式
    /(?:单个|每个).*?(\d+(?:\.\d+)?)\s*(?:KG|kg|公斤)/i,
  ];

  // 中文数字转换映射
  const chineseToNumber: { [key: string]: number } = {
    '一': 1, '二': 2, '三': 3, '四': 4, '五': 5,
    '六': 6, '七': 7, '八': 8, '九': 9, '十': 10,
    '1': 1, '2': 2, '3': 3, '4': 4, '5': 5,
    '6': 6, '7': 7, '8': 8, '9': 9
  };

  // 尝试匹配中文数字格式 - 🔥 添加优先级检查
  if (parsingPriority === 0) {
    for (let i = 0; i < chineseNumberPatterns.length; i++) {
    const pattern = chineseNumberPatterns[i];
    const match = correctedText.match(pattern);
    console.log(`🔍 尝试模式 ${i}: ${pattern} -> ${match ? '匹配' : '无匹配'}`);

    if (match) {
      console.log(`🔍 匹配结果:`, match);

      let chineseNum, weight, volume, pieces;

      // 根据不同模式解析参数
      if (i === 0 || i === 5) {
        // "135KG, 一托" 或 "135KG, 一件" 格式 - 重量在前，件数在后
        weight = Number.parseFloat(match[1]);
        chineseNum = match[2];
        pieces = chineseToNumber[chineseNum] || 1;
      } else if (i === 6 || i === 7) {
        // 🔥 新增：处理"单个托盘120KG"格式
        weight = Number.parseFloat(match[1]);
        // 🔥 重要：如果尺寸解析中得到了件数，使用尺寸解析的件数
        pieces = 1; // 暂时设为1，等尺寸解析完成后再调整
        result.singlePalletWeight = weight; // 保存单个托盘重量
        console.log(`🔍 单个托盘格式，单个重量=${weight}kg，等待尺寸解析完成后计算总重量`);


      } else {
        // 其他格式 - 件数在前，重量在后
        chineseNum = match[1];
        weight = Number.parseFloat(match[2]);
        volume = match[3] ? Number.parseFloat(match[3]) : undefined;
        pieces = chineseToNumber[chineseNum] || 1;
      }

      result.pieces = pieces;
      result.weight = weight;
      if (volume) {
        result.volume = volume;
      }

      // 判断包装类型
      if (match[0].includes('托') || (i === 6 || i === 7)) {
        result.packageType = 'pallets';
        result.pallets = pieces;
      } else {
        result.packageType = 'pieces';
      }

      console.log(`🎯 中文数字格式识别成功: ${chineseNum || '单个'}=${pieces}${match[0].includes('托') || (i === 6 || i === 7) ? '托' : '件'}, 重量=${weight}kg${volume ? `, 体积=${volume}cbm` : ''}`);
      parsingPriority = 3; // 设置特殊格式优先级
      break;
    }
    }
  } else {
    console.log(`🔒 跳过中文数字解析，当前优先级: ${parsingPriority} (已有高优先级解析结果)`);
  }

  // 🔥 新增：表格格式解析 - 支持"实重kg 96.00 长cm 150"等格式
  const tableFormatPattern = /实重kg\s+([\d.]+).*?长cm\s+([\d.]+).*?宽cm\s+([\d.]+).*?高cm\s+([\d.]+).*?件数\s+(\d+).*?方数cbm\s+([\d.]+)/i;
  const tableMatch = correctedText.match(tableFormatPattern);

  if (tableMatch && parsingPriority === 0) {
    const actualWeight = Number.parseFloat(tableMatch[1]);
    const length = Number.parseFloat(tableMatch[2]);
    const width = Number.parseFloat(tableMatch[3]);
    const height = Number.parseFloat(tableMatch[4]);
    const pieces = Number.parseInt(tableMatch[5]);
    const singlePieceVolume = Number.parseFloat(tableMatch[6]); // 🔥 修复：这是单件体积

    result.weight = actualWeight;
    result.pieces = pieces;
    result.volume = singlePieceVolume * pieces; // 🔥 修复：总体积 = 单件体积 × 件数
    result.packageType = 'pieces';

    // 设置尺寸信息
    result.dimensions = [{
      length: length,
      width: width,
      height: height,
      quantity: pieces,
      unit: 'cm'
    }];

    // 尝试提取货物名称（如果有的话）
    if (!result.name || result.name === '普货') {
      // 从单号或其他信息中提取，这里暂时设为普货
      result.name = '普货';
    }

    console.log(`📋 表格格式识别成功: 重量=${actualWeight}kg, 件数=${pieces}件, 单件体积=${singlePieceVolume}cbm, 总体积=${singlePieceVolume * pieces}cbm, 尺寸=${length}×${width}×${height}cm`);
    parsingPriority = 2; // 设置表格格式优先级
  }

  // 🧠 智能三元组识别系统 - 🔥 新增优先级检查，只有在低优先级时才执行
  if (parsingPriority === 0 && !bomMatch) {
    console.log('🔍 开始三元组解析 (优先级0，无高优先级解析结果)');

    // 🔥 智能三元组识别系统 - 支持重量/件数/体积的任意顺序组合（如果BOM格式没有匹配才执行）
    const triplePatterns = [
      // 🔥 新增：支持中英文混合单位格式 "3 crates 1808 kgs 2.54 m³"
      /(\d+(?:\.\d+)?)\s*(?:crates?|箱|托|个|件)\s*[\/,]?\s*(\d+(?:\.\d+)?)\s*(?:kgs?|KGS?|公斤|千克)\s*[\/,]?\s*(\d+(?:\.\d+)?)\s*(?:m³|立方米|方|cbm|CBM)/i,
      // 🔥 新增：反向格式 "2.54 m³ 1808 kgs 3 crates"
      /(\d+(?:\.\d+)?)\s*(?:m³|立方米|方|cbm|CBM)\s*[\/,]?\s*(\d+(?:\.\d+)?)\s*(?:kgs?|KGS?|公斤|千克)\s*[\/,]?\s*(\d+(?:\.\d+)?)\s*(?:crates?|箱|托|个|件)/i,
      // 🔥 新增：重量在前格式 "1808 kgs 3 crates 2.54 m³"
      /(\d+(?:\.\d+)?)\s*(?:kgs?|KGS?|公斤|千克)\s*[\/,]?\s*(\d+(?:\.\d+)?)\s*(?:crates?|箱|托|个|件)\s*[\/,]?\s*(\d+(?:\.\d+)?)\s*(?:m³|立方米|方|cbm|CBM)/i,
      // "BEG 60ctn 618kg 2.41cbm" 格式 - 机场代码 件数ctn 重量kg 体积cbm
      /([A-Z]{3})\s+(\d+(?:\.\d+)?)\s*(?:ctn|ctns|箱|件|个)\s+(\d+(?:\.\d+)?)\s*(?:kg|kgs|KG|KGS)\s+(\d+(?:\.\d+)?)\s*(?:cbm|CBM|方|立方|m3)/i,
      // "KHI//3400KG//12.33CBM//145CTNS" 格式 - 机场代码//重量//体积//箱数 (支持双斜杠分隔)
      /([A-Z]{3})\s*(\d+(?:\.\d+)?)\s*(?:KG|kg|kgs|KGS)\s*(\d+(?:\.\d+)?)\s*(?:CBM|cbm|方|立方|m3)\s*(\d+)\s*(?:CTNS|ctns|箱)/i,
      // "CCU 1028/1.63/35*35*35CM*38CTNS" 格式 - 机场代码 重量/体积/尺寸*箱数
      /([A-Z]{3})\s+(\d+(?:\.\d+)?)\s*[\/]\s*(\d+(?:\.\d+)?)\s*[\/]\s*(\d+(?:\.\d+)?)\s*\*\s*(\d+(?:\.\d+)?)\s*\*\s*(\d+(?:\.\d+)?)\s*cm\s*\*\s*(\d+)\s*(?:CTNS|ctns|箱)/i,
      // "1028/1.63/35*35*35CM*38CTNS" 格式 - 重量/体积/尺寸*箱数（无机场代码）
      /(\d+(?:\.\d+)?)\s*[\/]\s*(\d+(?:\.\d+)?)\s*[\/]\s*(\d+(?:\.\d+)?)\s*\*\s*(\d+(?:\.\d+)?)\s*\*\s*(\d+(?:\.\d+)?)\s*cm\s*\*\s*(\d+)\s*(?:CTNS|ctns|箱)/i,
      // "751KG/42件/2.57CBM" 格式 - 重量/件数/体积
      /(\d+(?:\.\d+)?)\s*(?:KG|kg|kgs|KGS|公斤)\s*[\/,]\s*(\d+)\s*(?:件|个|箱|托|pcs?|pieces?|CTNS|ctns|ctn)\s*[\/,]\s*(\d+(?:\.\d+)?)\s*(?:CBM|cbm|方|立方|m3)/i,
      // "42件/751KG/2.57CBM" 格式 - 件数/重量/体积
      /(\d+)\s*(?:件|个|箱|托|pcs?|pieces?|CTNS|ctns|ctn)\s*[\/,]\s*(\d+(?:\.\d+)?)\s*(?:KG|kg|kgs|KGS|公斤)\s*[\/,]\s*(\d+(?:\.\d+)?)\s*(?:CBM|cbm|方|立方|m3)/i,
      // "2.57CBM/751KG/42件" 格式 - 体积/重量/件数
      /(\d+(?:\.\d+)?)\s*(?:CBM|cbm|方|立方|m3)\s*[\/,]\s*(\d+(?:\.\d+)?)\s*(?:KG|kg|kgs|KGS|公斤)\s*[\/,]\s*(\d+)\s*(?:件|个|箱|托|pcs?|pieces?|CTNS|ctns|ctn)/i,
      // "751KG/2.57CBM/42件" 格式 - 重量/体积/件数
      /(\d+(?:\.\d+)?)\s*(?:KG|kg|kgs|KGS|公斤)\s*[\/,]\s*(\d+(?:\.\d+)?)\s*(?:CBM|cbm|方|立方|m3)\s*[\/,]\s*(\d+)\s*(?:件|个|箱|托|pcs?|pieces?|CTNS|ctns|ctn)/i,
      // "42件/2.57CBM/751KG" 格式 - 件数/体积/重量
      /(\d+)\s*(?:件|个|箱|托|pcs?|pieces?|CTNS|ctns|ctn)\s*[\/,]\s*(\d+(?:\.\d+)?)\s*(?:CBM|cbm|方|立方|m3)\s*[\/,]\s*(\d+(?:\.\d+)?)\s*(?:KG|kg|kgs|KGS|公斤)/i,
      // "2.57CBM/42件/751KG" 格式 - 体积/件数/重量
      /(\d+(?:\.\d+)?)\s*(?:CBM|cbm|方|立方|m3)\s*[\/,]\s*(\d+)\s*(?:件|个|箱|托|pcs?|pieces?|CTNS|ctns|ctn)\s*[\/,]\s*(\d+(?:\.\d+)?)\s*(?:KG|kg|kgs|KGS|公斤)/i,
      // "167 CTNS / 11.79 CBM / 634.60 KGS" 格式 - 件数 单位 / 体积 单位 / 重量 单位 (带空格)
      /(\d+(?:\.\d+)?)\s+(?:件|个|箱|托|pcs?|pieces?|CTNS|ctns|ctn)\s*[\/,]\s*(\d+(?:\.\d+)?)\s+(?:CBM|cbm|方|立方|m3)\s*[\/,]\s*(\d+(?:\.\d+)?)\s+(?:KG|kg|kgs|KGS|公斤)/i,
      // "634.60 KGS / 167 CTNS / 11.79 CBM" 格式 - 重量 单位 / 件数 单位 / 体积 单位 (带空格)
      /(\d+(?:\.\d+)?)\s+(?:KG|kg|kgs|KGS|公斤)\s*[\/,]\s*(\d+(?:\.\d+)?)\s+(?:件|个|箱|托|pcs?|pieces?|CTNS|ctns|ctn)\s*[\/,]\s*(\d+(?:\.\d+)?)\s+(?:CBM|cbm|方|立方|m3)/i,
      // "11.79 CBM / 634.60 KGS / 167 CTNS" 格式 - 体积 单位 / 重量 单位 / 件数 单位 (带空格)
      /(\d+(?:\.\d+)?)\s+(?:CBM|cbm|方|立方|m3)\s*[\/,]\s*(\d+(?:\.\d+)?)\s+(?:KG|kg|kgs|KGS|公斤)\s*[\/,]\s*(\d+(?:\.\d+)?)\s+(?:件|个|箱|托|pcs?|pieces?|CTNS|ctns|ctn)/i,
      /(\d+(?:\.\d+)?)\s+(?:CBM|cbm|方|立方|m3)\s*[\/,]\s*(\d+(?:\.\d+)?)\s+(?:KG|kg|kgs|KGS|公斤)\s*[\/,]\s*(\d+(?:\.\d+)?)\s+(?:件|个|箱|托|pcs?|pieces?|CTNS|ctns|ctn)/i,
    ];

    // 尝试匹配三元组格式 - 只有在BOM格式没有匹配时才执行
    for (const pattern of triplePatterns) {
      const match = correctedText.match(pattern);
      if (match) {
        const [, val1, val2, val3] = match;
        const num1 = Number.parseFloat(val1);
        const num2 = Number.parseFloat(val2);
        const num3 = Number.parseFloat(val3);

        // 根据模式索引确定数值的含义
        const patternIndex = triplePatterns.indexOf(pattern);

        switch (patternIndex) {
          case 0: // "3 crates 1808 kgs 2.54 m³" 格式 - 件数 重量 体积
            result.pieces = num1;
            result.weight = num2;
            result.volume = num3;
            result.packageType = match[0].includes('crates') ? 'boxes' : 'pieces';
            break;
          case 1: // "2.54 m³ 1808 kgs 3 crates" 格式 - 体积 重量 件数
            result.volume = num1;
            result.weight = num2;
            result.pieces = num3;
            result.packageType = match[0].includes('crates') ? 'boxes' : 'pieces';
            break;
          case 2: // "1808 kgs 3 crates 2.54 m³" 格式 - 重量 件数 体积
            result.weight = num1;
            result.pieces = num2;
            result.volume = num3;
            result.packageType = match[0].includes('crates') ? 'boxes' : 'pieces';
            break;
          case 3: // "BEG 60ctn 618kg 2.41cbm" 格式 - 机场代码 件数ctn 重量kg 体积cbm
            // val1=机场代码, val2=件数, val3=重量, val4=体积
            if (match.length >= 5) {
              const airportCode = match[1];
              const pieces = Number.parseFloat(match[2]);
              const weight = Number.parseFloat(match[3]);
              const volume = Number.parseFloat(match[4]);

              // 设置机场代码和目的地
              const cityName = getAirportCity(airportCode);
              if (cityName) {
                result.destinationCode = airportCode;
                result.destination = formatAirportDisplay(airportCode);
              }

              result.pieces = pieces;
              result.weight = weight;
              result.volume = volume;
              result.packageType = 'boxes'; // ctn表示箱
            }
            break;
          case 4: // "KHI//3400KG//12.33CBM//145CTNS" 格式 - 机场代码//重量//体积//箱数
            // val1=机场代码, val2=重量, val3=体积, val4=箱数
            if (match.length >= 5) {
              const airportCode = match[1];
              const weight = Number.parseFloat(match[2]);
              const volume = Number.parseFloat(match[3]);
              const pieces = Number.parseFloat(match[4]);

              // 设置机场代码和目的地
              const cityName = getAirportCity(airportCode);
              if (cityName) {
                result.destinationCode = airportCode;
                result.destination = formatAirportDisplay(airportCode);
              }

              result.weight = weight;
              result.volume = volume;
              result.pieces = pieces;
              result.packageType = 'boxes'; // CTNS表示箱
            }
            break;
          case 5: // "CCU 1028/1.63/35*35*35CM*38CTNS" 格式 - 机场代码 重量/体积/尺寸*箱数
            // val1=机场代码, val2=重量, val3=体积, 后续是尺寸
            if (match.length >= 8) {
              const airportCode = match[1];
              const weight = Number.parseFloat(match[2]);
              const volume = Number.parseFloat(match[3]);
              const length = Number.parseFloat(match[4]);
              const width = Number.parseFloat(match[5]);
              const height = Number.parseFloat(match[6]);
              const pieces = Number.parseFloat(match[7]);

              // 设置机场代码和目的地
              const cityName = getAirportCity(airportCode);
              if (cityName) {
                result.destinationCode = airportCode;
                result.destination = formatAirportDisplay(airportCode);
                // 不要把机场信息设置为货物名称
              }

              result.weight = weight;
              result.volume = volume;
              result.pieces = pieces;
              result.packageType = 'boxes'; // CTNS表示箱

              // 设置尺寸信息
              result.dimensions = [{
                length: length,
                width: width,
                height: height,
                quantity: pieces,
                unit: 'cm' // 🔥 添加单位信息
              }];
            }
            break;
          case 6: // "1028/1.63/35*35*35CM*38CTNS" 格式 - 重量/体积/尺寸*箱数（无机场代码）
            if (match.length >= 7) {
              const weight = Number.parseFloat(match[1]);
              const volume = Number.parseFloat(match[2]);
              const length = Number.parseFloat(match[3]);
              const width = Number.parseFloat(match[4]);
              const height = Number.parseFloat(match[5]);
              const pieces = Number.parseFloat(match[6]);

              result.weight = weight;
              result.volume = volume;
              result.pieces = pieces;
              result.packageType = 'boxes'; // CTNS表示箱

              // 设置尺寸信息
              result.dimensions = [{
                length: length,
                width: width,
                height: height,
                quantity: pieces,
                unit: 'cm' // 🔥 添加单位信息
              }];
            }
            break;
          case 7: // 重量/件数/体积
            result.weight = num1;
            result.pieces = num2;
            result.volume = num3;
            break;
          case 8: // 件数/重量/体积
            result.pieces = num1;
            result.weight = num2;
            result.volume = num3;
            break;
          case 9: // 体积/重量/件数
            result.volume = num1;
            result.weight = num2;
            result.pieces = num3;
            break;
          case 10: // 重量/体积/件数
            result.weight = num1;
            result.volume = num2;
            result.pieces = num3;
            break;
          case 11: // 件数/体积/重量
            result.pieces = num1;
            result.volume = num2;
            result.weight = num3;
            break;
          case 12: // 体积/件数/重量
            result.volume = num1;
            result.pieces = num2;
            result.weight = num3;
            break;
          case 13: // 件数 单位 / 体积 单位 / 重量 单位 (167 CTNS / 11.79 CBM / 634.60 KGS)
            result.pieces = num1;
            result.volume = num2;
            result.weight = num3;
            break;
          case 14: // 重量 单位 / 件数 单位 / 体积 单位 (634.60 KGS / 167 CTNS / 11.79 CBM)
            result.weight = num1;
            result.pieces = num2;
            result.volume = num3;
            break;
          case 15: // 体积 单位 / 重量 单位 / 件数 单位 (11.79 CBM / 634.60 KGS / 167 CTNS)
            result.volume = num1;
            result.weight = num2;
            result.pieces = num3;
            break;
        }

        // 设置包装类型
        if (match[0].includes('托')) {
          result.packageType = 'pallets';
        } else if (match[0].includes('箱') || match[0].includes('CTNS') || match[0].includes('ctns') || match[0].includes('ctn')) {
          result.packageType = 'boxes';
        } else {
          result.packageType = 'pieces';
        }

        break; // 找到匹配就停止
      }
    }
  } else {
    console.log(`🔒 跳过三元组解析，当前优先级: ${parsingPriority} (1=传统格式, 2=BOM格式)`);
  }

  // 提取货物名称 - 优先从第一行提取产品型号+名称
  const productMatches = [
    // "蓝牙耳机，带电" 格式 - 提取产品名称
    correctedText.match(/([^，。；\n\s\d]{2,10}(?:耳机|设备|产品|机器|装置|器材|配件|玩具)),?\s*带电/i),
    // "RLA510S 洗地机不带电池" 格式 - 提取产品型号+名称，排除"不带电池"等描述
    // 🔥 修复：排除机场代码开头的匹配
    (() => {
      const match = correctedText.match(/([A-Z0-9]+[\s?]*[^，。；\n\s\d?]{2,10}机?)(?:\s*不带电池|带电池)?/i);
      if (match && result.destinationCode) {
        // 🔥 强化检查：如果匹配结果包含机场代码，完全排除
        if (match[1].includes(result.destinationCode)) {
          console.log(`🚫 完全排除包含机场代码的产品匹配: ${match[1]} (包含 ${result.destinationCode})`);
          return null; // 排除这个匹配
        }
        // 原有的开头检查
        if (match[1].startsWith(result.destinationCode)) {
          console.log(`⚠️ 跳过机场代码开头的产品匹配: ${match[1]}`);
          return null; // 排除这个匹配
        }
      }
      return match;
    })(),
    // "led发光手环（内置碱性干电池...）" 格式 - 优先识别产品名称+括号描述
    correctedText.match(/([a-zA-Z]*[^，。；\n\s\d]{2,15})[（(][^）)]*[）)]/i),
    // "电子产品（充电宝，充电头...）" 格式 - 优先识别
    correctedText.match(/([^，。；\n\s]{2,10}产品)[（(][^）)]*[）)]/i),
    // "根管锉之类的产品" 格式 - 限制长度避免匹配过长内容
    correctedText.match(/([^，。；\n\s]{1,20}?)之类的产品/i),
    // "手机配件类产品" 格式
    correctedText.match(/([^，。；\n\s]{1,20}?)类产品/i),
    // "产品：电子设备" 格式
    correctedText.match(/产品[：:]\s*([^，。；\n\s]{1,20})/i),
    // "货物：纺织品" 格式
    correctedText.match(/货物[：:]\s*([^，。；\n\s]{1,20})/i),
    // "商品：食品" 格式
    correctedText.match(/商品[：:]\s*([^，。；\n\s]{1,20})/i),
    // "货物是汽车玩具" 格式
    correctedText.match(/货物是\s*([^，。；\n\s]{2,20})/i),
  ];

  for (const match of productMatches) {
    if (match?.[1]?.trim()) {
      const productName = match[1].trim();

      // 🔥 关键修复：如果已经有正确的产品名称（不包含机场代码），就不要覆盖
      if (result.name && !result.name.match(/^[A-Z]{3}/) && result.name !== '普货') {
        console.log(`⚠️ 跳过产品名称覆盖，已有正确名称: ${result.name}`);
        break;
      }

      // 🔥 额外保护：如果已经有产品名称，且当前匹配包含机场代码，优先保护已有名称
      if (result.name && result.destinationCode && productName.includes(result.destinationCode)) {
        console.log(`🛡️ 保护已有产品名称"${result.name}"，拒绝包含机场代码的覆盖: ${productName}`);
        continue;
      }

      // 🔥 修复：额外检查产品名称是否包含机场代码，如果包含则排除
      if (result.destinationCode && productName.includes(result.destinationCode)) {
        console.log(`⚠️ 跳过包含机场代码的产品名称: ${productName}`);
        continue;
      }

      // 🔥 最终修复：完全阻止包含机场代码的产品名称
      if (result.destinationCode && productName.includes(result.destinationCode)) {
        console.log(`🚫 完全阻止包含机场代码的产品名称: ${productName}`);
        continue; // 跳过这个匹配
      }

      // 排除明显不是产品名的内容，包括时间、地点、机场代码等
      // 但保留合理的产品名，如"洗地机"、"设备"等
      if (!productName.match(/kg|cbm|cm|mm|箱|托|件|空运|海运|报价|帮忙|[A-Z]{3}|土耳其|伊斯坦布尔|墨西哥|MEX|预计|下周|货好|时间|星期|月|日|深圳|广州|上海|北京|Packing/i) ||
          productName.match(/产品|设备|配件|玩具|机$|器$|电池$|装备$/i)) {
        result.name = productName;
        console.log(`📝 步骤5-正则匹配设置产品名称: "${result.name}"`);
        break;
      }
    }
  }

  // 🔥 强制规则：如果货物名称包含任何机场代码，强制移除或使用默认值
  if (result.name && result.destinationCode) {
    if (result.name.includes(result.destinationCode)) {
      console.log(`🚫 强制规则触发：货物名称"${result.name}"包含机场代码"${result.destinationCode}"`);

      // 尝试提取机场代码后面的部分
      const afterCode = result.name.split(result.destinationCode)[1]?.trim();
      if (afterCode && afterCode.length >= 2 && afterCode.length <= 20) {
        result.name = afterCode;
        console.log(`✨ 强制提取货物名称: "${result.name}" (移除机场代码"${result.destinationCode}")`);
      } else {
        result.name = '普货';
        console.log(`🔄 使用默认货物名称: "普货" (无法提取有效名称)`);
      }
    }
  }

  // 🔥 最终检查：完全阻止任何三字机场代码出现在货物名称中
  if (result.name) {
    // 检查是否包含任何三字机场代码
    const airportCodes = result.name.match(/\b[A-Z]{3}\b/g);
    if (airportCodes && airportCodes.length > 0) {
      console.log(`🚫 最终检查：货物名称"${result.name}"包含机场代码${airportCodes.join(', ')}`);

      // 尝试移除所有机场代码
      let cleanName = result.name;
      for (const code of airportCodes) {
        cleanName = cleanName.replace(new RegExp(`\\b${code}\\b`, 'g'), '').trim();
      }

      if (cleanName && cleanName.length >= 2) {
        result.name = cleanName;
        console.log(`✅ 最终清理货物名称: "${result.name}"`);
      } else {
        result.name = '普货';
        console.log(`🔄 最终清理：清理后无有效内容，使用"普货"`);
      }
    }
  }

  // 如果仍没有找到货物名称，或者名称是机场信息，使用"普货"作为默认值
  if (!result.name || result.name.match(/^[A-Z]{3}/) || result.name.includes('(') || result.name.length > 20) {
    result.name = '普货';
  }

  // 🔍 最终分析步骤：在返回结果前进行彻底的产品名称检查和清理
  console.log(`🔍 最终分析步骤 - 当前产品名称: "${result.name}"`);
  console.log(`🔍 最终分析步骤 - 目的地机场代码: "${result.destinationCode}"`);

  if (result.name && result.destinationCode) {
    // 检查产品名称是否包含机场代码
    if (result.name.includes(result.destinationCode)) {
      console.log(`🚨 最终检查发现：产品名称"${result.name}"包含机场代码"${result.destinationCode}"`);

      // 尝试智能清理：提取机场代码后面的部分
      const parts = result.name.split(result.destinationCode);
      if (parts.length > 1) {
        const cleanPart = parts[1].trim();
        if (cleanPart && cleanPart.length >= 2 && cleanPart.length <= 20) {
          result.name = cleanPart;
          console.log(`✅ 最终清理成功：产品名称更新为"${result.name}"`);
        } else {
          result.name = '普货';
          console.log(`🔄 最终清理：无法提取有效名称，使用"普货"`);
        }
      } else {
        result.name = '普货';
        console.log(`🔄 最终清理：分割失败，使用"普货"`);
      }
    } else {
      console.log(`✅ 最终检查通过：产品名称"${result.name}"不包含机场代码`);
    }
  }

  // 最终检查：移除任何剩余的三字机场代码
  if (result.name) {
    const airportPattern = /\b[A-Z]{3}\b/g;
    const foundCodes = result.name.match(airportPattern);
    if (foundCodes && foundCodes.length > 0) {
      console.log(`🚨 最终检查发现剩余机场代码: ${foundCodes.join(', ')}`);
      let finalCleanName = result.name;
      for (const code of foundCodes) {
        finalCleanName = finalCleanName.replace(new RegExp(`\\b${code}\\b`, 'g'), '').trim();
      }

      if (finalCleanName && finalCleanName.length >= 2) {
        result.name = finalCleanName;
        console.log(`✅ 最终彻底清理：产品名称更新为"${result.name}"`);
      } else {
        result.name = '普货';
        console.log(`🔄 最终彻底清理：清理后无有效内容，使用"普货"`);
      }
    }
  }

  console.log(`🎯 最终结果 - 产品名称: "${result.name}"`);
  console.log(`🎯 最终结果 - 目的地: "${result.destination}"`);

  // 🔥🔥🔥 V114 最终调试标记 - 增强产品名称调试 🔥🔥🔥
  console.log('🔥🔥🔥 V114 DEBUG: parseCargoText 函数即将返回结果! 🔥🔥🔥');
  console.log('🔍 最终检查前的产品名称:', result.name);

  // 如果没有识别到具体货物名称，设置为普货
  if (!result.name || result.name.trim() === '') {
    result.name = '普货';
    console.log('🔥 设置默认货物名称为: 普货 (因为result.name为空)');
  } else {
    console.log('✅ 保留已识别的产品名称:', result.name);
  }

  // 🔍 尺寸解析 - 解析各种格式的尺寸信息
  const dimensionPatterns = [
    // 120x100x65 cm 格式 - 带明确单位
    /(\d+(?:\.\d+)?)x(\d+(?:\.\d+)?)x(\d+(?:\.\d+)?)\s*(cm|mm|m)\b/gi,
    // 🔥 新增：120 x 100 x 65 cm 格式 - 带空格的x分隔符
    /(\d+(?:\.\d+)?)\s*x\s*(\d+(?:\.\d+)?)\s*x\s*(\d+(?:\.\d+)?)\s*(cm|mm|m|厘米)\b/gi,
    // 120*100*65 cm 格式 - 带明确单位
    /(\d+(?:\.\d+)?)\*(\d+(?:\.\d+)?)\*(\d+(?:\.\d+)?)\s*(cm|mm|m)\b/gi,
    // 120×100×65 cm 格式 - 带明确单位
    /(\d+(?:\.\d+)?)×(\d+(?:\.\d+)?)×(\d+(?:\.\d+)?)\s*(cm|mm|m)\b/gi,
    // 🔥 新增：120 × 100 × 65 cm 格式 - 带空格的×分隔符
    /(\d+(?:\.\d+)?)\s*×\s*(\d+(?:\.\d+)?)\s*×\s*(\d+(?:\.\d+)?)\s*(cm|mm|m|厘米)\b/gi,
    // 🔥 新增：148*113*80/1 格式 - 无单位，需要智能判断
    /(\d+(?:\.\d+)?)\*(\d+(?:\.\d+)?)\*(\d+(?:\.\d+)?)\/(\d+)/gi,
    // 🔥 新增：148x113x80/1 格式 - 无单位，需要智能判断
    /(\d+(?:\.\d+)?)x(\d+(?:\.\d+)?)x(\d+(?:\.\d+)?)\/(\d+)/gi,
    // 🔥 新增：148×113×80/1 格式 - 无单位，需要智能判断
    /(\d+(?:\.\d+)?)×(\d+(?:\.\d+)?)×(\d+(?:\.\d+)?)\/(\d+)/gi,
  ];

  if (!result.dimensions || result.dimensions.length === 0) {
    const dimensions: Dimension[] = [];
    const processedDimensions = new Set<string>(); // 🔥 防止重复尺寸

    for (let i = 0; i < dimensionPatterns.length; i++) {
      const pattern = dimensionPatterns[i];
      const matches = correctedText.matchAll(pattern);

      for (const match of matches) {
        let length: number, width: number, height: number, unit: string, quantity: number;

        // 🔥 区分有单位和无单位的格式
        if (i < 5) {
          // 前5个模式：带明确单位的格式（包括带空格的x和×格式）
          [, length, width, height, unit] = match.map((m, idx) => idx === 0 ? m : (idx < 4 ? Number.parseFloat(m) : m)) as [string, number, number, number, string];

          // 🔥 标准化单位
          if (unit === '厘米') {
            unit = 'cm';
          }

          quantity = result.pieces || 1; // 使用主数据中的件数
        } else {
          // 后3个模式：无单位的格式，最后一个是数量
          [, length, width, height, quantity] = match.map((m, idx) => idx === 0 ? m : Number.parseFloat(m)) as [string, number, number, number, number];

          // 🔥 使用智能单位判断
          const smartUnit = parseDimensionsWithUnit(
            match[1], match[2], match[3]
          );
          length = smartUnit.length;
          width = smartUnit.width;
          height = smartUnit.height;
          unit = smartUnit.unit;
        }

        if (length && width && height) {
          // 🔥 创建尺寸的唯一标识符，防止重复
          const dimensionKey = `${length}x${width}x${height}x${unit.toLowerCase()}x${quantity}`;

          if (!processedDimensions.has(dimensionKey)) {
            const dimension = {
              length,
              width,
              height,
              unit: unit.toLowerCase() as 'cm' | 'mm' | 'm',
              quantity
            };

            // 🔥 添加到明细计算过程
            const volume = (length * width * height) / 1000000; // cm³转m³
            if (!result.dimensionDetails) {
              result.dimensionDetails = [];
            }
            result.dimensionDetails.push({
              name: `件${result.dimensionDetails.length + 1}`,
              length: length,
              width: width,
              height: height,
              volume: volume * quantity,
              unit: unit as 'm' | 'cm' | 'mm',
              quantity: quantity
            });

            dimensions.push(dimension);
            processedDimensions.add(dimensionKey);
            console.log(`📏 解析到尺寸: ${length}×${width}×${height} ${unit}, 数量: ${quantity}`);
          } else {
            console.log(`🔄 跳过重复尺寸: ${length}×${width}×${height} ${unit}, 数量: ${quantity}`);
          }
        }
      }
    }

    if (dimensions.length > 0) {
      result.dimensions = dimensions;
      console.log(`📏 成功解析 ${dimensions.length} 个尺寸规格`);

      // 🔥 如果通过尺寸解析得到了件数，更新总件数
      const totalFromDimensions = dimensions.reduce((sum, dim) => sum + dim.quantity, 0);
      if (!result.pieces || result.pieces === 0) {
        result.pieces = totalFromDimensions;
        console.log(`📦 通过尺寸解析更新件数: ${totalFromDimensions}`);
      }

      // 🔥 计算总体积 - 有尺寸时优先使用尺寸计算的体积
      const calculatedVolume = calculateTotalVolume(dimensions);
      const previousVolume = result.volume;
      result.volume = Number(calculatedVolume.toFixed(3)); // 保留3位小数

      if (previousVolume && previousVolume !== result.volume) {
        console.log(`📐 尺寸计算体积覆盖原体积: ${previousVolume} cbm → ${result.volume} cbm (基于尺寸计算更准确)`);
      } else {
        console.log(`📐 通过尺寸计算总体积: ${result.volume} cbm`);
      }
    }
  }

  // 🔥 后处理：修正单个托盘重量的总重量和件数计算
  if (result.singlePalletWeight && result.dimensions && result.dimensions.length > 0) {
    const totalPieces = result.dimensions.reduce((sum, dim) => sum + dim.quantity, 0);
    const totalWeight = result.singlePalletWeight * totalPieces;

    console.log(`🔥 后处理修正：单个托盘重量=${result.singlePalletWeight}kg × ${totalPieces}件 = ${totalWeight}kg`);

    result.pieces = totalPieces;
    result.weight = totalWeight;
    result.pallets = totalPieces; // 托盘数等于件数

    // 清除临时标记
    delete result.singlePalletWeight;
  }

  console.log('🔥🔥🔥 最终产品名称:', result.name);
  console.log('🔥🔥🔥 最终目的地:', result.destination);
  console.log('🔥🔥🔥 最终尺寸信息:', result.dimensions);
  console.log('🔥🔥🔥 最终件数:', result.pieces);
  console.log('🔥🔥🔥 最终重量:', result.weight);

  return result;
}

// 🔥 智能尺寸解析函数 - 自动识别单位并标准化
function parseDimensionsWithUnit(lengthStr: string, widthStr: string, heightStr: string, unitHint?: string): { length: number; width: number; height: number; unit: 'm' | 'cm' | 'mm' } {
  const length = Number.parseFloat(lengthStr);
  const width = Number.parseFloat(widthStr);
  const height = Number.parseFloat(heightStr);

  // 🔥 智能单位判断逻辑
  let unit: 'm' | 'cm' | 'mm' = 'cm'; // 默认厘米

  if (unitHint) {
    const hintLower = unitHint.toLowerCase();
    if (hintLower.includes('mm') || hintLower.includes('毫米')) {
      unit = 'mm';
    } else if (hintLower.includes('m') && !hintLower.includes('cm')) {
      unit = 'm';
    } else {
      unit = 'cm';
    }
  } else {
    // 🔥 优化的智能单位判断逻辑
    const maxDimension = Math.max(length, width, height);
    const minDimension = Math.min(length, width, height);

    // 判断规则：
    // 1. 四位数（≥1000）→ 毫米
    // 2. 小数点且最大值≤10 → 米
    // 3. 三位数（100-999）→ 厘米
    // 4. 两位数（10-99）→ 厘米
    // 5. 一位数（<10）→ 如果有小数可能是米，否则厘米

    if (maxDimension >= 1000) {
      unit = 'mm'; // 四位数通常是毫米
    } else if (maxDimension <= 10 && (lengthStr.includes('.') || widthStr.includes('.') || heightStr.includes('.'))) {
      unit = 'm'; // 小数且小于10通常是米
    } else if (maxDimension >= 100) {
      unit = 'cm'; // 三位数通常是厘米
    } else if (maxDimension >= 10) {
      unit = 'cm'; // 两位数通常是厘米
    } else {
      // 一位数需要更仔细判断
      if (lengthStr.includes('.') || widthStr.includes('.') || heightStr.includes('.')) {
        unit = 'm'; // 有小数的一位数可能是米
      } else {
        unit = 'cm'; // 整数的一位数可能是厘米（不太常见但保险起见）
      }
    }
  }

  console.log(`🔍 智能单位判断: ${length}*${width}*${height} → ${unit} (最大值: ${Math.max(length, width, height)})`);
  return { length, width, height, unit };
}

// 计算总体积
export function calculateTotalVolume(dimensions: Dimension[]): number {
  return dimensions.reduce((total, dim) => {
    // 🔥 修复：根据尺寸单位正确计算体积
    let volumeInCubicMeters: number;

    if (dim.unit === 'm') {
      // 米 → 立方米：直接相乘
      volumeInCubicMeters = dim.length * dim.width * dim.height;
    } else if (dim.unit === 'cm') {
      // 厘米 → 立方米：除以 1,000,000
      volumeInCubicMeters = (dim.length * dim.width * dim.height) / 1000000;
    } else {
      // 毫米 → 立方米：除以 1,000,000,000
      volumeInCubicMeters = (dim.length * dim.width * dim.height) / 1000000000;
    }

    return total + volumeInCubicMeters * dim.quantity;
  }, 0);
}

// 计算体积重 - 根据不同运输方式使用正确的转换系数
export function calculateVolumeWeight(volume: number, transportMode: 'sea' | 'air' | 'express' = 'sea'): number {
  let factor: number;

  switch (transportMode) {
    case 'express': // 国际快递
      factor = 200; // 1CBM = 200KG
      break;
    case 'air': // 国际空运
      factor = 167; // 1CBM = 167KG
      break;
    case 'sea': // 国际海运
      factor = 1000; // 1CBM = 1000KG
      break;
    default:
      factor = 167;
  }

  return volume * factor;
}

// 计算计费重 (实重与体积重取大者)
export function calculateChargeableWeight(actualWeight: number, volumeWeight: number): number {
  return Math.max(actualWeight, volumeWeight);
}

// 根据密度判断货物类型和获取对应颜色 - 基于空运专业分类标准
export function getCargoTypeByDensity(density: number): {
  type: string;
  description: string;
  colorClass: string;
  bgClass: string;
  ratio: string;
  recommendation: string;
  priceStrategy: string;
} {
  if (density >= 1000) {
    return {
      type: '超重货',
      description: '比重1:1000以上，属于超高密度货物',
      colorClass: 'text-red-800',
      bgClass: 'bg-red-50 border-red-200',
      ratio: '1:1000+',
      recommendation: '运费完全按实重计算，建议重点关注重货运价优惠',
      priceStrategy: '实重计费 · 寻找重货专线'
    };
  }

  if (density >= 500) {
    return {
      type: '重货',
      description: '比重1:500-1000，高密度重货',
      colorClass: 'text-red-700',
      bgClass: 'bg-red-50 border-red-200',
      ratio: '1:500-1000',
      recommendation: '运费按实重计算，可寻找重货拼箱降低成本',
      priceStrategy: '实重计费 · 重货拼箱'
    };
  }

  if (density >= 300) {
    return {
      type: '重货',
      description: '比重1:300-500，标准重货',
      colorClass: 'text-orange-700',
      bgClass: 'bg-orange-50 border-orange-200',
      ratio: `1:${Math.round(density)}`,
      recommendation: '运费按实重计算，适合包机或拼箱运输',
      priceStrategy: '实重计费 · 包机拼箱'
    };
  }

  if (density >= 200) {
    return {
      type: '偏重货',
      description: '比重1:200-300，略重于标准比重',
      colorClass: 'text-amber-700',
      bgClass: 'bg-amber-50 border-amber-200',
      ratio: `1:${Math.round(density)}`,
      recommendation: '实重略大于体积重，建议比较重货与泡货运价',
      priceStrategy: '实重为主 · 比价选择'
    };
  }

  if (density >= 167) {
    return {
      type: '平货',
      description: '比重1:167-200，接近空运标准比重',
      colorClass: 'text-blue-700',
      bgClass: 'bg-blue-50 border-blue-200',
      ratio: `1:${Math.round(density)}`,
      recommendation: '实重与体积重相近，运费相对稳定',
      priceStrategy: '标准计费 · 运价稳定'
    };
  }

  if (density >= 100) {
    return {
      type: '轻货',
      description: '比重1:100-167，体积重大于实重',
      colorClass: 'text-green-700',
      bgClass: 'bg-green-50 border-green-200',
      ratio: `1:${Math.round(density)}`,
      recommendation: '运费按体积重计算，建议优化包装减少体积',
      priceStrategy: '体积重计费 · 优化包装'
    };
  }

  if (density > 0) {
    return {
      type: '泡货',
      description: '比重1:100以下，体积大重量轻',
      colorClass: 'text-green-600',
      bgClass: 'bg-green-50 border-green-200',
      ratio: `1:${Math.round(density)}`,
      recommendation: '运费按体积重计算，强烈建议压缩包装',
      priceStrategy: '体积重计费 · 压缩包装'
    };
  }

  return {
    type: '未知',
    description: '无法计算密度，请检查重量和体积数据',
    colorClass: 'text-gray-600',
    bgClass: 'bg-gray-50 border-gray-200',
    ratio: '未知',
    recommendation: '请补充完整的重量和体积信息',
    priceStrategy: '待确认'
  };
}

// 检查是否为带电货物 - 基于原始货物信息检查
export function isElectricCargo(cargoInfo: Partial<CargoInfo>): boolean {
  const text = JSON.stringify(cargoInfo).toLowerCase();
  const electricKeywords = [
    '电池', '内置电池', '配套电池', '移动电源', '充电宝', '锂电池',
    '电子', '音响', '电器', '手机', '充电器', '电容', '电源', '带电'
  ];

  return electricKeywords.some(keyword =>
    text.includes(keyword.toLowerCase())
  );
}

// 综合计算函数
export function calculateCargoMetrics(cargoInfo: Partial<CargoInfo>, transportMode: 'sea' | 'air' = 'sea'): CalculationResult {
  const totalWeight = cargoInfo.weight || 0;
  let totalVolume = cargoInfo.volume || 0;

  // 如果有尺寸信息，重新计算体积，但优先使用明确给出的总体积
  if (cargoInfo.dimensions && cargoInfo.dimensions.length > 0 && totalVolume === 0) {
    totalVolume = calculateTotalVolume(cargoInfo.dimensions);
  }

  const volumeWeight = calculateVolumeWeight(totalVolume, transportMode);
  const chargeableWeight = calculateChargeableWeight(totalWeight, volumeWeight);

  // 计算货物比重 (密度) kg/cbm
  const density = totalVolume > 0 ? totalWeight / totalVolume : 0;

  return {
    totalWeight,
    totalVolume: Math.round(totalVolume * 1000) / 1000, // 保留3位小数
    volumeWeight: Math.round(volumeWeight * 100) / 100,
    chargeableWeight: Math.round(chargeableWeight * 100) / 100,
    totalPieces: cargoInfo.pieces || 0,
    density: Math.round(density * 100) / 100 // 保留2位小数
  };
}

// 综合解析和计算函数
export function parseAndCalculateCargoInfo(text: string, transportMode: 'sea' | 'air' = 'sea'): {
  cargoInfo: Partial<CargoInfo>;
  calculations: CalculationResult;
} {
  const cargoInfo = parseCargoText(text);
  const calculations = calculateCargoMetrics(cargoInfo, transportMode);

  return { cargoInfo, calculations };
}

// 🔥 新增：多crate格式解析函数
interface CrateInfo {
  number: number;
  sheets: number;
  weight: number; // kg
  dimensions: {
    length: number;
    width: number;
    height: number;
    unit: 'cm' | 'mm' | 'm';
  };
}

interface MultiCrateResult {
  success: boolean;
  data?: Partial<CargoInfo>;
  error?: string;
}

function parseMultiCrateFormat(text: string): MultiCrateResult {
  console.log('📦 开始解析多crate格式...');

  try {
    const crates: CrateInfo[] = [];
    let totalCrates = 0;
    let totalWeight = 0;
    let totalVolume = 0;
    let totalSheets = 0;

    // 1. 解析每个crate行
    // 匹配格式: crate 1: 300 sheets, 618kgs, 117X84x88cm
    const cratePattern = /crate\s+(\d+):\s*(\d+)\s*sheets?\s*,\s*(\d+(?:\.\d+)?)kgs?\s*,\s*(\d+(?:\.\d+)?)[xX×*](\d+(?:\.\d+)?)[xX×*](\d+(?:\.\d+)?)cm/gi;

    let match;
    while ((match = cratePattern.exec(text)) !== null) {
      const crateNumber = Number.parseInt(match[1]);
      const sheets = Number.parseInt(match[2]);
      const weight = Number.parseFloat(match[3]);
      const length = Number.parseFloat(match[4]);
      const width = Number.parseFloat(match[5]);
      const height = Number.parseFloat(match[6]);

      const crateInfo: CrateInfo = {
        number: crateNumber,
        sheets: sheets,
        weight: weight,
        dimensions: {
          length: length,
          width: width,
          height: height,
          unit: 'cm'
        }
      };

      crates.push(crateInfo);
      totalSheets += sheets;
      console.log(`📦 解析crate ${crateNumber}: ${sheets} sheets, ${weight}kg, ${length}×${width}×${height}cm`);
    }

    if (crates.length === 0) {
      console.log('⚠️ 未找到有效的crate数据');
      return { success: false, error: '未找到有效的crate数据' };
    }

    // 2. 解析总计信息进行验证
    // 匹配格式: There are 3 crates/ 1808kgs/ 2.54m³ in total
    const totalPattern = /(?:There\s+are\s+)?(\d+)\s*crates?\s*[\/,]\s*(\d+(?:\.\d+)?)kgs?\s*[\/,]\s*(\d+(?:\.\d+)?)\s*(?:m³|cbm)/i;
    const totalMatch = text.match(totalPattern);

    if (totalMatch) {
      totalCrates = Number.parseInt(totalMatch[1]);
      totalWeight = Number.parseFloat(totalMatch[2]);
      totalVolume = Number.parseFloat(totalMatch[3]);
      console.log(`📊 解析总计信息: ${totalCrates} crates, ${totalWeight}kg, ${totalVolume}cbm`);
    } else {
      // 如果没有总计信息，从crates计算
      totalCrates = crates.length;
      totalWeight = crates.reduce((sum, crate) => sum + crate.weight, 0);
      // 体积从尺寸计算
      totalVolume = crates.reduce((sum, crate) => {
        const volume = (crate.dimensions.length * crate.dimensions.width * crate.dimensions.height) / 1000000; // cm³ -> m³
        return sum + volume;
      }, 0);
      console.log(`📊 计算总计信息: ${totalCrates} crates, ${totalWeight}kg, ${totalVolume.toFixed(3)}cbm`);
    }

    // 3. 构建尺寸信息
    const dimensions = crates.map(crate => ({
      length: crate.dimensions.length,
      width: crate.dimensions.width,
      height: crate.dimensions.height,
      unit: crate.dimensions.unit,
      quantity: 1 // 每个crate算1件
    }));

    // 4. 构建解析结果
    const result: Partial<CargoInfo> = {
      name: 'sheets', // 根据内容物命名
      pieces: totalCrates,
      weight: totalWeight,
      volume: totalVolume,
      dimensions: dimensions,
      packageType: 'boxes' // crate可以理解为木箱
    };

    console.log('✅ 多crate格式解析完成:', result);

    return {
      success: true,
      data: result
    };

  } catch (error) {
    console.error('❌ 多crate格式解析失败:', error);
    return {
      success: false,
      error: `解析失败: ${error}`
    };
  }
}

// 🔥 修正：地址检测函数 - 用于在文本中检测地址并返回机场代码（作为目的地）
function detectAddressInText(text: string): string | null {
  console.log('🏠 开始从文本中检测地址...');

  // 尝试检测国际地址格式（主要是美国地址）
  const addressPatterns = [
    // 完整地址格式: 241 N Congress Ave, Delray Beach, FL 33445
    /\b\d+.*?[A-Za-z\s]+(Ave|Street|St|Road|Rd|Blvd|Drive|Dr|Lane|Ln|Way|Circle|Cir),\s*([A-Za-z\s]+),\s*([A-Z]{2})\s*\d{5}/gi,
    // 简化格式: Delray Beach, FL 33445
    /\b([A-Za-z\s]+),\s*([A-Z]{2})\s*\d{5}/gi,
    // 更简格式: Miami, FL
    /\b([A-Za-z\s]+),\s*([A-Z]{2})\b/gi
  ];

  for (const pattern of addressPatterns) {
    const matches = text.matchAll(pattern);
    for (const match of matches) {
      const possibleAddress = match[0];
      console.log(`🔍 检测到可能的地址: "${possibleAddress}"`);

      const addressResult = parseAddressAndFindAirports(possibleAddress);
      if (addressResult.primaryAirport) {
        console.log(`✅ 地址解析成功，推荐目的地机场: ${addressResult.primaryAirport.code}`);
        return addressResult.primaryAirport.code;
      }
    }
  }

  console.log('⚠️ 未检测到有效地址');
  return null;
}

// 🔥 新增：解析标签格式（产品：、毛重：等）
function parseLabelFormat(text: string): { success: boolean; data?: Partial<CargoInfo> } {
  const result: Partial<CargoInfo> = {};

  // 提取产品名称
  const productMatch = text.match(/产品[：:]\s*(.+?)(?:\n|$)/);
  if (productMatch) {
    result.name = productMatch[1].trim();
  }

  // 提取毛重
  const weightMatch = text.match(/毛重[：:]\s*(\d+(?:\.\d+)?)\s*(?:kg|KG|千克|公斤)/i);
  if (weightMatch) {
    result.weight = Number.parseFloat(weightMatch[1]);
  }

  // 提取木箱数量
  const boxCountMatch = text.match(/(\d+)\s*个木箱/);
  if (boxCountMatch) {
    result.pieces = Number.parseFloat(boxCountMatch[1]);
    result.packageType = 'wooden_boxes';
  }

  // 解析L*W*H格式尺寸（毫米转厘米）并创建明细
  const dimensionMatches = text.matchAll(/木箱尺寸(\d+)?[：:]?\s*L(\d+(?:\.\d+)?)\*W(\d+(?:\.\d+)?)\*H(\d+(?:\.\d+)?)\s*mm/gi);
  let totalVolume = 0;
  let boxCount = 0;
  const dimensionDetails: DimensionDetail[] = [];

  for (const match of dimensionMatches) {
    const boxNumber = match[1] || (boxCount + 1).toString();
    const l = Number.parseFloat(match[2]) / 10; // mm转cm
    const w = Number.parseFloat(match[3]) / 10;
    const h = Number.parseFloat(match[4]) / 10;
    const volume = (l * w * h) / 1000000; // cm³转m³

    dimensionDetails.push({
      name: `木箱${boxNumber}`,
      length: l,
      width: w,
      height: h,
      volume: volume
    });

    totalVolume += volume;
    boxCount++;
  }

  if (totalVolume > 0) {
    result.volume = totalVolume;
    result.dimensionDetails = dimensionDetails;
    if (!result.pieces) result.pieces = boxCount;
  }

  // 目的地解析 - 支持"阿联酋迪拜机场"
  if (text.includes('迪拜')) {
    result.destinationCode = 'DXB';
    result.destination = 'DXB - 迪拜国际机场';
  }

  return {
    success: !!(result.name || result.weight || result.volume || result.destinationCode),
    data: result
  };
}
