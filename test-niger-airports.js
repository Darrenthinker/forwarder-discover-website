// 测试尼日尔机场搜索功能
const { searchAirports, findAirportByCode, findAirportsByCountry } = require('./src/lib/airport-search.ts');

console.log('🇳🇪 尼日尔机场搜索测试');
console.log('==========================================');

// 测试1：搜索"尼日尔"
console.log('\n1. 搜索"尼日尔"：');
const nigerResults = searchAirports('尼日尔', 20);
console.log(`找到 ${nigerResults.length} 个结果：`);
nigerResults.forEach((airport, index) => {
  console.log(`  ${index + 1}. ${airport.code} - ${airport.chinese} (${airport.type || '未分类'})`);
  console.log(`     ${airport.english}`);
  console.log(`     坐标: ${airport.coordinates ? `${airport.coordinates.lat}, ${airport.coordinates.lng}` : '未知'}`);
});

// 测试2：搜索"Niger"
console.log('\n2. 搜索"Niger"：');
const nigerEnResults = searchAirports('Niger', 20);
console.log(`找到 ${nigerEnResults.length} 个结果：`);
nigerEnResults.forEach((airport, index) => {
  console.log(`  ${index + 1}. ${airport.code} - ${airport.chinese} (${airport.type || '未分类'})`);
});

// 测试3：搜索尼亚美机场代码"NIM"
console.log('\n3. 搜索尼亚美机场代码"NIM"：');
const nimResult = findAirportByCode('NIM');
if (nimResult) {
  console.log(`  ${nimResult.code} - ${nimResult.chinese}`);
  console.log(`  ${nimResult.english}`);
  console.log(`  国家: ${nimResult.country}`);
  console.log(`  类型: ${nimResult.type}`);
  console.log(`  优先级: ${nimResult.priority}`);
  console.log(`  大洲: ${nimResult.continent}`);
} else {
  console.log('  未找到NIM机场');
}

// 测试4：搜索"尼亚美"
console.log('\n4. 搜索"尼亚美"：');
const niameyResults = searchAirports('尼亚美', 10);
console.log(`找到 ${niameyResults.length} 个结果：`);
niameyResults.forEach((airport, index) => {
  console.log(`  ${index + 1}. ${airport.code} - ${airport.chinese} (${airport.type || '未分类'})`);
});

// 测试5：按国家查找尼日尔所有机场
console.log('\n5. 尼日尔所有机场：');
const allNigerAirports = findAirportsByCountry('尼日尔', 50);
console.log(`尼日尔共有 ${allNigerAirports.length} 个机场：`);
allNigerAirports.forEach((airport, index) => {
  console.log(`  ${index + 1}. ${airport.code} - ${airport.chinese}`);
  console.log(`     ${airport.english}`);
  console.log(`     类型: ${airport.type}, 优先级: ${airport.priority}, 海关: ${airport.customs ? '有' : '无'}`);
});

// 测试6：国际机场统计
console.log('\n6. 尼日尔国际机场统计：');
const internationalAirports = allNigerAirports.filter(a => a.type === 'international');
console.log(`国际机场数量: ${internationalAirports.length}`);
internationalAirports.forEach((airport, index) => {
  console.log(`  ${index + 1}. ${airport.code} - ${airport.chinese}`);
});

console.log('\n测试完成！'); 