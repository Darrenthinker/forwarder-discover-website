const { searchAirports } = require('./src/lib/airport-search.ts');

console.log('🔍 测试厄瓜多尔搜索功能');
console.log('==================================================');

// 测试不同的搜索方式
const testCases = [
  'ECUADOR',
  'Ecuador', 
  'ecuador',
  '厄瓜多尔',
  'EC',
  'ec'
];

testCases.forEach(query => {
  console.log(`\n🔍 搜索: "${query}"`);
  const results = searchAirports(query, 10);
  console.log(`结果数量: ${results.length}`);
  
  if (results.length > 0) {
    results.forEach((airport, index) => {
      console.log(`  ${index + 1}. ${airport.code} - ${airport.chinese} (${airport.country})`);
    });
  } else {
    console.log('  ❌ 没有找到结果');
  }
});

// 特别测试厄瓜多尔相关机场
console.log('\n🌍 厄瓜多尔机场验证:');
const ecuadorCodes = ['UIO', 'GYE', 'GPS', 'CUE'];
ecuadorCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code}: ${result[0].chinese} (${result[0].country})`);
  } else {
    console.log(`❌ ${code}: 未找到`);
  }
}); 