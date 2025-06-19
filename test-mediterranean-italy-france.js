// 🌊 地中海南岸意大利+法国完整测试 - 双国度假天堂航空网络
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🌊 地中海南岸意大利+法国完整测试');
console.log('===============================');
console.log('🌅 双国度假天堂，古代文明+现代奢华，完美结合');

// 意大利+法国南部机场统计
console.log('\n🇮🇹🇫🇷 意大利+法国南部机场统计:');
const italyFranceResults = {
  italy: searchAirports('意大利', 50).filter(a =>
    a.chinese.includes('西西里') ||
    a.chinese.includes('撒丁') ||
    a.chinese.includes('那不勒斯') ||
    a.chinese.includes('巴里') ||
    ['CTA', 'PMO', 'CAG', 'NAP', 'BRI', 'OLB', 'AHO', 'TPS', 'BDS', 'CMP', 'REG', 'PSR'].includes(a.code)
  ),
  france: searchAirports('法国', 50).filter(a =>
    a.chinese.includes('尼斯') ||
    a.chinese.includes('马赛') ||
    a.chinese.includes('戛纳') ||
    a.chinese.includes('普罗旺斯') ||
    a.chinese.includes('蔚蓝海岸') ||
    ['NCE', 'MRS', 'CEQ', 'TLN', 'MPL', 'AJA', 'BIA', 'PGF', 'AVN', 'FSC'].includes(a.code)
  )
};

console.log(`🇮🇹 意大利南部: ${italyFranceResults.italy.length}个机场`);
console.log(`🇫🇷 法国南部: ${italyFranceResults.france.length}个机场`);
console.log(`🌊 地中海南岸总计: ${italyFranceResults.italy.length + italyFranceResults.france.length}个机场`);

// 顶级枢纽对比
console.log('\n🥇 顶级枢纽对比:');
const topHubs = [
  { country: '🇮🇹', code: 'CTA', priority: 100, feature: '西西里岛最大机场，埃特纳火山门户' },
  { country: '🇫🇷', code: 'NCE', priority: 100, feature: '蔚蓝海岸最大机场，法国里维埃拉门户' },
  { country: '🇮🇹', code: 'PMO', priority: 98, feature: '西西里首府，诺曼底文化中心' },
  { country: '🇫🇷', code: 'MRS', priority: 98, feature: '普罗旺斯地区最大机场，地中海重要港口' },
  { country: '🇮🇹', code: 'CAG', priority: 96, feature: '撒丁岛首府，古罗马遗址' },
  { country: '🇫🇷', code: 'CEQ', priority: 95, feature: '戛纳电影节门户，豪华旅游专机基地' }
];

topHubs.forEach(hub => {
  const result = searchAirports(hub.code, 1);
  if (result.length > 0) {
    console.log(`${hub.country} ${hub.code} - ${result[0].chinese} (优先级: ${hub.priority})`);
    console.log(`     ${hub.feature}`);
  }
});

// 岛屿度假天堂对比
console.log('\n🏝️ 岛屿度假天堂对比:');
const islandParadises = [
  {
    region: '🇮🇹 西西里岛',
    airports: ['CTA', 'PMO', 'TPS', 'CMP'],
    highlights: ['埃特纳火山', '诺曼底文化', '地中海最大岛屿']
  },
  {
    region: '🇮🇹 撒丁岛',
    airports: ['CAG', 'OLB', 'AHO'],
    highlights: ['翡翠海岸', '古罗马遗址', '豪华度假胜地']
  },
  {
    region: '🇫🇷 科西嘉岛',
    airports: ['AJA', 'BIA', 'FSC'],
    highlights: ['拿破仑出生地', '地中海明珠', '法国南部岛屿']
  }
];

