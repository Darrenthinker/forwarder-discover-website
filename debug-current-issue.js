// 🔍 调试当前地址识别问题
import { parseAddressAndFindAirports } from './src/lib/address-parser.js';
import { findAirportByCode } from './src/lib/airport-search.js';

console.log('🔍 调试当前地址识别问题\n');

// 用户实际输入的地址
const userInput = '5257 Dove Tree St, Orlanda, Florida, 32811';

console.log(`用户输入: "${userInput}"`);
console.log('\n1. 测试地址解析器:');
console.log('=====================================');

try {
  const result = parseAddressAndFindAirports(userInput);
  console.log('解析结果:', JSON.stringify(result, null, 2));

  if (result.success) {
    console.log('\n✅ 地址解析成功!');
    console.log(`城市: ${result.address?.city}`);
    console.log(`国家: ${result.address?.country}`);
    console.log(`机场: ${result.primaryAirport?.code} - ${result.primaryAirport?.name}`);

    // 测试机场查找
    if (result.primaryAirport) {
      const airportInfo = findAirportByCode(result.primaryAirport.code);
      if (airportInfo) {
        console.log('\n2. 机场信息查找:');
        console.log('=====================================');
        console.log(`机场代码: ${airportInfo.code}`);
        console.log(`中文名: ${airportInfo.chinese}`);
        console.log(`英文名: ${airportInfo.english}`);
        console.log(`国家: ${airportInfo.country}`);
        console.log(`大洲: ${airportInfo.continent}`);

        // 测试业务逻辑判断
        console.log('\n3. 业务逻辑判断:');
        console.log('=====================================');
        const isChinaAddress = result.address?.country === '中国' ||
                              result.address?.country === 'China' ||
                              airportInfo.country === '中国';

        console.log(`是否中国地址: ${isChinaAddress}`);
        console.log(`应该设置为: ${isChinaAddress ? '起运地' : '目的地'}`);

        if (!isChinaAddress) {
          const destinationDisplay = `${airportInfo.code} - ${airportInfo.chinese} | ${airportInfo.english} | ${airportInfo.country} · ${airportInfo.continent}`;
          console.log(`目的地显示: ${destinationDisplay}`);
        }
      } else {
        console.log('\n❌ 机场信息查找失败');
      }
    }
  } else {
    console.log('\n❌ 地址解析失败');
  }
} catch (error) {
  console.log(`\n🔥 错误: ${error.message}`);
  console.log(error.stack);
}

console.log('\n4. 模拟前端处理流程:');
console.log('=====================================');

// 模拟前端组件处理
const lines = userInput.split('\n');
console.log(`输入行数: ${lines.length}`);

for (const line of lines) {
  const cleanLine = line.trim();
  console.log(`\n处理行: "${cleanLine}" (长度: ${cleanLine.length})`);

  if (cleanLine.length > 10) {
    console.log('✅ 行长度符合要求，尝试解析...');

    const addressResult = parseAddressAndFindAirports(cleanLine);
    if (addressResult.success && addressResult.primaryAirport) {
      console.log('✅ 该行解析成功');

      const airportResult = findAirportByCode(addressResult.primaryAirport.code);
      if (airportResult) {
        const isChinaAddress = addressResult.address?.country === '中国' ||
                              addressResult.address?.country === 'China' ||
                              airportResult.country === '中国';

        if (isChinaAddress) {
          console.log('🇨🇳 应该设置为起运地');
        } else {
          console.log('🌍 应该设置为目的地');
        }
      }
    } else {
      console.log('❌ 该行解析失败');
    }
  } else {
    console.log('⚠️ 行长度不足，跳过');
  }
}

console.log('\n🎯 结论和建议:');
console.log('=====================================');
console.log('1. 如果地址解析成功但前端没有显示，可能是浏览器缓存问题');
console.log('2. 请刷新浏览器页面 (Ctrl+F5 强制刷新)');
console.log('3. 确保输入的地址格式正确');
console.log('4. 检查浏览器控制台是否有错误信息');
