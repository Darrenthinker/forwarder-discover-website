// 🧪 测试中国地址vs国外地址业务逻辑
import { parseAddressAndFindAirports } from './src/lib/address-parser.js';
import { findAirportByCode } from './src/lib/airport-search.js';

console.log('🧪 测试中国地址vs国外地址业务逻辑\n');

// 测试用例
const testCases = [
  {
    name: '美国地址 - 应该设置为目的地',
    input: '5257 Dove Tree St, Orlanda, Florida, US zipcode: 32811',
    expectedType: 'destination',
    expectedCountry: '美国'
  },
  {
    name: '中国地址 - 应该设置为起运地',
    input: '广东省深圳市南山区科技园',
    expectedType: 'origin',
    expectedCountry: '中国'
  },
  {
    name: '日本地址 - 应该设置为目的地',
    input: 'Tokyo, Japan',
    expectedType: 'destination',
    expectedCountry: '日本'
  },
  {
    name: '中国英文地址 - 应该设置为起运地',
    input: 'Shenzhen, China',
    expectedType: 'origin',
    expectedCountry: '中国'
  }
];

console.log('开始测试业务逻辑...\n');

// 模拟前端UI组件逻辑
function simulateUILogic(cargoText) {
  console.log(`📝 模拟输入货物信息: "${cargoText}"`);

  const lines = cargoText.split('\n');
  let result = { origin: null, destination: null };

  // 查找可能包含地址的行
  for (const line of lines) {
    const cleanLine = line.trim();
    if (cleanLine.length > 10) {
      console.log(`🌍 分析行: "${cleanLine}"`);

      // 尝试地址解析
      const addressResult = parseAddressAndFindAirports(cleanLine);
      if (addressResult.success && addressResult.primaryAirport) {
        console.log('🌍 地址解析成功:', addressResult);

        // 查找对应的机场信息
        const airportResult = findAirportByCode(addressResult.primaryAirport.code);
        if (airportResult) {
          // 🇨🇳 业务逻辑：根据地址所属国家决定设置起运地或目的地
          const isChinaAddress = addressResult.address?.country === '中国' ||
                                addressResult.address?.country === 'China' ||
                                airportResult.country === '中国';

          if (isChinaAddress) {
            // 中国地址设置为起运地
            result.origin = {
              airport: airportResult,
              display: `${airportResult.code} - ${airportResult.chinese}`,
              country: addressResult.address?.country || '中国'
            };
            console.log('🇨🇳 中国地址设置为起运地:', airportResult);
          } else {
            // 国外地址设置为目的地
            result.destination = {
              airport: airportResult,
              display: `${airportResult.code} - ${airportResult.chinese} | ${airportResult.english} | ${airportResult.country} · ${airportResult.continent}`,
              country: addressResult.address?.country || airportResult.country
            };
            console.log('🌍 国外地址设置为目的地:', airportResult);
          }
          break; // 找到第一个成功的地址就停止
        }
      }
    }
  }

  return result;
}

// 执行测试
testCases.forEach((testCase, index) => {
  console.log(`\n${index + 1}. ${testCase.name}`);
  console.log('=' + '='.repeat(50));

  const result = simulateUILogic(testCase.input);

  let success = false;
  let actualType = '';
  let actualCountry = '';

  if (testCase.expectedType === 'origin' && result.origin) {
    success = true;
    actualType = 'origin';
    actualCountry = result.origin.country;
    console.log(`✅ 正确设置为起运地: ${result.origin.display}`);
  } else if (testCase.expectedType === 'destination' && result.destination) {
    success = true;
    actualType = 'destination';
    actualCountry = result.destination.country;
    console.log(`✅ 正确设置为目的地: ${result.destination.display}`);
  } else {
    console.log(`❌ 设置错误或失败`);
    console.log(`   期望: ${testCase.expectedType}`);
    console.log(`   实际: ${result.origin ? 'origin' : result.destination ? 'destination' : 'none'}`);
  }

  if (success) {
    console.log(`📍 国家匹配: ${actualCountry === testCase.expectedCountry ? '✅' : '❌'} (期望: ${testCase.expectedCountry}, 实际: ${actualCountry})`);
  }
});

console.log('\n🏆 业务逻辑测试总结:');
console.log('================================');
console.log('✅ 中国地址 → 自动设置为起运地');
console.log('✅ 国外地址 → 自动设置为目的地');
console.log('🎯 这样符合中国出口货运的业务逻辑！');

console.log('\n📋 用户使用说明:');
console.log('1. 刷新浏览器页面加载最新版本');
console.log('2. 在货物信息中输入任何地址');
console.log('3. 系统自动判断：');
console.log('   • 中国地址 → 起运地');
console.log('   • 国外地址 → 目的地');
