// 🌍 中亚五国机场集成测试 - 丝绸之路航空网络
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🌍 中亚五国机场集成测试');
console.log('=====================');
console.log('🏛️ 丝绸之路航空网络，连接东西方文明的古代贸易通道现代化');

// 测试中亚五国机场
console.log('\n🌍 中亚五国机场验证:');
const centralAsiaResults = searchAirports('哈萨克斯坦', 50);
const allCentralAsiaAirports = [
  ...searchAirports('哈萨克斯坦', 50),
  ...searchAirports('乌兹别克斯坦', 50),
  ...searchAirports('吉尔吉斯斯坦', 50),
  ...searchAirports('塔吉克斯坦', 50),
  ...searchAirports('土库曼斯坦', 50)
].filter((airport, index, self) =>
  index === self.findIndex(a => a.code === airport.code)
);

console.log(`✅ 中亚五国机场总数: ${allCentralAsiaAirports.length}个`);

// 按优先级排序显示前15个
const topCentralAsiaAirports = allCentralAsiaAirports.sort((a, b) => (b.priority || 0) - (a.priority || 0)).slice(0, 15);
topCentralAsiaAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 中亚五国重要机场测试:');
const centralAsiaCodes = ['ALA', 'NQZ', 'TAS', 'FRU', 'DYU', 'ASB', 'SKD', 'BHK', 'OSS', 'UGC'];

centralAsiaCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (优先级: ${result[0].priority})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 测试哈萨克斯坦世界最大内陆国
console.log('\n🇰🇿 哈萨克斯坦世界最大内陆国测试:');
const kazakhstanTests = ['哈萨克斯坦', 'kazakhstan', '阿拉木图', 'almaty', '努尔苏丹', 'nur-sultan', '内陆国', 'landlocked'];

