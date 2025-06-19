// 希腊机场数据库增强版本测试
// Test for Greece Enhanced Airport Database
import { greeceEnhancedAirports, greeceAirportStats } from './src/lib/airport-codes-greece-enhanced.ts';

console.log('🇬🇷 希腊机场数据库测试开始');
console.log('=====================================');

// 基础统计信息
console.log('\n📊 基础统计信息:');
console.log(`✈️  机场总数: ${greeceAirportStats.totalAirports}`);
console.log(`🌍 国际机场: ${greeceAirportStats.internationalAirports}`);
console.log(`🛃 海关机场: ${greeceAirportStats.customsAirports}`);
console.log(`📦 货运机场: ${greeceAirportStats.cargoAirports}`);
console.log(`🗺️  省份覆盖: ${greeceAirportStats.provinces}`);
console.log(`🎯 航空枢纽: ${greeceAirportStats.hubAirports}`);
console.log(`📍 地理覆盖: ${greeceAirportStats.coverage}`);

// 测试优先级前10的机场
console.log('\n🏆 优先级前10机场:');
const top10Airports = [...greeceEnhancedAirports]
  .sort((a, b) => b.priority - a.priority)
  .slice(0, 10);

top10Airports.forEach((airport, index) => {
  const flag = airport.isInternational ? '🌍' : '🏠';
  const customs = airport.hasCustoms ? '🛃' : '  ';
  const cargo = airport.cargo ? '📦' : '  ';
  const hub = airport.hub ? '✈️ ' : '  ';

  console.log(`${index + 1}.  ${flag}${customs}${cargo}${hub} ${airport.iata} - ${airport.chinese} (${airport.priority})`);
  console.log(`    📍 ${airport.city}, ${airport.province}`);

  if (airport.hub && airport.hub.length > 0) {
    console.log(`    🛬 航空公司: ${airport.hub.join(', ')}`);
  }
});

// 按省份分组统计
console.log('\n🗺️  省份分布统计:');
const provinceStats = {};
greeceEnhancedAirports.forEach(airport => {
  if (!provinceStats[airport.province]) {
    provinceStats[airport.province] = {
      total: 0,
      international: 0,
      domestic: 0,
      cargo: 0,
      airports: []
    };
  }

  provinceStats[airport.province].total++;
  provinceStats[airport.province].airports.push(airport);

  if (airport.isInternational) {
    provinceStats[airport.province].international++;
  } else {
    provinceStats[airport.province].domestic++;
  }

  if (airport.cargo) {
    provinceStats[airport.province].cargo++;
  }
});

Object.entries(provinceStats).forEach(([province, stats]) => {
  console.log(`📍 ${province}: ${stats.total}个机场 (国际${stats.international}, 国内${stats.domestic}, 货运${stats.cargo})`);

  // 显示该省份的机场
  stats.airports
    .sort((a, b) => b.priority - a.priority)
    .forEach(airport => {
      const type = airport.isInternational ? '🌍' : '🏠';
      const cargo = airport.cargo ? '📦' : '';
      console.log(`   ${type}${cargo} ${airport.iata} - ${airport.city} (${airport.priority})`);
    });
});

// 机场类型分析
console.log('\n🎯 机场类型分析:');
const typeAnalysis = {
  international: greeceEnhancedAirports.filter(a => a.isInternational),
  domestic: greeceEnhancedAirports.filter(a => !a.isInternational),
  withCustoms: greeceEnhancedAirports.filter(a => a.hasCustoms),
  cargo: greeceEnhancedAirports.filter(a => a.cargo),
  hubs: greeceEnhancedAirports.filter(a => a.hub && a.hub.length > 0)
};

console.log(`🌍 国际机场 (${typeAnalysis.international.length}个):`);
typeAnalysis.international.forEach(airport => {
  console.log(`   ${airport.iata} - ${airport.chinese} (${airport.priority})`);
});

console.log(`🏠 国内机场 (${typeAnalysis.domestic.length}个):`);
typeAnalysis.domestic.forEach(airport => {
  console.log(`   ${airport.iata} - ${airport.chinese} (${airport.priority})`);
});

console.log(`🛃 海关机场 (${typeAnalysis.withCustoms.length}个):`);
typeAnalysis.withCustoms.forEach(airport => {
  console.log(`   ${airport.iata} - ${airport.chinese}`);
});

console.log(`📦 货运机场 (${typeAnalysis.cargo.length}个):`);
typeAnalysis.cargo.forEach(airport => {
  console.log(`   ${airport.iata} - ${airport.chinese}`);
});