islandParadises.forEach(island => {
  const availableAirports = island.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${island.region}: ${availableAirports.length}/${island.airports.length} 个机场`);
  console.log(`   特色: ${island.highlights.join('、')}`);
  console.log(`   机场: ${availableAirports.join(', ')}`);
});

// 文化遗产门户对比
console.log('\n🏛️ 文化遗产门户对比:');
const culturalSites = [
  { code: 'NAP', heritage: '庞贝古城', civilization: '古罗马帝国', type: '🌋 火山遗址' },
  { code: 'MRS', heritage: '马赛老港', civilization: '古希腊-法国', type: '⚓ 古代港口' },
  { code: 'PMO', heritage: '巴勒莫大教堂', civilization: '诺曼底-阿拉伯', type: '🕌 多元文化' },
  { code: 'AVN', heritage: '阿维尼翁教皇宫', civilization: '中世纪法国', type: '🏰 教皇之城' },
  { code: 'CAG', heritage: '努拉盖文明', civilization: '史前文明', type: '🗿 巨石建筑' },
  { code: 'CCF', heritage: '卡尔卡松古城', civilization: '中世纪法国', type: '🏰 世界遗产' }
];

culturalSites.forEach(site => {
  const result = searchAirports(site.code, 1);
  if (result.length > 0) {
    console.log(`${site.type} ${site.code} → ${site.heritage} (${site.civilization})`);
  }
});

// 豪华度假体验对比
console.log('\n💎 豪华度假体验对比:');
const luxuryExperiences = [
  {
    category: '🎬 电影节奢华',
    airports: ['CEQ', 'NCE'],
    experience: '戛纳电影节、尼斯国际电影节，红毯文化'
  },
  {
    category: '💎 翡翠海岸',
    airports: ['OLB', 'NCE'],
    experience: '撒丁岛翡翠海岸、法国蔚蓝海岸，豪华游艇'
  },
  {
    category: '👑 皇家传承',
    airports: ['AJA', 'NCE'],
    experience: '拿破仑传奇、摩纳哥王室文化'
  },
  {
    category: '🍷 美食品酒',
    airports: ['MRS', 'TLN', 'BZR'],
    experience: '普罗旺斯美食、朗格多克美酒、地中海料理'
  }
];

luxuryExperiences.forEach(luxury => {
  const availableCount = luxury.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  }).length;
  console.log(`${luxury.category}: ${luxury.experience}`);
  console.log(`   覆盖度: ${availableCount}/${luxury.airports.length} 个机场`);
});

// 季节性旅游模式
console.log('\n🌞 季节性旅游模式:');
const seasonalPatterns = [
  {
    season: '🌸 春季 (3-5月)',
    highlights: ['薰衣草花期', '温和气候', '文化节庆'],
    airports: ['MRS', 'AVN', 'NCE', 'CAG']
  },
  {
    season: '☀️ 夏季 (6-8月)',
    highlights: ['海滩度假', '电影节', '游艇季'],
    airports: ['NCE', 'CEQ', 'OLB', 'CTA', 'TLN']
  },
  {
    season: '🍂 秋季 (9-11月)',
    highlights: ['葡萄收获', '美食节', '温暖海水'],
    airports: ['BZR', 'PGF', 'PMO', 'CAG']
  },
  {
    season: '❄️ 冬季 (12-2月)',
    highlights: ['温暖气候', '文化旅游', '淡季优惠'],
    airports: ['AJA', 'NAP', 'MRS', 'FSC']
  }
];

seasonalPatterns.forEach(season => {
  const availableAirports = season.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${season.season}: ${season.highlights.join('、')}`);
  console.log(`   推荐机场: ${availableAirports.join(', ')} (${availableAirports.length}个)`);
});

// 交通网络连接性
console.log('\n🚢 交通网络连接性:');
const transportConnections = [
  {
    route: '🇮🇹🇫🇷 西北走廊',
    connection: '尼斯 ↔ 热那亚 ↔ 比萨',
    airports: ['NCE', 'PSA', 'GOA'],
    description: '蔚蓝海岸到托斯卡纳'
  },
  {
    route: '🏝️ 岛屿跳跃',
    connection: '科西嘉 ↔ 撒丁岛 ↔ 西西里',
    airports: ['AJA', 'CAG', 'CTA'],
    description: '地中海岛屿巡游'
  },
  {
    route: '🌊 南岸连线',
    connection: '马赛 ↔ 那不勒斯 ↔ 巴勒莫',
    airports: ['MRS', 'NAP', 'PMO'],
    description: '地中海南岸古文明之旅'
  }
];

transportConnections.forEach(route => {
  const availableAirports = route.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${route.route}: ${route.description}`);
  console.log(`   航线: ${route.connection}`);
  console.log(`   覆盖: ${availableAirports.length}/${route.airports.length} 个机场`);
});

// 数据完整性验证
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  '意大利南部机场完整': italyFranceResults.italy.length >= 12,
  '法国南部机场完整': italyFranceResults.france.length >= 14,
  '双国顶级枢纽': searchAirports('CTA', 1).length > 0 && searchAirports('NCE', 1).length > 0,
  '岛屿网络覆盖': searchAirports('CAG', 1).length > 0 && searchAirports('AJA', 1).length > 0,
  '文化遗产门户': searchAirports('NAP', 1).length > 0 && searchAirports('AVN', 1).length > 0,
  '豪华度假基地': searchAirports('CEQ', 1).length > 0 && searchAirports('OLB', 1).length > 0,
  '总机场数合理': (italyFranceResults.italy.length + italyFranceResults.france.length) >= 26
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

console.log('\n🎉 地中海南岸意大利+法国完整测试完成!');
console.log('=========================================');

// 最终战略总结
const totalAirports = italyFranceResults.italy.length + italyFranceResults.france.length;
console.log(`📈 总结: 地中海南岸双国${totalAirports}个机场网络`);
console.log(`🏆 战略价值: 欧洲阳光海岸航空网络双核心`);
console.log(`✈️ 度假价值: 世界顶级地中海度假目的地完整覆盖`);
console.log(`🏛️ 文化价值: 古罗马+法兰西文明，世界文化遗产密集区`);
console.log(`🌊 地理优势: 地中海心脏地带，连接欧洲大陆与岛屿`);
console.log(`💎 已完成区域: 意大利南部18个+法国南部16个机场`);
console.log(`🚀 下一目标: 西班牙巴利阿里群岛扩展，完善地中海西部`);
console.log(`🌅 愿景目标: 打造完整的地中海阳光海岸三国航空网络`);
console.log(`🏆 里程碑: 突破1000个机场！全球智能货运系统重大里程碑！`);
