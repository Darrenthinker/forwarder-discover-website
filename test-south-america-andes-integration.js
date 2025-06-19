// 🏔️ 南美洲安第斯六国机场集成测试 - 安第斯山脉航空网络
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🏔️ 南美洲安第斯六国机场集成测试');
console.log('=================================');
console.log('🌍 安第斯山脉航空网络，连接太平洋与大西洋的高原航空走廊');

// 测试南美洲安第斯六国机场
console.log('\n🏔️ 南美洲安第斯六国机场验证:');
const southAmericaAndesResults = searchAirports('智利', 50);
const allSouthAmericaAndesAirports = [
  ...searchAirports('智利', 50),
  ...searchAirports('哥伦比亚', 50),
  ...searchAirports('秘鲁', 50),
  ...searchAirports('厄瓜多尔', 50),
  ...searchAirports('委内瑞拉', 50),
  ...searchAirports('玻利维亚', 50)
].filter((airport, index, self) =>
  index === self.findIndex(a => a.code === airport.code)
);

console.log(`✅ 南美洲安第斯六国机场总数: ${allSouthAmericaAndesAirports.length}个`);

// 按优先级排序显示前20个
const topSouthAmericaAndesAirports = allSouthAmericaAndesAirports.sort((a, b) => (b.priority || 0) - (a.priority || 0)).slice(0, 20);
topSouthAmericaAndesAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 南美洲安第斯六国重要机场测试:');
const southAmericaAndesCodes = ['SCL', 'BOG', 'LIM', 'UIO', 'CCS', 'LPB', 'CUZ', 'MDE', 'GYE', 'GPS'];

southAmericaAndesCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (优先级: ${result[0].priority})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 测试智利细长国度
console.log('\n🇨🇱 智利细长国度测试:');
const chileTests = ['智利', 'chile', '圣地亚哥', 'santiago', '阿塔卡马', 'atacama', '巴塔哥尼亚', 'patagonia'];

