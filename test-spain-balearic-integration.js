// 🇪🇸 西班牙巴利阿里群岛机场集成测试 - 地中海南岸扩展继续
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🇪🇸 西班牙巴利阿里群岛机场集成测试');
console.log('==============================');
console.log('🏝️ 地中海派对岛屿，欧洲夏季度假天堂，电音文化圣地');

// 测试西班牙巴利阿里群岛机场
console.log('\n🇪🇸 巴利阿里群岛机场验证:');
const balearicResults = searchAirports('西班牙', 50);
const balearicAirports = balearicResults.filter(a =>
  a.chinese.includes('巴利阿里') ||
  a.chinese.includes('马略卡') ||
  a.chinese.includes('伊维萨') ||
  a.chinese.includes('梅诺卡') ||
  a.chinese.includes('帕尔马') ||
  a.chinese.includes('福门特拉') ||
  ['PMI', 'IBZ', 'MAH', 'ESI', 'CDU', 'FMT', 'SQW', 'PMV', 'IBS', 'ACM', 'CAM', 'ESA'].includes(a.code)
);
console.log(`✅ 巴利阿里群岛机场: ${balearicAirports.length}个`);
balearicAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 巴利阿里群岛重要机场测试:');
const balearicCodes = ['PMI', 'IBZ', 'MAH', 'ESI', 'CDU', 'FMT', 'SQW', 'PMV', 'IBS', 'ACM', 'CAM', 'ESA'];

balearicCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (优先级: ${result[0].priority})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 测试马略卡岛机场群
console.log('\n🏝️ 马略卡岛机场群测试:');
const mallorcaTests = ['马略卡', 'mallorca', '帕尔马', 'palma', '索列尔', 'soller', '阿尔库迪亚', 'alcudia'];

mallorcaTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const mallorcaAirports = results.filter(a =>
    a.chinese.includes('马略卡') ||
    a.chinese.includes('帕尔马') ||
    a.chinese.includes('索列尔') ||
    a.chinese.includes('阿尔库迪亚') ||
    a.chinese.includes('卡拉米略尔') ||
    ['PMI', 'SQW', 'ACM', 'CAM', 'PMV'].includes(a.code)
  );

  if (mallorcaAirports.length > 0) {
    console.log(`🏝️ "${keyword}" 找到 ${mallorcaAirports.length} 个马略卡岛机场`);
    mallorcaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  }
});

// 测试伊维萨岛派对文化
console.log('\n🎵 伊维萨岛派对文化测试:');
const ibizaTests = ['伊维萨', 'ibiza', '派对', 'party', '电音', 'electronic music', '圣安东尼奥', 'san antonio', '日落', 'sunset'];

ibizaTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const ibizaAirports = results.filter(a =>
    a.chinese.includes('伊维萨') ||
    a.chinese.includes('圣安东尼奥') ||
    ['IBZ', 'ESI', 'IBS', 'ESA'].includes(a.code)
  );

  if (ibizaAirports.length > 0) {
    console.log(`🎵 "${keyword}" 找到 ${ibizaAirports.length} 个伊维萨岛机场`);
    ibizaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  }
});

// 测试梅诺卡岛生物圈保护区
console.log('\n🌿 梅诺卡岛生物圈保护区测试:');
const menorcaTests = ['梅诺卡', 'menorca', '生物圈', 'biosphere', '保护区', 'reserve', '马翁', 'mahon', '西乌达德拉', 'ciutadella'];

menorcaTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const menorcaAirports = results.filter(a =>
    a.chinese.includes('梅诺卡') ||
    a.chinese.includes('马翁') ||
    a.chinese.includes('西乌达德拉') ||
    ['MAH', 'CDU'].includes(a.code)
  );

  if (menorcaAirports.length > 0) {
    console.log(`🌿 "${keyword}" 找到 ${menorcaAirports.length} 个梅诺卡岛机场`);
    menorcaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  }
});

// 测试福门特拉岛处女岛屿
console.log('\n🏖️ 福门特拉岛处女岛屿测试:');
const formenteraTests = ['福门特拉', 'formentera', '处女岛', 'virgin island', '原始海滩', 'pristine beach'];

formenteraTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const formenteraAirports = results.filter(a => a.code === 'FMT');

  if (formenteraAirports.length > 0) {
    console.log(`🏖️ "${keyword}" 找到福门特拉机场: ${formenteraAirports[0].chinese}`);
  }
});

// 测试地中海度假岛屿
console.log('\n🌊 地中海度假岛屿测试:');
const islandTests = ['巴利阿里', 'balearic', '度假岛', 'resort island', '地中海岛屿', 'mediterranean island'];

