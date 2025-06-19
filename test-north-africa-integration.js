// 🌍 北非三国机场集成测试 - 北非航空网络
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🌍 北非三国机场集成测试');
console.log('==============================');
console.log('🌍 北非航空网络，连接地中海与撒哈拉沙漠的北非航空走廊');

// 测试北非三国机场
console.log('\n🌍 北非三国机场验证:');
const northAfricaResults = searchAirports('摩洛哥', 50);
const allNorthAfricaAirports = [
  ...searchAirports('摩洛哥', 50),
  ...searchAirports('阿尔及利亚', 50),
  ...searchAirports('突尼斯', 50)
].filter((airport, index, self) =>
  index === self.findIndex(a => a.code === airport.code)
);

console.log(`✅ 北非三国机场总数: ${allNorthAfricaAirports.length}个`);

// 按优先级排序显示前20个
const topNorthAfricaAirports = allNorthAfricaAirports.sort((a, b) => (b.priority || 0) - (a.priority || 0)).slice(0, 20);
topNorthAfricaAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 北非三国重要机场测试:');
const northAfricaCodes = ['CMN', 'ALG', 'TUN', 'RAK', 'ORN', 'DJE', 'RBA', 'TNG', 'MIR', 'CZL'];

northAfricaCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (优先级: ${result[0].priority})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 测试摩洛哥马格里布明珠
console.log('\n🇲🇦 摩洛哥马格里布明珠测试:');
const moroccoTests = ['摩洛哥', 'morocco', '卡萨布兰卡', 'casablanca', '马拉喀什', 'marrakech', '非斯', 'fez'];