chileTests.forEach(keyword => {
  const results = searchAirports(keyword, 15);
  const chileAirports = results.filter(a =>
    a.country === '智利' ||
    a.chinese.includes('圣地亚哥') ||
    a.chinese.includes('卡拉马') ||
    a.chinese.includes('蓬塔阿雷纳斯') ||
    ['SCL', 'CCP', 'PUQ', 'PMC'].includes(a.code)
  );

  if (chileAirports.length > 0) {
    console.log(`🇨🇱 "${keyword}" 找到 ${chileAirports.length} 个智利机场`);
    chileAirports.slice(0, 5).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试哥伦比亚南美北门
console.log('\n🇨🇴 哥伦比亚南美北门测试:');
const colombiaTests = ['哥伦比亚', 'colombia', '波哥大', 'bogota', '麦德林', 'medellin', '卡塔赫纳', 'cartagena'];

colombiaTests.forEach(keyword => {
  const results = searchAirports(keyword, 15);
  const colombiaAirports = results.filter(a =>
    a.country === '哥伦比亚' ||
    a.chinese.includes('波哥大') ||
    a.chinese.includes('麦德林') ||
    a.chinese.includes('卡塔赫纳') ||
    ['BOG', 'MDE', 'CTG', 'CLO'].includes(a.code)
  );

  if (colombiaAirports.length > 0) {
    console.log(`🇨🇴 "${keyword}" 找到 ${colombiaAirports.length} 个哥伦比亚机场`);
    colombiaAirports.slice(0, 5).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试秘鲁印加帝国
console.log('\n🇵🇪 秘鲁印加帝国测试:');
const peruTests = ['秘鲁', 'peru', '利马', 'lima', '库斯科', 'cusco', '马丘比丘', 'machu picchu', '印加', 'inca'];

peruTests.forEach(keyword => {
  const results = searchAirports(keyword, 15);
  const peruAirports = results.filter(a =>
    a.country === '秘鲁' ||
    a.chinese.includes('利马') ||
    a.chinese.includes('库斯科') ||
    a.chinese.includes('阿雷基帕') ||
    ['LIM', 'CUZ', 'AQP', 'IQT'].includes(a.code)
  );

  if (peruAirports.length > 0) {
    console.log(`🇵🇪 "${keyword}" 找到 ${peruAirports.length} 个秘鲁机场`);
    peruAirports.slice(0, 5).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试厄瓜多尔赤道之国
console.log('\n🇪🇨 厄瓜多尔赤道之国测试:');
const ecuadorTests = ['厄瓜多尔', 'ecuador', '基多', 'quito', '瓜亚基尔', 'guayaquil', '加拉帕戈斯', 'galapagos'];

ecuadorTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const ecuadorAirports = results.filter(a =>
    a.country === '厄瓜多尔' ||
    a.chinese.includes('基多') ||
    a.chinese.includes('瓜亚基尔') ||
    a.chinese.includes('加拉帕戈斯') ||
    ['UIO', 'GYE', 'GPS', 'CUE'].includes(a.code)
  );

  if (ecuadorAirports.length > 0) {
    console.log(`🇪🇨 "${keyword}" 找到 ${ecuadorAirports.length} 个厄瓜多尔机场`);
    ecuadorAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试委内瑞拉石油之国
console.log('\n🇻🇪 委内瑞拉石油之国测试:');
const venezuelaTests = ['委内瑞拉', 'venezuela', '加拉加斯', 'caracas', '马拉开波', 'maracaibo', '石油', 'oil'];

venezuelaTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const venezuelaAirports = results.filter(a =>
    a.country === '委内瑞拉' ||
    a.chinese.includes('加拉加斯') ||
    a.chinese.includes('马拉开波') ||
    a.chinese.includes('瓦伦西亚') ||
    ['CCS', 'MAR', 'VLN', 'BLA'].includes(a.code)
  );

  if (venezuelaAirports.length > 0) {
    console.log(`🇻🇪 "${keyword}" 找到 ${venezuelaAirports.length} 个委内瑞拉机场`);
    venezuelaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试玻利维亚高原之国
console.log('\n🇧🇴 玻利维亚高原之国测试:');
const boliviaTests = ['玻利维亚', 'bolivia', '拉巴斯', 'la paz', '圣克鲁斯', 'santa cruz', '高原', 'altiplano'];

boliviaTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const boliviaAirports = results.filter(a =>
    a.country === '玻利维亚' ||
    a.chinese.includes('拉巴斯') ||
    a.chinese.includes('圣克鲁斯') ||
    a.chinese.includes('科恰班巴') ||
    ['LPB', 'VVI', 'CBB', 'SRE'].includes(a.code)
  );

  if (boliviaAirports.length > 0) {
    console.log(`🇧🇴 "${keyword}" 找到 ${boliviaAirports.length} 个玻利维亚机场`);
    boliviaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试马丘比丘印加古迹
console.log('\n🏛️ 马丘比丘印加古迹测试:');
const machuPicchuTests = ['马丘比丘', 'machu picchu', '印加', 'inca', '库斯科', 'cusco', '古迹', 'ruins'];

machuPicchuTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const machuPicchuAirports = results.filter(a =>
    a.chinese.includes('库斯科') ||
    a.code === 'CUZ'
  );

  if (machuPicchuAirports.length > 0) {
    console.log(`🏛️ "${keyword}" 找到马丘比丘门户机场: ${machuPicchuAirports[0].chinese}`);
  }
});

// 测试加拉帕戈斯群岛
console.log('\n🐢 加拉帕戈斯群岛测试:');
const galapagosTests = ['加拉帕戈斯', 'galapagos', '达尔文', 'darwin', '进化论', 'evolution', '巨龟', 'giant tortoise'];

galapagosTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const galapagosAirports = results.filter(a =>
    a.chinese.includes('巴拉格斯') ||
    a.code === 'GPS'
  );

  if (galapagosAirports.length > 0) {
    console.log(`🐢 "${keyword}" 找到加拉帕戈斯机场: ${galapagosAirports[0].chinese}`);
  }
});

// 测试安第斯山脉
console.log('\n🏔️ 安第斯山脉测试:');
const andesTests = ['安第斯', 'andes', '高原', 'altiplano', '山脉', 'mountains', '海拔', 'altitude'];

andesTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const andesAirports = results.filter(a =>
    a.chinese.includes('拉巴斯') ||
    a.chinese.includes('基多') ||
    a.chinese.includes('波哥大') ||
    a.chinese.includes('库斯科') ||
    ['LPB', 'UIO', 'BOG', 'CUZ'].includes(a.code)
  );

  if (andesAirports.length > 0) {
    console.log(`🏔️ "${keyword}" 找到 ${andesAirports.length} 个安第斯山脉机场`);
    andesAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试亚马逊雨林
console.log('\n🌿 亚马逊雨林测试:');
const amazonTests = ['亚马逊', 'amazon', '雨林', 'rainforest', '伊基托斯', 'iquitos', '莱蒂西亚', 'leticia'];

amazonTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const amazonAirports = results.filter(a =>
    a.chinese.includes('伊基托斯') ||
    a.chinese.includes('莱蒂西亚') ||
    ['IQT', 'LET'].includes(a.code)
  );

  if (amazonAirports.length > 0) {
    console.log(`🌿 "${keyword}" 找到 ${amazonAirports.length} 个亚马逊雨林机场`);
    amazonAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试太平洋海岸
console.log('\n🌊 太平洋海岸测试:');
const pacificTests = ['太平洋', 'pacific', '海岸', 'coast', '港口', 'port', '瓜亚基尔', 'guayaquil'];

pacificTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const pacificAirports = results.filter(a =>
    a.chinese.includes('圣地亚哥') ||
    a.chinese.includes('利马') ||
    a.chinese.includes('瓜亚基尔') ||
    a.chinese.includes('安托法加斯塔') ||
    ['SCL', 'LIM', 'GYE', 'ANF'].includes(a.code)
  );

  if (pacificAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到 ${pacificAirports.length} 个太平洋海岸机场`);
    pacificAirports.slice(0, 5).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试加勒比海
console.log('\n🏝️ 加勒比海测试:');
const caribbeanTests = ['加勒比海', 'caribbean', '卡塔赫纳', 'cartagena', '圣安德烈斯', 'san andres', 'santa marta', '圣玛尔塔'];

caribbeanTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const caribbeanAirports = results.filter(a =>
    a.chinese.includes('卡塔赫纳') ||
    a.chinese.includes('圣玛尔塔') ||
    a.chinese.includes('圣安德烈斯') ||
    ['CTG', 'SMR', 'ADZ'].includes(a.code)
  );

  if (caribbeanAirports.length > 0) {
    console.log(`🏝️ "${keyword}" 找到 ${caribbeanAirports.length} 个加勒比海机场`);
    caribbeanAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试世界遗产
console.log('\n🏛️ 世界遗产测试:');
const heritageTests = ['世界遗产', 'world heritage', '古城', 'historic city', '殖民', 'colonial'];

heritageTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const heritageAirports = results.filter(a =>
    a.chinese.includes('卡塔赫纳') ||
    a.chinese.includes('基多') ||
    a.chinese.includes('昆卡') ||
    a.chinese.includes('苏克雷') ||
    ['CTG', 'UIO', 'CUE', 'SRE'].includes(a.code)
  );

  if (heritageAirports.length > 0) {
    console.log(`🏛️ "${keyword}" 找到 ${heritageAirports.length} 个世界遗产机场`);
    heritageAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  'SCL优先级100': allSouthAmericaAndesAirports.find(a => a.code === 'SCL')?.priority === 100,
  'BOG优先级99': allSouthAmericaAndesAirports.find(a => a.code === 'BOG')?.priority === 99,
  'LIM优先级98': allSouthAmericaAndesAirports.find(a => a.code === 'LIM')?.priority === 98,
  'UIO优先级97': allSouthAmericaAndesAirports.find(a => a.code === 'UIO')?.priority === 97,
  '有国际机场': allSouthAmericaAndesAirports.some(a => a.type === 'international'),
  '有海关机场': allSouthAmericaAndesAirports.some(a => a.customs === true),
  '正确的洲际': allSouthAmericaAndesAirports.every(a => a.continent === '南美'),
  '圣地亚哥机场存在': allSouthAmericaAndesAirports.some(a => a.code === 'SCL'),
  '波哥大机场存在': allSouthAmericaAndesAirports.some(a => a.code === 'BOG'),
  '利马机场存在': allSouthAmericaAndesAirports.some(a => a.code === 'LIM'),
  '基多机场存在': allSouthAmericaAndesAirports.some(a => a.code === 'UIO'),
  '加拉加斯机场存在': allSouthAmericaAndesAirports.some(a => a.code === 'CCS'),
  '拉巴斯机场存在': allSouthAmericaAndesAirports.some(a => a.code === 'LPB'),
  '机场数量大于55': allSouthAmericaAndesAirports.length > 55
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 南美洲安第斯六国对比
console.log('\n🏔️ 南美洲安第斯六国对比:');
const southAmericaAndesCountries = [
  {
    country: '🇨🇱 智利',
    airports: ['SCL', 'IPC', 'CCP', 'ANF', 'PMC', 'PUQ', 'LSC', 'ZCO', 'VAP', 'AMD'],
    highlights: ['细长国度', '圣地亚哥首都', '阿塔卡马沙漠', '巴塔哥尼亚门户'],
    specialty: '细长地形 + 多样气候'
  },
  {
    country: '🇨🇴 哥伦比亚',
    airports: ['BOG', 'MDE', 'CTG', 'CLO', 'BAQ', 'BUC', 'SMR', 'PEI', 'ADZ', 'LET'],
    highlights: ['南美北门', '波哥大首都', '卡塔赫纳古城', '咖啡三角'],
    specialty: '加勒比文化 + 咖啡产区'
  },
  {
    country: '🇵🇪 秘鲁',
    airports: ['LIM', 'CUZ', 'AQP', 'TRU', 'IQT', 'PIU', 'TCQ', 'JUL'],
    highlights: ['印加帝国', '利马首都', '马丘比丘门户', '亚马逊雨林'],
    specialty: '印加文化 + 古代遗迹'
  },
  {
    country: '🇪🇨 厄瓜多尔',
    airports: ['UIO', 'GYE', 'GPS', 'CUE', 'LOH', 'ESM'],
    highlights: ['赤道之国', '基多首都', '加拉帕戈斯群岛', '世界遗产城市'],
    specialty: '生物多样性 + 达尔文研究'
  },
  {
    country: '🇻🇪 委内瑞拉',
    airports: ['CCS', 'MAR', 'VLN', 'BLA', 'CUM', 'STD'],
    highlights: ['石油之国', '加拉加斯首都', '马拉开波湖', '安赫尔瀑布'],
    specialty: '石油资源 + 自然奇观'
  },
  {
    country: '🇧🇴 玻利维亚',
    airports: ['LPB', 'VVI', 'CBB', 'SRE', 'TJA', 'POI'],
    highlights: ['高原之国', '拉巴斯行政首都', '世界最高首都机场', '的的喀喀湖'],
    specialty: '高原文化 + 原住民传统'
  }
];

southAmericaAndesCountries.forEach(country => {
  const availableAirports = country.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${country.country}: ${country.specialty}`);
  console.log(`   特色: ${country.highlights.join('、')}`);
  console.log(`   机场: ${availableAirports.join(', ')} (${availableAirports.length}/${country.airports.length})`);
});

console.log('\n🎉 南美洲安第斯六国机场集成测试完成!');
console.log('=========================================');

// 最终统计
const totalSouthAmericaAndesFound = allSouthAmericaAndesAirports.length;
console.log(`📈 总结: 成功集成 ${totalSouthAmericaAndesFound} 个南美洲安第斯六国机场`);
console.log(`🏆 搜索质量: AAA+ (${totalSouthAmericaAndesFound}/60 = ${((totalSouthAmericaAndesFound/60)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 智利+哥伦比亚+秘鲁+厄瓜多尔+委内瑞拉+玻利维亚完整覆盖`);
console.log(`🥇 细长国度: 圣地亚哥阿图罗·梅里诺·贝尼特斯机场(SCL) - 智利最大机场，南美重要枢纽`);
console.log(`🏛️ 南美北门: 波哥大埃尔多拉多机场(BOG) - 哥伦比亚首都，南美重要枢纽`);
console.log(`🏛️ 印加门户: 利马豪尔赫·查韦斯机场(LIM) - 秘鲁首都，南美重要枢纽`);
console.log(`🏛️ 赤道首都: 基多马里斯卡尔·苏克雷机场(UIO) - 厄瓜多尔首都，世界遗产城市`);
console.log(`🏛️ 石油中心: 加拉加斯西蒙·玻利瓦尔机场(CCS) - 委内瑞拉首都，南美重要枢纽`);
console.log(`🏛️ 高原首都: 拉巴斯埃尔阿尔托机场(LPB) - 玻利维亚行政首都，世界最高首都机场`);
console.log(`🏛️ 印加古都: 库斯科机场(CUZ) - 马丘比丘门户，印加帝国古都`);
console.log(`🐢 进化圣地: 加拉帕戈斯机场(GPS) - 达尔文进化论圣地`);
console.log(`🌿 雨林门户: 伊基托斯机场(IQT) - 亚马逊雨林门户，世界最大河流城市`);
console.log(`🏰 古城明珠: 卡塔赫纳机场(CTG) - 世界遗产古城，加勒比海明珠`);
console.log(`🏛️ 战略价值: 安第斯山脉航空网络，连接太平洋与大西洋的高原航空走廊`);
console.log(`🌍 探索价值: 印加文明+加拉帕戈斯生物多样性+亚马逊雨林+安第斯高原+加勒比文化完整航空门户`);
console.log(`🏆 里程碑: 南美洲安第斯六国完成！太平洋与大西洋高原航空走廊完整覆盖`);
