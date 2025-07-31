// 全球国家代码查询模块
import {
  completeCountriesDatabase,
  getAllCompleteCountries,
  getCountriesByContinent,
  searchCompleteCountries,
  getCountryByCode as getCompleteCountryByCode,
  type CountryInfo,
  completeCountriesStats
} from './complete-countries';

// 导出完整国家数据库相关接口和类型
export type { CountryInfo };
export {
  completeCountriesDatabase,
  getAllCompleteCountries,
  getCountriesByContinent,
  searchCompleteCountries,
  completeCountriesStats
};

// 国家代码到中文名称的映射（基于完整数据库）
const countryCodeToChineseName: { [key: string]: string } = {};
for (const country of completeCountriesDatabase) {
  countryCodeToChineseName[country.code.toUpperCase()] = country.chinese;
}

// 国家代码到英文名称的映射（基于完整数据库）
const countryCodeToEnglishName: { [key: string]: string } = {};
for (const country of completeCountriesDatabase) {
  countryCodeToEnglishName[country.code.toUpperCase()] = country.english;
}

// 扩展的国家信息接口
export interface CountryCodeInfo {
  code: string;
  chineseName: string;
  englishName: string;
  continent: string;
  hasAirport: boolean;
  capital?: string;
  note?: string;
}

/**
 * 检查是否为有效的国家代码
 */
export function isCountryCode(code: string): boolean {
  if (!code || code.length !== 2) return false;
  const upperCode = code.toUpperCase();
  return countryCodeToChineseName.hasOwnProperty(upperCode);
}

/**
 * 根据国家代码获取国家信息
 */
export function getCountryInfoByCode(code: string): CountryCodeInfo | null {
  if (!code || code.length !== 2) return null;

  const upperCode = code.toUpperCase();
  const country = getCompleteCountryByCode(upperCode);

  if (country) {
    return {
      code: country.code,
      chineseName: country.chinese,
      englishName: country.english,
      continent: country.continent,
      hasAirport: country.hasAirport,
      capital: country.capital,
      note: country.note
    };
  }

  return null;
}

/**
 * 根据国家代码获取中文名称
 */
export function getChineseNameByCode(code: string): string {
  if (!code || code.length !== 2) return code;
  const upperCode = code.toUpperCase();
  return countryCodeToChineseName[upperCode] || code;
}

/**
 * 根据国家代码获取英文名称
 */
export function getEnglishNameByCode(code: string): string {
  if (!code || code.length !== 2) return code;
  const upperCode = code.toUpperCase();
  return countryCodeToEnglishName[upperCode] || code;
}

/**
 * 智能搜索国家（支持中文、英文、代码搜索）
 */
export function searchCountries(query: string): CountryCodeInfo[] {
  if (!query || query.trim().length === 0) return [];

  const results = searchCompleteCountries(query.trim());
  return results.map(country => ({
    code: country.code,
    chineseName: country.chinese,
    englishName: country.english,
    continent: country.continent,
    hasAirport: country.hasAirport,
    capital: country.capital,
    note: country.note
  }));
}

/**
 * 获取所有国家代码列表
 */
export function getAllCountryCodes(): string[] {
  return completeCountriesDatabase.map(country => country.code).sort();
}

/**
 * 获取按洲际分组的国家列表
 */
export function getCountriesByContinentFiltered(continent: string): CountryCodeInfo[] {
  const countries = getCountriesByContinent(continent);
  return countries.map(country => ({
    code: country.code,
    chineseName: country.chinese,
    englishName: country.english,
    continent: country.continent,
    hasAirport: country.hasAirport,
    capital: country.capital,
    note: country.note
  }));
}

/**
 * 获取有机场的国家列表
 */
export function getCountriesWithAirports(): CountryCodeInfo[] {
  const countries = completeCountriesDatabase.filter(c => c.hasAirport);
  return countries.map(country => ({
    code: country.code,
    chineseName: country.chinese,
    englishName: country.english,
    continent: country.continent,
    hasAirport: country.hasAirport,
    capital: country.capital,
    note: country.note
  }));
}

/**
 * 格式化国家显示（国家名 + 代码）
 */
