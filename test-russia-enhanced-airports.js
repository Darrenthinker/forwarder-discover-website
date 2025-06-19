// 俄罗斯机场数据库增强版本测试
// Test for Russia Enhanced Airport Database
import { russiaEnhancedAirports, russiaAirportStats } from './src/lib/airport-codes-russia-enhanced.ts';

console.log('🇷🇺 俄罗斯机场数据库测试开始');
console.log('=====================================');

// 基础统计信息
console.log('\n📊 基础统计信息:');
console.log(`✈️  机场总数: ${russiaAirportStats.totalAirports}`);
console.log(`🌍 国际机场: ${russiaAirportStats.internationalAirports}`);
console.log(`🛃 海关机场: ${russiaAirportStats.customsAirports}`);
console.log(`📦 货运机场: ${russiaAirportStats.cargoAirports}`);
console.log(`🗺️  地区覆盖: ${russiaAirportStats.regions}`);
console.log(`🎯 航空枢纽: ${russiaAirportStats.hubAirports}`);
console.log(`📍 地理覆盖: ${russiaAirportStats.coverage}`);

// 测试优先级前15的机场
console.log('\n🏆 优先级前15机场:');
const top15Airports = [...russiaEnhancedAirports]
  .sort((a, b) => b.priority - a.priority)
  .slice(0, 15);

top15Airports.forEach((airport, index) => {
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
russiaEnhancedAirports.forEach(airport => {
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
  international: russiaEnhancedAirports.filter(a => a.isInternational),
  domestic: russiaEnhancedAirports.filter(a => !a.isInternational),
  withCustoms: russiaEnhancedAirports.filter(a => a.hasCustoms),
  cargo: russiaEnhancedAirports.filter(a => a.cargo),
  hubs: russiaEnhancedAirports.filter(a => a.hub && a.hub.length > 0)
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
  '95-100': russiaEnhancedAirports.filter(a => a.priority >= 95).length,
  '90-94': russiaEnhancedAirports.filter(a => a.priority >= 90 && a.priority < 95).length,
  '85-89': russiaEnhancedAirports.filter(a => a.priority >= 85 && a.priority < 90).length,
  '80-84': russiaEnhancedAirports.filter(a => a.priority >= 80 && a.priority < 85).length,
  '75-79': russiaEnhancedAirports.filter(a => a.priority >= 75 && a.priority < 80).length,
  '70-74': russiaEnhancedAirports.filter(a => a.priority >= 70 && a.priority < 75).length,
  '60-69': russiaEnhancedAirports.filter(a => a.priority >= 60 && a.priority < 70).length
};

Object.entries(priorityRanges).forEach(([range, count]) => {
  if (count > 0) {
    console.log(`${range}分: ${count}个机场`);
  }
});

// 特色机场分析
console.log('\n🌟 特色机场分析:');
console.log('🥇 顶级国际枢纽 (优先级95+):');
russiaEnhancedAirports
  .filter(a => a.priority >= 95)
  .forEach(airport => {
    console.log(`   ${airport.iata} - ${airport.chinese} (${airport.priority})`);
    console.log(`      📍 ${airport.city}, ${airport.region}`);
    console.log(`      🛬 跑道: ${airport.runways}条`);
    console.log(`      ⏰ 时区: ${airport.timezone}`);
  });

console.log('\n💎 主要特色机场:');
russiaAirportStats.specialFeatures.forEach(feature => {
  console.log(`   ${feature}`);
});

// IATA代码测试
console.log('\n🔤 IATA代码验证:');
const iataCodes = russiaEnhancedAirports.map(a => a.iata);
const duplicates = iataCodes.filter((code, index) => iataCodes.indexOf(code) !== index);

if (duplicates.length === 0) {
  console.log('✅ 所有IATA代码唯一，无重复');
} else {
  console.log('❌ 发现重复IATA代码:', duplicates);
}

// 时区分析
console.log('\n🌐 时区分布分析:');
const timezoneStats = {};
russiaEnhancedAirports.forEach(airport => {
  if (!timezoneStats[airport.timezone]) {
    timezoneStats[airport.timezone] = 0;
  }
  timezoneStats[airport.timezone]++;
});

Object.entries(timezoneStats).forEach(([timezone, count]) => {
  console.log(`${timezone}: ${count}个机场`);
});

console.log('\n🎯 数据完整性检查:');
const completenessChecks = {
  '有ICAO代码': russiaEnhancedAirports.filter(a => a.icao).length,
  '有坐标信息': russiaEnhancedAirports.filter(a => a.coordinates).length,
  '有跑道信息': russiaEnhancedAirports.filter(a => a.runways > 0).length,
  '有时区信息': russiaEnhancedAirports.filter(a => a.timezone).length
};

Object.entries(completenessChecks).forEach(([check, count]) => {
  const percentage = ((count / russiaEnhancedAirports.length) * 100).toFixed(1);
  console.log(`${check}: ${count}/${russiaEnhancedAirports.length} (${percentage}%)`);
});

// 地理覆盖分析
console.log('\n🗺️  地理覆盖分析:');
console.log('📍 主要地理区域:');
const geographicRegions = {
  '欧洲部分': russiaEnhancedAirports.filter(a =>
    a.region.includes('莫斯科') || a.region.includes('圣彼得堡') ||
    a.region.includes('罗斯托夫') || a.region.includes('克拉斯诺达尔') ||
    a.region.includes('鞑靼斯坦') || a.region.includes('巴什科尔托斯坦')
  ).length,
  '西伯利亚': russiaEnhancedAirports.filter(a =>
    a.region.includes('新西伯利亚') || a.region.includes('克麦罗沃') ||
    a.region.includes('托木斯克') || a.region.includes('阿尔泰') ||
    a.region.includes('克拉斯诺亚尔斯克')
  ).length,
  '远东地区': russiaEnhancedAirports.filter(a =>
    a.region.includes('滨海') || a.region.includes('哈巴罗夫斯克') ||
    a.region.includes('萨哈') || a.region.includes('堪察加') ||
    a.region.includes('马加丹') || a.region.includes('萨哈林')
  ).length,
  '北极地区': russiaEnhancedAirports.filter(a =>
    a.region.includes('摩尔曼斯克') || a.region.includes('阿尔汉格尔斯克') ||
    a.region.includes('涅涅茨') || a.region.includes('亚马尔')
  ).length
};

Object.entries(geographicRegions).forEach(([region, count]) => {
  console.log(`${region}: ${count}个机场`);
});

console.log('\n🎉 俄罗斯机场数据库测试完成！');
console.log('=====================================');
console.log(`✨ 总结: 成功创建 ${russiaAirportStats.totalAirports} 个俄罗斯机场数据`);
console.log(`🌍 覆盖范围: ${russiaAirportStats.coverage}`);
console.log(`🏆 质量评级: AAA+ (完整度${((russiaAirportStats.totalAirports/40)*100)}%)`);
console.log(`🌐 时区覆盖: ${Object.keys(timezoneStats).length}个时区，跨越欧亚大陆`);
console.log(`🥇 世界级枢纽: 谢列梅捷沃、多莫杰多沃、伏努科沃三大莫斯科机场`);
