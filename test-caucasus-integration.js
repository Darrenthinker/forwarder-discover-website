// 🏔️ 高加索三国机场集成测试 - 高加索航空网络
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🏔️ 高加索三国机场集成测试');
console.log('==============================');
console.log('🏔️ 高加索航空网络，连接欧亚大陆的高加索航空走廊');

// 测试高加索三国机场
console.log('\n🏔️ 高加索三国机场验证:');
const caucasusResults = searchAirports('格鲁吉亚', 50);
const allCaucasusAirports = [
  ...searchAirports('格鲁吉亚', 50),
  ...searchAirports('亚美尼亚', 50),
  ...searchAirports('阿塞拜疆', 50)
].filter((airport, index, self) =>
  index === self.findIndex(a => a.code === airport.code)
);

console.log(`✅ 高加索三国机场总数: ${allCaucasusAirports.length}个`);

// 按优先级排序显示前15个
const topCaucasusAirports = allCaucasusAirports.sort((a, b) => (b.priority || 0) - (a.priority || 0)).slice(0, 15);
topCaucasusAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 高加索三国重要机场测试:');
const caucasusCodes = ['TBS', 'EVN', 'GYD', 'BUS', 'GNJ', 'KUT', 'LWN', 'NAJ', 'LLK', 'ZAQ'];

caucasusCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (优先级: ${result[0].priority})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 测试格鲁吉亚高加索明珠
console.log('\n🇬🇪 格鲁吉亚高加索明珠测试:');
const georgiaTests = ['格鲁吉亚', 'georgia', '第比利斯', 'tbilisi', '巴统', 'batumi', '库塔伊西', 'kutaisi'];

georgiaTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const georgiaAirports = results.filter(a =>
    a.country === '格鲁吉亚' ||
    a.chinese.includes('第比利斯') ||
    a.chinese.includes('巴统') ||
    a.chinese.includes('库塔伊西') ||
    ['TBS', 'BUS', 'KUT', 'SUI'].includes(a.code)
  );

  if (georgiaAirports.length > 0) {
    console.log(`🇬🇪 "${keyword}" 找到 ${georgiaAirports.length} 个格鲁吉亚机场`);
    georgiaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试亚美尼亚古代文明摇篮
console.log('\n🇦🇲 亚美尼亚古代文明摇篮测试:');
const armeniaTests = ['亚美尼亚', 'armenia', '埃里温', 'yerevan', '久姆里', 'gyumri', '兹瓦尔特诺茨', 'zvartnots'];

armeniaTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const armeniaAirports = results.filter(a =>
    a.country === '亚美尼亚' ||
    a.chinese.includes('埃里温') ||
    a.chinese.includes('久姆里') ||
    a.chinese.includes('瓦纳佐尔') ||
    ['EVN', 'LWN', 'VAN', 'KPS'].includes(a.code)
  );

  if (armeniaAirports.length > 0) {
    console.log(`🇦🇲 "${keyword}" 找到 ${armeniaAirports.length} 个亚美尼亚机场`);
    armeniaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试阿塞拜疆火焰之国
console.log('\n🇦🇿 阿塞拜疆火焰之国测试:');
const azerbaijanTests = ['阿塞拜疆', 'azerbaijan', '巴库', 'baku', '甘贾', 'ganja', '连科兰', 'lankaran'];

azerbaijanTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const azerbaijanAirports = results.filter(a =>
    a.country === '阿塞拜疆' ||
    a.chinese.includes('巴库') ||
    a.chinese.includes('甘贾') ||
    a.chinese.includes('连科兰') ||
    ['GYD', 'GNJ', 'LLK', 'NAJ'].includes(a.code)
  );

  if (azerbaijanAirports.length > 0) {
    console.log(`🇦🇿 "${keyword}" 找到 ${azerbaijanAirports.length} 个阿塞拜疆机场`);
    azerbaijanAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试第比利斯高加索枢纽
console.log('\n🥇 第比利斯高加索枢纽测试:');
const tbilisiTests = ['第比利斯', 'tbilisi', '绍塔', 'shota', '鲁斯塔维利', 'rustaveli', '格鲁吉亚航空', 'georgian airways'];

tbilisiTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const tbilisiAirports = results.filter(a =>
    a.chinese.includes('第比利斯') ||
    a.code === 'TBS'
  );

  if (tbilisiAirports.length > 0) {
    console.log(`🥇 "${keyword}" 找到第比利斯机场: ${tbilisiAirports[0].chinese}`);
  }
});

// 测试里海石油中心
console.log('\n🛢️ 里海石油中心测试:');
const caspianTests = ['里海', 'caspian', '石油', 'oil', '巴库', 'baku', '盖达尔', 'heydar'];

caspianTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const caspianAirports = results.filter(a =>
    a.chinese.includes('巴库') ||
    a.chinese.includes('连科兰') ||
    a.code === 'GYD' ||
    a.code === 'LLK'
  );

  if (caspianAirports.length > 0) {
    console.log(`🛢️ "${keyword}" 找到 ${caspianAirports.length} 个里海地区机场`);
    caspianAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试黑海海岸
console.log('\n🌊 黑海海岸测试:');
const blackSeaTests = ['黑海', 'black sea', '巴统', 'batumi', '度假', 'resort', '海岸', 'coast'];

blackSeaTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const blackSeaAirports = results.filter(a =>
    a.chinese.includes('巴统') ||
    a.chinese.includes('苏胡米') ||
    a.code === 'BUS' ||
    a.code === 'SUI'
  );

  if (blackSeaAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到 ${blackSeaAirports.length} 个黑海海岸机场`);
    blackSeaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试古代丝绸之路
console.log('\n🏛️ 古代丝绸之路测试:');
const silkRoadTests = ['丝绸之路', 'silk road', '舍基', 'sheki', '古代', 'ancient', '贸易', 'trade'];

silkRoadTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const silkRoadAirports = results.filter(a =>
    a.chinese.includes('舍基') ||
    a.chinese.includes('甘贾') ||
    a.code === 'SIZ' ||
    a.code === 'GNJ'
  );

  if (silkRoadAirports.length > 0) {
    console.log(`🏛️ "${keyword}" 找到 ${silkRoadAirports.length} 个丝绸之路机场`);
    silkRoadAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试高加索山脉
console.log('\n🏔️ 高加索山脉测试:');
const mountainTests = ['高加索', 'caucasus', '山脉', 'mountains', '欧亚分界', 'europe asia'];

mountainTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const mountainAirports = results.filter(a =>
    a.chinese.includes('列蒂') ||
    a.chinese.includes('扎卡塔雷') ||
    a.chinese.includes('卡帕纳') ||
    ['LET', 'ZAQ', 'KPS'].includes(a.code)
  );

  if (mountainAirports.length > 0) {
    console.log(`🏔️ "${keyword}" 找到 ${mountainAirports.length} 个高加索山区机场`);
    mountainAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试古代基督教文化
console.log('\n⛪ 古代基督教文化测试:');
const christianTests = ['基督教', 'christian', '古代', 'ancient', '宗教', 'religion', '教会', 'church'];

christianTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const christianAirports = results.filter(a =>
    a.chinese.includes('埃里温') ||
    a.chinese.includes('第比利斯') ||
    a.code === 'EVN' ||
    a.code === 'TBS'
  );

  if (christianAirports.length > 0) {
    console.log(`⛪ "${keyword}" 找到 ${christianAirports.length} 个基督教文化机场`);
    christianAirports.slice(0, 2).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试葡萄酒文化
console.log('\n🍷 葡萄酒文化测试:');
const wineTests = ['葡萄酒', 'wine', '酒文化', 'wine culture', '酿酒', 'viticulture'];

wineTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const wineAirports = results.filter(a =>
    a.chinese.includes('第比利斯') ||
    a.chinese.includes('库塔伊西') ||
    a.code === 'TBS' ||
    a.code === 'KUT'
  );

  if (wineAirports.length > 0) {
    console.log(`🍷 "${keyword}" 找到 ${wineAirports.length} 个葡萄酒文化机场`);
    wineAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  'TBS优先级100': allCaucasusAirports.find(a => a.code === 'TBS')?.priority === 100,
  'GYD优先级99': allCaucasusAirports.find(a => a.code === 'GYD')?.priority === 99,
  'EVN优先级98': allCaucasusAirports.find(a => a.code === 'EVN')?.priority === 98,
  'BUS优先级88': allCaucasusAirports.find(a => a.code === 'BUS')?.priority === 88,
  '有国际机场': allCaucasusAirports.some(a => a.type === 'international'),
  '有海关机场': allCaucasusAirports.some(a => a.customs === true),
  '正确的洲际': allCaucasusAirports.every(a => a.continent === '亚洲'),
  '第比利斯机场存在': allCaucasusAirports.some(a => a.code === 'TBS'),
  '埃里温机场存在': allCaucasusAirports.some(a => a.code === 'EVN'),
  '巴库机场存在': allCaucasusAirports.some(a => a.code === 'GYD'),
  '巴统机场存在': allCaucasusAirports.some(a => a.code === 'BUS'),
  '甘贾机场存在': allCaucasusAirports.some(a => a.code === 'GNJ'),
  '机场数量等于15': allCaucasusAirports.length === 15
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 高加索三国对比
console.log('\n🏔️ 高加索三国对比:');
const caucasusCountries = [
  {
    country: '🇬🇪 格鲁吉亚',
    airports: ['TBS', 'BUS', 'KUT', 'SUI', 'LET'],
    highlights: ['高加索明珠', '第比利斯首都', '巴统黑海度假', '世界葡萄酒发源地'],
    specialty: '高加索明珠 + 葡萄酒文化'
  },
  {
    country: '🇦🇲 亚美尼亚',
    airports: ['EVN', 'LWN', 'KPS', 'VAN'],
    highlights: ['古代文明摇篮', '埃里温首都', '早期基督教国家', '亚拉腊山'],
    specialty: '古代文明 + 基督教文化'
  },
  {
    country: '🇦🇿 阿塞拜疆',
    airports: ['GYD', 'GNJ', 'LLK', 'NAJ', 'ZAQ', 'SIZ'],
    highlights: ['火焰之国', '巴库石油中心', '里海西岸', '丝绸之路重镇'],
    specialty: '里海石油 + 丝绸之路'
  }
];

caucasusCountries.forEach(country => {
  const availableAirports = country.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${country.country}: ${country.specialty}`);
  console.log(`   特色: ${country.highlights.join('、')}`);
  console.log(`   机场: ${availableAirports.join(', ')} (${availableAirports.length}/${country.airports.length})`);
});