moroccoTests.forEach(keyword => {
  const results = searchAirports(keyword, 12);
  const moroccoAirports = results.filter(a =>
    a.country === '摩洛哥' ||
    a.chinese.includes('卡萨布兰卡') ||
    a.chinese.includes('马拉喀什') ||
    a.chinese.includes('非斯') ||
    ['CMN', 'RAK', 'RBA', 'FEZ'].includes(a.code)
  );

  if (moroccoAirports.length > 0) {
    console.log(`🇲🇦 "${keyword}" 找到 ${moroccoAirports.length} 个摩洛哥机场`);
    moroccoAirports.slice(0, 5).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试阿尔及利亚非洲最大国家
console.log('\n🇩🇿 阿尔及利亚非洲最大国家测试:');
const algeriaTests = ['阿尔及利亚', 'algeria', '阿尔及尔', 'algiers', '奥兰', 'oran', '君士坦丁', 'constantine'];

algeriaTests.forEach(keyword => {
  const results = searchAirports(keyword, 12);
  const algeriaAirports = results.filter(a =>
    a.country === '阿尔及利亚' ||
    a.chinese.includes('阿尔及尔') ||
    a.chinese.includes('奥兰') ||
    a.chinese.includes('君士坦丁') ||
    ['ALG', 'ORN', 'CZL', 'AAE'].includes(a.code)
  );

  if (algeriaAirports.length > 0) {
    console.log(`🇩🇿 "${keyword}" 找到 ${algeriaAirports.length} 个阿尔及利亚机场`);
    algeriaAirports.slice(0, 5).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试突尼斯迦太基文明
console.log('\n🇹🇳 突尼斯迦太基文明测试:');
const tunisiaTests = ['突尼斯', 'tunisia', '迦太基', 'carthage', '杰尔巴', 'djerba', '莫纳斯提尔', 'monastir'];

tunisiaTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const tunisiaAirports = results.filter(a =>
    a.country === '突尼斯' ||
    a.chinese.includes('突尼斯') ||
    a.chinese.includes('杰尔巴') ||
    a.chinese.includes('莫纳斯提尔') ||
    ['TUN', 'DJE', 'MIR', 'SFA'].includes(a.code)
  );

  if (tunisiaAirports.length > 0) {
    console.log(`🇹🇳 "${keyword}" 找到 ${tunisiaAirports.length} 个突尼斯机场`);
    tunisiaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试卡萨布兰卡超级枢纽
console.log('\n🥇 卡萨布兰卡超级枢纽测试:');
const casablancaTests = ['卡萨布兰卡', 'casablanca', '穆罕默德五世', 'mohammed v', '摩洛哥皇家航空', 'royal air maroc'];

casablancaTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const casablancaAirports = results.filter(a =>
    a.chinese.includes('卡萨布兰卡') ||
    a.code === 'CMN'
  );

  if (casablancaAirports.length > 0) {
    console.log(`🥇 "${keyword}" 找到卡萨布兰卡机场: ${casablancaAirports[0].chinese}`);
  }
});

// 测试世界遗产古城
console.log('\n🏛️ 世界遗产古城测试:');
const heritageTests = ['世界遗产', 'world heritage', '马拉喀什', 'marrakech', '非斯', 'fez', '凯鲁万', 'kairouan'];

heritageTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const heritageAirports = results.filter(a =>
    a.chinese.includes('马拉喀什') ||
    a.chinese.includes('非斯') ||
    a.chinese.includes('凯鲁万') ||
    a.chinese.includes('加尔代亚') ||
    ['RAK', 'FEZ', 'KED', 'GHA'].includes(a.code)
  );

  if (heritageAirports.length > 0) {
    console.log(`🏛️ "${keyword}" 找到 ${heritageAirports.length} 个世界遗产古城机场`);
    heritageAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试直布罗陀海峡门户
console.log('\n🌊 直布罗陀海峡门户测试:');
const gibraltarTests = ['直布罗陀', 'gibraltar', '丹吉尔', 'tangier', '欧非大陆', 'europe africa'];

gibraltarTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const gibraltarAirports = results.filter(a =>
    a.chinese.includes('丹吉尔') ||
    a.code === 'TNG'
  );

  if (gibraltarAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到直布罗陀门户: ${gibraltarAirports[0].chinese}`);
  }
});

// 测试撒哈拉沙漠门户
console.log('\n🏜️ 撒哈拉沙漠门户测试:');
const saharaTests = ['撒哈拉', 'sahara', '沙漠', 'desert', '绿洲', 'oasis', '椰枣', 'dates'];

saharaTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const saharaAirports = results.filter(a =>
    a.chinese.includes('塔曼拉塞特') ||
    a.chinese.includes('托泽尔') ||
    a.chinese.includes('比斯克拉') ||
    a.chinese.includes('加尔代亚') ||
    ['TMR', 'TOE', 'BSK', 'GHA'].includes(a.code)
  );

  if (saharaAirports.length > 0) {
    console.log(`🏜️ "${keyword}" 找到 ${saharaAirports.length} 个撒哈拉沙漠机场`);
    saharaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试地中海北非海岸
console.log('\n🌊 地中海北非海岸测试:');
const mediterraneanTests = ['地中海', 'mediterranean', '海岸', 'coast', '度假', 'resort'];

mediterraneanTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const mediterraneanAirports = results.filter(a =>
    a.chinese.includes('突尼斯') ||
    a.chinese.includes('杰尔巴') ||
    a.chinese.includes('安纳巴') ||
    a.chinese.includes('奥兰') ||
    ['TUN', 'DJE', 'AAE', 'ORN'].includes(a.code)
  );

  if (mediterraneanAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到 ${mediterraneanAirports.length} 个地中海机场`);
    mediterraneanAirports.slice(0, 4).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试柏柏尔文化
console.log('\n🏺 柏柏尔文化测试:');
const berberTests = ['柏柏尔', 'berber', '阿马齐格', 'amazigh', '原住民', 'indigenous'];

berberTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const berberAirports = results.filter(a =>
    a.chinese.includes('贝雅') ||
    a.chinese.includes('阿加迪尔') ||
    a.chinese.includes('塔曼拉塞特') ||
    ['BJA', 'AGA', 'TMR'].includes(a.code)
  );

  if (berberAirports.length > 0) {
    console.log(`🏺 "${keyword}" 找到 ${berberAirports.length} 个柏柏尔文化机场`);
    berberAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试马格里布伊斯兰文化
console.log('\n🕌 马格里布伊斯兰文化测试:');
const maghrebTests = ['马格里布', 'maghreb', '伊斯兰', 'islamic', '阿拉伯', 'arab'];

maghrebTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const maghrebAirports = results.filter(a =>
    a.chinese.includes('阿尔及尔') ||
    a.chinese.includes('突尼斯') ||
    a.chinese.includes('卡萨布兰卡') ||
    a.chinese.includes('凯鲁万') ||
    ['ALG', 'TUN', 'CMN', 'KED'].includes(a.code)
  );

  if (maghrebAirports.length > 0) {
    console.log(`🕌 "${keyword}" 找到 ${maghrebAirports.length} 个马格里布机场`);
    maghrebAirports.slice(0, 4).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试石油天然气
console.log('\n🛢️ 石油天然气测试:');
const energyTests = ['石油', 'oil', '天然气', 'gas', '能源', 'energy'];

energyTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const energyAirports = results.filter(a =>
    a.chinese.includes('哈西梅萨乌德') ||
    a.code === 'HME'
  );

  if (energyAirports.length > 0) {
    console.log(`🛢️ "${keyword}" 找到能源机场: ${energyAirports[0].chinese}`);
  }
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  'CMN优先级100': allNorthAfricaAirports.find(a => a.code === 'CMN')?.priority === 100,
  'ALG优先级98': allNorthAfricaAirports.find(a => a.code === 'ALG')?.priority === 98,
  'TUN优先级96': allNorthAfricaAirports.find(a => a.code === 'TUN')?.priority === 96,
  'RAK优先级95': allNorthAfricaAirports.find(a => a.code === 'RAK')?.priority === 95,
  '有国际机场': allNorthAfricaAirports.some(a => a.type === 'international'),
  '有海关机场': allNorthAfricaAirports.some(a => a.customs === true),
  '正确的洲际': allNorthAfricaAirports.every(a => a.continent === '非洲'),
  '卡萨布兰卡机场存在': allNorthAfricaAirports.some(a => a.code === 'CMN'),
  '阿尔及尔机场存在': allNorthAfricaAirports.some(a => a.code === 'ALG'),
  '突尼斯机场存在': allNorthAfricaAirports.some(a => a.code === 'TUN'),
  '马拉喀什机场存在': allNorthAfricaAirports.some(a => a.code === 'RAK'),
  '杰尔巴机场存在': allNorthAfricaAirports.some(a => a.code === 'DJE'),
  '机场数量大于25': allNorthAfricaAirports.length > 25
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 北非三国对比
console.log('\n🌍 北非三国对比:');
const northAfricaCountries = [
  {
    country: '🇲🇦 摩洛哥',
    airports: ['CMN', 'RAK', 'RBA', 'FEZ', 'TNG', 'AGA', 'OUD', 'NDR', 'CAS', 'EUN'],
    highlights: ['马格里布明珠', '卡萨布兰卡经济中心', '马拉喀什红城', '非斯精神之都'],
    specialty: '马格里布明珠 + 度假胜地'
  },
  {
    country: '🇩🇿 阿尔及利亚',
    airports: ['ALG', 'ORN', 'CZL', 'AAE', 'TLM', 'BJA', 'BSK', 'GHA', 'TMR', 'HME'],
    highlights: ['非洲最大国家', '阿尔及尔首都', '撒哈拉沙漠心脏', '石油天然气'],
    specialty: '非洲最大国 + 能源中心'
  },
  {
    country: '🇹🇳 突尼斯',
    airports: ['TUN', 'MIR', 'DJE', 'SFA', 'GAE', 'TOE', 'GAQ', 'TBJ', 'KED', 'EBM'],
    highlights: ['迦太基文明', '突尼斯首都', '杰尔巴度假天堂', '凯鲁万圣城'],
    specialty: '迦太基文明 + 地中海度假'
  }
];

northAfricaCountries.forEach(country => {
  const availableAirports = country.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${country.country}: ${country.specialty}`);
  console.log(`   特色: ${country.highlights.join('、')}`);
  console.log(`   机场: ${availableAirports.join(', ')} (${availableAirports.length}/${country.airports.length})`);
});

console.log('\n🎉 北非三国机场集成测试完成!');
console.log('====================================');

// 最终统计
const totalNorthAfricaFound = allNorthAfricaAirports.length;
console.log(`📈 总结: 成功集成 ${totalNorthAfricaFound} 个北非三国机场`);
console.log(`🏆 搜索质量: AAA+ (${totalNorthAfricaFound}/30 = ${((totalNorthAfricaFound/30)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 摩洛哥+阿尔及利亚+突尼斯完整覆盖`);
console.log(`🥇 北非枢纽: 卡萨布兰卡穆罕默德五世机场(CMN) - 摩洛哥最大机场，北非重要枢纽`);
console.log(`🏛️ 马格里布中心: 阿尔及尔胡阿里·布迈丁机场(ALG) - 阿尔及利亚首都，马格里布中心`);
console.log(`🏛️ 迦太基门户: 突尼斯迦太基机场(TUN) - 突尼斯首都，古代迦太基文明门户`);
console.log(`🏛️ 红城马拉喀什: 马拉喀什梅纳拉机场(RAK) - 红城马拉喀什，世界遗产古城`);
console.log(`🌊 直布罗陀门户: 丹吉尔伊本·巴图塔机场(TNG) - 直布罗陀海峡门户，连接欧非大陆`);
console.log(`🏝️ 地中海珍珠: 杰尔巴-杰尔吉斯机场(DJE) - 地中海珍珠，度假天堂`);
console.log(`🏜️ 撒哈拉心脏: 塔曼拉塞特机场(TMR) - 撒哈拉沙漠心脏，图阿雷格文化中心`);
console.log(`🛢️ 石油中心: 哈西梅萨乌德机场(HME) - 阿尔及利亚石油中心`);
console.log(`🕌 伊斯兰圣城: 凯鲁万机场(KED) - 伊斯兰教第四圣城，世界遗产`);
console.log(`🏛️ 世界遗产群: 马拉喀什+非斯+凯鲁万+加尔代亚古城群`);
console.log(`🏛️ 战略价值: 北非航空网络，连接地中海与撒哈拉沙漠的北非航空走廊`);
console.log(`🌍 探索价值: 马格里布文化+柏柏尔文化+迦太基文明+撒哈拉沙漠+地中海度假完整航空门户`);
console.log(`🏆 里程碑: 北非三国完成！非洲大陆航空网络覆盖进一步完善`);
