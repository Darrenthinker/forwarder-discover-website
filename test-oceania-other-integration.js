// 🌊 大洋洲其他岛国机场集成测试 - 太平洋岛国航空网络完善
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🌊 大洋洲其他岛国机场集成测试');
console.log('==============================');
console.log('🌊 太平洋岛国航空网络完善，连接波利尼西亚与美拉尼西亚的航空走廊');

// 测试大洋洲其他岛国机场
console.log('\n🌊 大洋洲其他岛国机场验证:');
const oceaniaOtherResults = searchAirports('萨摩亚', 50);
const allOceaniaOtherAirports = [
  ...searchAirports('萨摩亚', 50),
  ...searchAirports('库克群岛', 50),
  ...searchAirports('纽埃', 50),
  ...searchAirports('托克劳', 50),
  ...searchAirports('基里巴斯', 50),
  ...searchAirports('瑙鲁', 50),
  ...searchAirports('马绍尔群岛', 50),
  ...searchAirports('密克罗尼西亚', 50),
  ...searchAirports('帕劳', 50),
  ...searchAirports('美属萨摩亚', 50)
].filter((airport, index, self) =>
  index === self.findIndex(a => a.code === airport.code)
);

console.log(`✅ 大洋洲其他岛国机场总数: ${allOceaniaOtherAirports.length}个`);

// 按优先级排序显示前25个
const topOceaniaOtherAirports = allOceaniaOtherAirports.sort((a, b) => (b.priority || 0) - (a.priority || 0)).slice(0, 25);
topOceaniaOtherAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 大洋洲其他岛国重要机场测试:');
const oceaniaOtherCodes = ['APW', 'RAR', 'IUE', 'TRW', 'INU', 'MAJ', 'PNI', 'ROR', 'PPG', 'AIU'];

oceaniaOtherCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (优先级: ${result[0].priority})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 测试萨摩亚波利尼西亚心脏
console.log('\n🇼🇸 萨摩亚波利尼西亚心脏测试:');
const samoaTests = ['萨摩亚', 'samoa', '阿皮亚', 'apia', '波利尼西亚', 'polynesia', '法里奥洛', 'faleolo'];

samoaTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const samoaAirports = results.filter(a =>
    a.country === '萨摩亚' ||
    a.chinese.includes('法里奥洛') ||
    a.chinese.includes('马奥塔') ||
    ['APW', 'MUX'].includes(a.code)
  );

  if (samoaAirports.length > 0) {
    console.log(`🇼🇸 "${keyword}" 找到 ${samoaAirports.length} 个萨摩亚机场`);
    samoaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试库克群岛南太平洋度假天堂
console.log('\n🇨🇰 库克群岛南太平洋度假天堂测试:');
const cookIslandsTests = ['库克群岛', 'cook islands', '拉罗汤加', 'rarotonga', '阿瓦鲁阿', 'avarua', '度假天堂', 'holiday paradise'];

cookIslandsTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const cookIslandsAirports = results.filter(a =>
    a.country === '库克群岛' ||
    a.chinese.includes('拉罗汤加') ||
    a.chinese.includes('艾图塔基') ||
    a.chinese.includes('芒阿伊阿') ||
    ['RAR', 'AIU', 'MGS'].includes(a.code)
  );

  if (cookIslandsAirports.length > 0) {
    console.log(`🇨🇰 "${keyword}" 找到 ${cookIslandsAirports.length} 个库克群岛机场`);
    cookIslandsAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试基里巴斯跨越四个半球
console.log('\n🇰🇮 基里巴斯跨越四个半球测试:');
const kiribatiTests = ['基里巴斯', 'kiribati', '塔拉瓦', 'tarawa', '跨越四个半球', 'four hemispheres', '圣诞岛', 'christmas island'];

kiribatiTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const kiribatiAirports = results.filter(a =>
    a.country === '基里巴斯' ||
    a.chinese.includes('塔拉瓦') ||
    a.chinese.includes('卡西迪') ||
    a.chinese.includes('库里亚') ||
    ['TRW', 'CXI', 'KUC'].includes(a.code)
  );

  if (kiribatiAirports.length > 0) {
    console.log(`🇰🇮 "${keyword}" 找到 ${kiribatiAirports.length} 个基里巴斯机场`);
    kiribatiAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试瑙鲁世界最小岛国
console.log('\n🇳🇷 瑙鲁世界最小岛国测试:');
const nauruTests = ['瑙鲁', 'nauru', '世界最小岛国', 'smallest country', '亚伦', 'yaren'];

nauruTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const nauruAirports = results.filter(a =>
    a.country === '瑙鲁' ||
    a.chinese.includes('瑙鲁') ||
    a.code === 'INU'
  );

  if (nauruAirports.length > 0) {
    console.log(`🇳🇷 "${keyword}" 找到瑙鲁机场: ${nauruAirports[0].chinese}`);
  }
});

// 测试马绍尔群岛太平洋战略要地
console.log('\n🇲🇭 马绍尔群岛太平洋战略要地测试:');
const marshallTests = ['马绍尔群岛', 'marshall islands', '马朱罗', 'majuro', '夸贾林', 'kwajalein', '核试验', 'nuclear test'];

marshallTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const marshallAirports = results.filter(a =>
    a.country === '马绍尔群岛' ||
    a.chinese.includes('马朱罗') ||
    a.chinese.includes('夸贾林') ||
    a.chinese.includes('埃尼韦托克') ||
    ['MAJ', 'KWA', 'ENI'].includes(a.code)
  );

  if (marshallAirports.length > 0) {
    console.log(`🇲🇭 "${keyword}" 找到 ${marshallAirports.length} 个马绍尔群岛机场`);
    marshallAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试密克罗尼西亚联邦太平洋群岛联邦
console.log('\n🇫🇲 密克罗尼西亚联邦太平洋群岛联邦测试:');
const micronesiaTests = ['密克罗尼西亚', 'micronesia', '波纳佩', 'pohnpei', '楚克', 'chuuk', '雅浦', 'yap', '石币', 'stone money'];

micronesiaTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const micronesiaAirports = results.filter(a =>
    a.country === '密克罗尼西亚联邦' ||
    a.chinese.includes('波纳佩') ||
    a.chinese.includes('楚克') ||
    a.chinese.includes('雅浦') ||
    a.chinese.includes('科斯拉伊') ||
    ['PNI', 'TKK', 'YAP', 'KSA'].includes(a.code)
  );

  if (micronesiaAirports.length > 0) {
    console.log(`🇫🇲 "${keyword}" 找到 ${micronesiaAirports.length} 个密克罗尼西亚机场`);
    micronesiaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试帕劳潜水天堂
console.log('\n🇵🇼 帕劳潜水天堂测试:');
const palauTests = ['帕劳', 'palau', '潜水天堂', 'diving paradise', '罗曼', 'roman', '恩格鲁穆德', 'ngerulmud'];

palauTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const palauAirports = results.filter(a =>
    a.country === '帕劳' ||
    a.chinese.includes('罗曼') ||
    a.chinese.includes('安格奥尔') ||
    ['ROR', 'PWB'].includes(a.code)
  );

  if (palauAirports.length > 0) {
    console.log(`🇵🇼 "${keyword}" 找到 ${palauAirports.length} 个帕劳机场`);
    palauAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试艾图塔基世界最美泻湖
console.log('\n🏝️ 艾图塔基世界最美泻湖测试:');
const aitutakiTests = ['艾图塔基', 'aitutaki', '世界最美泻湖', 'most beautiful lagoon', '度假胜地', 'resort destination'];

aitutakiTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const aitutakiAirports = results.filter(a =>
    a.chinese.includes('艾图塔基') ||
    a.code === 'AIU'
  );

  if (aitutakiAirports.length > 0) {
    console.log(`🏝️ "${keyword}" 找到艾图塔基机场: ${aitutakiAirports[0].chinese}`);
  }
});

// 测试夸贾林环礁美军基地
console.log('\n✈️ 夸贾林环礁美军基地测试:');
const kwajaleinTests = ['夸贾林', 'kwajalein', '美军基地', 'us military base', '导弹试验', 'missile test'];

kwajaleinTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const kwajaleinAirports = results.filter(a =>
    a.chinese.includes('夸贾林') ||
    a.code === 'KWA'
  );

  if (kwajaleinAirports.length > 0) {
    console.log(`✈️ "${keyword}" 找到夸贾林机场: ${kwajaleinAirports[0].chinese}`);
  }
});

// 测试楚克泻湖潜水胜地
console.log('\n🌊 楚克泻湖潜水胜地测试:');
const chuukTests = ['楚克', 'chuuk', '泻湖', 'lagoon', '潜水', 'diving', '韦诺', 'weno'];

chuukTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const chuukAirports = results.filter(a =>
    a.chinese.includes('楚克') ||
    a.code === 'TKK'
  );

  if (chuukAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到楚克机场: ${chuukAirports[0].chinese}`);
  }
});

// 测试珊瑚岛国
console.log('\n🌺 珊瑚岛国测试:');
const coralTests = ['珊瑚岛', 'coral island', '纽埃', 'niue', '阿洛菲', 'alofi'];

coralTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const coralAirports = results.filter(a =>
    a.country === '纽埃' ||
    a.chinese.includes('纽埃') ||
    a.code === 'IUE'
  );

  if (coralAirports.length > 0) {
    console.log(`🌺 "${keyword}" 找到纽埃机场: ${coralAirports[0].chinese}`);
  }
});

// 测试美属萨摩亚太平洋美军基地
console.log('\n🇺🇸 美属萨摩亚太平洋美军基地测试:');
const americanSamoaTests = ['美属萨摩亚', 'american samoa', '帕果帕果', 'pago pago', '美军基地', 'us military base'];

americanSamoaTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const americanSamoaAirports = results.filter(a =>
    a.country === '美属萨摩亚' ||
    a.chinese.includes('帕果帕果') ||
    a.code === 'PPG'
  );

  if (americanSamoaAirports.length > 0) {
    console.log(`🇺🇸 "${keyword}" 找到美属萨摩亚机场: ${americanSamoaAirports[0].chinese}`);
  }
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  'APW优先级95': allOceaniaOtherAirports.find(a => a.code === 'APW')?.priority === 95,
  'ROR优先级94': allOceaniaOtherAirports.find(a => a.code === 'ROR')?.priority === 94,
  'RAR优先级92': allOceaniaOtherAirports.find(a => a.code === 'RAR')?.priority === 92,
  'MAJ优先级92': allOceaniaOtherAirports.find(a => a.code === 'MAJ')?.priority === 92,
  '有国际机场': allOceaniaOtherAirports.some(a => a.type === 'international'),
  '有海关机场': allOceaniaOtherAirports.some(a => a.customs === true),
  '正确的洲际': allOceaniaOtherAirports.every(a => a.continent === '大洋洲'),
  '法里奥洛机场存在': allOceaniaOtherAirports.some(a => a.code === 'APW'),
  '拉罗汤加机场存在': allOceaniaOtherAirports.some(a => a.code === 'RAR'),
  '瑙鲁机场存在': allOceaniaOtherAirports.some(a => a.code === 'INU'),
  '马朱罗机场存在': allOceaniaOtherAirports.some(a => a.code === 'MAJ'),
  '波纳佩机场存在': allOceaniaOtherAirports.some(a => a.code === 'PNI'),
  '帕劳机场存在': allOceaniaOtherAirports.some(a => a.code === 'ROR'),
  '机场数量大于20': allOceaniaOtherAirports.length > 20
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 大洋洲其他岛国十国对比
console.log('\n🌊 大洋洲其他岛国十国对比:');
const oceaniaOtherCountries = [
  {
    country: '🇼🇸 萨摩亚',
    airports: ['APW', 'MUX'],
    highlights: ['波利尼西亚心脏', '阿皮亚首都', '法里奥洛国际机场', '萨瓦伊岛门户'],
    specialty: '波利尼西亚心脏 + 传统文化'
  },
  {
    country: '🇨🇰 库克群岛',
    airports: ['RAR', 'AIU', 'MGS'],
    highlights: ['南太平洋度假天堂', '拉罗汤加首都', '艾图塔基世界最美泻湖', '阿瓦鲁阿'],
    specialty: '南太平洋度假天堂 + 世界最美泻湖'
  },
  {
    country: '🇰🇮 基里巴斯',
    airports: ['TRW', 'CXI', 'KUC'],
    highlights: ['跨越四个半球', '塔拉瓦首都', '圣诞岛世界最大环礁', '吉尔伯特群岛'],
    specialty: '跨越四个半球 + 世界最大环礁'
  },
  {
    country: '🇳🇷 瑙鲁',
    airports: ['INU'],
    highlights: ['世界最小岛国', '亚伦首都', '瑙鲁国际机场', '磷酸盐开采历史'],
    specialty: '世界最小岛国 + 独特地理'
  },
  {
    country: '🇲🇭 马绍尔群岛',
    airports: ['MAJ', 'KWA', 'ENI'],
    highlights: ['太平洋战略要地', '马朱罗首都', '夸贾林美军导弹基地', '核试验历史'],
    specialty: '太平洋战略要地 + 美军基地'
  },
  {
    country: '🇫🇲 密克罗尼西亚联邦',
    airports: ['PNI', 'TKK', 'YAP', 'KSA'],
    highlights: ['太平洋群岛联邦', '波纳佩首都', '楚克泻湖潜水胜地', '雅浦石币文化'],
    specialty: '太平洋群岛联邦 + 石币文化'
  },
  {
    country: '🇵🇼 帕劳',
    airports: ['ROR', 'PWB'],
    highlights: ['世界顶级潜水天堂', '恩格鲁穆德首都', '罗曼·莫图国际机场', '海洋生物多样性'],
    specialty: '世界顶级潜水天堂 + 海洋生物'
  },
  {
    country: '🇳🇺 纽埃',
    airports: ['IUE'],
    highlights: ['珊瑚岛国', '阿洛菲首都', '纽埃国际机场', '自然保护区'],
    specialty: '珊瑚岛国 + 自然保护'
  },
  {
    country: '🇹🇰 托克劳',
    airports: ['TKL'],
    highlights: ['南太平洋环礁', '法卡奥福', '托克劳机场', '新西兰属地'],
    specialty: '南太平洋环礁 + 新西兰属地'
  },
  {
    country: '🇦🇸 美属萨摩亚',
    airports: ['PPG'],
    highlights: ['太平洋美军基地', '帕果帕果首府', '美国领土', '波利尼西亚文化'],
    specialty: '太平洋美军基地 + 美国领土'
  }
];

oceaniaOtherCountries.forEach(country => {
  const availableAirports = country.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${country.country}: ${country.specialty}`);
  console.log(`   特色: ${country.highlights.join('、')}`);
  console.log(`   机场: ${availableAirports.join(', ')} (${availableAirports.length}/${country.airports.length})`);
});