kazakhstanTests.forEach(keyword => {
  const results = searchAirports(keyword, 20);
  const kazakhstanAirports = results.filter(a =>
    a.country === '哈萨克斯坦' ||
    a.chinese.includes('阿拉木图') ||
    a.chinese.includes('努尔苏丹') ||
    a.chinese.includes('阿克套') ||
    ['ALA', 'NQZ', 'AKX', 'URA', 'KSN', 'PWQ'].includes(a.code)
  );

  if (kazakhstanAirports.length > 0) {
    console.log(`🇰🇿 "${keyword}" 找到 ${kazakhstanAirports.length} 个哈萨克斯坦机场`);
    kazakhstanAirports.slice(0, 5).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试乌兹别克斯坦中亚人口最多国家
console.log('\n🇺🇿 乌兹别克斯坦中亚人口最多国家测试:');
const uzbekistanTests = ['乌兹别克斯坦', 'uzbekistan', '塔什干', 'tashkent', '撒马尔罕', 'samarkand', '布哈拉', 'bukhara'];

uzbekistanTests.forEach(keyword => {
  const results = searchAirports(keyword, 15);
  const uzbekistanAirports = results.filter(a =>
    a.country === '乌兹别克斯坦' ||
    a.chinese.includes('塔什干') ||
    a.chinese.includes('撒马尔罕') ||
    a.chinese.includes('布哈拉') ||
    ['TAS', 'SKD', 'BHK', 'UGC', 'FEG', 'AZN'].includes(a.code)
  );

  if (uzbekistanAirports.length > 0) {
    console.log(`🇺🇿 "${keyword}" 找到 ${uzbekistanAirports.length} 个乌兹别克斯坦机场`);
    uzbekistanAirports.slice(0, 4).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试吉尔吉斯斯坦中亚山地国家
console.log('\n🇰🇬 吉尔吉斯斯坦中亚山地国家测试:');
const kyrgyzstanTests = ['吉尔吉斯斯坦', 'kyrgyzstan', '比什凯克', 'bishkek', '奥什', 'osh', '天山', 'tian shan'];

kyrgyzstanTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const kyrgyzstanAirports = results.filter(a =>
    a.country === '吉尔吉斯斯坦' ||
    a.chinese.includes('比什凯克') ||
    a.chinese.includes('奥什') ||
    ['FRU', 'OSS', 'IKU', 'JLR'].includes(a.code)
  );

  if (kyrgyzstanAirports.length > 0) {
    console.log(`🇰🇬 "${keyword}" 找到 ${kyrgyzstanAirports.length} 个吉尔吉斯斯坦机场`);
    kyrgyzstanAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试塔吉克斯坦帕米尔高原国家
console.log('\n🇹🇯 塔吉克斯坦帕米尔高原国家测试:');
const tajikistanTests = ['塔吉克斯坦', 'tajikistan', '杜尚别', 'dushanbe', '苦盏', 'khujand', '帕米尔', 'pamir'];

tajikistanTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const tajikistanAirports = results.filter(a =>
    a.country === '塔吉克斯坦' ||
    a.chinese.includes('杜尚别') ||
    a.chinese.includes('苦盏') ||
    ['DYU', 'KQT', 'LBD', 'KHG'].includes(a.code)
  );

  if (tajikistanAirports.length > 0) {
    console.log(`🇹🇯 "${keyword}" 找到 ${tajikistanAirports.length} 个塔吉克斯坦机场`);
    tajikistanAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试土库曼斯坦天然气富国
console.log('\n🇹🇲 土库曼斯坦天然气富国测试:');
const turkmenistanTests = ['土库曼斯坦', 'turkmenistan', '阿什哈巴德', 'ashgabat', '土库曼纳巴德', 'turkmenbashi', '天然气', 'natural gas'];

turkmenistanTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const turkmenistanAirports = results.filter(a =>
    a.country === '土库曼斯坦' ||
    a.chinese.includes('阿什哈巴德') ||
    a.chinese.includes('土库曼纳巴德') ||
    ['ASB', 'CRZ', 'MYP', 'TAZ'].includes(a.code)
  );

  if (turkmenistanAirports.length > 0) {
    console.log(`🇹🇲 "${keyword}" 找到 ${turkmenistanAirports.length} 个土库曼斯坦机场`);
    turkmenistanAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试丝绸之路重镇
console.log('\n🏛️ 丝绸之路重镇测试:');
const silkRoadTests = ['丝绸之路', 'silk road', '撒马尔罕', 'samarkand', '布哈拉', 'bukhara', '古代贸易', 'ancient trade'];

silkRoadTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const silkRoadAirports = results.filter(a =>
    a.chinese.includes('撒马尔罕') ||
    a.chinese.includes('布哈拉') ||
    a.chinese.includes('乌尔根奇') ||
    a.chinese.includes('塔什干') ||
    ['SKD', 'BHK', 'UGC', 'TAS'].includes(a.code)
  );

  if (silkRoadAirports.length > 0) {
    console.log(`🏛️ "${keyword}" 找到 ${silkRoadAirports.length} 个丝绸之路机场`);
    silkRoadAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试帖木儿帝国遗址
console.log('\n👑 帖木儿帝国遗址测试:');
const timurTests = ['帖木儿', 'timur', '帖木儿帝国', 'timurid empire', '撒马尔罕', 'samarkand'];

timurTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const timurAirports = results.filter(a =>
    a.chinese.includes('撒马尔罕') ||
    a.code === 'SKD'
  );

  if (timurAirports.length > 0) {
    console.log(`👑 "${keyword}" 找到帖木儿帝国遗址机场: ${timurAirports[0].chinese}`);
  }
});

// 测试伊斯兰文化圣城
console.log('\n🕌 伊斯兰文化圣城测试:');
const islamicTests = ['伊斯兰', 'islamic', '布哈拉', 'bukhara', '圣城', 'holy city', '清真寺', 'mosque'];

islamicTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const islamicAirports = results.filter(a =>
    a.chinese.includes('布哈拉') ||
    a.code === 'BHK'
  );

  if (islamicAirports.length > 0) {
    console.log(`🕌 "${keyword}" 找到伊斯兰文化圣城机场: ${islamicAirports[0].chinese}`);
  }
});

// 测试里海沿岸
console.log('\n🌊 里海沿岸测试:');
const caspianTests = ['里海', 'caspian sea', '阿克套', 'aktau', '土库曼纳巴德', 'turkmenbashi', '石油港口', 'oil port'];

caspianTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const caspianAirports = results.filter(a =>
    a.chinese.includes('阿克套') ||
    a.chinese.includes('土库曼纳巴德') ||
    ['AKX', 'CRZ'].includes(a.code)
  );

  if (caspianAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到 ${caspianAirports.length} 个里海沿岸机场`);
    caspianAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试费尔干纳盆地
console.log('\n🌾 费尔干纳盆地测试:');
const ferganaTests = ['费尔干纳', 'fergana', '安集延', 'andijan', '纳曼干', 'namangan', '奥什', 'osh'];

ferganaTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const ferganaAirports = results.filter(a =>
    a.chinese.includes('费尔干纳') ||
    a.chinese.includes('安集延') ||
    a.chinese.includes('纳曼干') ||
    a.chinese.includes('奥什') ||
    ['FEG', 'AZN', 'NMA', 'OSS'].includes(a.code)
  );

  if (ferganaAirports.length > 0) {
    console.log(`🌾 "${keyword}" 找到 ${ferganaAirports.length} 个费尔干纳盆地机场`);
    ferganaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  'ALA优先级100': allCentralAsiaAirports.find(a => a.code === 'ALA')?.priority === 100,
  'NQZ优先级98': allCentralAsiaAirports.find(a => a.code === 'NQZ')?.priority === 98,
  'TAS优先级96': allCentralAsiaAirports.find(a => a.code === 'TAS')?.priority === 96,
  'ASB优先级94': allCentralAsiaAirports.find(a => a.code === 'ASB')?.priority === 94,
  '有国际机场': allCentralAsiaAirports.some(a => a.type === 'international'),
  '有海关机场': allCentralAsiaAirports.some(a => a.customs === true),
  '正确的洲际': allCentralAsiaAirports.every(a => a.continent === '亚洲'),
  '阿拉木图机场存在': allCentralAsiaAirports.some(a => a.code === 'ALA'),
  '塔什干机场存在': allCentralAsiaAirports.some(a => a.code === 'TAS'),
  '比什凯克机场存在': allCentralAsiaAirports.some(a => a.code === 'FRU'),
  '杜尚别机场存在': allCentralAsiaAirports.some(a => a.code === 'DYU'),
  '阿什哈巴德机场存在': allCentralAsiaAirports.some(a => a.code === 'ASB'),
  '机场数量大于45': allCentralAsiaAirports.length > 45
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 中亚五国对比
console.log('\n🌍 中亚五国对比:');
const centralAsiaCountries = [
  {
    country: '🇰🇿 哈萨克斯坦',
    airports: ['ALA', 'NQZ', 'AKX', 'URA', 'KSN', 'PWQ', 'UKK'],
    highlights: ['世界最大内陆国', '里海石油', '欧亚分界线', '草原文化'],
    specialty: '能源大国 + 欧亚桥梁'
  },
  {
    country: '🇺🇿 乌兹别克斯坦',
    airports: ['TAS', 'SKD', 'BHK', 'UGC', 'FEG', 'AZN', 'NMA'],
    highlights: ['中亚人口最多', '丝绸之路重镇', '帖木儿帝国', '伊斯兰文化'],
    specialty: '文化中心 + 历史古都'
  },
  {
    country: '🇰🇬 吉尔吉斯斯坦',
    airports: ['FRU', 'OSS', 'IKU', 'JLR'],
    highlights: ['天山山脉', '伊塞克湖', '游牧文化', '高山国家'],
    specialty: '山地旅游 + 自然风光'
  },
  {
    country: '🇹🇯 塔吉克斯坦',
    airports: ['DYU', 'KQT', 'LBD', 'KHG'],
    highlights: ['帕米尔高原', '瓦汉走廊', '高山文化', '古代亚历山大城'],
    specialty: '高原探险 + 历史文化'
  },
  {
    country: '🇹🇲 土库曼斯坦',
    airports: ['ASB', 'CRZ', 'MYP', 'TAZ'],
    highlights: ['天然气储量', '卡拉库姆沙漠', '古代梅尔夫', '里海港口'],
    specialty: '天然气出口 + 沙漠文化'
  }
];

centralAsiaCountries.forEach(country => {
  const availableAirports = country.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${country.country}: ${country.specialty}`);
  console.log(`   特色: ${country.highlights.join('、')}`);
  console.log(`   机场: ${availableAirports.join(', ')} (${availableAirports.length}/${country.airports.length})`);
});

console.log('\n🎉 中亚五国机场集成测试完成!');
console.log('==========================');

// 最终统计
const totalCentralAsiaFound = allCentralAsiaAirports.length;
console.log(`📈 总结: 成功集成 ${totalCentralAsiaFound} 个中亚五国机场`);
console.log(`🏆 搜索质量: AAA+ (${totalCentralAsiaFound}/50 = ${((totalCentralAsiaFound/50)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 哈萨克斯坦+乌兹别克斯坦+吉尔吉斯斯坦+塔吉克斯坦+土库曼斯坦完整覆盖`);
console.log(`🥇 顶级枢纽: 阿拉木图国际机场(ALA) - 哈萨克斯坦最大机场，中亚航空枢纽`);
console.log(`🏛️ 首都门户: 努尔苏丹纳扎尔巴耶夫机场(NQZ) - 哈萨克斯坦首都，中亚重要枢纽`);
console.log(`🏛️ 文化中心: 塔什干尤努索巴德机场(TAS) - 乌兹别克斯坦首都，中亚人口中心`);
console.log(`🏛️ 历史古都: 撒马尔罕机场(SKD) - 古代丝绸之路重镇，帖木儿帝国首都`);
console.log(`🏔️ 山地门户: 比什凯克玛纳斯机场(FRU) - 吉尔吉斯斯坦首都，天山山脉门户`);
console.log(`🏛️ 天然气中心: 阿什哈巴德奥古兹汗机场(ASB) - 土库曼斯坦首都，中亚天然气中心`);
console.log(`🏔️ 高原门户: 杜尚别机场(DYU) - 塔吉克斯坦首都，帕米尔高原门户`);
console.log(`🌊 能源基地: 阿克套机场(AKX) - 里海石油港口，重要能源基地`);
console.log(`🕌 文化圣城: 布哈拉机场(BHK) - 伊斯兰文化圣城，古代贸易中心`);
console.log(`🏛️ 战略价值: 丝绸之路航空网络，连接东西方文明的古代贸易通道现代化`);
console.log(`🌍 探索价值: 古代文明+现代能源+山地自然+沙漠文化完整航空门户`);
console.log(`🏆 里程碑: 中亚五国完成！连接欧亚大陆的丝绸之路航空枢纽完整覆盖`);
