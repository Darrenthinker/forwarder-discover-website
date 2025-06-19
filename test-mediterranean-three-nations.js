// 🌊 地中海南岸三国完整测试 - 意大利+法国+西班牙度假天堂航空网络
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🌊 地中海南岸三国完整测试');
console.log('==========================');
console.log('🌅 欧洲阳光海岸三国联盟，古代文明+现代奢华+派对文化');

// 地中海南岸三国完整统计
console.log('\n🇮🇹🇫🇷🇪🇸 地中海南岸三国机场统计:');
const mediterraneanResults = {
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
    a.chinese.includes('科西嘉') ||
    ['NCE', 'MRS', 'CEQ', 'TLN', 'MPL', 'AJA', 'BIA', 'PGF', 'AVN', 'FSC'].includes(a.code)
  ),
  spain: searchAirports('西班牙', 50).filter(a =>
    a.chinese.includes('巴利阿里') ||
    a.chinese.includes('马略卡') ||
    a.chinese.includes('伊维萨') ||
    a.chinese.includes('梅诺卡') ||
    a.chinese.includes('帕尔马') ||
    ['PMI', 'IBZ', 'MAH', 'ESI', 'CDU', 'FMT', 'SQW', 'PMV'].includes(a.code)
  )
};

console.log(`🇮🇹 意大利南部: ${mediterraneanResults.italy.length}个机场`);
console.log(`🇫🇷 法国南部: ${mediterraneanResults.france.length}个机场`);
console.log(`🇪🇸 西班牙巴利阿里: ${mediterraneanResults.spain.length}个机场`);
console.log(`🌊 地中海南岸三国总计: ${mediterraneanResults.italy.length + mediterraneanResults.france.length + mediterraneanResults.spain.length}个机场`);

// 三国顶级枢纽对比
console.log('\n🥇 三国顶级枢纽对比:');
const topHubs = [
  { country: '🇮🇹', code: 'CTA', priority: 100, feature: '西西里岛最大机场，埃特纳火山门户' },
  { country: '🇫🇷', code: 'NCE', priority: 100, feature: '蔚蓝海岸最大机场，法国里维埃拉门户' },
  { country: '🇪🇸', code: 'PMI', priority: 100, feature: '巴利阿里群岛最大机场，地中海重要度假枢纽' },
  { country: '🇮🇹', code: 'PMO', priority: 98, feature: '西西里首府，诺曼底文化中心' },
  { country: '🇫🇷', code: 'MRS', priority: 98, feature: '普罗旺斯地区最大机场，地中海重要港口' },
  { country: '🇪🇸', code: 'IBZ', priority: 98, feature: '世界派对之都，电音文化圣地' }
];

topHubs.forEach(hub => {
  const result = searchAirports(hub.code, 1);
  if (result.length > 0) {
    console.log(`${hub.country} ${hub.code} - ${result[0].chinese} (优先级: ${hub.priority})`);
    console.log(`     ${hub.feature}`);
  }
});

// 地中海岛屿度假天堂三国对比
console.log('\n🏝️ 地中海岛屿度假天堂三国对比:');
const islandParadises = [
  {
    country: '🇮🇹 意大利',
    islands: ['西西里岛', '撒丁岛'],
    airports: ['CTA', 'PMO', 'CAG', 'OLB', 'AHO', 'TPS'],
    highlights: ['埃特纳火山', '翡翠海岸', '古罗马文明', '诺曼底文化'],
    specialty: '古代文明 + 奢华度假'
  },
  {
    country: '🇫🇷 法国',
    islands: ['科西嘉岛'],
    airports: ['AJA', 'BIA', 'FSC'],
    mainland: ['尼斯蔚蓝海岸', '普罗旺斯', '朗格多克'],
    highlights: ['拿破仑出生地', '地中海明珠', '薰衣草之乡', '戛纳电影节'],
    specialty: '文化传承 + 浪漫度假'
  },
  {
    country: '🇪🇸 西班牙',
    islands: ['马略卡岛', '伊维萨岛', '梅诺卡岛', '福门特拉岛'],
    airports: ['PMI', 'IBZ', 'MAH', 'FMT', 'ESI', 'CDU'],
    highlights: ['世界派对之都', '生物圈保护区', '原始海滩', '日落胜地'],
    specialty: '派对文化 + 生态保护'
  }
];

