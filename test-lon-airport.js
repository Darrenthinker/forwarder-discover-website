#!/usr/bin/env node

// 测试LON机场代码
const { findAirportByCode, searchAirports, findAirportsByCountry } = require('./src/lib/airport-search.ts');

console.log('🧪 测试LON机场代码添加\n');

// 测试1: 直接搜索LON代码
console.log('📍 测试1: 搜索LON代码');
const lonAirport = findAirportByCode('LON');
if (lonAirport) {
  console.log(`✅ 找到: ${lonAirport.code} ${lonAirport.chinese} ${lonAirport.english} (${lonAirport.country})`);
} else {
  console.log('❌ 未找到LON机场代码');
}

// 测试2: 搜索"伦敦"
console.log('\n🔍 测试2: 搜索"伦敦"');
const londonResults = searchAirports('伦敦', 10);
console.log(`找到 ${londonResults.length} 个伦敦相关机场:`);
londonResults.forEach((airport, index) => {
  console.log(`${index + 1}. ${airport.code} ${airport.chinese} ${airport.english}`);
});

// 测试3: 英国所有机场（前10个）
console.log('\n🇬🇧 测试3: 英国机场（前10个）');
const ukAirports = findAirportsByCountry('英国').slice(0, 10);
ukAirports.forEach((airport, index) => {
  console.log(`${index + 1}. ${airport.code} ${airport.chinese} ${airport.english}`);
});

// 测试4: 搜索"London"
console.log('\n🔍 测试4: 搜索"London"');
const londonEnglishResults = searchAirports('London', 8);
console.log(`找到 ${londonEnglishResults.length} 个London相关机场:`);
londonEnglishResults.forEach((airport, index) => {
  console.log(`${index + 1}. ${airport.code} ${airport.chinese} ${airport.english}`);
});

console.log('\n✅ LON机场代码测试完成！');
console.log('\n📝 说明:');
console.log('- LON是伦敦地区机场群的城市代码');
console.log('- 在国际货运中常用来表示伦敦所有主要机场');
console.log('- 包括希思罗(LHR)、盖特威克(LGW)、斯坦斯特德(STN)、卢顿(LTN)、城市机场(LCY)等');
