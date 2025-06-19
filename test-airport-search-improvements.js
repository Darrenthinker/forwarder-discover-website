#!/usr/bin/env node

// 测试机场搜索改进功能
const {
  findAirportsByCountry,
  getCountryAirportStats,
  searchAirports
} = require('./src/lib/airport-search.ts');

const {
  getCityPriority,
  extractCityName
} = require('./src/lib/city-priority.ts');

console.log('🧪 测试机场搜索改进功能\n');

// 测试1: 中国机场排序
console.log('📍 测试1: 中国机场智能排序');
const chinaAirports = findAirportsByCountry('中国').slice(0, 10);
console.log('前10个机场:');
chinaAirports.forEach((airport, index) => {
  const cityName = extractCityName(airport.chinese);
  const priority = getCityPriority(cityName, airport.country);
  const priorityText = priority === 0 ? '首都' :
                      priority === 1 ? '主要城市' :
                      priority === 2 ? '一线城市' :
                      priority === 3 ? '二线城市' : '其他';
  console.log(`${index + 1}. ${airport.code} ${airport.chinese} [${priorityText}]`);
});

// 测试2: 统计信息
console.log('\n📊 测试2: 国家机场统计');
const stats = getCountryAirportStats('中国');
console.log(`中国机场统计:`, stats);

// 测试3: 搜索"中国"
console.log('\n🔍 测试3: 搜索"中国"');
const searchResults = searchAirports('中国', 20);
console.log(`搜索结果数量: ${searchResults.length}`);
console.log('前5个结果:');
searchResults.slice(0, 5).forEach((airport, index) => {
  const cityName = extractCityName(airport.chinese);
  const priority = getCityPriority(cityName, airport.country);
  console.log(`${index + 1}. ${airport.code} ${airport.chinese} [优先级: ${priority}]`);
});

// 测试4: 美国机场排序
console.log('\n🇺🇸 测试4: 美国机场智能排序');
const usaAirports = findAirportsByCountry('美国').slice(0, 8);
console.log('前8个机场:');
usaAirports.forEach((airport, index) => {
  const cityName = extractCityName(airport.chinese);
  const priority = getCityPriority(cityName, airport.country);
  const priorityText = priority === 0 ? '首都' :
                      priority === 1 ? '主要城市' :
                      priority === 2 ? '一线城市' :
                      priority === 3 ? '二线城市' : '其他';
  console.log(`${index + 1}. ${airport.code} ${airport.chinese} [${priorityText}]`);
});

// 测试5: 城市名提取
console.log('\n🏙️ 测试5: 城市名提取功能');
const testAirports = [
  '北京首都国际机场',
  '上海浦东国际机场',
  '广州白云国际机场',
  '纽约肯尼迪国际机场',
  '伦敦希思罗机场'
];

testAirports.forEach(airportName => {
  const cityName = extractCityName(airportName);
  console.log(`${airportName} → ${cityName}`);
});

console.log('\n✅ 测试完成！');
console.log('\n💡 新功能特点:');
console.log('- ✅ 智能排序：首都 > 主要城市 > 一线城市 > 二线城市');
console.log('- ✅ 数量统计：显示 已显示/总数 格式');
console.log('- ✅ 国家识别：自动检测国家搜索并显示国旗');
console.log('- ✅ 城市重要性：根据城市级别优先显示重要机场');