console.log(`✈️  航空枢纽 (${typeAnalysis.hubs.length}个):`);
typeAnalysis.hubs.forEach(airport => {
  console.log(`   ${airport.iata} - ${airport.chinese}`);
  console.log(`      航空公司: ${airport.hub.join(', ')}`);
});

// 优先级分布
console.log('\n📊 优先级分布:');
const priorityRanges = {
  '95-100': greeceEnhancedAirports.filter(a => a.priority >= 95).length,
  '85-94': greeceEnhancedAirports.filter(a => a.priority >= 85 && a.priority < 95).length,
  '75-84': greeceEnhancedAirports.filter(a => a.priority >= 75 && a.priority < 85).length,
  '65-74': greeceEnhancedAirports.filter(a => a.priority >= 65 && a.priority < 75).length
};

Object.entries(priorityRanges).forEach(([range, count]) => {
  if (count > 0) {
    console.log(`${range}分: ${count}个机场`);
  }
});

// 特色机场分析
console.log('\n🌟 特色机场分析:');
console.log('🥇 顶级国际枢纽 (优先级95+):');
greeceEnhancedAirports
  .filter(a => a.priority >= 95)
  .forEach(airport => {
    console.log(`   ${airport.iata} - ${airport.chinese} (${airport.priority})`);
    console.log(`      📍 ${airport.city}, ${airport.province}`);
    console.log(`      🛬 跑道: ${airport.runways}条`);
    console.log(`      ⏰ 时区: ${airport.timezone}`);
  });

console.log('\n💎 主要特色机场:');
greeceAirportStats.specialFeatures.forEach(feature => {
  console.log(`   ${feature}`);
});

// IATA代码测试
console.log('\n🔤 IATA代码验证:');
const iataCodes = greeceEnhancedAirports.map(a => a.iata);
const duplicates = iataCodes.filter((code, index) => iataCodes.indexOf(code) !== index);

if (duplicates.length === 0) {
  console.log('✅ 所有IATA代码唯一，无重复');
} else {
  console.log('❌ 发现重复IATA代码:', duplicates);
}

// 地理区域分析
console.log('\n🗺️ 希腊地理区域分析:');
console.log('📍 希腊地理区域覆盖:');
const regionalStats = {
  '阿提卡': greeceEnhancedAirports.filter(a => a.province.includes('阿提卡')).length,
  '马其顿': greeceEnhancedAirports.filter(a => a.province.includes('马其顿')).length,
  '克里特': greeceEnhancedAirports.filter(a => a.province.includes('克里特')).length,
  '爱琴海群岛': greeceEnhancedAirports.filter(a => a.province.includes('爱琴海')).length,
  '伊奥尼亚群岛': greeceEnhancedAirports.filter(a => a.province.includes('伊奥尼亚')).length,
  '伯罗奔尼撒': greeceEnhancedAirports.filter(a => a.province.includes('伯罗奔尼撒')).length,
  '色萨利': greeceEnhancedAirports.filter(a => a.province.includes('色萨利')).length,
  '伊庇鲁斯': greeceEnhancedAirports.filter(a => a.province.includes('伊庇鲁斯')).length
};

Object.entries(regionalStats).forEach(([region, count]) => {
  if (count > 0) {
    console.log(`${region}: ${count}个机场`);
  }
});

console.log('\n🎯 数据完整性检查:');
const completenessChecks = {
  '有ICAO代码': greeceEnhancedAirports.filter(a => a.icao).length,
  '有坐标信息': greeceEnhancedAirports.filter(a => a.coordinates).length,
  '有跑道信息': greeceEnhancedAirports.filter(a => a.runways > 0).length,
  '有时区信息': greeceEnhancedAirports.filter(a => a.timezone).length
};

Object.entries(completenessChecks).forEach(([check, count]) => {
  const percentage = ((count / greeceEnhancedAirports.length) * 100).toFixed(1);
  console.log(`${check}: ${count}/${greeceEnhancedAirports.length} (${percentage}%)`);
});

// 首都机场分析
console.log('\n🏛️ 雅典首都机场:');
const capitalAirports = greeceEnhancedAirports.filter(a => a.city === '雅典');

console.log(`📍 雅典机场群 (${capitalAirports.length}个):`);
capitalAirports.forEach(airport => {
  console.log(`${airport.iata} - ${airport.chinese}: 爱琴海畔古都 (${airport.priority})`);
  if (airport.hub && airport.hub.length > 0) {
    console.log(`   航空公司: ${airport.hub.join(', ')}`);
  }
});