islandParadises.forEach(paradise => {
  const availableAirports = paradise.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${paradise.country}: ${paradise.islands.join('、')}`);
  console.log(`   特色: ${paradise.specialty}`);
  console.log(`   亮点: ${paradise.highlights.join('、')}`);
  console.log(`   机场: ${availableAirports.join(', ')} (${availableAirports.length}/${paradise.airports.length})`);
});

// 文化遗产类型对比
console.log('\n🏛️ 文化遗产类型对比:');
const culturalHeritage = [
  {
    country: '🇮🇹 意大利',
    heritage: '古罗马文明',
    sites: ['庞贝古城', '赫库兰尼姆', '阿格里真托神庙', '努拉盖文明'],
    airports: ['NAP', 'CTA', 'CAG'],
    era: '公元前8世纪 - 公元5世纪'
  },
  {
    country: '🇫🇷 法国',
    heritage: '中世纪+近代法国',
    sites: ['阿维尼翁教皇宫', '卡尔卡松古城', '拿破仑出生地', '戛纳电影节'],
    airports: ['AVN', 'CCF', 'AJA', 'CEQ'],
    era: '中世纪 - 现代'
  },
  {
    country: '🇪🇸 西班牙',
    heritage: '多元文化融合',
    sites: ['梅诺卡史前遗址', '马略卡大教堂', '伊维萨老城', '福门特拉自然保护'],
    airports: ['MAH', 'PMI', 'IBZ', 'FMT'],
    era: '史前 - 现代'
  }
];

culturalHeritage.forEach(culture => {
  console.log(`${culture.country}: ${culture.heritage} (${culture.era})`);
  console.log(`   遗址: ${culture.sites.join('、')}`);
  const availableAirports = culture.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`   门户: ${availableAirports.join(', ')}`);
});

// 度假体验类型对比
console.log('\n🌊 度假体验类型对比:');
const vacationExperiences = [
  {
    type: '🏛️ 文化历史游',
    countries: ['🇮🇹 古罗马遗址', '🇫🇷 中世纪古城', '🇪🇸 史前文明'],
    airports: ['NAP', 'AVN', 'MAH'],
    experience: '博物馆、考古遗址、历史古迹深度游'
  },
  {
    type: '💎 奢华度假',
    countries: ['🇮🇹 翡翠海岸', '🇫🇷 蔚蓝海岸', '🇪🇸 马略卡岛'],
    airports: ['OLB', 'NCE', 'PMI'],
    experience: '五星酒店、私人游艇、高端SPA'
  },
  {
    type: '🎵 娱乐文化',
    countries: ['🇮🇹 卡普里蓝洞', '🇫🇷 戛纳电影节', '🇪🇸 伊维萨派对'],
    airports: ['QSR', 'CEQ', 'IBZ'],
    experience: '艺术节庆、夜生活、时尚文化'
  },
  {
    type: '🌿 生态自然',
    countries: ['🇮🇹 撒丁岛', '🇫🇷 科西嘉岛', '🇪🇸 梅诺卡岛'],
    airports: ['CAG', 'AJA', 'MAH'],
    experience: '国家公园、生物圈保护区、原始自然'
  }
];

vacationExperiences.forEach(experience => {
  console.log(`${experience.type}: ${experience.experience}`);
  console.log(`   目的地: ${experience.countries.join('、')}`);
  const availableAirports = experience.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`   门户: ${availableAirports.join(', ')} (${availableAirports.length}/${experience.airports.length})`);
});

// 季节性旅游模式对比
console.log('\n🌞 三国季节性旅游模式对比:');
const seasonalPatterns = [
  {
    season: '🌸 春季 (3-5月)',
    italy: '温和气候，文化旅游旺季',
    france: '薰衣草花期，艺术节庆',
    spain: '温暖宜人，避开夏季人潮',
    recommended: ['NAP', 'MRS', 'PMI']
  },
  {
    season: '☀️ 夏季 (6-8月)',
    italy: '海滩度假，翡翠海岸',
    france: '戛纳电影节，蔚蓝海岸',
    spain: '派对季节，伊维萨巅峰',
    recommended: ['OLB', 'NCE', 'IBZ']
  },
  {
    season: '🍂 秋季 (9-11月)',
    italy: '文化旅游，美食季节',
    france: '葡萄收获，温暖海水',
    spain: '宁静度假，生物圈探索',
    recommended: ['CTA', 'BZR', 'MAH']
  },
  {
    season: '❄️ 冬季 (12-2月)',
    italy: '温暖气候，淡季优惠',
    france: '文化旅游，冬日暖阳',
    spain: '温和气候，慢节奏度假',
    recommended: ['CAG', 'AJA', 'FMT']
  }
];

seasonalPatterns.forEach(season => {
  console.log(`${season.season}:`);
  console.log(`   🇮🇹 意大利: ${season.italy}`);
  console.log(`   🇫🇷 法国: ${season.france}`);
  console.log(`   🇪🇸 西班牙: ${season.spain}`);
  const availableAirports = season.recommended.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`   推荐机场: ${availableAirports.join(', ')}`);
});

// 航空网络连接性分析
console.log('\n✈️ 地中海三国航空网络连接性:');
const networkConnections = [
  {
    route: '🇮🇹🇫🇷 西北走廊',
    connection: '尼斯 ↔ 热那亚 ↔ 比萨 ↔ 那不勒斯',
    airports: ['NCE', 'GOA', 'PSA', 'NAP'],
    description: '蔚蓝海岸到坎帕尼亚黄金航线'
  },
  {
    route: '🇫🇷🇪🇸 比利牛斯连线',
    connection: '尼斯 ↔ 马赛 ↔ 蒙彼利埃 ↔ 帕尔马',
    airports: ['NCE', 'MRS', 'MPL', 'PMI'],
    description: '法国里维埃拉到巴利阿里度假航线'
  },
  {
    route: '🏝️ 岛屿跳跃巡游',
    connection: '科西嘉 ↔ 撒丁岛 ↔ 西西里 ↔ 马略卡',
    airports: ['AJA', 'CAG', 'CTA', 'PMI'],
    description: '地中海四大岛屿度假环线'
  },
  {
    route: '🎵 派对文化连线',
    connection: '戛纳 ↔ 伊维萨 ↔ 米科诺斯',
    airports: ['CEQ', 'IBZ', 'JMK'],
    description: '地中海奢华派对三角航线'
  }
];

networkConnections.forEach(route => {
  const availableAirports = route.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${route.route}: ${route.description}`);
  console.log(`   航线: ${route.connection}`);
  console.log(`   覆盖: ${availableAirports.length}/${route.airports.length} 个机场`);
});