export function formatCountryDisplay(countryName: string): string {
  // 创建国家名称映射表（包含常用简称）
  const countryNameMapping: { [key: string]: string } = {
    '阿联酋': '阿拉伯联合酋长国',
    '美国': '美国',
    '英国': '英国',
    '德国': '德国',
    '法国': '法国',
    '中国': '中国',
    '日本': '日本',
    '韩国': '韩国',
    '新加坡': '新加坡',
    '澳大利亚': '澳大利亚',
    '加拿大': '加拿大',
    '墨西哥': '墨西哥',
    '荷兰': '荷兰',
    '瑞士': '瑞士',
    '奥地利': '奥地利',
    '比利时': '比利时',
    '爱尔兰': '爱尔兰',
    '卡塔尔': '卡塔尔',
    '沙特阿拉伯': '沙特阿拉伯',
    '土耳其': '土耳其',
    '以色列': '以色列',
    '伊朗': '伊朗',
    '约旦': '约旦',
    '科威特': '科威特',
    '巴林': '巴林',
    '阿曼': '阿曼'
  };

  // 先检查是否需要映射
  const mappedName = countryNameMapping[countryName] || countryName;

  // 尝试通过中文名称或英文名称反查国家代码
  const country = completeCountriesDatabase.find(c =>
    c.chinese === mappedName || c.english === mappedName ||
    c.chinese === countryName || c.english === countryName
  );

  if (country) {
    // 返回简称+代码的格式
    return `${countryName} ${country.code}`;
  }

  // 如果找不到，返回原名称
  return countryName;
}

/**
 * 获取国家统计信息
 */
export function getCountryStatistics() {
  return {
    total: completeCountriesStats.totalEntries,
    countries: completeCountriesStats.countries,
    territories: completeCountriesStats.territories,
    byContinent: completeCountriesStats.byContinent,
    withAirports: completeCountriesStats.withAirports,
    withoutAirports: completeCountriesStats.withoutAirports
  };
}

/**
 * 根据洲际获取国家国旗映射
 */
