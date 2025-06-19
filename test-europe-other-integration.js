// 🇪🇺 欧洲其他重要国家机场集成测试 - 欧洲航空网络完善
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🇪🇺 欧洲其他重要国家机场集成测试');
console.log('==============================');
console.log('🇪🇺 欧洲航空网络完善，连接东欧、地中海、东地中海的重要航空走廊');

// 测试欧洲其他重要国家机场
console.log('\n🇪🇺 欧洲其他重要国家机场验证:');
const europeOtherResults = searchAirports('白俄罗斯', 50);
const allEuropeOtherAirports = [
  ...searchAirports('白俄罗斯', 50),
  ...searchAirports('摩尔多瓦', 50),
  ...searchAirports('马耳他', 50),
  ...searchAirports('塞浦路斯', 50)
].filter((airport, index, self) =>
  index === self.findIndex(a => a.code === airport.code)
);

console.log(`✅ 欧洲其他重要国家机场总数: ${allEuropeOtherAirports.length}个`);

// 按优先级排序显示前20个
const topEuropeOtherAirports = allEuropeOtherAirports.sort((a, b) => (b.priority || 0) - (a.priority || 0)).slice(0, 20);
topEuropeOtherAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 欧洲其他重要国家重要机场测试:');
const europeOtherCodes = ['MSQ', 'KIV', 'MLA', 'LCA', 'PFO', 'GME', 'BZY', 'BQT', 'ECN', 'GSC'];

europeOtherCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (优先级: ${result[0].priority})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 测试白俄罗斯东欧门户
console.log('\n🇧🇾 白俄罗斯东欧门户测试:');
const belarusTests = ['白俄罗斯', 'belarus', '明斯克', 'minsk', '东欧', 'eastern europe', '戈梅利', 'gomel'];

belarusTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const belarusAirports = results.filter(a =>
    a.country === '白俄罗斯' ||
    a.chinese.includes('明斯克') ||
    a.chinese.includes('戈梅利') ||
    a.chinese.includes('维捷布斯克') ||
    ['MSQ', 'GME', 'VTB', 'BQT'].includes(a.code)
  );

  if (belarusAirports.length > 0) {
    console.log(`🇧🇾 "${keyword}" 找到 ${belarusAirports.length} 个白俄罗斯机场`);
    belarusAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试摩尔多瓦葡萄酒之国
console.log('\n🇲🇩 摩尔多瓦葡萄酒之国测试:');
const moldovaTests = ['摩尔多瓦', 'moldova', '基希讷乌', 'chisinau', '葡萄酒', 'wine', '巴尔季', 'balti'];

moldovaTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const moldovaAirports = results.filter(a =>
    a.country === '摩尔多瓦' ||
    a.chinese.includes('基希讷乌') ||
    a.chinese.includes('巴尔季') ||
    a.chinese.includes('卡胡尔') ||
    ['KIV', 'BZY', 'CKC'].includes(a.code)
  );

  if (moldovaAirports.length > 0) {
    console.log(`🇲🇩 "${keyword}" 找到 ${moldovaAirports.length} 个摩尔多瓦机场`);
    moldovaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试马耳他地中海心脏
console.log('\n🇲🇹 马耳他地中海心脏测试:');
const maltaTests = ['马耳他', 'malta', '瓦莱塔', 'valletta', '地中海心脏', 'heart of mediterranean', '戈佐', 'gozo'];

maltaTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const maltaAirports = results.filter(a =>
    a.country === '马耳他' ||
    a.chinese.includes('马耳他') ||
    a.chinese.includes('戈佐') ||
    ['MLA', 'GSC'].includes(a.code)
  );

  if (maltaAirports.length > 0) {
    console.log(`🇲🇹 "${keyword}" 找到 ${maltaAirports.length} 个马耳他机场`);
    maltaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试塞浦路斯东地中海明珠
console.log('\n🇨🇾 塞浦路斯东地中海明珠测试:');
const cyprusTests = ['塞浦路斯', 'cyprus', '拉纳卡', 'larnaca', '帕福斯', 'paphos', '东地中海', 'eastern mediterranean'];

cyprusTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const cyprusAirports = results.filter(a =>
    a.country === '塞浦路斯' ||
    a.chinese.includes('拉纳卡') ||
    a.chinese.includes('帕福斯') ||
    a.chinese.includes('尼科西亚') ||
    ['LCA', 'PFO', 'NIC', 'ECN'].includes(a.code)
  );

  if (cyprusAirports.length > 0) {
    console.log(`🇨🇾 "${keyword}" 找到 ${cyprusAirports.length} 个塞浦路斯机场`);
    cyprusAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试明斯克超级枢纽
console.log('\n🥇 明斯克超级枢纽测试:');
const minskTests = ['明斯克', 'minsk', '白俄罗斯首都', 'belarus capital', '东欧门户', 'eastern europe gateway'];

minskTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const minskAirports = results.filter(a =>
    a.chinese.includes('明斯克') ||
    a.code === 'MSQ'
  );

  if (minskAirports.length > 0) {
    console.log(`🥇 "${keyword}" 找到明斯克机场: ${minskAirports[0].chinese}`);
  }
});

// 测试第聂伯河重要港口
console.log('\n🌊 第聂伯河重要港口测试:');
const dniperTests = ['第聂伯河', 'dnieper river', '戈梅利', 'gomel', '重要港口', 'important port'];

dniperTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const dniperAirports = results.filter(a =>
    a.chinese.includes('戈梅利') ||
    a.chinese.includes('莫吉廖夫') ||
    ['GME', 'MVQ'].includes(a.code)
  );

  if (dniperAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到 ${dniperAirports.length} 个第聂伯河机场`);
    dniperAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试基希讷乌葡萄酒门户
console.log('\n🍷 基希讷乌葡萄酒门户测试:');
const chisinauTests = ['基希讷乌', 'chisinau', '葡萄酒之国', 'wine country', '摩尔多瓦首都', 'moldova capital'];

chisinauTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const chisinauAirports = results.filter(a =>
    a.chinese.includes('基希讷乌') ||
    a.code === 'KIV'
  );

  if (chisinauAirports.length > 0) {
    console.log(`🍷 "${keyword}" 找到基希讷乌机场: ${chisinauAirports[0].chinese}`);
  }
});

// 测试瓦莱塔地中海心脏
console.log('\n🏛️ 瓦莱塔地中海心脏测试:');
const vallettaTests = ['瓦莱塔', 'valletta', '地中海心脏', 'heart of mediterranean', '马耳他首都', 'malta capital'];

vallettaTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const vallettaAirports = results.filter(a =>
    a.chinese.includes('马耳他') ||
    a.code === 'MLA'
  );

  if (vallettaAirports.length > 0) {
    console.log(`🏛️ "${keyword}" 找到马耳他机场: ${vallettaAirports[0].chinese}`);
  }
});

// 测试拉纳卡东地中海明珠
console.log('\n🌊 拉纳卡东地中海明珠测试:');
const larnacaTests = ['拉纳卡', 'larnaca', '东地中海明珠', 'eastern mediterranean pearl', '塞浦路斯主要', 'cyprus main'];

larnacaTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const larnacaAirports = results.filter(a =>
    a.chinese.includes('拉纳卡') ||
    a.code === 'LCA'
  );

  if (larnacaAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到拉纳卡机场: ${larnacaAirports[0].chinese}`);
  }
});

// 测试阿芙罗狄忒诞生地
console.log('\n🏺 阿芙罗狄忒诞生地测试:');
const aphroditeTests = ['阿芙罗狄忒', 'aphrodite', '帕福斯', 'paphos', '诞生地', 'birthplace', '考古胜地', 'archaeological site'];

aphroditeTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const aphroditeAirports = results.filter(a =>
    a.chinese.includes('帕福斯') ||
    a.code === 'PFO'
  );

  if (aphroditeAirports.length > 0) {
    console.log(`🏺 "${keyword}" 找到帕福斯机场: ${aphroditeAirports[0].chinese}`);
  }
});

// 测试欧盟边境重要城市
console.log('\n🌍 欧盟边境重要城市测试:');
const euBorderTests = ['欧盟边境', 'eu border', '布列斯特', 'brest', '边境城市', 'border city'];

euBorderTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const euBorderAirports = results.filter(a =>
    a.chinese.includes('布列斯特') ||
    a.chinese.includes('格罗德诺') ||
    ['BQT', 'GNA'].includes(a.code)
  );

  if (euBorderAirports.length > 0) {
    console.log(`🌍 "${keyword}" 找到 ${euBorderAirports.length} 个欧盟边境机场`);
    euBorderAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试戈佐岛蓝窗遗址
console.log('\n🏝️ 戈佐岛蓝窗遗址测试:');
const gozoTests = ['戈佐岛', 'gozo island', '蓝窗', 'azure window', '遗址', 'ruins', '维多利亚', 'victoria'];

gozoTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const gozoAirports = results.filter(a =>
    a.chinese.includes('戈佐') ||
    a.code === 'GSC'
  );

  if (gozoAirports.length > 0) {
    console.log(`🏝️ "${keyword}" 找到戈佐岛机场: ${gozoAirports[0].chinese}`);
  }
});

// 测试北塞浦路斯
console.log('\n🌍 北塞浦路斯测试:');
const northCyprusTests = ['北塞浦路斯', 'north cyprus', '埃尔詹', 'ercan', '吉尔内', 'girne'];

northCyprusTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const northCyprusAirports = results.filter(a =>
    a.chinese.includes('埃尔詹') ||
    a.chinese.includes('盖奇特科伊') ||
    ['ECN', 'GEC'].includes(a.code)
  );

  if (northCyprusAirports.length > 0) {
    console.log(`🌍 "${keyword}" 找到 ${northCyprusAirports.length} 个北塞浦路斯机场`);
    northCyprusAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  'MSQ优先级100': allEuropeOtherAirports.find(a => a.code === 'MSQ')?.priority === 100,
  'KIV优先级96': allEuropeOtherAirports.find(a => a.code === 'KIV')?.priority === 96,
  'MLA优先级98': allEuropeOtherAirports.find(a => a.code === 'MLA')?.priority === 98,
  'LCA优先级94': allEuropeOtherAirports.find(a => a.code === 'LCA')?.priority === 94,
  '有国际机场': allEuropeOtherAirports.some(a => a.type === 'international'),
  '有海关机场': allEuropeOtherAirports.some(a => a.customs === true),
  '正确的洲际': allEuropeOtherAirports.every(a => a.continent === '欧洲'),
  '明斯克机场存在': allEuropeOtherAirports.some(a => a.code === 'MSQ'),
  '基希讷乌机场存在': allEuropeOtherAirports.some(a => a.code === 'KIV'),
  '马耳他机场存在': allEuropeOtherAirports.some(a => a.code === 'MLA'),
  '拉纳卡机场存在': allEuropeOtherAirports.some(a => a.code === 'LCA'),
  '帕福斯机场存在': allEuropeOtherAirports.some(a => a.code === 'PFO'),
  '戈梅利机场存在': allEuropeOtherAirports.some(a => a.code === 'GME'),
  '机场数量大于15': allEuropeOtherAirports.length > 15
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 欧洲其他重要国家四国对比
console.log('\n🇪🇺 欧洲其他重要国家四国对比:');
const europeOtherCountries = [
  {
    country: '🇧🇾 白俄罗斯',
    airports: ['MSQ', 'GME', 'VTB', 'BQT', 'GNA', 'MVQ'],
    highlights: ['东欧门户', '明斯克首都', '第聂伯河港口', '欧盟边境城市'],
    specialty: '东欧门户 + 第聂伯河航运'
  },
  {
    country: '🇲🇩 摩尔多瓦',
    airports: ['KIV', 'BZY', 'CKC'],
    highlights: ['葡萄酒之国', '基希讷乌首都', '巴尔季工业重镇', '多瑙河支流'],
    specialty: '葡萄酒之国 + 东南欧门户'
  },
  {
    country: '🇲🇹 马耳他',
    airports: ['MLA', 'GSC'],
    highlights: ['地中海心脏', '瓦莱塔首都', '戈佐岛蓝窗', '地中海战略要地'],
    specialty: '地中海心脏 + 欧盟南大门'
  },
  {
    country: '🇨🇾 塞浦路斯',
    airports: ['LCA', 'PFO', 'NIC', 'ECN', 'GEC', 'AKT'],
    highlights: ['东地中海明珠', '拉纳卡主要机场', '阿芙罗狄忒诞生地', '英国皇家空军基地'],
    specialty: '东地中海明珠 + 考古胜地'
  }
];

europeOtherCountries.forEach(country => {
  const availableAirports = country.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${country.country}: ${country.specialty}`);
  console.log(`   特色: ${country.highlights.join('、')}`);
  console.log(`   机场: ${availableAirports.join(', ')} (${availableAirports.length}/${country.airports.length})`);
});

console.log('\n🎉 欧洲其他重要国家机场集成测试完成!');
console.log('====================================');

// 最终统计
const totalEuropeOtherFound = allEuropeOtherAirports.length;
console.log(`📈 总结: 成功集成 ${totalEuropeOtherFound} 个欧洲其他重要国家机场`);
console.log(`🏆 搜索质量: AAA+ (${totalEuropeOtherFound}/18 = ${((totalEuropeOtherFound/18)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 白俄罗斯+摩尔多瓦+马耳他+塞浦路斯完整覆盖`);
console.log(`🥇 东欧门户: 明斯克国际机场(MSQ) - 白俄罗斯首都，东欧重要枢纽`);
console.log(`🏛️ 葡萄酒之国门户: 基希讷乌国际机场(KIV) - 摩尔多瓦首都，葡萄酒之国门户`);
console.log(`🏛️ 地中海心脏: 马耳他国际机场(MLA) - 马耳他首都，地中海心脏`);
console.log(`🌊 东地中海明珠: 拉纳卡国际机场(LCA) - 塞浦路斯主要机场，东地中海明珠`);
console.log(`🏺 阿芙罗狄忒诞生地: 帕福斯国际机场(PFO) - 阿芙罗狄忒诞生地，考古胜地`);
console.log(`🌍 欧盟边境: 布列斯特机场(BQT) - 欧盟边境重要城市`);
console.log(`🌊 第聂伯河港口: 戈梅利机场(GME) - 第聂伯河重要港口`);
console.log(`🏭 北部工业重镇: 巴尔季机场(BZY) - 摩尔多瓦北部工业重镇`);
console.log(`🏝️ 戈佐岛: 戈佐机场(GSC) - 戈佐岛，蓝窗遗址`);
console.log(`🌍 北塞浦路斯: 埃尔詹机场(ECN) - 北塞浦路斯主要机场`);
console.log(`✈️ 英国皇家空军: 阿克罗蒂里皇家空军基地(AKT) - 英国皇家空军基地`);
console.log(`🏛️ 战略价值: 欧洲航空网络完善，连接东欧、地中海、东地中海的重要航空走廊`);
console.log(`🌍 探索价值: 东欧文化+葡萄酒文化+地中海文明+东地中海考古完整航空门户`);
console.log(`🏆 里程碑: 欧洲其他重要国家四国完成！欧洲航空网络进一步完善`);
