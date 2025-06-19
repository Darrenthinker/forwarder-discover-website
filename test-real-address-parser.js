// 🌍 实际地址解析系统测试
import { parseAddressAndFindAirports } from './src/lib/address-parser.js';

console.log('🧪 测试实际地址解析系统\n');

// 测试用例
const testCases = [
  // 🌎 北美洲
  {
    address: '241 N Congress Ave, Delray Beach, FL 33445',
    continent: '北美洲',
    expected: { country: '美国', airport: 'MIA' }
  },
  {
    address: 'Miami, FL',
    continent: '北美洲',
    expected: { country: '美国', airport: 'MIA' }
  },
  {
    address: 'Toronto, ON',
    continent: '北美洲',
    expected: { country: '加拿大', airport: 'YYZ' }
  },
  {
    address: 'Mexico City, Mexico',
    continent: '北美洲',
    expected: { country: '墨西哥', airport: 'MEX' }
  },

  // 🌍 欧洲
  {
    address: 'London, UK',
    continent: '欧洲',
    expected: { country: '英国', airport: 'LHR' }
  },
  {
    address: '75001 Paris, France',
    continent: '欧洲',
    expected: { country: '法国', airport: 'CDG' }
  },
  {
    address: '10117 Berlin, Germany',
    continent: '欧洲',
    expected: { country: '德国', airport: 'BER' }
  },
  {
    address: 'Roma, Italy',
    continent: '欧洲',
    expected: { country: '意大利', airport: 'FCO' }
  },

  // 🌏 亚洲
  {
    address: 'Tokyo, Japan',
    continent: '亚洲',
    expected: { country: '日本', airport: 'NRT' }
  },
  {
    address: 'Seoul, Korea',
    continent: '亚洲',
    expected: { country: '韩国', airport: 'ICN' }
  },
  {
    address: 'Singapore',
    continent: '亚洲',
    expected: { country: '新加坡', airport: 'SIN' }
  },
  {
    address: 'Hong Kong',
    continent: '亚洲',
    expected: { country: '香港', airport: 'HKG' }
  },
  {
    address: 'Bangkok, Thailand',
    continent: '亚洲',
    expected: { country: '泰国', airport: 'BKK' }
  },
  {
    address: 'Mumbai, India',
    continent: '亚洲',
    expected: { country: '印度', airport: 'BOM' }
  },
  {
    address: 'Dubai, UAE',
    continent: '亚洲',
    expected: { country: '阿联酋', airport: 'DXB' }
  },

  // 🌏 大洋洲
  {
    address: 'Sydney, Australia',
    continent: '大洋洲',
    expected: { country: '澳大利亚', airport: 'SYD' }
  },
  {
    address: 'Auckland, New Zealand',
    continent: '大洋洲',
    expected: { country: '新西兰', airport: 'AKL' }
  },

  // 🌎 南美洲
  {
    address: 'São Paulo, Brazil',
    continent: '南美洲',
    expected: { country: '巴西', airport: 'GRU' }
  },
  {
    address: 'Buenos Aires, Argentina',
    continent: '南美洲',
    expected: { country: '阿根廷', airport: 'EZE' }
  },
  {
    address: 'Santiago, Chile',
    continent: '南美洲',
    expected: { country: '智利', airport: 'SCL' }
  }
];

function runTests() {
  console.log('🌍 开始实际地址解析测试...\n');

  let totalTests = 0;
  let successfulTests = 0;
  const results = {};

  // 按大洲分组统计
  testCases.forEach((testCase, index) => {
    const { address, continent, expected } = testCase;
    totalTests++;

    if (!results[continent]) {
      results[continent] = { total: 0, success: 0, tests: [] };
    }
    results[continent].total++;

    console.log(`${index + 1}. 测试地址: "${address}"`);

    try {
      const result = parseAddressAndFindAirports(address);

      if (result.success) {
        const actualCountry = result.address?.country;
        const actualAirport = result.primaryAirport?.code;

        const countryMatch = actualCountry === expected.country;
        const airportMatch = actualAirport === expected.airport;
        const isSuccess = countryMatch && airportMatch;

        if (isSuccess) {
          successfulTests++;
          results[continent].success++;
          console.log(`   ✅ 成功: ${actualCountry} -> ${actualAirport} (置信度: ${result.confidence}%)`);
        } else {
          console.log(`   ❓ 部分匹配: ${actualCountry} -> ${actualAirport || '无'} (期望: ${expected.country} -> ${expected.airport})`);
        }

        results[continent].tests.push({
          address,
          success: isSuccess,
          actual: { country: actualCountry, airport: actualAirport },
          expected,
          confidence: result.confidence
        });
      } else {
        console.log(`   ❌ 解析失败`);
        results[continent].tests.push({
          address,
          success: false,
          actual: null,
          expected,
          confidence: 0
        });
      }
    } catch (error) {
      console.log(`   🔥 错误: ${error.message}`);
      results[continent].tests.push({
        address,
        success: false,
        actual: null,
        expected,
        confidence: 0,
        error: error.message
      });
    }

    console.log('');
  });

  // 输出统计结果
  console.log('🏆 测试结果总结:');
  console.log('=====================================');

  Object.entries(results).forEach(([continent, data]) => {
    const successRate = ((data.success / data.total) * 100).toFixed(1);
    console.log(`${getContinentFlag(continent)} ${continent}: ${data.success}/${data.total} (${successRate}%)`);
  });

  const overallSuccessRate = ((successfulTests / totalTests) * 100).toFixed(1);
  console.log('=====================================');
  console.log(`🌍 总体成功率: ${successfulTests}/${totalTests} (${overallSuccessRate}%)`);

  // 详细的失败分析
  console.log('\n📊 详细分析:');
  Object.entries(results).forEach(([continent, data]) => {
    const failedTests = data.tests.filter(t => !t.success);
    if (failedTests.length > 0) {
      console.log(`\n${continent}失败用例:`);
      failedTests.forEach(test => {
        console.log(`  ❌ "${test.address}"`);
        if (test.error) {
          console.log(`     错误: ${test.error}`);
        } else if (test.actual) {
          console.log(`     实际: ${test.actual.country} -> ${test.actual.airport || '无'}`);
          console.log(`     期望: ${test.expected.country} -> ${test.expected.airport}`);
        }
      });
    }
  });

  return {
    totalTests,
    successfulTests,
    overallSuccessRate: parseFloat(overallSuccessRate),
    results
  };
}

function getContinentFlag(continent) {
  const flags = {
    '北美洲': '🌎',
    '欧洲': '🌍',
    '亚洲': '🌏',
    '大洋洲': '🌏',
    '南美洲': '🌎'
  };
  return flags[continent] || '🌍';
}

// 执行测试
try {
  const testResults = runTests();
  console.log('\n🎯 系统性能评估:');

  if (testResults.overallSuccessRate >= 90) {
    console.log('🏆 优秀 (≥90%) - 系统运行良好');
  } else if (testResults.overallSuccessRate >= 70) {
    console.log('✅ 良好 (70-89%) - 系统基本可用');
  } else if (testResults.overallSuccessRate >= 50) {
    console.log('⚠️ 一般 (50-69%) - 需要优化');
  } else {
    console.log('❌ 较差 (<50%) - 需要重大改进');
  }

  console.log('\n🚀 实际地址解析系统测试完成!');
} catch (error) {
  console.error('❌ 测试执行失败:', error);
}