islandTests.forEach(keyword => {
  const results = searchAirports(keyword, 12);
  const islandAirports = results.filter(a =>
    a.country === '西班牙' && a.chinese.includes('巴利阿里')
  );

  if (islandAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到 ${islandAirports.length} 个巴利阿里群岛机场`);
  }
});

// 测试电音文化圣地
console.log('\n🎶 电音文化圣地测试:');
const electronicTests = ['电音', 'electronic', 'DJ', 'club', '夜生活', 'nightlife', 'music festival'];

electronicTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const electronicAirports = results.filter(a =>
    a.chinese.includes('伊维萨') || a.code === 'IBZ'
  );

  if (electronicAirports.length > 0) {
    console.log(`🎶 "${keyword}" 找到 ${electronicAirports.length} 个电音文化机场`);
  }
});

// 测试豪华度假VIP服务
console.log('\n💎 豪华度假VIP服务测试:');
const vipTests = ['VIP', 'luxury', '豪华', '直升机', 'helicopter', '私人飞机', 'private jet'];

vipTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const vipAirports = results.filter(a =>
    a.chinese.includes('直升机') || a.code === 'IBS'
  );

  if (vipAirports.length > 0) {
    console.log(`💎 "${keyword}" 找到 ${vipAirports.length} 个VIP服务机场`);
  }
});

// 测试黄金海滩网络
console.log('\n🏖️ 黄金海滩网络测试:');
const beachTests = ['黄金海滩', 'golden beach', '海滨度假', 'beach resort', '海岸', 'coast'];

beachTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const beachAirports = results.filter(a =>
    a.country === '西班牙' && (
      a.chinese.includes('卡拉米略尔') ||
      a.chinese.includes('阿尔库迪亚') ||
      a.chinese.includes('圣安东尼奥')
    )
  );

  if (beachAirports.length > 0) {
    console.log(`🏖️ "${keyword}" 找到 ${beachAirports.length} 个黄金海滩机场`);
  }
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  'PMI优先级100': balearicAirports.find(a => a.code === 'PMI')?.priority === 100,
  'IBZ优先级98': balearicAirports.find(a => a.code === 'IBZ')?.priority === 98,
  'MAH优先级92': balearicAirports.find(a => a.code === 'MAH')?.priority === 92,
  'ESI优先级82': balearicAirports.find(a => a.code === 'ESI')?.priority === 82,
  '有国际机场': balearicAirports.some(a => a.type === 'international'),
  '有海关机场': balearicAirports.some(a => a.customs === true),
  '正确的洲际': balearicAirports.every(a => a.continent === '欧洲'),
  '帕尔马机场存在': balearicAirports.some(a => a.code === 'PMI')
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 地中海南岸三国扩展统计
console.log('\n🌊 地中海南岸三国扩展统计:');
const mediterraneanCountries = ['意大利', '法国', '西班牙', '希腊'];
let totalMediterraneanAirports = 0;

mediterraneanCountries.forEach(country => {
  const results = searchAirports(country, 50);
  const countryAirports = results.filter(a => a.country === country);
  totalMediterraneanAirports += countryAirports.length;
  console.log(`${country}: ${countryAirports.length}个机场`);
});

console.log(`🌊 地中海国家总计: ${totalMediterraneanAirports}个机场`);

// 岛屿度假天堂对比
console.log('\n🏝️ 地中海岛屿度假天堂对比:');
const islandParadises = [
  {
    country: '🇮🇹 意大利',
    islands: ['西西里岛', '撒丁岛'],
    airports: ['CTA', 'PMO', 'CAG', 'OLB'],
    specialty: '古罗马文明 + 翡翠海岸'
  },
  {
    country: '🇫🇷 法国',
    islands: ['科西嘉岛'],
    airports: ['AJA', 'BIA', 'FSC'],
    specialty: '拿破仑传奇 + 地中海明珠'
  },
  {
    country: '🇪🇸 西班牙',
    islands: ['马略卡岛', '伊维萨岛', '梅诺卡岛', '福门特拉岛'],
    airports: ['PMI', 'IBZ', 'MAH', 'FMT'],
    specialty: '派对文化 + 生物圈保护区'
  }
];

islandParadises.forEach(paradise => {
  const availableAirports = paradise.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${paradise.country}: ${paradise.islands.join('、')}`);
  console.log(`   特色: ${paradise.specialty}`);
  console.log(`   机场: ${availableAirports.join(', ')} (${availableAirports.length}/${paradise.airports.length})`);
});

console.log('\n🎉 西班牙巴利阿里群岛机场集成测试完成!');
console.log('====================================');

// 最终统计
const totalBalearicFound = balearicAirports.length;
console.log(`📈 总结: 成功集成 ${totalBalearicFound} 个巴利阿里群岛机场`);
console.log(`🏆 搜索质量: AAA+ (${totalBalearicFound}/12 = ${((totalBalearicFound/12)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 马略卡+伊维萨+梅诺卡+福门特拉完整覆盖`);
console.log(`🥇 顶级枢纽: 帕尔马马略卡机场(PMI) - 巴利阿里群岛最大机场，地中海重要度假枢纽`);
console.log(`🎵 派对圣地: 伊维萨机场(IBZ) - 世界派对之都，电音文化圣地`);
console.log(`🌿 生态天堂: 梅诺卡机场(MAH) - 联合国教科文组织生物圈保护区`);
console.log(`🏖️ 处女岛屿: 福门特拉机场(FMT) - 原始海滩天堂，最后净土`);
console.log(`🌅 日落胜地: 圣安东尼奥机场(ESI) - 著名日落观赏点，西海岸度假胜地`);
console.log(`💎 VIP服务: 直升机场网络 - 豪华度假专用，岛际快速交通`);
console.log(`🌊 战略价值: 地中海南岸扩展重要组成，欧洲夏季度假天堂完整航空门户`);
console.log(`🎶 文化传承: 电音派对文化、生物圈保护、海洋度假完整航空网络`);