// 数据完整性验证
console.log('\n🔍 三国数据完整性验证:');
const integrityChecks = {
  '意大利南部机场完整': mediterraneanResults.italy.length >= 12,
  '法国南部机场完整': mediterraneanResults.france.length >= 14,
  '西班牙巴利阿里完整': mediterraneanResults.spain.length >= 10,
  '三国顶级枢纽': searchAirports('CTA', 1).length > 0 && searchAirports('NCE', 1).length > 0 && searchAirports('PMI', 1).length > 0,
  '岛屿网络覆盖': searchAirports('CAG', 1).length > 0 && searchAirports('AJA', 1).length > 0 && searchAirports('IBZ', 1).length > 0,
  '文化遗产门户': searchAirports('NAP', 1).length > 0 && searchAirports('AVN', 1).length > 0 && searchAirports('MAH', 1).length > 0,
  '度假基地覆盖': searchAirports('OLB', 1).length > 0 && searchAirports('CEQ', 1).length > 0 && searchAirports('FMT', 1).length > 0,
  '总机场数合理': (mediterraneanResults.italy.length + mediterraneanResults.france.length + mediterraneanResults.spain.length) >= 36
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

console.log('\n🎉 地中海南岸三国完整测试完成!');
console.log('===============================');

// 最终战略总结
const totalAirports = mediterraneanResults.italy.length + mediterraneanResults.france.length + mediterraneanResults.spain.length;
console.log(`📈 总结: 地中海南岸三国${totalAirports}个机场网络`);
console.log(`🏆 战略价值: 欧洲阳光海岸航空网络三核心`);
console.log(`✈️ 度假价值: 世界顶级地中海度假目的地完整覆盖`);
console.log(`🏛️ 文化价值: 古文明摇篮+中世纪遗产+现代时尚，世界文化遗产密集区`);
console.log(`🌊 地理优势: 地中海心脏地带，连接欧洲大陆与岛屿天堂`);
console.log(`💎 已完成区域: 意大利南部${mediterraneanResults.italy.length}个+法国南部${mediterraneanResults.france.length}个+西班牙巴利阿里${mediterraneanResults.spain.length}个机场`);
console.log(`🚀 下一目标: 希腊爱琴海群岛扩展，完善地中海东部`);
console.log(`🌅 愿景目标: 打造完整的地中海四国阳光海岸航空网络`);
console.log(`🏆 里程碑: 地中海南岸三国联盟，欧洲度假天堂航空网络完成！`);
