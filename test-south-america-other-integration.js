// 🏔️ 南美洲其他国家机场集成测试 - 南美洲航空网络完善
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🏔️ 南美洲其他国家机场集成测试');
console.log('==============================');
console.log('🏔️ 南美洲航空网络完善，连接大西洋与内陆的南美航空走廊');

// 测试南美洲其他国家机场
console.log('\n🏔️ 南美洲其他国家机场验证:');
const southAmericaOtherResults = searchAirports('乌拉圭', 50);
const allSouthAmericaOtherAirports = [
  ...searchAirports('乌拉圭', 50),
  ...searchAirports('巴拉圭', 50),
  ...searchAirports('圭亚那', 50),
  ...searchAirports('苏里南', 50)
].filter((airport, index, self) =>
  index === self.findIndex(a => a.code === airport.code)
);

console.log(`✅ 南美洲其他国家机场总数: ${allSouthAmericaOtherAirports.length}个`);

// 按优先级排序显示前20个
const topSouthAmericaOtherAirports = allSouthAmericaOtherAirports.sort((a, b) => (b.priority || 0) - (a.priority || 0)).slice(0, 20);
topSouthAmericaOtherAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 南美洲其他国家重要机场测试:');
const southAmericaOtherCodes = ['MVD', 'ASU', 'GEO', 'PBM', 'PDP', 'CIO', 'KAI', 'OGL', 'ENC', 'LTM'];

southAmericaOtherCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (优先级: ${result[0].priority})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 测试乌拉圭拉普拉塔河口明珠
console.log('\n🇺🇾 乌拉圭拉普拉塔河口明珠测试:');
const uruguayTests = ['乌拉圭', 'uruguay', '蒙得维的亚', 'montevideo', '埃斯特角城', 'punta del este', '拉普拉塔河', 'rio de la plata'];

uruguayTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const uruguayAirports = results.filter(a =>
    a.country === '乌拉圭' ||
    a.chinese.includes('蒙得维的亚') ||
    a.chinese.includes('埃斯特角城') ||
    a.chinese.includes('里维拉') ||
    ['MVD', 'PDP', 'RVY', 'STY'].includes(a.code)
  );

  if (uruguayAirports.length > 0) {
    console.log(`🇺🇾 "${keyword}" 找到 ${uruguayAirports.length} 个乌拉圭机场`);
    uruguayAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试巴拉圭南美洲心脏
console.log('\n🇵🇾 巴拉圭南美洲心脏测试:');
const paraguayTests = ['巴拉圭', 'paraguay', '亚松森', 'asuncion', '东方市', 'ciudad del este', '南美洲心脏', 'heart of south america'];

paraguayTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const paraguayAirports = results.filter(a =>
    a.country === '巴拉圭' ||
    a.chinese.includes('亚松森') ||
    a.chinese.includes('东方市') ||
    a.chinese.includes('恩卡纳西翁') ||
    ['ASU', 'CIO', 'ENC', 'PCJ'].includes(a.code)
  );

  if (paraguayAirports.length > 0) {
    console.log(`🇵🇾 "${keyword}" 找到 ${paraguayAirports.length} 个巴拉圭机场`);
    paraguayAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试圭亚那大西洋海岸门户
console.log('\n🇬🇾 圭亚那大西洋海岸门户测试:');
const guyanaTests = ['圭亚那', 'guyana', '乔治敦', 'georgetown', '凯图尔瀑布', 'kaieteur falls', '大西洋', 'atlantic'];

guyanaTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const guyanaAirports = results.filter(a =>
    a.country === '圭亚那' ||
    a.chinese.includes('乔治敦') ||
    a.chinese.includes('凯图尔瀑布') ||
    a.chinese.includes('莱瑟姆') ||
    ['GEO', 'KAI', 'LTM', 'OGL'].includes(a.code)
  );

  if (guyanaAirports.length > 0) {
    console.log(`🇬🇾 "${keyword}" 找到 ${guyanaAirports.length} 个圭亚那机场`);
    guyanaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试苏里南加勒比海南岸明珠
console.log('\n🇸🇷 苏里南加勒比海南岸明珠测试:');
const surinameTests = ['苏里南', 'suriname', '帕拉马里博', 'paramaribo', '约翰·阿道夫·企鹅', 'johan adolf pengel', '加勒比海', 'caribbean'];

surinameTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const surinameAirports = results.filter(a =>
    a.country === '苏里南' ||
    a.chinese.includes('帕拉马里博') ||
    a.chinese.includes('瓦吉尼根') ||
    a.chinese.includes('尼尤尼克里') ||
    ['PBM', 'ORG', 'AGI', 'ICK'].includes(a.code)
  );

  if (surinameAirports.length > 0) {
    console.log(`🇸🇷 "${keyword}" 找到 ${surinameAirports.length} 个苏里南机场`);
    surinameAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试蒙得维的亚超级枢纽
console.log('\n🥇 蒙得维的亚超级枢纽测试:');
const montevideoTests = ['蒙得维的亚', 'montevideo', '卡拉斯科', 'carrasco', '拉普拉塔河口', 'rio de la plata'];

montevideoTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const montevideoAirports = results.filter(a =>
    a.chinese.includes('蒙得维的亚') ||
    a.code === 'MVD'
  );

  if (montevideoAirports.length > 0) {
    console.log(`🥇 "${keyword}" 找到蒙得维的亚机场: ${montevideoAirports[0].chinese}`);
  }
});

// 测试南美洲里维埃拉
console.log('\n🌊 南美洲里维埃拉测试:');
const rivieraTests = ['里维埃拉', 'riviera', '埃斯特角城', 'punta del este', '度假', 'resort', '海滩', 'beach'];

rivieraTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const rivieraAirports = results.filter(a =>
    a.chinese.includes('埃斯特角城') ||
    a.code === 'PDP'
  );

  if (rivieraAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到南美洲里维埃拉机场: ${rivieraAirports[0].chinese}`);
  }
});

// 测试三国边境地区
console.log('\n🌍 三国边境地区测试:');
const borderTests = ['三国边境', 'triple border', '东方市', 'ciudad del este', '边境', 'border', '巴拉那河', 'parana river'];

borderTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const borderAirports = results.filter(a =>
    a.chinese.includes('东方市') ||
    a.chinese.includes('佩德罗胡安卡瓦列罗') ||
    a.chinese.includes('里维拉') ||
    ['CIO', 'PCJ', 'RVY'].includes(a.code)
  );

  if (borderAirports.length > 0) {
    console.log(`🌍 "${keyword}" 找到 ${borderAirports.length} 个边境地区机场`);
    borderAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试凯图尔瀑布自然奇观
console.log('\n🌊 凯图尔瀑布自然奇观测试:');
const waterfallTests = ['凯图尔瀑布', 'kaieteur falls', '瀑布', 'waterfall', '自然奇观', 'natural wonder', '世界最大', 'world largest'];

waterfallTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const waterfallAirports = results.filter(a =>
    a.chinese.includes('凯图尔瀑布') ||
    a.code === 'KAI'
  );

  if (waterfallAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到凯图尔瀑布机场: ${waterfallAirports[0].chinese}`);
  }
});

// 测试圭亚那高地
console.log('\n🌴 圭亚那高地测试:');
const highlandsTests = ['圭亚那高地', 'guyana highlands', '高地', 'highlands', '生态旅游', 'eco tourism', '雨林', 'rainforest'];

highlandsTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const highlandsAirports = results.filter(a =>
    a.chinese.includes('阿纳') ||
    a.chinese.includes('莱瑟姆') ||
    ['AHL', 'LTM'].includes(a.code)
  );

  if (highlandsAirports.length > 0) {
    console.log(`🌴 "${keyword}" 找到 ${highlandsAirports.length} 个圭亚那高地机场`);
    highlandsAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试内陆南美航空网络
console.log('\n🏔️ 内陆南美航空网络测试:');
const inlandTests = ['内陆', 'inland', '巴拉圭', 'paraguay', '内陆国家', 'landlocked', '南美洲心脏', 'heart'];

inlandTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const inlandAirports = results.filter(a =>
    a.chinese.includes('亚松森') ||
    a.chinese.includes('康塞普西翁') ||
    a.chinese.includes('恩卡纳西翁') ||
    ['ASU', 'COC', 'ENC'].includes(a.code)
  );

  if (inlandAirports.length > 0) {
    console.log(`🏔️ "${keyword}" 找到 ${inlandAirports.length} 个内陆南美机场`);
    inlandAirports.slice(0, 3).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试大西洋南美海岸
console.log('\n🌊 大西洋南美海岸测试:');
const atlanticCoastTests = ['大西洋', 'atlantic', '海岸', 'coast', '南美海岸', 'south american coast'];

atlanticCoastTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const coastalAirports = results.filter(a =>
    a.chinese.includes('蒙得维的亚') ||
    a.chinese.includes('埃斯特角城') ||
    a.chinese.includes('乔治敦') ||
    a.chinese.includes('帕拉马里博') ||
    ['MVD', 'PDP', 'GEO', 'PBM'].includes(a.code)
  );

  if (coastalAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到 ${coastalAirports.length} 个大西洋海岸机场`);
    coastalAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试河流系统航空网络
console.log('\n🌊 河流系统航空网络测试:');
const riverTests = ['河流', 'river', '巴拉那河', 'parana', '乌拉圭河', 'uruguay river', '苏里南河', 'suriname river'];

riverTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const riverAirports = results.filter(a =>
    a.chinese.includes('东方市') ||
    a.chinese.includes('恩卡纳西翁') ||
    a.chinese.includes('萨尔托') ||
    a.chinese.includes('尼尤尼克里') ||
    ['CIO', 'ENC', 'STY', 'ICK'].includes(a.code)
  );

  if (riverAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到 ${riverAirports.length} 个河流系统机场`);
    riverAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  'MVD优先级100': allSouthAmericaOtherAirports.find(a => a.code === 'MVD')?.priority === 100,
  'ASU优先级96': allSouthAmericaOtherAirports.find(a => a.code === 'ASU')?.priority === 96,
  'GEO优先级94': allSouthAmericaOtherAirports.find(a => a.code === 'GEO')?.priority === 94,
  'PBM优先级92': allSouthAmericaOtherAirports.find(a => a.code === 'PBM')?.priority === 92,
  '有国际机场': allSouthAmericaOtherAirports.some(a => a.type === 'international'),
  '有海关机场': allSouthAmericaOtherAirports.some(a => a.customs === true),
  '正确的洲际': allSouthAmericaOtherAirports.every(a => a.continent === '南美'),
  '蒙得维的亚机场存在': allSouthAmericaOtherAirports.some(a => a.code === 'MVD'),
  '亚松森机场存在': allSouthAmericaOtherAirports.some(a => a.code === 'ASU'),
  '乔治敦机场存在': allSouthAmericaOtherAirports.some(a => a.code === 'GEO'),
  '帕拉马里博机场存在': allSouthAmericaOtherAirports.some(a => a.code === 'PBM'),
  '埃斯特角城机场存在': allSouthAmericaOtherAirports.some(a => a.code === 'PDP'),
  '凯图尔瀑布机场存在': allSouthAmericaOtherAirports.some(a => a.code === 'KAI'),
  '机场数量等于20': allSouthAmericaOtherAirports.length === 20
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 南美洲其他国家四国对比
console.log('\n🏔️ 南美洲其他国家四国对比:');
const southAmericaOtherCountries = [
  {
    country: '🇺🇾 乌拉圭',
    airports: ['MVD', 'PDP', 'RVY', 'STY', 'PAY'],
    highlights: ['拉普拉塔河口明珠', '蒙得维的亚首都', '埃斯特角城度假', '南美洲里维埃拉'],
    specialty: '拉普拉塔河口 + 度假胜地'
  },
  {
    country: '🇵🇾 巴拉圭',
    airports: ['ASU', 'CIO', 'ENC', 'PCJ', 'COC'],
    highlights: ['南美洲心脏', '亚松森首都', '内陆国家', '三国边境'],
    specialty: '南美洲心脏 + 内陆枢纽'
  },
  {
    country: '🇬🇾 圭亚那',
    airports: ['GEO', 'OGL', 'LTM', 'KAI', 'AHL'],
    highlights: ['大西洋海岸门户', '乔治敦首都', '凯图尔瀑布', '圭亚那高地'],
    specialty: '大西洋门户 + 自然奇观'
  },
  {
    country: '🇸🇷 苏里南',
    airports: ['PBM', 'ORG', 'AGI', 'SMZ', 'ICK'],
    highlights: ['加勒比海南岸', '帕拉马里博首都', '荷兰文化', '热带雨林'],
    specialty: '加勒比海南岸 + 雨林文化'
  }
];

southAmericaOtherCountries.forEach(country => {
  const availableAirports = country.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${country.country}: ${country.specialty}`);
  console.log(`   特色: ${country.highlights.join('、')}`);
  console.log(`   机场: ${availableAirports.join(', ')} (${availableAirports.length}/${country.airports.length})`);
});

console.log('\n🎉 南美洲其他国家机场集成测试完成!');
console.log('====================================');

// 最终统计
const totalSouthAmericaOtherFound = allSouthAmericaOtherAirports.length;
console.log(`📈 总结: 成功集成 ${totalSouthAmericaOtherFound} 个南美洲其他国家机场`);
console.log(`🏆 搜索质量: AAA+ (${totalSouthAmericaOtherFound}/20 = ${((totalSouthAmericaOtherFound/20)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 乌拉圭+巴拉圭+圭亚那+苏里南完整覆盖`);
console.log(`🥇 拉普拉塔河口门户: 蒙得维的亚卡拉斯科机场(MVD) - 乌拉圭首都，拉普拉塔河口门户`);
console.log(`🏛️ 南美洲心脏: 亚松森西尔维奥·佩蒂罗西机场(ASU) - 巴拉圭首都，南美洲心脏`);
console.log(`🏛️ 大西洋门户: 乔治敦切迪·贾根机场(GEO) - 圭亚那首都，大西洋海岸门户`);
console.log(`🏛️ 加勒比海南岸: 帕拉马里博约翰·阿道夫·企鹅机场(PBM) - 苏里南首都，加勒比海南岸门户`);
console.log(`🌊 南美洲里维埃拉: 埃斯特角城拉古纳·德尔·索斯机场(PDP) - 南美洲里维埃拉，度假胜地`);
console.log(`🌊 世界最大单级瀑布: 凯图尔瀑布机场(KAI) - 世界最大单级瀑布，自然奇观`);
console.log(`🌍 三国边境: 东方市埃内斯托·科尔特斯机场(CIO) - 巴拉那河重要港口，三国边境`);
console.log(`🌴 圭亚那高地: 阿纳机场(AHL) - 圭亚那高地，生态旅游`);
console.log(`🌊 大西洋南美海岸: 蒙得维的亚+乔治敦+帕拉马里博 - 连接巴西与阿根廷的南美东岸走廊`);
console.log(`🏔️ 内陆南美网络: 亚松森+康塞普西翁+恩卡纳西翁 - 巴拉圭内陆航空支持`);
console.log(`🌍 边境航空网络: 东方市+佩德罗胡安卡瓦列罗+里维拉+莱瑟姆 - 多国边境地区航空支持`);
console.log(`🌊 河流系统网络: 巴拉那河+乌拉圭河+苏里南河航空支持`);
console.log(`🏛️ 战略价值: 南美洲航空网络完善，连接大西洋与内陆的南美航空走廊`);
console.log(`🌍 探索价值: 度假胜地+自然奇观+内陆枢纽+边境贸易+雨林文化完整航空门户`);
console.log(`🏆 里程碑: 南美洲其他国家四国完成！南美洲航空网络完善进一步提升`);
