// 测试精确匹配修复效果
import { findAirportByCode } from './src/lib/airport-search.ts';

console.log('=== 测试精确匹配功能 ===');

// 测试JFK
console.log('\n🔍 测试 JFK:');
const jfk = findAirportByCode('JFK');
console.log('JFK 结果:', jfk ? `${jfk.code} - ${jfk.chinese}` : '未找到');

// 测试NRT
console.log('\n🔍 测试 NRT:');
const nrt = findAirportByCode('NRT');
console.log('NRT 结果:', nrt ? `${nrt.code} - ${nrt.chinese}` : '未找到');

// 测试利比亚机场
console.log('\n=== 测试利比亚机场 ===');
const libyanAirports = ['TIP', 'BEN', 'MJI', 'MRA', 'SEB'];

libyanAirports.forEach(code => {
  const result = findAirportByCode(code);
  console.log(`${code}:`, result ? `${result.chinese} - ${result.english}` : '❌ 未找到');
});

console.log('\n✅ 测试完成！'); 