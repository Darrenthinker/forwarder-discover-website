// 简单测试ECUADOR搜索
console.log('测试ECUADOR搜索修复...');

// 模拟完整的测试，首先检查 freight-quote-system 是否启动
try {
  const { searchAirports } = require('./src/lib/airport-search.ts');
  
  console.log('\n🔍 测试 "ECUADOR" 搜索:');
  const results1 = searchAirports('ECUADOR', 10);
  console.log(`结果数量: ${results1.length}`);
  results1.forEach((airport, i) => {
    console.log(`  ${i+1}. ${airport.code} - ${airport.chinese} (${airport.country})`);
  });

  console.log('\n🔍 测试 "Ecuador" 搜索:');
  const results2 = searchAirports('Ecuador', 10);
  console.log(`结果数量: ${results2.length}`);
  results2.forEach((airport, i) => {
    console.log(`  ${i+1}. ${airport.code} - ${airport.chinese} (${airport.country})`);
  });

  console.log('\n🔍 测试 "厄瓜多尔" 搜索:');
  const results3 = searchAirports('厄瓜多尔', 10);
  console.log(`结果数量: ${results3.length}`);
  results3.forEach((airport, i) => {
    console.log(`  ${i+1}. ${airport.code} - ${airport.chinese} (${airport.country})`);
  });
  
} catch (error) {
  console.error('测试失败:', error.message);
} 