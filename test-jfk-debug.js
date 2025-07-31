// 测试JFK精确匹配
console.log('=== JFK精确匹配测试 ===');

// 模拟组件中的逻辑
const query = 'JFK';
const trimmedQuery = query.trim();

console.log('trimmedQuery:', trimmedQuery);
console.log('trimmedQuery.length:', trimmedQuery.length);
console.log('trimmedQuery.length === 3:', trimmedQuery.length === 3);

// 测试findAirportByCode
try {
  const { findAirportByCode } = require('./src/lib/airport-search.ts');
  
  console.log('\n--- findAirportByCode测试 ---');
  const result = findAirportByCode(trimmedQuery.toUpperCase());
  console.log('findAirportByCode("JFK"):', result ? 'Found' : 'NOT FOUND');
  
  if (result) {
    console.log('JFK详情:', {
      code: result.code,
      chinese: result.chinese,
      english: result.english,
      country: result.country
    });
  }
  
  // 测试完整条件
  const isExactMatch = trimmedQuery.length === 3 && findAirportByCode(trimmedQuery.toUpperCase());
  console.log('\nisExactMatch:', !!isExactMatch);
  
  if (isExactMatch) {
    console.log('✅ 应该不显示下拉框');
  } else {
    console.log('❌ 会显示下拉框');
  }
  
} catch (error) {
  console.error('导入失败:', error.message);
}

console.log('\n=== 测试完成 ==='); 