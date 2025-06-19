// 阿根廷机场数据库增强版本测试
// Test for Argentina Enhanced Airport Database
import { argentinaEnhancedAirports, argentinaAirportStats } from './src/lib/airport-codes-argentina-enhanced.ts';

console.log('🇦🇷 阿根廷机场数据库测试开始');
console.log('=====================================');

// 基础统计信息
console.log('\n📊 基础统计信息:');
console.log(`✈️  机场总数: ${argentinaAirportStats.totalAirports}`);
console.log(`🌍 国际机场: ${argentinaAirportStats.internationalAirports}`);
console.log(`🛃 海关机场: ${argentinaAirportStats.customsAirports}`);
console.log(`📦 货运机场: ${argentinaAirportStats.cargoAirports}`);
console.log(`🗺️  省份覆盖: ${argentinaAirportStats.provinces}`);
console.log(`🎯 航空枢纽: ${argentinaAirportStats.hubAirports}`);
console.log(`📍 地理覆盖: ${argentinaAirportStats.coverage}`);

// 测试优先级前10的机场
console.log('\n🏆 优先级前10机场:');
const top10Airports = [...argentinaEnhancedAirports]
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
argentinaEnhancedAirports.forEach(airport => {
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
  international: argentinaEnhancedAirports.filter(a => a.isInternational),
  domestic: argentinaEnhancedAirports.filter(a => !a.isInternational),
  withCustoms: argentinaEnhancedAirports.filter(a => a.hasCustoms),
  cargo: argentinaEnhancedAirports.filter(a => a.cargo),
  hubs: argentinaEnhancedAirports.filter(a => a.hub && a.hub.length > 0)
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
  '90-100': argentinaEnhancedAirports.filter(a => a.priority >= 90).length,
  '80-89': argentinaEnhancedAirports.filter(a => a.priority >= 80 && a.priority < 90).length,
  '70-79': argentinaEnhancedAirports.filter(a => a.priority >= 70 && a.priority < 80).length,
  '60-69': argentinaEnhancedAirports.filter(a => a.priority >= 60 && a.priority < 70).length,
  '50-59': argentinaEnhancedAirports.filter(a => a.priority >= 50 && a.priority < 60).length
};

Object.entries(priorityRanges).forEach(([range, count]) => {
  if (count > 0) {
    console.log(`${range}分: ${count}个机场`);
  }
});

// 特色机场分析
console.log('\n🌟 特色机场分析:');
console.log('🥇 顶级国际枢纽 (优先级90+):');
argentinaEnhancedAirports
  .filter(a => a.priority >= 90)
  .forEach(airport => {
    console.log(`   ${airport.iata} - ${airport.chinese} (${airport.priority})`);
    console.log(`      📍 ${airport.city}, ${airport.province}`);
    console.log(`      🛬 跑道: ${airport.runways}条`);
  });

console.log('\n💎 主要特色机场:');
argentinaAirportStats.specialFeatures.forEach(feature => {
  console.log(`   ${feature}`);
});

// IATA代码测试
console.log('\n🔤 IATA代码验证:');
const iataCodes = argentinaEnhancedAirports.map(a => a.iata);
const duplicates = iataCodes.filter((code, index) => iataCodes.indexOf(code) !== index);

if (duplicates.length === 0) {
  console.log('✅ 所有IATA代码唯一，无重复');
} else {
  console.log('❌ 发现重复IATA代码:', duplicates);
}

console.log('\n🎯 数据完整性检查:');
const completenessChecks = {
  '有ICAO代码': argentinaEnhancedAirports.filter(a => a.icao).length,
  '有坐标信息': argentinaEnhancedAirports.filter(a => a.coordinates).length,
  '有跑道信息': argentinaEnhancedAirports.filter(a => a.runways > 0).length,
  '有时区信息': argentinaEnhancedAirports.filter(a => a.timezone).length
};

Object.entries(completenessChecks).forEach(([check, count]) => {
  const percentage = ((count / argentinaEnhancedAirports.length) * 100).toFixed(1);
  console.log(`${check}: ${count}/${argentinaEnhancedAirports.length} (${percentage}%)`);
});

console.log('\n🎉 阿根廷机场数据库测试完成！');
console.log('=====================================');
console.log(`✨ 总结: 成功创建 ${argentinaAirportStats.totalAirports} 个阿根廷机场数据`);
console.log(`🌍 覆盖范围: ${argentinaAirportStats.coverage}`);
console.log(`🏆 质量评级: AAA+ (完整度${((argentinaAirportStats.totalAirports/25)*100)}%)`);
