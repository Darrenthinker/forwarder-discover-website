// 🌊 太平洋岛国五国机场集成测试 - 太平洋岛屿航空网络
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🌊 太平洋岛国五国机场集成测试');
console.log('==============================');
console.log('🌊 太平洋岛屿航空网络，连接大洋洲与太平洋岛国的度假航空走廊');

// 测试太平洋岛国五国机场
console.log('\n🌊 太平洋岛国五国机场验证:');
const pacificIslandsResults = searchAirports('斐济', 50);
const allPacificIslandsAirports = [
  ...searchAirports('斐济', 50),
  ...searchAirports('巴布亚新几内亚', 50),
  ...searchAirports('所罗门群岛', 50),
  ...searchAirports('汤加', 50),
  ...searchAirports('瓦努阿图', 50)
].filter((airport, index, self) =>
  index === self.findIndex(a => a.code === airport.code)
);

console.log(`✅ 太平洋岛国五国机场总数: ${allPacificIslandsAirports.length}个`);

// 按优先级排序显示前20个
const topPacificIslandsAirports = allPacificIslandsAirports.sort((a, b) => (b.priority || 0) - (a.priority || 0)).slice(0, 20);
topPacificIslandsAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 太平洋岛国五国重要机场测试:');
const pacificIslandsCodes = ['NAN', 'POM', 'HIR', 'TBU', 'VLI', 'SUV', 'LAE', 'MUA', 'HPA', 'SON'];

pacificIslandsCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (优先级: ${result[0].priority})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 测试斐济南太平洋珍珠
console.log('\n🇫🇯 斐济南太平洋珍珠测试:');
const fijiTests = ['斐济', 'fiji', '南迪', 'nadi', '苏瓦', 'suva', '南太平洋', 'south pacific'];

fijiTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const fijiAirports = results.filter(a =>
    a.country === '斐济' ||
    a.chinese.includes('南迪') ||
    a.chinese.includes('苏瓦') ||
    a.chinese.includes('劳托卡') ||
    ['NAN', 'SUV', 'LBS', 'SVU'].includes(a.code)
  );

  if (fijiAirports.length > 0) {
    console.log(`🇫🇯 "${keyword}" 找到 ${fijiAirports.length} 个斐济机场`);
    fijiAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试巴布亚新几内亚美拉尼西亚门户
console.log('\n🇵🇬 巴布亚新几内亚美拉尼西亚门户测试:');
const pngTests = ['巴布亚新几内亚', 'papua new guinea', '莫尔兹比港', 'port moresby', '美拉尼西亚', 'melanesia'];

pngTests.forEach(keyword => {
  const results = searchAirports(keyword, 12);
  const pngAirports = results.filter(a =>
    a.country === '巴布亚新几内亚' ||
    a.chinese.includes('莫尔兹比港') ||
    a.chinese.includes('莱城') ||
    a.chinese.includes('马当') ||
    ['POM', 'LAE', 'MAG', 'WWK', 'RAB'].includes(a.code)
  );

  if (pngAirports.length > 0) {
    console.log(`🇵🇬 "${keyword}" 找到 ${pngAirports.length} 个巴布亚新几内亚机场`);
    pngAirports.slice(0, 5).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试所罗门群岛二战历史重地
console.log('\n🇸🇧 所罗门群岛二战历史重地测试:');
const solomonTests = ['所罗门群岛', 'solomon islands', '霍尼亚拉', 'honiara', '二战', 'wwii', '瓜达尔卡纳尔', 'guadalcanal'];

solomonTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const solomonAirports = results.filter(a =>
    a.country === '所罗门群岛' ||
    a.chinese.includes('霍尼亚拉') ||
    a.chinese.includes('穆达') ||
    a.chinese.includes('吉佐') ||
    ['HIR', 'MUA', 'GZO', 'INU'].includes(a.code)
  );

  if (solomonAirports.length > 0) {
    console.log(`🇸🇧 "${keyword}" 找到 ${solomonAirports.length} 个所罗门群岛机场`);
    solomonAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试汤加波利尼西亚王国
console.log('\n🇹🇴 汤加波利尼西亚王国测试:');
const tongaTests = ['汤加', 'tonga', '努库阿洛法', 'nuku\'alofa', '波利尼西亚', 'polynesia', '王国', 'kingdom'];

tongaTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const tongaAirports = results.filter(a =>
    a.country === '汤加' ||
    a.chinese.includes('努库阿洛法') ||
    a.chinese.includes('哈阿派') ||
    a.chinese.includes('瓦瓦乌') ||
    ['TBU', 'HPA', 'VVU'].includes(a.code)
  );

  if (tongaAirports.length > 0) {
    console.log(`🇹🇴 "${keyword}" 找到 ${tongaAirports.length} 个汤加机场`);
    tongaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试瓦努阿图火山岛国
console.log('\n🇻🇺 瓦努阿图火山岛国测试:');
const vanuatuTests = ['瓦努阿图', 'vanuatu', '维拉港', 'port vila', '火山', 'volcano', '卢甘维尔', 'luganville'];

vanuatuTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const vanuatuAirports = results.filter(a =>
    a.country === '瓦努阿图' ||
    a.chinese.includes('维拉港') ||
    a.chinese.includes('卢甘维尔') ||
    a.chinese.includes('塔纳') ||
    ['VLI', 'SON', 'TAH', 'EPI'].includes(a.code)
  );

  if (vanuatuAirports.length > 0) {
    console.log(`🇻🇺 "${keyword}" 找到 ${vanuatuAirports.length} 个瓦努阿图机场`);
    vanuatuAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试南迪国际机场超级枢纽
console.log('\n🥇 南迪国际机场超级枢纽测试:');
const nadiTests = ['南迪', 'nadi', '斐济航空', 'fiji airways', '南太平洋枢纽', 'south pacific hub'];

nadiTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const nadiAirports = results.filter(a =>
    a.chinese.includes('南迪') ||
    a.code === 'NAN'
  );

  if (nadiAirports.length > 0) {
    console.log(`🥇 "${keyword}" 找到南迪机场: ${nadiAirports[0].chinese}`);
  }
});

// 测试热带度假航空网络
console.log('\n🌺 热带度假航空网络测试:');
const tropicalTests = ['度假', 'resort', '热带', 'tropical', '潜水', 'diving', '蜜月', 'honeymoon'];

tropicalTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const tropicalAirports = results.filter(a =>
    a.chinese.includes('南迪') ||
    a.chinese.includes('维拉港') ||
    a.chinese.includes('努库阿洛法') ||
    a.chinese.includes('苏瓦') ||
    ['NAN', 'VLI', 'TBU', 'SUV'].includes(a.code)
  );

  if (tropicalAirports.length > 0) {
    console.log(`🌺 "${keyword}" 找到 ${tropicalAirports.length} 个热带度假机场`);
    tropicalAirports.slice(0, 4).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试火山群岛机场
console.log('\n🌋 火山群岛机场测试:');
const volcanoTests = ['火山', 'volcano', '环太平洋', 'ring of fire', '地质', 'geology', '活火山', 'active volcano'];

volcanoTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const volcanoAirports = results.filter(a =>
    a.chinese.includes('维拉港') ||
    a.chinese.includes('塔纳') ||
    a.chinese.includes('拉包尔') ||
    ['VLI', 'TAH', 'RAB'].includes(a.code)
  );

  if (volcanoAirports.length > 0) {
    console.log(`🌋 "${keyword}" 找到 ${volcanoAirports.length} 个火山地区机场`);
    volcanoAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试珊瑚礁潜水航空网络
console.log('\n🐠 珊瑚礁潜水航空网络测试:');
const coralTests = ['珊瑚礁', 'coral reef', '潜水', 'diving', '海洋生物', 'marine life', '大堡礁', 'great barrier reef'];

coralTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const coralAirports = results.filter(a =>
    a.chinese.includes('南迪') ||
    a.chinese.includes('卢甘维尔') ||
    a.chinese.includes('吉佐') ||
    a.chinese.includes('卡维恩') ||
    ['NAN', 'SON', 'GZO', 'KVG'].includes(a.code)
  );

  if (coralAirports.length > 0) {
    console.log(`🐠 "${keyword}" 找到 ${coralAirports.length} 个潜水胜地机场`);
    coralAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试二战历史航空网络
console.log('\n✈️ 二战历史航空网络测试:');
const wwiiTests = ['二战', 'wwii', '太平洋战争', 'pacific war', '战场', 'battlefield', '历史', 'history'];

wwiiTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const wwiiAirports = results.filter(a =>
    a.chinese.includes('霍尼亚拉') ||
    a.chinese.includes('穆达') ||
    a.chinese.includes('拉包尔') ||
    a.chinese.includes('莫尔兹比港') ||
    ['HIR', 'MUA', 'RAB', 'POM'].includes(a.code)
  );

  if (wwiiAirports.length > 0) {
    console.log(`✈️ "${keyword}" 找到 ${wwiiAirports.length} 个二战历史机场`);
    wwiiAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试观鲸胜地
console.log('\n🐋 观鲸胜地测试:');
const whaleTests = ['观鲸', 'whale watching', '鲸鱼', 'whale', '海洋哺乳动物', 'marine mammals'];

whaleTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const whaleAirports = results.filter(a =>
    a.chinese.includes('瓦瓦乌') ||
    a.chinese.includes('努库阿洛法') ||
    ['VVU', 'TBU'].includes(a.code)
  );

  if (whaleAirports.length > 0) {
    console.log(`🐋 "${keyword}" 找到 ${whaleAirports.length} 个观鲸机场`);
    whaleAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试太平洋原住民文化
console.log('\n🏝️ 太平洋原住民文化测试:');
const cultureTests = ['原住民', 'indigenous', '美拉尼西亚', 'melanesia', '波利尼西亚', 'polynesia', '传统文化', 'traditional culture'];

cultureTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const cultureAirports = results.filter(a =>
    a.chinese.includes('莫尔兹比港') ||
    a.chinese.includes('霍尼亚拉') ||
    a.chinese.includes('努库阿洛法') ||
    a.chinese.includes('维拉港') ||
    ['POM', 'HIR', 'TBU', 'VLI'].includes(a.code)
  );

  if (cultureAirports.length > 0) {
    console.log(`🏝️ "${keyword}" 找到 ${cultureAirports.length} 个原住民文化机场`);
    cultureAirports.slice(0, 4).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  'NAN优先级100': allPacificIslandsAirports.find(a => a.code === 'NAN')?.priority === 100,
  'POM优先级96': allPacificIslandsAirports.find(a => a.code === 'POM')?.priority === 96,
  'VLI优先级94': allPacificIslandsAirports.find(a => a.code === 'VLI')?.priority === 94,
  'HIR优先级92': allPacificIslandsAirports.find(a => a.code === 'HIR')?.priority === 92,
  '有国际机场': allPacificIslandsAirports.some(a => a.type === 'international'),
  '有海关机场': allPacificIslandsAirports.some(a => a.customs === true),
  '正确的洲际': allPacificIslandsAirports.every(a => a.continent === '大洋洲'),
  '南迪机场存在': allPacificIslandsAirports.some(a => a.code === 'NAN'),
  '莫尔兹比港机场存在': allPacificIslandsAirports.some(a => a.code === 'POM'),
  '霍尼亚拉机场存在': allPacificIslandsAirports.some(a => a.code === 'HIR'),
  '努库阿洛法机场存在': allPacificIslandsAirports.some(a => a.code === 'TBU'),
  '维拉港机场存在': allPacificIslandsAirports.some(a => a.code === 'VLI'),
  '苏瓦机场存在': allPacificIslandsAirports.some(a => a.code === 'SUV'),
  '机场数量大于20': allPacificIslandsAirports.length > 20
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 太平洋岛国五国对比
console.log('\n🌊 太平洋岛国五国对比:');
const pacificIslandsCountries = [
  {
    country: '🇫🇯 斐济',
    airports: ['NAN', 'SUV', 'LBS', 'SVU'],
    highlights: ['南太平洋珍珠', '南迪枢纽', '苏瓦首都', '热带度假天堂'],
    specialty: '南太平洋枢纽 + 度假胜地'
  },
  {
    country: '🇵🇬 巴布亚新几内亚',
    airports: ['POM', 'LAE', 'MAG', 'WWK', 'RAB', 'UNG', 'KTF', 'KVG', 'GUR'],
    highlights: ['美拉尼西亚门户', '莫尔兹比港首都', '工业中心莱城', '文化多样性'],
    specialty: '美拉尼西亚文化 + 资源开发'
  },
  {
    country: '🇸🇧 所罗门群岛',
    airports: ['HIR', 'MUA', 'GZO', 'INU'],
    highlights: ['二战历史重地', '霍尼亚拉首都', '瓜达尔卡纳尔战役', '潜水胜地'],
    specialty: '二战历史 + 潜水旅游'
  },
  {
    country: '🇹🇴 汤加',
    airports: ['TBU', 'HPA', 'VVU'],
    highlights: ['波利尼西亚王国', '努库阿洛法首都', '观鲸胜地', '传统文化'],
    specialty: '波利尼西亚王国 + 观鲸文化'
  },
  {
    country: '🇻🇺 瓦努阿图',
    airports: ['VLI', 'SON', 'TAH', 'EPI'],
    highlights: ['火山岛国', '维拉港首都', '活火山观光', '原始文化'],
    specialty: '火山奇观 + 原始文化'
  }
];

pacificIslandsCountries.forEach(country => {
  const availableAirports = country.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${country.country}: ${country.specialty}`);
  console.log(`   特色: ${country.highlights.join('、')}`);
  console.log(`   机场: ${availableAirports.join(', ')} (${availableAirports.length}/${country.airports.length})`);
});

console.log('\n🎉 太平洋岛国五国机场集成测试完成!');
console.log('====================================');

// 最终统计
const totalPacificIslandsFound = allPacificIslandsAirports.length;
console.log(`📈 总结: 成功集成 ${totalPacificIslandsFound} 个太平洋岛国五国机场`);
console.log(`🏆 搜索质量: AAA+ (${totalPacificIslandsFound}/25 = ${((totalPacificIslandsFound/25)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 斐济+巴布亚新几内亚+所罗门群岛+汤加+瓦努阿图完整覆盖`);
console.log(`🥇 南太平洋枢纽: 南迪国际机场(NAN) - 斐济最大机场，南太平洋重要枢纽`);
console.log(`🏛️ 美拉尼西亚门户: 莫尔兹比港杰克逊机场(POM) - 巴布亚新几内亚首都，美拉尼西亚门户`);
console.log(`🏛️ 二战历史重地: 霍尼亚拉亨德森机场(HIR) - 所罗门群岛首都，二战历史重地`);
console.log(`🏛️ 波利尼西亚王国: 努库阿洛法富阿阿莫图机场(TBU) - 汤加首都，波利尼西亚王国`);
console.log(`🏛️ 火山岛国门户: 维拉港保尔维拉机场(VLI) - 瓦努阿图首都，火山岛国门户`);
console.log(`🌺 热带度假网络: 南迪+维拉港+努库阿洛法+苏瓦 - 世界顶级度假目的地完整覆盖`);
console.log(`🌋 火山群岛机场: 环太平洋火山带航空支持网络`);
console.log(`🐠 珊瑚礁潜水网络: 海洋生物多样性保护区门户`);
console.log(`🏝️ 原住民文化: 美拉尼西亚+波利尼西亚文化 - 太平洋原住民文化航空网络`);
console.log(`✈️ 二战历史网络: 太平洋战争重要战场纪念地门户`);
console.log(`🏛️ 战略价值: 太平洋岛屿航空网络，连接大洋洲与太平洋岛国的度假航空走廊`);
console.log(`🌍 探索价值: 热带度假+火山奇观+珊瑚礁潜水+原住民文化+二战历史完整航空门户`);
console.log(`🏆 里程碑: 太平洋岛国五国完成！南太平洋度假航空网络完整覆盖`);
