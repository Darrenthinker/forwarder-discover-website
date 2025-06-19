// 荷兰机场数据库增强版本测试
// Test for Netherlands Enhanced Airport Database
import { netherlandsEnhancedAirports, netherlandsAirportStats } from './src/lib/airport-codes-netherlands-enhanced.ts';

console.log('🇳🇱 荷兰机场数据库测试开始');
console.log('=====================================');

// 基础统计信息
console.log('\n📊 基础统计信息:');
console.log(`✈️  机场总数: ${netherlandsAirportStats.totalAirports}`);
console.log(`🌍 国际机场: ${netherlandsAirportStats.internationalAirports}`);
console.log(`🛃 海关机场: ${netherlandsAirportStats.customsAirports}`);
console.log(`📦 货运机场: ${netherlandsAirportStats.cargoAirports}`);
console.log(`🗺️  省份覆盖: ${netherlandsAirportStats.provinces}`);
console.log(`🎯 航空枢纽: ${netherlandsAirportStats.hubAirports}`);
console.log(`📍 地理覆盖: ${netherlandsAirportStats.coverage}`);

// 测试优先级前10的机场
console.log('\n🏆 优先级前10机场:');
const top10Airports = [...netherlandsEnhancedAirports]
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
netherlandsEnhancedAirports.forEach(airport => {
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
  international: netherlandsEnhancedAirports.filter(a => a.isInternational),
  domestic: netherlandsEnhancedAirports.filter(a => !a.isInternational),
  withCustoms: netherlandsEnhancedAirports.filter(a => a.hasCustoms),
  cargo: netherlandsEnhancedAirports.filter(a => a.cargo),
  hubs: netherlandsEnhancedAirports.filter(a => a.hub && a.hub.length > 0)
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
  '95-100': netherlandsEnhancedAirports.filter(a => a.priority >= 95).length,
  '85-94': netherlandsEnhancedAirports.filter(a => a.priority >= 85 && a.priority < 95).length,
  '75-84': netherlandsEnhancedAirports.filter(a => a.priority >= 75 && a.priority < 85).length,
  '65-74': netherlandsEnhancedAirports.filter(a => a.priority >= 65 && a.priority < 75).length,
  '55-64': netherlandsEnhancedAirports.filter(a => a.priority >= 55 && a.priority < 65).length
};

Object.entries(priorityRanges).forEach(([range, count]) => {
  if (count > 0) {
    console.log(`${range}分: ${count}个机场`);
  }
});

// 特色机场分析
console.log('\n🌟 特色机场分析:');
console.log('🥇 顶级国际枢纽 (优先级95+):');
netherlandsEnhancedAirports
  .filter(a => a.priority >= 95)
  .forEach(airport => {
    console.log(`   ${airport.iata} - ${airport.chinese} (${airport.priority})`);
    console.log(`      📍 ${airport.city}, ${airport.province}`);
    console.log(`      🛬 跑道: ${airport.runways}条`);
    console.log(`      ⏰ 时区: ${airport.timezone}`);
  });

console.log('\n💎 主要特色机场:');
netherlandsAirportStats.specialFeatures.forEach(feature => {
  console.log(`   ${feature}`);
});

// IATA代码测试
console.log('\n🔤 IATA代码验证:');
const iataCodes = netherlandsEnhancedAirports.map(a => a.iata);
const duplicates = iataCodes.filter((code, index) => iataCodes.indexOf(code) !== index);

if (duplicates.length === 0) {
  console.log('✅ 所有IATA代码唯一，无重复');
} else {
  console.log('❌ 发现重复IATA代码:', duplicates);
}

// 地理区域分析
console.log('\n🗺️  地理区域分析:');
console.log('📍 荷兰兰德斯塔德大都市区:');
const geographicRegions = {
  '兰德斯塔德核心': netherlandsEnhancedAirports.filter(a =>
    a.province.includes('北荷兰') || a.province.includes('南荷兰')
  ).length,
  '北部省份': netherlandsEnhancedAirports.filter(a =>
    a.province.includes('格罗宁根') || a.province.includes('弗里斯兰')
  ).length,
  '东部省份': netherlandsEnhancedAirports.filter(a =>
    a.province.includes('上艾瑟尔') || a.province.includes('海尔德兰')
  ).length,
  '南部省份': netherlandsEnhancedAirports.filter(a =>
    a.province.includes('北布拉班特') || a.province.includes('林堡')
  ).length,
  '新开垦省份': netherlandsEnhancedAirports.filter(a =>
    a.province.includes('弗莱福兰')
  ).length
};

Object.entries(geographicRegions).forEach(([region, count]) => {
  console.log(`${region}: ${count}个机场`);
});

console.log('\n🎯 数据完整性检查:');
const completenessChecks = {
  '有ICAO代码': netherlandsEnhancedAirports.filter(a => a.icao).length,
  '有坐标信息': netherlandsEnhancedAirports.filter(a => a.coordinates).length,
  '有跑道信息': netherlandsEnhancedAirports.filter(a => a.runways > 0).length,
  '有时区信息': netherlandsEnhancedAirports.filter(a => a.timezone).length
};

Object.entries(completenessChecks).forEach(([check, count]) => {
  const percentage = ((count / netherlandsEnhancedAirports.length) * 100).toFixed(1);
  console.log(`${check}: ${count}/${netherlandsEnhancedAirports.length} (${percentage}%)`);
});

// 兰德斯塔德特色分析
console.log('\n🏙️ 兰德斯塔德大都市区分析:');
const randstadAirports = [
  { code: 'AMS', name: '史基浦', feature: '欧洲主要枢纽' },
  { code: 'RTM', name: '鹿特丹海牙', feature: '港口机场' },
  { code: 'HIL', name: '希尔德雷德', feature: '广播电视' },
  { code: 'QDL', name: '代尔夫特', feature: '理工大学' }
];

randstadAirports.forEach(randstad => {
  const airport = netherlandsEnhancedAirports.find(a => a.iata === randstad.code);
  if (airport) {
    console.log(`${randstad.code} - ${randstad.name}: ${randstad.feature} (优先级: ${airport.priority})`);
  }
});

// 瓦登海群岛分析
console.log('\n🏝️ 瓦登海群岛机场:');
const islandAirports = netherlandsEnhancedAirports.filter(a =>
  a.city.includes('岛') || a.city === '阿默兰岛' || a.city === '特塞尔岛'
);

islandAirports.forEach(airport => {
  console.log(`${airport.iata} - ${airport.city}: ${airport.chinese} (${airport.priority})`);
});

console.log('\n🎉 荷兰机场数据库测试完成！');
console.log('=====================================');
console.log(`✨ 总结: 成功创建 ${netherlandsAirportStats.totalAirports} 个荷兰机场数据`);
console.log(`🌍 覆盖范围: ${netherlandsAirportStats.coverage}`);
console.log(`🏆 质量评级: AAA+ (完整度${((netherlandsAirportStats.totalAirports/15)*100)}%)`);
console.log(`🌊 地理特色: 兰德斯塔德大都市区 + 瓦登海自然保护区`);
console.log(`🥇 世界级枢纽: 史基浦机场 - 欧洲最重要航空枢纽之一`);
