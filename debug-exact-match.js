// 调试精确匹配逻辑 - 分析NRT vs JFK
const { findAirportByCode } = require('./src/lib/airport-search.ts');

console.log('=== 调试精确匹配逻辑 ===');

// 测试NRT
console.log('\n🇯🇵 测试 NRT (日本):');
const nrtResult = findAirportByCode('NRT');
console.log('NRT findAirportByCode 结果:', nrtResult ? 'Found' : 'NOT FOUND');
if (nrtResult) {
  console.log('NRT 详情:', {
    code: nrtResult.code,
    chinese: nrtResult.chinese,
    english: nrtResult.english,
    country: nrtResult.country
  });
}

// 测试JFK
console.log('\n🇺🇸 测试 JFK (美国):');
const jfkResult = findAirportByCode('JFK');
console.log('JFK findAirportByCode 结果:', jfkResult ? 'Found' : 'NOT FOUND');
if (jfkResult) {
  console.log('JFK 详情:', {
    code: jfkResult.code,
    chinese: jfkResult.chinese,
    english: jfkResult.english,
    country: jfkResult.country
  });
}

// 测试逻辑判断
console.log('\n=== 逻辑判断测试 ===');
const testQuery1 = 'NRT';
const testQuery2 = 'JFK';

const isExactMatch1 = testQuery1.length === 3 && findAirportByCode(testQuery1.toUpperCase());
const isExactMatch2 = testQuery2.length === 3 && findAirportByCode(testQuery2.toUpperCase());

console.log(`NRT isExactMatch: ${!!isExactMatch1}`);
console.log(`JFK isExactMatch: ${!!isExactMatch2}`);

console.log('\n✅ 调试完成！'); 