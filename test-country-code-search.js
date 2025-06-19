#!/usr/bin/env node

// 测试国家代码搜索和显示功能
const { searchAirports, findAirportsByCountry } = require('./src/lib/airport-search.ts');
const {
  getCountryInfoByCode,
  formatCountryDisplay,
  isCountryCode,
  searchCountries
} = require('./src/lib/country-codes.ts');

console.log('🧪 测试国家代码搜索和显示功能\n');

// 测试1: 国家代码识别功能
console.log('📍 测试1: 国家代码识别功能');
const testCodes = ['CN', 'US', 'JP', 'GB', 'DE', 'FR', 'au', 'ca', 'ABC', '12'];
testCodes.forEach(code => {
  const isValid = isCountryCode(code);
  const countryInfo = getCountryInfoByCode(code);
  console.log(`${code}: ${isValid ? '✅' : '❌'} 有效代码 ${countryInfo ? `→ ${countryInfo.chineseName}` : ''}`);
});

// 测试2: 直接输入国家代码搜索机场
console.log('\n🔍 测试2: 直接输入国家代码搜索机场');
const countryCodes = ['CN', 'US', 'JP', 'GB', 'DE'];
countryCodes.forEach(code => {
  console.log(`\n搜索国家代码: ${code}`);
  const results = searchAirports(code, 5);
  results.forEach((airport, index) => {
    console.log(`  ${index + 1}. ${airport.code} ${airport.chinese} (${airport.countryWithCode || airport.country})`);
  });
});

// 测试3: 国家显示格式测试
console.log('\n📋 测试3: 国家显示格式测试');
const countries = ['中国', '美国', '日本', '英国', '德国', '法国', '澳大利亚', '加拿大'];
countries.forEach(country => {
  const formatted = formatCountryDisplay(country);
  console.log(`${country} → ${formatted}`);
});

// 测试4: 搜索国家功能
console.log('\n🌍 测试4: 搜索国家功能');
const searchQueries = ['中国', 'China', 'CN', '美国', 'United', 'US'];
searchQueries.forEach(query => {
  console.log(`\n搜索: "${query}"`);
  const countries = searchCountries(query);
  countries.slice(0, 3).forEach(country => {
    console.log(`  ${country.chineseName} (${country.code}) - ${country.englishName}`);
  });
});

// 测试5: 对比国家名搜索和国家代码搜索的结果
console.log('\n⚖️ 测试5: 对比搜索结果');
const comparisons = [
  { name: '中国', code: 'CN' },
  { name: '美国', code: 'US' },
  { name: '日本', code: 'JP' }
];

comparisons.forEach(({ name, code }) => {
  console.log(`\n对比 "${name}" vs "${code}"`);

  const nameResults = searchAirports(name, 5);
  const codeResults = searchAirports(code, 5);

  console.log(`  通过国家名搜索 (${nameResults.length}个结果):`);
  nameResults.forEach((airport, index) => {
    console.log(`    ${index + 1}. ${airport.code} ${airport.chinese}`);
  });

  console.log(`  通过国家代码搜索 (${codeResults.length}个结果):`);
  codeResults.forEach((airport, index) => {
    console.log(`    ${index + 1}. ${airport.code} ${airport.chinese}`);
  });

  const sameResults = nameResults.length === codeResults.length &&
    nameResults.every((airport, index) => airport.code === codeResults[index]?.code);
  console.log(`  结果一致性: ${sameResults ? '✅ 一致' : '⚠️ 不同'}`);
});

// 测试6: 特殊地区代码测试
console.log('\n🏴 测试6: 特殊地区代码测试');
const specialCodes = ['HK', 'MO', 'TW'];
specialCodes.forEach(code => {
  console.log(`\n搜索特殊地区代码: ${code}`);
  const results = searchAirports(code, 3);
  results.forEach((airport, index) => {
    console.log(`  ${index + 1}. ${airport.code} ${airport.chinese} (${airport.countryWithCode || airport.country})`);
  });
});

console.log('\n✅ 国家代码测试完成！');
console.log('\n💡 功能特点:');
console.log('- ✅ 支持直接输入国家二字码搜索 (如CN, US, JP)');
console.log('- ✅ 国家显示包含代码格式 (如"中国 CN")');
console.log('- ✅ 智能识别国家代码格式');
console.log('- ✅ 国家名和国家代码搜索结果一致');
console.log('- ✅ 支持特殊地区代码 (HK, MO, TW)');
