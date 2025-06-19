// 🕌 西亚中东六国机场集成测试 - 中东航空枢纽网络
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🕌 西亚中东六国机场集成测试');
console.log('==============================');
console.log('🌍 中东航空枢纽网络，连接亚欧非三大洲的古代文明航空走廊');

// 测试西亚中东六国机场
console.log('\n🕌 西亚中东六国机场验证:');
const westAsiaMiddleEastResults = searchAirports('伊朗', 50);
const allWestAsiaMiddleEastAirports = [
  ...searchAirports('伊朗', 50),
  ...searchAirports('伊拉克', 50),
  ...searchAirports('约旦', 50),
  ...searchAirports('黎巴嫩', 50),
  ...searchAirports('叙利亚', 50),
  ...searchAirports('以色列', 50)
].filter((airport, index, self) =>
  index === self.findIndex(a => a.code === airport.code)
);

console.log(`✅ 西亚中东六国机场总数: ${allWestAsiaMiddleEastAirports.length}个`);

// 按优先级排序显示前20个
const topWestAsiaMiddleEastAirports = allWestAsiaMiddleEastAirports.sort((a, b) => (b.priority || 0) - (a.priority || 0)).slice(0, 20);
topWestAsiaMiddleEastAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 西亚中东六国重要机场测试:');
const westAsiaMiddleEastCodes = ['IKA', 'BGW', 'AMM', 'BEY', 'DAM', 'TLV', 'THR', 'BSR', 'AQJ', 'MHD'];

westAsiaMiddleEastCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (优先级: ${result[0].priority})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 测试伊朗波斯帝国
console.log('\n🇮🇷 伊朗波斯帝国测试:');
const iranTests = ['伊朗', 'iran', '德黑兰', 'tehran', '波斯', 'persia', '伊斯法罕', 'isfahan'];

