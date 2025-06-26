// 测试尼日利亚机场搜索功能
const { searchAirports, getCountryInfoByCode } = require('./src/lib/airport-search.ts');

console.log('🇳🇬 尼日利亚机场搜索测试');
console.log('==========================================');

// 测试1：测试国家代码查询功能
console.log('\n1. 测试getCountryInfoByCode("NG")：');
try {
  const countryInfo = getCountryInfoByCode('NG');
  console.log('国家信息:', countryInfo);
} catch (error) {
  console.log('错误:', error.message);
}

// 测试2：搜索"NG"
console.log('\n2. 搜索"NG"：');
const ngResults = searchAirports('NG', 20);
console.log(`找到 ${ngResults.length} 个结果：`);
ngResults.forEach((airport, index) => {
  console.log(`  ${index + 1}. ${airport.code} - ${airport.chinese} (${airport.type || '未分类'})`);
  console.log(`     ${airport.english}`);
});

// 测试3：搜索"尼日利亚"
console.log('\n3. 搜索"尼日利亚"：');
const nigeriaResults = searchAirports('尼日利亚', 20);
console.log(`找到 ${nigeriaResults.length} 个结果：`);
nigeriaResults.forEach((airport, index) => {
  console.log(`  ${index + 1}. ${airport.code} - ${airport.chinese} (${airport.type || '未分类'})`);
  console.log(`     ${airport.english}`);
});

// 测试4：搜索"Nigeria"
console.log('\n4. 搜索"Nigeria"：');
const nigeriaEnResults = searchAirports('Nigeria', 20);
console.log(`找到 ${nigeriaEnResults.length} 个结果：`);
nigeriaEnResults.forEach((airport, index) => {
  console.log(`  ${index + 1}. ${airport.code} - ${airport.chinese} (${airport.type || '未分类'})`);
  console.log(`     ${airport.english}`);
});

// 测试5：直接搜索机场代码
console.log('\n5. 搜索具体机场代码：');
const specificCodes = ['LOS', 'ABV', 'KAN', 'PHC'];
specificCodes.forEach(code => {
  const results = searchAirports(code, 5);
  console.log(`${code}: ${results.length > 0 ? results[0].chinese + ' - ' + results[0].english : '未找到'}`);
}); 