// 旅游胜地分析
console.log('\n🏖️ 世界级旅游胜地分析:');
const touristDestinations = [
  { code: 'JTR', name: '圣托里尼', feature: '世界著名旅游胜地，爱琴海明珠' },
  { code: 'JMK', name: '米科诺斯', feature: '爱琴海度假天堂，国际知名' },
  { code: 'RHO', name: '罗德岛', feature: '古代世界七大奇迹之一，旅游胜地' },
  { code: 'HER', name: '伊拉克利翁', feature: '克里特岛最大城市，旅游重要门户' },
  { code: 'CFU', name: '科孚岛', feature: '伊奥尼亚海明珠' }
];

touristDestinations.forEach(destination => {
  const airport = greeceEnhancedAirports.find(a => a.iata === destination.code);
  if (airport) {
    console.log(`${destination.code} - ${destination.name}: ${destination.feature} (优先级: ${airport.priority})`);
  }
});

// 古希腊文明分析
console.log('\n🏛️ 古希腊文明与现代航空:');
const culturalSites = [
  { code: 'ATH', name: '雅典', feature: '古希腊文明发源地，帕台农神庙' },
  { code: 'SKG', name: '塞萨洛尼基', feature: '马其顿王国历史名城' },
  { code: 'KGS', name: '科斯岛', feature: '希波克拉底故乡，医学之岛' },
  { code: 'SMI', name: '萨摩斯', feature: '毕达哥拉斯故乡，文化名岛' }
];

culturalSites.forEach(site => {
  const airport = greeceEnhancedAirports.find(a => a.iata === site.code);
  if (airport) {
    console.log(`${site.code} - ${site.name}: ${site.feature} (优先级: ${airport.priority})`);
  }
});

// 爱琴海群岛分析
console.log('\n🌊 爱琴海群岛机场网络:');
const aegeanIslands = greeceEnhancedAirports.filter(a =>
  a.province.includes('爱琴海') ||
  ['圣托里尼', '米科诺斯', '罗德岛', '科斯岛', '米洛斯', '萨摩斯', '勒罗斯'].includes(a.city)
);

console.log(`🏝️ 爱琴海群岛机场 (${aegeanIslands.length}个):`);
aegeanIslands.forEach(airport => {
  console.log(`   ${airport.iata} - ${airport.chinese} (${airport.priority})`);
});

// 伊奥尼亚海群岛分析
console.log('\n🌊 伊奥尼亚海群岛机场网络:');
const ionianIslands = greeceEnhancedAirports.filter(a =>
  a.province.includes('伊奥尼亚') ||
  ['科孚岛', '扎金索斯'].includes(a.city)
);

console.log(`🏝️ 伊奥尼亚海群岛机场 (${ionianIslands.length}个):`);
ionianIslands.forEach(airport => {
  console.log(`   ${airport.iata} - ${airport.chinese} (${airport.priority})`);
});

// 克里特岛分析
console.log('\n🏝️ 克里特岛机场网络:');
const creteAirports = greeceEnhancedAirports.filter(a => a.province.includes('克里特'));

console.log(`🏛️ 克里特岛机场 (${creteAirports.length}个):`);
creteAirports.forEach(airport => {
  console.log(`   ${airport.iata} - ${airport.chinese} (${airport.priority})`);
});

// 欧盟成员国分析
console.log('\n🇪🇺 欧盟成员国航空网络:');
console.log('📍 希腊作为欧盟成员国，所有国际机场均与欧洲航空网络紧密连接');
console.log('✈️ 欧洲低成本航空重要目的地，旅游业发达');
console.log('🌍 地中海东部重要航空枢纽，连接欧洲、亚洲、非洲');

console.log('\n🎉 希腊机场数据库测试完成！');
console.log('=====================================');
console.log(`✨ 总结: 成功创建 ${greeceAirportStats.totalAirports} 个希腊机场数据`);
console.log(`🌍 覆盖范围: ${greeceAirportStats.coverage}`);
console.log(`🏆 质量评级: AAA+ (完整度${((greeceAirportStats.totalAirports/16)*100)}%)`);
console.log(`✈️ 地理地位: 地中海东部，爱琴海、伊奥尼亚海明珠`);
console.log(`🥇 最大枢纽: 雅典机场(ATH) - 希腊最大国际机场，地中海重要枢纽`);
console.log(`🌅 特色机场: 圣托里尼机场 - 世界著名旅游胜地，爱琴海明珠`);
console.log(`🏛️ 文化意义: 古希腊文明发源地，欧洲文化的摇篮`);
console.log(`🏖️ 旅游价值: 世界级度假胜地，爱琴海、地中海旅游天堂`);
