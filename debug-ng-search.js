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

const { searchAirlines, findAirlinesByCountry } = require('./src/lib/airline-search.ts');

console.log('🔍 测试航司搜索修复效果');
console.log('================================');

// 测试搜索 "NG"
console.log('\n📝 搜索 "NG":');
const ngResults = searchAirlines('NG');
console.log(`找到 ${ngResults.length} 个航司结果:`);

ngResults.slice(0, 10).forEach(airline => {
  console.log(`   ${airline.code} - ${airline.name.chinese} (${airline.country}) [${airline.countryCode}]`);
});

// 测试搜索尼日利亚
console.log('\n📝 按国家搜索 "尼日利亚":');
const nigeriaAirlines = findAirlinesByCountry('尼日利亚');
console.log(`找到 ${nigeriaAirlines.length} 个尼日利亚航司:`);

nigeriaAirlines.forEach(airline => {
  console.log(`   ${airline.code} - ${airline.name.chinese} (${airline.country})`);
});

// 测试搜索 "Nigeria"
console.log('\n📝 按国家搜索 "Nigeria":');
const nigeriaAirlinesEn = findAirlinesByCountry('Nigeria');
console.log(`找到 ${nigeriaAirlinesEn.length} 个Nigeria航司:`);

nigeriaAirlinesEn.forEach(airline => {
  console.log(`   ${airline.code} - ${airline.name.chinese} (${airline.country})`);
});

// 对比修复前的问题
console.log('\n🔧 修复说明:');
console.log('修复前: 搜索"NG"会匹配所有英文名包含"ng"的航司');
console.log('如: Shandong Airlines, Spring Airlines, Hong Kong Airlines等');
console.log('修复后: 搜索"NG"只精确匹配国家代码NG的航司'); 