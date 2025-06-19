// 验证实际航空公司数量
import { getAirlineStatistics } from './src/lib/airline-search';

console.log('🔍 验证实际航空公司数量\n');

const stats = getAirlineStatistics();

console.log('📊 实际统计结果：');
console.log(`  总数量: ${stats.total} 家`);
console.log(`  活跃航司: ${stats.active} 家`);
console.log(`  停运航司: ${stats.inactive} 家`);

console.log('\n🌍 按国家分布（完整列表）：');
const sortedCountries = Object.entries(stats.byCountry)
  .sort(([,a], [,b]) => b - a);

let totalByCountries = 0;
sortedCountries.forEach(([country, count], index) => {
  console.log(`  ${index + 1}. ${country}: ${count} 家`);
  totalByCountries += count;
});

console.log(`\n✅ 国家统计总计: ${totalByCountries} 家`);
console.log(`✅ 函数统计总计: ${stats.total} 家`);

if (totalByCountries === stats.total) {
  console.log('🎯 数据一致性验证通过！');
} else {
  console.log('❌ 数据不一致，需要检查统计函数');
}

console.log('\n📋 结论：');
if (stats.total === 220) {
  console.log('  当前实际有 220 家航空公司，不是360家');
  console.log('  之前在 .same/todos.md 中的360家记录可能有误');
  console.log('  需要更新相关文档以反映正确数量');
} else {
  console.log(`  实际数量为 ${stats.total} 家`);
}

console.log('\n🎯 IATA覆盖率：');
console.log(`  当前: ${stats.total} 家`);
console.log(`  IATA总数: 约360家`);
console.log(`  覆盖率: ${((stats.total / 360) * 100).toFixed(1)}%`);
console.log(`  剩余空间: ${360 - stats.total} 家`);

console.log('\n🔍 验证完成！');
