// 测试梵蒂冈搜索功能
const { searchAirports, findAirportByCode } = require('./src/lib/airport-search.ts');

console.log('=== 测试梵蒂冈搜索功能 ===');
console.log('');

// 测试不同的搜索词
const searchTerms = [
  '梵蒂冈',
  'Vatican',
  'Vatican City',
  'VA',
  '意大利',
  'Italy',
  'rome',
  '罗马'
];

for (const term of searchTerms) {
  console.log(`🔍 搜索 "${term}":`);
  try {
    const results = searchAirports(term, 10);
    if (results.length > 0) {
      console.log(`  ✅ 找到 ${results.length} 个结果:`);
      results.forEach((result, index) => {
        console.log(`    ${index + 1}. ${result.chinese} (${result.english}) - ${result.code} - ${result.country}`);
      });
    } else {
      console.log(`  ❌ 没有找到结果`);
    }
  } catch (error) {
    console.log(`  ⚠️ 搜索出错: ${error.message}`);
  }
  console.log('');
}

console.log('🔍 直接测试机场代码搜索:');
try {
  const vaticanAirport = findAirportByCode('VA');
  if (vaticanAirport) {
    console.log(`✅ 找到: ${vaticanAirport.chinese} (${vaticanAirport.english})`);
  } else {
    console.log('❌ 没有找到VA代码对应的机场');
  }
} catch (error) {
  console.log(`⚠️ 搜索出错: ${error.message}`);
}
