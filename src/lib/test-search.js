// 测试HKG和MFM是否在globalAirports中
const { globalAirports, searchAirports } = require('./airport-search.ts');

console.log('=== 测试港澳机场数据 ===');
console.log('HKG存在:', !!globalAirports.HKG);
console.log('HKG数据:', globalAirports.HKG);
console.log('MFM存在:', !!globalAirports.MFM);
console.log('MFM数据:', globalAirports.MFM);

console.log('\n=== 测试搜索中国结果 ===');
const searchResults = searchAirports('中国', 10);
console.log('搜索结果数量:', searchResults.length);
searchResults.forEach((result, index) => {
  console.log(`${index + 1}. ${result.code} - ${result.chinese} (${result.country})`);
});

console.log('\n=== 查找港澳机场 ===');
const hkgInResults = searchResults.find(r => r.code === 'HKG');
const mfmInResults = searchResults.find(r => r.code === 'MFM');
console.log('HKG在搜索结果中:', !!hkgInResults);
console.log('MFM在搜索结果中:', !!mfmInResults);