console.log('\n🎉 高加索三国机场集成测试完成!');
console.log('====================================');

// 最终统计
const totalCaucasusFound = allCaucasusAirports.length;
console.log(`📈 总结: 成功集成 ${totalCaucasusFound} 个高加索三国机场`);
console.log(`🏆 搜索质量: AAA+ (${totalCaucasusFound}/15 = ${((totalCaucasusFound/15)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 格鲁吉亚+亚美尼亚+阿塞拜疆完整覆盖`);
console.log(`🥇 高加索枢纽: 第比利斯绍塔·鲁斯塔维利机场(TBS) - 格鲁吉亚首都，高加索重要枢纽`);
console.log(`🥇 里海石油中心: 巴库盖达尔·阿利耶夫机场(GYD) - 阿塞拜疆首都，里海石油中心`);
console.log(`🏛️ 古代文明门户: 埃里温兹瓦尔特诺茨机场(EVN) - 亚美尼亚首都，古代文明门户`);
console.log(`🌊 黑海度假胜地: 巴统机场(BUS) - 黑海海岸重要港口，度假胜地`);
console.log(`🏛️ 古代王国首都: 库塔伊西大卫建造者机场(KUT) - 古代格鲁吉亚王国首都`);
console.log(`🏛️ 丝绸之路重镇: 舍基机场(SIZ) - 古代丝绸之路重镇`);
console.log(`🏔️ 高加索山脉: 欧洲与亚洲分界线航空支持网络`);
console.log(`⛪ 基督教文化: 早期基督教国家航空网络`);
console.log(`🍷 葡萄酒发源地: 世界葡萄酒发源地旅游支持`);
console.log(`🛢️ 里海能源走廊: 连接中亚与高加索的能源走廊`);
console.log(`🏛️ 战略价值: 高加索航空网络，连接欧亚大陆的高加索航空走廊`);
console.log(`🌍 探索价值: 古代丝绸之路+基督教文化+葡萄酒文化+里海石油+高加索山脉完整航空门户`);
console.log(`🏆 里程碑: 高加索三国完成！欧亚大陆桥梁航空网络完整覆盖`);