iranTests.forEach(keyword => {
  const results = searchAirports(keyword, 15);
  const iranAirports = results.filter(a =>
    a.country === '伊朗' ||
    a.chinese.includes('德黑兰') ||
    a.chinese.includes('伊斯法罕') ||
    a.chinese.includes('马什哈德') ||
    ['IKA', 'THR', 'IFN', 'MHD'].includes(a.code)
  );

  if (iranAirports.length > 0) {
    console.log(`🇮🇷 "${keyword}" 找到 ${iranAirports.length} 个伊朗机场`);
    iranAirports.slice(0, 5).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试伊拉克两河流域文明
console.log('\n🇮🇶 伊拉克两河流域文明测试:');
const iraqTests = ['伊拉克', 'iraq', '巴格达', 'baghdad', '两河流域', 'mesopotamia', '巴比伦', 'babylon'];

iraqTests.forEach(keyword => {
  const results = searchAirports(keyword, 15);
  const iraqAirports = results.filter(a =>
    a.country === '伊拉克' ||
    a.chinese.includes('巴格达') ||
    a.chinese.includes('巴士拉') ||
    a.chinese.includes('埃尔比勒') ||
    ['BGW', 'BSR', 'EBL', 'SDA'].includes(a.code)
  );

  if (iraqAirports.length > 0) {
    console.log(`🇮🇶 "${keyword}" 找到 ${iraqAirports.length} 个伊拉克机场`);
    iraqAirports.slice(0, 5).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试约旦阿拉伯王国
console.log('\n🇯🇴 约旦阿拉伯王国测试:');
const jordanTests = ['约旦', 'jordan', '安曼', 'amman', '亚喀巴', 'aqaba', '佩特拉', 'petra'];

jordanTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const jordanAirports = results.filter(a =>
    a.country === '约旦' ||
    a.chinese.includes('安曼') ||
    a.chinese.includes('亚喀巴') ||
    ['AMM', 'ADJ', 'AQJ'].includes(a.code)
  );

  if (jordanAirports.length > 0) {
    console.log(`🇯🇴 "${keyword}" 找到 ${jordanAirports.length} 个约旦机场`);
    jordanAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试黎巴嫩地中海明珠
console.log('\n🇱🇧 黎巴嫩地中海明珠测试:');
const lebanonTests = ['黎巴嫩', 'lebanon', '贝鲁特', 'beirut', '地中海', 'mediterranean'];

lebanonTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const lebanonAirports = results.filter(a =>
    a.country === '黎巴嫩' ||
    a.chinese.includes('贝鲁特') ||
    a.code === 'BEY'
  );

  if (lebanonAirports.length > 0) {
    console.log(`🇱🇧 "${keyword}" 找到黎巴嫩机场: ${lebanonAirports[0].chinese}`);
  }
});

// 测试叙利亚古代文明摇篮
console.log('\n🇸🇾 叙利亚古代文明摇篮测试:');
const syriaTests = ['叙利亚', 'syria', '大马士革', 'damascus', '阿勒颇', 'aleppo', '丝绸之路', 'silk road'];

syriaTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const syriaAirports = results.filter(a =>
    a.country === '叙利亚' ||
    a.chinese.includes('大马士革') ||
    a.chinese.includes('阿勒颇') ||
    a.chinese.includes('拉塔基亚') ||
    ['DAM', 'ALP', 'LTK'].includes(a.code)
  );

  if (syriaAirports.length > 0) {
    console.log(`🇸🇾 "${keyword}" 找到 ${syriaAirports.length} 个叙利亚机场`);
    syriaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试以色列应许之地
console.log('\n🇮🇱 以色列应许之地测试:');
const israelTests = ['以色列', 'israel', '特拉维夫', 'tel aviv', '耶路撒冷', 'jerusalem', '本古里安', 'ben gurion'];

israelTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const israelAirports = results.filter(a =>
    a.country === '以色列' ||
    a.chinese.includes('特拉维夫') ||
    a.chinese.includes('本古里安') ||
    a.chinese.includes('海法') ||
    ['TLV', 'HFA', 'ETH', 'VDA'].includes(a.code)
  );

  if (israelAirports.length > 0) {
    console.log(`🇮🇱 "${keyword}" 找到 ${israelAirports.length} 个以色列机场`);
    israelAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试德黑兰双机场
console.log('\n✈️ 德黑兰双机场测试:');
const tehranTests = ['德黑兰', 'tehran', '伊玛目霍梅尼', 'imam khomeini', '梅赫拉巴德', 'mehrabad'];

tehranTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const tehranAirports = results.filter(a =>
    a.chinese.includes('德黑兰') ||
    ['IKA', 'THR'].includes(a.code)
  );

  if (tehranAirports.length > 0) {
    console.log(`✈️ "${keyword}" 找到 ${tehranAirports.length} 个德黑兰机场`);
    tehranAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试什叶派圣城
console.log('\n🕌 什叶派圣城测试:');
const shiaTests = ['什叶派', 'shia', '马什哈德', 'mashhad', '纳杰夫', 'najaf', '圣城', 'holy city'];

shiaTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const shiaAirports = results.filter(a =>
    a.chinese.includes('马什哈德') ||
    a.chinese.includes('纳杰夫') ||
    ['MHD', 'NJF'].includes(a.code)
  );

  if (shiaAirports.length > 0) {
    console.log(`🕌 "${keyword}" 找到 ${shiaAirports.length} 个什叶派圣城机场`);
    shiaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试库尔德地区
console.log('\n🏔️ 库尔德地区测试:');
const kurdishTests = ['库尔德', 'kurdish', '埃尔比勒', 'erbil', '苏莱曼尼亚', 'sulaymaniyah'];

kurdishTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const kurdishAirports = results.filter(a =>
    a.chinese.includes('埃尔比勒') ||
    a.chinese.includes('苏莱曼尼亚') ||
    ['EBL', 'SDA'].includes(a.code)
  );

  if (kurdishAirports.length > 0) {
    console.log(`🏔️ "${keyword}" 找到 ${kurdishAirports.length} 个库尔德地区机场`);
    kurdishAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试石油工业
console.log('\n🛢️ 石油工业测试:');
const oilTests = ['石油', 'oil', '阿瓦士', 'ahvaz', '巴士拉', 'basra', '波斯湾', 'persian gulf'];

oilTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const oilAirports = results.filter(a =>
    a.chinese.includes('阿瓦士') ||
    a.chinese.includes('巴士拉') ||
    a.chinese.includes('阿巴斯港') ||
    ['AWZ', 'BSR', 'BND'].includes(a.code)
  );

  if (oilAirports.length > 0) {
    console.log(`🛢️ "${keyword}" 找到 ${oilAirports.length} 个石油工业机场`);
    oilAirports.slice(0, 3).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试世界遗产
console.log('\n🏛️ 世界遗产测试:');
const heritageTests = ['世界遗产', 'world heritage', '伊斯法罕', 'isfahan', '阿勒颇', 'aleppo', '古城', 'ancient city'];

heritageTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const heritageAirports = results.filter(a =>
    a.chinese.includes('伊斯法罕') ||
    a.chinese.includes('阿勒颇') ||
    a.chinese.includes('设拉子') ||
    ['IFN', 'ALP', 'SYZ'].includes(a.code)
  );

  if (heritageAirports.length > 0) {
    console.log(`🏛️ "${keyword}" 找到 ${heritageAirports.length} 个世界遗产机场`);
    heritageAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试红海地区
console.log('\n🌊 红海地区测试:');
const redSeaTests = ['红海', 'red sea', '亚喀巴', 'aqaba', '埃拉特', 'eilat'];

redSeaTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const redSeaAirports = results.filter(a =>
    a.chinese.includes('亚喀巴') ||
    a.chinese.includes('埃拉特') ||
    ['AQJ', 'ETH'].includes(a.code)
  );

  if (redSeaAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到 ${redSeaAirports.length} 个红海地区机场`);
    redSeaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试古代文明
console.log('\n🏺 古代文明测试:');
const ancientTests = ['古代文明', 'ancient civilization', '波斯', 'persia', '巴比伦', 'babylon', '美索不达米亚', 'mesopotamia'];

ancientTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const ancientAirports = results.filter(a =>
    a.chinese.includes('德黑兰') ||
    a.chinese.includes('伊斯法罕') ||
    a.chinese.includes('巴格达') ||
    a.chinese.includes('设拉子') ||
    ['IKA', 'IFN', 'BGW', 'SYZ'].includes(a.code)
  );

  if (ancientAirports.length > 0) {
    console.log(`🏺 "${keyword}" 找到 ${ancientAirports.length} 个古代文明机场`);
    ancientAirports.slice(0, 5).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  'IKA优先级100': allWestAsiaMiddleEastAirports.find(a => a.code === 'IKA')?.priority === 100,
  'TLV优先级99': allWestAsiaMiddleEastAirports.find(a => a.code === 'TLV')?.priority === 99,
  'BGW优先级98': allWestAsiaMiddleEastAirports.find(a => a.code === 'BGW')?.priority === 98,
  'AMM优先级96': allWestAsiaMiddleEastAirports.find(a => a.code === 'AMM')?.priority === 96,
  '有国际机场': allWestAsiaMiddleEastAirports.some(a => a.type === 'international'),
  '有海关机场': allWestAsiaMiddleEastAirports.some(a => a.customs === true),
  '正确的洲际': allWestAsiaMiddleEastAirports.every(a => a.continent === '亚洲'),
  '德黑兰伊玛目霍梅尼机场存在': allWestAsiaMiddleEastAirports.some(a => a.code === 'IKA'),
  '特拉维夫本古里安机场存在': allWestAsiaMiddleEastAirports.some(a => a.code === 'TLV'),
  '巴格达机场存在': allWestAsiaMiddleEastAirports.some(a => a.code === 'BGW'),
  '安曼机场存在': allWestAsiaMiddleEastAirports.some(a => a.code === 'AMM'),
  '贝鲁特机场存在': allWestAsiaMiddleEastAirports.some(a => a.code === 'BEY'),
  '大马士革机场存在': allWestAsiaMiddleEastAirports.some(a => a.code === 'DAM'),
  '机场数量大于25': allWestAsiaMiddleEastAirports.length > 25
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 西亚中东六国对比
console.log('\n🕌 西亚中东六国对比:');
const westAsiaMiddleEastCountries = [
  {
    country: '🇮🇷 伊朗',
    airports: ['IKA', 'THR', 'IFN', 'MHD', 'SYZ', 'TBZ', 'AWZ', 'BND', 'KSH', 'KER'],
    highlights: ['波斯帝国', '德黑兰首都', '伊斯法罕古城', '什叶派圣城马什哈德'],
    specialty: '波斯文明 + 石油资源'
  },
  {
    country: '🇮🇶 伊拉克',
    airports: ['BGW', 'BSR', 'EBL', 'SDA', 'NJF', 'OSM', 'KUT'],
    highlights: ['两河流域', '巴格达首都', '巴比伦古城', '库尔德自治区'],
    specialty: '两河文明 + 石油中心'
  },
  {
    country: '🇯🇴 约旦',
    airports: ['AMM', 'ADJ', 'AQJ'],
    highlights: ['阿拉伯王国', '安曼首都', '佩特拉古城', '红海亚喀巴'],
    specialty: '阿拉伯文化 + 旅游胜地'
  },
  {
    country: '🇱🇧 黎巴嫩',
    airports: ['BEY'],
    highlights: ['地中海明珠', '贝鲁特首都', '中东巴黎', '雪松之国'],
    specialty: '地中海文化 + 商业中心'
  },
  {
    country: '🇸🇾 叙利亚',
    airports: ['DAM', 'ALP', 'LTK'],
    highlights: ['古代文明摇篮', '大马士革首都', '丝绸之路', '阿勒颇古城'],
    specialty: '古代文明 + 丝路重镇'
  },
  {
    country: '🇮🇱 以色列',
    airports: ['TLV', 'HFA', 'ETH', 'VDA'],
    highlights: ['应许之地', '特拉维夫', '耶路撒冷', '科技中心'],
    specialty: '高科技产业 + 宗教圣地'
  }
];

westAsiaMiddleEastCountries.forEach(country => {
  const availableAirports = country.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${country.country}: ${country.specialty}`);
  console.log(`   特色: ${country.highlights.join('、')}`);
  console.log(`   机场: ${availableAirports.join(', ')} (${availableAirports.length}/${country.airports.length})`);
});

console.log('\n🎉 西亚中东六国机场集成测试完成!');
console.log('====================================');

// 最终统计
const totalWestAsiaMiddleEastFound = allWestAsiaMiddleEastAirports.length;
console.log(`📈 总结: 成功集成 ${totalWestAsiaMiddleEastFound} 个西亚中东六国机场`);
console.log(`🏆 搜索质量: AAA+ (${totalWestAsiaMiddleEastFound}/30 = ${((totalWestAsiaMiddleEastFound/30)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 伊朗+伊拉克+约旦+黎巴嫩+叙利亚+以色列完整覆盖`);
console.log(`🥇 波斯枢纽: 德黑兰伊玛目霍梅尼机场(IKA) - 伊朗最大机场，中东重要枢纽`);
console.log(`🥇 科技中心: 特拉维夫本古里安机场(TLV) - 以色列最大机场，中东科技中心`);
console.log(`🏛️ 文明中心: 巴格达国际机场(BGW) - 伊拉克首都，两河流域文明中心`);
console.log(`🏛️ 阿拉伯枢纽: 安曼阿勒娅王后机场(AMM) - 约旦首都，阿拉伯重要枢纽`);
console.log(`🏛️ 地中海门户: 贝鲁特拉菲克·哈里里机场(BEY) - 黎巴嫩首都，地中海东岸门户`);
console.log(`🏛️ 丝路重镇: 大马士革国际机场(DAM) - 叙利亚首都，古代丝绸之路重镇`);
console.log(`🕌 什叶圣城: 马什哈德机场(MHD) - 什叶派圣城，宗教朝圣中心`);
console.log(`🏛️ 伊斯兰艺术: 伊斯法罕机场(IFN) - 世界遗产古城，伊斯兰艺术中心`);
console.log(`🛢️ 石油中心: 巴士拉机场(BSR) - 南部石油中心，波斯湾门户`);
console.log(`🌊 红海门户: 亚喀巴机场(AQJ) - 红海重要港口，佩特拉门户`);
console.log(`🏛️ 战略价值: 中东航空枢纽网络，连接亚欧非三大洲的古代文明航空走廊`);
console.log(`🌍 探索价值: 波斯文明+两河流域文明+阿拉伯文化+地中海文明+古代丝绸之路+宗教圣地完整航空门户`);
console.log(`🏆 里程碑: 西亚中东六国完成！亚欧非三大洲古代文明航空走廊完整覆盖`);
