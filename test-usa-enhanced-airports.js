// 测试美国增强机场数据库功能
const { searchAirports, findAirportsByCountry, AIRPORT_COLORS, AIRPORT_TYPE_LABELS } = require('./src/lib/airport-search.ts');

console.log('🧪 美国增强机场数据库测试');
console.log('========================================');

// 测试1: 搜索美国主要机场
console.log('\n📍 测试1: 搜索"美国"国家');
const usaResults = findAirportsByCountry('美国', 10);
console.log(`找到 ${usaResults.length} 个美国机场:`);
usaResults.forEach((airport, index) => {
  const typeLabel = AIRPORT_TYPE_LABELS[airport.type] || '未知';
  const customsLabel = airport.customs ? '🛃海关' : '🔸无海关';
  const priorityLabel = airport.priority ? `[P${airport.priority}]` : '';

  console.log(`${index + 1}. ${airport.code} - ${airport.chinese} ${priorityLabel}`);
  console.log(`   类型: ${typeLabel} | ${customsLabel} | 优先级: ${airport.priority || 50}`);
  console.log(`   英文: ${airport.english}`);
});

// 测试2: 搜索特定机场代码
console.log('\n📍 测试2: 搜索特定机场代码');
const testCodes = ['JFK', 'LAX', 'ORD', 'LGA', 'DCA'];
testCodes.forEach(code => {
  const results = searchAirports(code, 1);
  if (results.length > 0) {
    const airport = results[0];
    const typeColor = AIRPORT_COLORS[airport.type];
    console.log(`${code}: ${airport.chinese} - ${AIRPORT_TYPE_LABELS[airport.type]} (优先级: ${airport.priority})`);
    console.log(`      颜色: ${typeColor} | 海关: ${airport.customs ? '是' : '否'}`);
  }
});

// 测试3: 按类型统计
console.log('\n📍 测试3: 美国机场类型统计');
const usaAllResults = findAirportsByCountry('美国', 50);
const typeStats = {};
const customsCount = usaAllResults.filter(a => a.customs).length;

usaAllResults.forEach(airport => {
  const type = airport.type || 'unknown';
  typeStats[type] = (typeStats[type] || 0) + 1;
});

console.log('机场类型分布:');
Object.entries(typeStats).forEach(([type, count]) => {
  const label = AIRPORT_TYPE_LABELS[type] || type;
  const color = AIRPORT_COLORS[type] || '#gray';
  console.log(`  ${label}: ${count}个 (颜色: ${color})`);
});
console.log(`  有海关机场: ${customsCount}个`);

// 测试4: 搜索"纽约"验证排序
console.log('\n📍 测试4: 搜索"纽约"验证优先级排序');
const nyResults = searchAirports('纽约', 5);
console.log(`找到 ${nyResults.length} 个纽约机场:`);
nyResults.forEach((airport, index) => {
  console.log(`${index + 1}. ${airport.code} - ${airport.chinese} [P${airport.priority}]`);
  console.log(`   类型: ${AIRPORT_TYPE_LABELS[airport.type]} | 海关: ${airport.customs ? '是' : '否'}`);
});

// 测试5: 颜色方案验证
console.log('\n📍 测试5: 颜色方案');
console.log('机场类型颜色配置:');
Object.entries(AIRPORT_COLORS).forEach(([type, color]) => {
  console.log(`  ${AIRPORT_TYPE_LABELS[type]}: ${color}`);
});

console.log('\n✅ 测试完成!');
console.log('========================================');
console.log('主要改进点:');
console.log('1. 🎨 颜色区分: 国际机场(绿色) vs 国内机场(灰色)');
console.log('2. 🏷️ 类型标识: 清晰显示机场类型');
console.log('3. 🛃 海关标识: 标明是否有海关设施');
console.log('4. 📊 优先级排序: 重要机场优先显示');
console.log('5. 🇺🇸 数据完善: 美国30个主要机场完整信息');
