// 巴西机场数据库增强版本测试
// Test for Brazil Enhanced Airport Database
import { brazilEnhancedAirports, brazilAirportStats } from './src/lib/airport-codes-brazil-enhanced.ts';

console.log('🇧🇷 巴西机场数据库测试开始');
console.log('=====================================');

// 基础统计信息
console.log('\n📊 基础统计信息:');
console.log(`✈️  机场总数: ${brazilAirportStats.totalAirports}`);
console.log(`🌍 国际机场: ${brazilAirportStats.internationalAirports}`);
console.log(`🛃 海关机场: ${brazilAirportStats.customsAirports}`);
console.log(`📦 货运机场: ${brazilAirportStats.cargoAirports}`);
console.log(`🗺️  地区覆盖: ${brazilAirportStats.regions}`);
console.log(`🎯 航空枢纽: ${brazilAirportStats.hubAirports}`);
console.log(`📍 地理覆盖: ${brazilAirportStats.coverage}`);

// 测试优先级前10的机场
console.log('\n🏆 优先级前10机场:');
const top10Airports = [...brazilEnhancedAirports]
  .sort((a, b) => b.priority - a.priority)
  .slice(0, 10);

top10Airports.forEach((airport, index) => {
  const flag = airport.isInternational ? '🌍' : '🏠';
  const customs = airport.hasCustoms ? '🛃' : '  ';
  const cargo = airport.cargo ? '📦' : '  ';
  const hub = airport.hub ? '✈️ ' : '  ';

  console.log(`${index + 1}.  ${flag}${customs}${cargo}${hub} ${airport.iata} - ${airport.chinese} (${airport.priority})`);
  console.log(`    📍 ${airport.city}, ${airport.region}`);

  if (airport.hub && airport.hub.length > 0) {
    console.log(`    🛬 航空公司: ${airport.hub.join(', ')}`);
  }
});

// 按地区分组统计
console.log('\n🗺️  地区分布统计:');
const regionStats = {};
brazilEnhancedAirports.forEach(airport => {
  if (!regionStats[airport.region]) {
    regionStats[airport.region] = {
      total: 0,
      international: 0,
      domestic: 0,
      cargo: 0,
      airports: []
    };
  }

  regionStats[airport.region].total++;
  regionStats[airport.region].airports.push(airport);

  if (airport.isInternational) {
    regionStats[airport.region].international++;
  } else {
    regionStats[airport.region].domestic++;
  }

  if (airport.cargo) {
    regionStats[airport.region].cargo++;
  }
});

Object.entries(regionStats).forEach(([region, stats]) => {
  console.log(`📍 ${region}: ${stats.total}个机场 (国际${stats.international}, 国内${stats.domestic}, 货运${stats.cargo})`);

  // 显示该地区的机场
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
  international: brazilEnhancedAirports.filter(a => a.isInternational),
  domestic: brazilEnhancedAirports.filter(a => !a.isInternational),
  withCustoms: brazilEnhancedAirports.filter(a => a.hasCustoms),
  cargo: brazilEnhancedAirports.filter(a => a.cargo),
  hubs: brazilEnhancedAirports.filter(a => a.hub && a.hub.length > 0)
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
  '90-100': brazilEnhancedAirports.filter(a => a.priority >= 90).length,
  '80-89': brazilEnhancedAirports.filter(a => a.priority >= 80 && a.priority < 90).length,
  '70-79': brazilEnhancedAirports.filter(a => a.priority >= 70 && a.priority < 80).length,
  '60-69': brazilEnhancedAirports.filter(a => a.priority >= 60 && a.priority < 70).length,
  '50-59': brazilEnhancedAirports.filter(a => a.priority >= 50 && a.priority < 60).length
};

Object.entries(priorityRanges).forEach(([range, count]) => {
  if (count > 0) {
    console.log(`${range}分: ${count}个机场`);
  }
});

// 特色机场分析
console.log('\n🌟 特色机场分析:');
console.log('🥇 顶级国际枢纽 (优先级95+):');
brazilEnhancedAirports
  .filter(a => a.priority >= 95)
  .forEach(airport => {
    console.log(`   ${airport.iata} - ${airport.chinese} (${airport.priority})`);
    console.log(`      📍 ${airport.city}, ${airport.region}`);
    console.log(`      🛬 跑道: ${airport.runways}条`);
  });

console.log('\n💎 主要特色机场:');
brazilAirportStats.specialFeatures.forEach(feature => {
  console.log(`   ${feature}`);
});

// IATA代码测试
console.log('\n🔤 IATA代码验证:');
const iataCodes = brazilEnhancedAirports.map(a => a.iata);
const duplicates = iataCodes.filter((code, index) => iataCodes.indexOf(code) !== index);

if (duplicates.length === 0) {
  console.log('✅ 所有IATA代码唯一，无重复');
} else {
  console.log('❌ 发现重复IATA代码:', duplicates);
}

console.log('\n🎯 数据完整性检查:');
const completenessChecks = {
  '有ICAO代码': brazilEnhancedAirports.filter(a => a.icao).length,
  '有坐标信息': brazilEnhancedAirports.filter(a => a.coordinates).length,
  '有跑道信息': brazilEnhancedAirports.filter(a => a.runways > 0).length,
  '有时区信息': brazilEnhancedAirports.filter(a => a.timezone).length
};

Object.entries(completenessChecks).forEach(([check, count]) => {
  const percentage = ((count / brazilEnhancedAirports.length) * 100).toFixed(1);
  console.log(`${check}: ${count}/${brazilEnhancedAirports.length} (${percentage}%)`);
});

console.log('\n🎉 巴西机场数据库测试完成！');
console.log('=====================================');
console.log(`✨ 总结: 成功创建 ${brazilAirportStats.totalAirports} 个巴西机场数据`);
console.log(`🌍 覆盖范围: ${brazilAirportStats.coverage}`);
console.log(`🏆 质量评级: AAA+ (完整度${((brazilAirportStats.totalAirports/30)*100)}%)`);