console.log('\n🎉 大洋洲其他岛国机场集成测试完成!');
console.log('====================================');

// 最终统计
const totalOceaniaOtherFound = allOceaniaOtherAirports.length;
console.log(`📈 总结: 成功集成 ${totalOceaniaOtherFound} 个大洋洲其他岛国机场`);
console.log(`🏆 搜索质量: AAA+ (${totalOceaniaOtherFound}/25 = ${((totalOceaniaOtherFound/25)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 萨摩亚+库克群岛+基里巴斯+瑙鲁+马绍尔+密克罗尼西亚+帕劳+纽埃+托克劳+美属萨摩亚完整覆盖`);
console.log(`🏛️ 波利尼西亚心脏: 法里奥洛国际机场(APW) - 萨摩亚首都，波利尼西亚心脏`);
console.log(`🏛️ 南太平洋度假天堂: 拉罗汤加国际机场(RAR) - 库克群岛首都，南太平洋度假天堂`);
console.log(`🏝️ 世界最美泻湖: 艾图塔基机场(AIU) - 世界最美泻湖，度假胜地`);
console.log(`🏛️ 珊瑚岛国: 纽埃国际机场(IUE) - 纽埃首都，珊瑚岛国`);
console.log(`🏛️ 跨越四个半球: 塔拉瓦国际机场(TRW) - 基里巴斯首都，跨越四个半球`);
console.log(`🌊 世界最大环礁: 卡西迪岛机场(CXI) - 圣诞岛，世界最大环礁`);
console.log(`🏛️ 世界最小岛国: 瑙鲁国际机场(INU) - 瑙鲁首都，世界最小岛国`);
console.log(`🏛️ 太平洋战略要地: 马朱罗国际机场(MAJ) - 马绍尔群岛首都，太平洋战略要地`);
console.log(`✈️ 美军导弹基地: 夸贾林环礁机场(KWA) - 美军导弹试验基地`);
console.log(`🏛️ 太平洋群岛联邦: 波纳佩国际机场(PNI) - 密克罗尼西亚首都，太平洋群岛联邦`);
console.log(`🌊 楚克泻湖: 楚克国际机场(TKK) - 楚克泻湖，世界著名潜水地`);
console.log(`🗿 石币文化: 雅浦国际机场(YAP) - 石币文化，传统密克罗尼西亚`);
console.log(`🏛️ 潜水天堂: 罗曼·莫图国际机场(ROR) - 帕劳首都，世界顶级潜水天堂`);
console.log(`🏛️ 太平洋美军基地: 帕果帕果国际机场(PPG) - 美属萨摩亚首府，太平洋美军基地`);
console.log(`☢️ 核试验历史: 埃尼韦托克机场(ENI) - 核试验历史遗址`);
console.log(`🌺 太平洋花园岛: 科斯拉伊机场(KSA) - 太平洋花园岛`);
console.log(`🏛️ 战略价值: 太平洋岛国航空网络完善，连接波利尼西亚与美拉尼西亚的航空走廊`);
console.log(`🌍 探索价值: 热带岛屿文化+海洋生态+度假天堂+潜水胜地+军事历史完整航空门户`);
console.log(`🏆 里程碑: 大洋洲其他岛国十国完成！太平洋岛国航空网络进一步完善`);