export function getCountryFlag(countryName: string): string {
  const flagMapping: { [key: string]: string } = {
    // 亚洲
    '中国': '🇨🇳', '日本': '🇯🇵', '韩国': '🇰🇷', '朝鲜': '🇰🇵', '蒙古': '🇲🇳',
    '印度': '🇮🇳', '巴基斯坦': '🇵🇰', '孟加拉国': '🇧🇩', '斯里兰卡': '🇱🇰', '尼泊尔': '🇳🇵',
    '不丹': '🇧🇹', '马尔代夫': '🇲🇻', '新加坡': '🇸🇬', '泰国': '🇹🇭', '马来西亚': '🇲🇾',
    '印度尼西亚': '🇮🇩', '菲律宾': '🇵🇭', '越南': '🇻🇳', '缅甸': '🇲🇲', '柬埔寨': '🇰🇭',
    '老挝': '🇱🇦', '文莱': '🇧🇳', '东帝汶': '🇹🇱', '哈萨克斯坦': '🇰🇿', '乌兹别克斯坦': '🇺🇿',
    '土库曼斯坦': '🇹🇲', '吉尔吉斯斯坦': '🇰🇬', '塔吉克斯坦': '🇹🇯', '土耳其': '🇹🇷', '伊朗': '🇮🇷',
    '伊拉克': '🇮🇶', '叙利亚': '🇸🇾', '黎巴嫩': '🇱🇧', '约旦': '🇯🇴', '以色列': '🇮🇱',
    '巴勒斯坦': '🇵🇸', '沙特阿拉伯': '🇸🇦', '阿联酋': '🇦🇪', '科威特': '🇰🇼', '卡塔尔': '🇶🇦',
    '巴林': '🇧🇭', '阿曼': '🇴🇲', '也门': '🇾🇪', '格鲁吉亚': '🇬🇪', '亚美尼亚': '🇦🇲',
    '阿塞拜疆': '🇦🇿', '阿富汗': '🇦🇫', '塞浦路斯': '🇨🇾', '中国台湾': '🇹🇼',

    // 欧洲
    '英国': '🇬🇧', '爱尔兰': '🇮🇪', '法国': '🇫🇷', '德国': '🇩🇪', '荷兰': '🇳🇱',
    '比利时': '🇧🇪', '卢森堡': '🇱🇺', '瑞士': '🇨🇭', '奥地利': '🇦🇹', '列支敦士登': '🇱🇮',
    '摩纳哥': '🇲🇨', '西班牙': '🇪🇸', '葡萄牙': '🇵🇹', '安道尔': '🇦🇩', '意大利': '🇮🇹',
    '圣马力诺': '🇸🇲', '梵蒂冈': '🇻🇦', '马耳他': '🇲🇹', '希腊': '🇬🇷', '瑞典': '🇸🇪',
    '挪威': '🇳🇴', '芬兰': '🇫🇮', '丹麦': '🇩🇰', '冰岛': '🇮🇸', '波兰': '🇵🇱',
    '捷克': '🇨🇿', '斯洛伐克': '🇸🇰', '匈牙利': '🇭🇺', '斯洛文尼亚': '🇸🇮', '俄罗斯': '🇷🇺',
    '乌克兰': '🇺🇦', '白俄罗斯': '🇧🇾', '摩尔多瓦': '🇲🇩', '克罗地亚': '🇭🇷', '塞尔维亚': '🇷🇸',
    '波黑': '🇧🇦', '黑山': '🇲🇪', '北马其顿': '🇲🇰', '阿尔巴尼亚': '🇦🇱', '科索沃': '🇽🇰',
    '立陶宛': '🇱🇹', '拉脱维亚': '🇱🇻', '爱沙尼亚': '🇪🇪', '罗马尼亚': '🇷🇴', '保加利亚': '🇧🇬',

    // 北美洲
    '美国': '🇺🇸', '加拿大': '🇨🇦', '墨西哥': '🇲🇽', '古巴': '🇨🇺', '牙买加': '🇯🇲',
    '海地': '🇭🇹', '多米尼加': '🇩🇴', '巴哈马': '🇧🇸', '巴巴多斯': '🇧🇧', '特立尼达和多巴哥': '🇹🇹',
    '危地马拉': '🇬🇹', '洪都拉斯': '🇭🇳', '萨尔瓦多': '🇸🇻', '尼加拉瓜': '🇳🇮', '哥斯达黎加': '🇨🇷',
    '巴拿马': '🇵🇦', '伯利兹': '🇧🇿', '圣卢西亚': '🇱🇨', '圣文森特和格林纳丁斯': '🇻🇨', '格林纳达': '🇬🇩',
    '多米尼克': '🇩🇲', '安提瓜和巴布达': '🇦🇬', '圣基茨和尼维斯': '🇰🇳',

    // 南美洲
    '巴西': '🇧🇷', '阿根廷': '🇦🇷', '智利': '🇨🇱', '秘鲁': '🇵🇪', '哥伦比亚': '🇨🇴',
    '委内瑞拉': '🇻🇪', '厄瓜多尔': '🇪🇨', '玻利维亚': '🇧🇴', '巴拉圭': '🇵🇾', '乌拉圭': '🇺🇾',
    '圭亚那': '🇬🇾', '苏里南': '🇸🇷',

    // 非洲
    '埃及': '🇪🇬', '利比亚': '🇱🇾', '突尼斯': '🇹🇳', '阿尔及利亚': '🇩🇿', '摩洛哥': '🇲🇦',
    '苏丹': '🇸🇩', '南苏丹': '🇸🇸', '尼日利亚': '🇳🇬', '加纳': '🇬🇭', '科特迪瓦': '🇨🇮',
    '塞内加尔': '🇸🇳', '马里': '🇲🇱', '布基纳法索': '🇧🇫', '尼日尔': '🇳🇪', '几内亚': '🇬🇳',
    '几内亚比绍': '🇬🇼', '塞拉利昂': '🇸🇱', '利比里亚': '🇱🇷', '毛里塔尼亚': '🇲🇷', '冈比亚': '🇬🇲',
    '佛得角': '🇨🇻', '喀麦隆': '🇨🇲', '中非共和国': '🇨🇫', '乍得': '🇹🇩', '刚果共和国': '🇨🇬',
    '刚果民主共和国': '🇨🇩', '加蓬': '🇬🇦', '赤道几内亚': '🇬🇶', '圣多美和普林西比': '🇸🇹',
    '埃塞俄比亚': '🇪🇹', '肯尼亚': '🇰🇪', '坦桑尼亚': '🇹🇿', '乌干达': '🇺🇬', '卢旺达': '🇷🇼',
    '布隆迪': '🇧🇮', '吉布提': '🇩🇯', '索马里': '🇸🇴', '厄立特里亚': '🇪🇷', '南非': '🇿🇦',
    '纳米比亚': '🇳🇦', '博茨瓦纳': '🇧🇼', '津巴布韦': '🇿🇼', '赞比亚': '🇿🇲', '马拉维': '🇲🇼',
    '莫桑比克': '🇲🇿', '斯威士兰': '🇸🇿', '莱索托': '🇱🇸', '马达加斯加': '🇲🇬', '毛里求斯': '🇲🇺',
    '塞舌尔': '🇸🇨', '科摩罗': '🇰🇲',

    // 大洋洲
    '澳大利亚': '🇦🇺', '新西兰': '🇳🇿', '巴布亚新几内亚': '🇵🇬', '所罗门群岛': '🇸🇧',
    '瓦努阿图': '🇻🇺', '斐济': '🇫🇯', '萨摩亚': '🇼🇸', '汤加': '🇹🇴', '图瓦卢': '🇹🇻',
    '密克罗尼西亚联邦': '🇫🇲', '帕劳': '🇵🇼', '马绍尔群岛': '🇲🇭', '基里巴斯': '🇰🇮', '瑙鲁': '🇳🇷',

    // 南极洲
    '南极洲': '🇦🇶'
  };

  return flagMapping[countryName] || '🌍';
}

// 兼容性：保持原有接口
export { getChineseNameByCode as getCountryNameByCode };
