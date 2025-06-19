// 统计航空公司数据库数量
import { getAirlineStatistics } from './src/lib/airline-search';

console.log('📊 航空公司数据库统计报告\n');

const stats = getAirlineStatistics();

console.log('🎯 总体统计：');
console.log(`  总航空公司数量: ${stats.total} 家`);
console.log(`  活跃航空公司: ${stats.active} 家`);
console.log(`  已停运航空公司: ${stats.inactive} 家`);

console.log('\n🏢 按类型分类：');
Object.entries(stats.byType).forEach(([type, count]) => {
  const typeLabels: Record<string, string> = {
    'FSC': '全服务航空',
    'LCC': '低成本航空',
    'Regional': '区域航空',
    'Cargo': '货运航空',
    'Charter': '包机航空'
  };
  console.log(`  ${typeLabels[type] || type}: ${count} 家`);
});

console.log('\n🤝 按联盟分类：');
Object.entries(stats.byAlliance).forEach(([alliance, count]) => {
  console.log(`  ${alliance}: ${count} 家`);
});

console.log('\n🌍 按国家分类（前20名）：');
const sortedCountries = Object.entries(stats.byCountry)
  .sort(([,a], [,b]) => b - a)
  .slice(0, 20);

sortedCountries.forEach(([country, count], index) => {
  console.log(`  ${index + 1}. ${country}: ${count} 家`);
});

console.log('\n🏆 IATA成员覆盖率分析：');
console.log(`  数据库航空公司总数: ${stats.total} 家`);
console.log(`  IATA成员总数: 约360家`);
console.log(`  覆盖率: ${((stats.total / 360) * 100).toFixed(1)}%`);

if (stats.total >= 360) {
  console.log('  🎉 已达到100% IATA成员覆盖率！');
} else {
  console.log(`  📈 还需要增加: ${360 - stats.total} 家航空公司`);
}

console.log('\n✅ 统计完成！');
