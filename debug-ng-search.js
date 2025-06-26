// 调试NG搜索问题
console.log('🔍 调试NG搜索问题');

// 测试1：检查complete-countries.ts中是否有NG
console.log('\n1. 检查NG国家代码映射：');
try {
  const { getCompleteCountryByCode } = require('./src/lib/complete-countries.ts');
  const ngCountry = getCompleteCountryByCode('NG');
  console.log('NG对应国家:', ngCountry);
} catch (error) {
  console.log('导入complete-countries错误:', error.message);
}

// 测试2：检查country-codes.ts中的映射
console.log('\n2. 检查country-codes映射：');
try {
  const { getCountryInfoByCode } = require('./src/lib/country-codes.ts');
  const ngInfo = getCountryInfoByCode('NG');
  console.log('NG国家信息:', ngInfo);
} catch (error) {
  console.log('导入country-codes错误:', error.message);
}

// 测试3：检查airport-search.ts中的搜索
console.log('\n3. 检查airport-search搜索：');
try {
  const { searchAirports } = require('./src/lib/airport-search.ts');
  const results = searchAirports('NG', 10);
  console.log('NG搜索结果:', results.length, '个机场');
  results.forEach((airport, index) => {
    console.log(`  ${index + 1}. ${airport.code} - ${airport.chinese} (${airport.country})`);
  });
} catch (error) {
  console.log('导入airport-search错误:', error.message);
}

// 测试4：直接搜索尼日利亚
console.log('\n4. 直接搜索"尼日利亚"：');
try {
  const { searchAirports } = require('./src/lib/airport-search.ts');
  const results = searchAirports('尼日利亚', 10);
  console.log('尼日利亚搜索结果:', results.length, '个机场');
  results.forEach((airport, index) => {
    console.log(`  ${index + 1}. ${airport.code} - ${airport.chinese} (${airport.country})`);
  });
} catch (error) {
  console.log('搜索尼日利亚错误:', error.message);
} 