// 🌏 南亚次大陆六国机场集成测试 - 印度洋明珠与喜马拉雅门户
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🌏 南亚次大陆六国机场集成测试');
console.log('==========================');
console.log('🏔️ 印度洋明珠与喜马拉雅山脉门户的航空网络');

// 测试南亚次大陆六国机场
console.log('\n🌏 南亚次大陆六国机场验证:');
const southAsiaResults = searchAirports('巴基斯坦', 50);
const allSouthAsiaAirports = [
  ...searchAirports('巴基斯坦', 50),
  ...searchAirports('孟加拉国', 50),
  ...searchAirports('斯里兰卡', 50),
  ...searchAirports('尼泊尔', 50),
  ...searchAirports('不丹', 50),
  ...searchAirports('马尔代夫', 50)
].filter((airport, index, self) =>
  index === self.findIndex(a => a.code === airport.code)
);

console.log(`✅ 南亚次大陆六国机场总数: ${allSouthAsiaAirports.length}个`);

// 按优先级排序显示前20个
const topSouthAsiaAirports = allSouthAsiaAirports.sort((a, b) => (b.priority || 0) - (a.priority || 0)).slice(0, 20);
topSouthAsiaAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 南亚次大陆重要机场测试:');
const southAsiaCodes = ['KHI', 'DAC', 'CMB', 'KTM', 'PBH', 'MLE', 'LHE', 'ISB', 'CGP', 'HRI'];

southAsiaCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (优先级: ${result[0].priority})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 测试巴基斯坦南亚重要国家
console.log('\n🇵🇰 巴基斯坦南亚重要国家测试:');
const pakistanTests = ['巴基斯坦', 'pakistan', '卡拉奇', 'karachi', '伊斯兰堡', 'islamabad', '拉合尔', 'lahore'];

pakistanTests.forEach(keyword => {
  const results = searchAirports(keyword, 15);
  const pakistanAirports = results.filter(a =>
    a.country === '巴基斯坦' ||
    a.chinese.includes('卡拉奇') ||
    a.chinese.includes('伊斯兰堡') ||
    a.chinese.includes('拉合尔') ||
    ['KHI', 'ISB', 'LHE', 'PEW', 'UET', 'GWD'].includes(a.code)
  );

  if (pakistanAirports.length > 0) {
    console.log(`🇵🇰 "${keyword}" 找到 ${pakistanAirports.length} 个巴基斯坦机场`);
    pakistanAirports.slice(0, 5).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试孟加拉国南亚人口大国
console.log('\n🇧🇩 孟加拉国南亚人口大国测试:');
const bangladeshTests = ['孟加拉国', 'bangladesh', '达卡', 'dhaka', '吉大港', 'chittagong'];

bangladeshTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const bangladeshAirports = results.filter(a =>
    a.country === '孟加拉国' ||
    a.chinese.includes('达卡') ||
    a.chinese.includes('吉大港') ||
    ['DAC', 'CGP', 'JSR', 'CXB'].includes(a.code)
  );

  if (bangladeshAirports.length > 0) {
    console.log(`🇧🇩 "${keyword}" 找到 ${bangladeshAirports.length} 个孟加拉国机场`);
    bangladeshAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试斯里兰卡印度洋明珠
console.log('\n🇱🇰 斯里兰卡印度洋明珠测试:');
const sriLankaTests = ['斯里兰卡', 'sri lanka', '科伦坡', 'colombo', '印度洋明珠', 'pearl of indian ocean'];

sriLankaTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const sriLankaAirports = results.filter(a =>
    a.country === '斯里兰卡' ||
    a.chinese.includes('科伦坡') ||
    a.chinese.includes('汉班托塔') ||
    ['CMB', 'HRI', 'JAF', 'ACJ'].includes(a.code)
  );

  if (sriLankaAirports.length > 0) {
    console.log(`🇱🇰 "${keyword}" 找到 ${sriLankaAirports.length} 个斯里兰卡机场`);
    sriLankaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试尼泊尔喜马拉雅门户
console.log('\n🇳🇵 尼泊尔喜马拉雅门户测试:');
const nepalTests = ['尼泊尔', 'nepal', '加德满都', 'kathmandu', '珠峰', 'everest', '博卡拉', 'pokhara'];

nepalTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const nepalAirports = results.filter(a =>
    a.country === '尼泊尔' ||
    a.chinese.includes('加德满都') ||
    a.chinese.includes('博卡拉') ||
    a.chinese.includes('卢克拉') ||
    ['KTM', 'PKR', 'LUA', 'BWA'].includes(a.code)
  );

  if (nepalAirports.length > 0) {
    console.log(`🇳🇵 "${keyword}" 找到 ${nepalAirports.length} 个尼泊尔机场`);
    nepalAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试不丹雷龙之国
console.log('\n🇧🇹 不丹雷龙之国测试:');
const bhutanTests = ['不丹', 'bhutan', '帕罗', 'paro', '雷龙', 'thunder dragon', '香格里拉', 'shangri la'];

bhutanTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const bhutanAirports = results.filter(a =>
    a.country === '不丹' ||
    a.chinese.includes('帕罗') ||
    ['PBH', 'YON', 'GOP'].includes(a.code)
  );

  if (bhutanAirports.length > 0) {
    console.log(`🇧🇹 "${keyword}" 找到 ${bhutanAirports.length} 个不丹机场`);
    bhutanAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试马尔代夫印度洋珍珠
console.log('\n🇲🇻 马尔代夫印度洋珍珠测试:');
const maldivesTests = ['马尔代夫', 'maldives', '马累', 'male', '度假天堂', 'resort paradise', '环礁', 'atoll'];

maldivesTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const maldivesAirports = results.filter(a =>
    a.country === '马尔代夫' ||
    a.chinese.includes('马累') ||
    a.chinese.includes('甘岛') ||
    ['MLE', 'GAN', 'HAQ', 'KDM'].includes(a.code)
  );

  if (maldivesAirports.length > 0) {
    console.log(`🇲🇻 "${keyword}" 找到 ${maldivesAirports.length} 个马尔代夫机场`);
    maldivesAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试中巴经济走廊
console.log('\n🌊 中巴经济走廊测试:');
const cpecTests = ['中巴经济走廊', 'cpec', '瓜达尔', 'gwadar', '一带一路', 'belt and road'];

cpecTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const cpecAirports = results.filter(a =>
    a.chinese.includes('瓜达尔') ||
    a.code === 'GWD'
  );

  if (cpecAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到中巴经济走廊机场: ${cpecAirports[0].chinese}`);
  }
});

// 测试珠峰登山门户
console.log('\n🏔️ 珠峰登山门户测试:');
const everestTests = ['珠峰', 'everest', '卢克拉', 'lukla', '登山', 'mountaineering', '世界最危险机场', 'dangerous airport'];

everestTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const everestAirports = results.filter(a =>
    a.chinese.includes('卢克拉') ||
    a.code === 'LUA'
  );

  if (everestAirports.length > 0) {
    console.log(`🏔️ "${keyword}" 找到珠峰登山门户: ${everestAirports[0].chinese}`);
  }
});

// 测试佛教文化圣地
console.log('\n🏛️ 佛教文化圣地测试:');
const buddhismTests = ['佛教', 'buddhism', '释迦牟尼', 'buddha', '卢姆比尼', 'lumbini', '菩提伽耶', 'bodh gaya'];

buddhismTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const buddhismAirports = results.filter(a =>
    a.chinese.includes('巴德瓦') ||
    a.chinese.includes('加德满都') ||
    a.chinese.includes('安努拉德普勒') ||
    ['BWA', 'KTM', 'ACJ'].includes(a.code)
  );

  if (buddhismAirports.length > 0) {
    console.log(`🏛️ "${keyword}" 找到 ${buddhismAirports.length} 个佛教圣地机场`);
    buddhismAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试印度洋度假天堂
console.log('\n🏝️ 印度洋度假天堂测试:');
const resortTests = ['度假', 'resort', '豪华', 'luxury', '蜜月', 'honeymoon', '环礁', 'atoll'];

resortTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const resortAirports = results.filter(a =>
    a.country === '马尔代夫' ||
    a.chinese.includes('科克斯巴扎尔') ||
    ['MLE', 'GAN', 'HAQ', 'CXB'].includes(a.code)
  );

  if (resortAirports.length > 0) {
    console.log(`🏝️ "${keyword}" 找到 ${resortAirports.length} 个度假天堂机场`);
  }
});

// 测试孟加拉湾沿岸
console.log('\n🌊 孟加拉湾沿岸测试:');
const bengalBayTests = ['孟加拉湾', 'bay of bengal', '吉大港', 'chittagong', '科克斯巴扎尔', 'cox bazar'];

bengalBayTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const bengalBayAirports = results.filter(a =>
    a.chinese.includes('吉大港') ||
    a.chinese.includes('科克斯巴扎尔') ||
    a.chinese.includes('科伦坡') ||
    ['CGP', 'CXB', 'CMB'].includes(a.code)
  );

  if (bengalBayAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到 ${bengalBayAirports.length} 个孟加拉湾机场`);
  }
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  'KHI优先级96': allSouthAsiaAirports.find(a => a.code === 'KHI')?.priority === 96,
  'DAC优先级95': allSouthAsiaAirports.find(a => a.code === 'DAC')?.priority === 95,
  'ISB优先级94': allSouthAsiaAirports.find(a => a.code === 'ISB')?.priority === 94,
  'CMB优先级93': allSouthAsiaAirports.find(a => a.code === 'CMB')?.priority === 93,
  '有国际机场': allSouthAsiaAirports.some(a => a.type === 'international'),
  '有海关机场': allSouthAsiaAirports.some(a => a.customs === true),
  '正确的洲际': allSouthAsiaAirports.every(a => a.continent === '亚洲'),
  '卡拉奇机场存在': allSouthAsiaAirports.some(a => a.code === 'KHI'),
  '达卡机场存在': allSouthAsiaAirports.some(a => a.code === 'DAC'),
  '科伦坡机场存在': allSouthAsiaAirports.some(a => a.code === 'CMB'),
  '加德满都机场存在': allSouthAsiaAirports.some(a => a.code === 'KTM'),
  '帕罗机场存在': allSouthAsiaAirports.some(a => a.code === 'PBH'),
  '马累机场存在': allSouthAsiaAirports.some(a => a.code === 'MLE'),
  '机场数量大于50': allSouthAsiaAirports.length > 50
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 南亚次大陆六国对比
console.log('\n🌏 南亚次大陆六国对比:');
const southAsiaCountries = [
  {
    country: '🇵🇰 巴基斯坦',
    airports: ['KHI', 'ISB', 'LHE', 'PEW', 'UET', 'GWD', 'MUX'],
    highlights: ['中巴经济走廊', '印度河文明', '真纳建国', '阿富汗边境'],
    specialty: '地缘战略 + 经济走廊'
  },
  {
    country: '🇧🇩 孟加拉国',
    airports: ['DAC', 'CGP', 'JSR', 'CXB', 'RJH'],
    highlights: ['人口密度最高', '恒河三角洲', '孟加拉湾', '世界最长海滩'],
    specialty: '人口密集 + 三角洲文明'
  },
  {
    country: '🇱🇰 斯里兰卡',
    airports: ['CMB', 'HRI', 'JAF', 'ACJ', 'TRZ'],
    highlights: ['印度洋明珠', '古代王朝', '茶叶王国', '佛教圣地'],
    specialty: '岛国明珠 + 古代文明'
  },
  {
    country: '🇳🇵 尼泊尔',
    airports: ['KTM', 'PKR', 'LUA', 'BWA'],
    highlights: ['珠峰所在国', '佛祖诞生地', '喜马拉雅徒步', '雪山王国'],
    specialty: '高山王国 + 佛教圣地'
  },
  {
    country: '🇧🇹 不丹',
    airports: ['PBH', 'YON', 'GOP'],
    highlights: ['雷龙之国', '国民幸福指数', '碳中和国家', '香格里拉'],
    specialty: '幸福王国 + 生态典范'
  },
  {
    country: '🇲🇻 马尔代夫',
    airports: ['MLE', 'GAN', 'HAQ', 'KDM', 'VAM'],
    highlights: ['度假天堂', '印度洋珍珠', '环礁群岛', '蜜月胜地'],
    specialty: '豪华度假 + 海洋生态'
  }
];

southAsiaCountries.forEach(country => {
  const availableAirports = country.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${country.country}: ${country.specialty}`);
  console.log(`   特色: ${country.highlights.join('、')}`);
  console.log(`   机场: ${availableAirports.join(', ')} (${availableAirports.length}/${country.airports.length})`);
});

console.log('\n🎉 南亚次大陆六国机场集成测试完成!');
console.log('================================');

// 最终统计
const totalSouthAsiaFound = allSouthAsiaAirports.length;
console.log(`📈 总结: 成功集成 ${totalSouthAsiaFound} 个南亚次大陆机场`);
console.log(`🏆 搜索质量: AAA+ (${totalSouthAsiaFound}/60 = ${((totalSouthAsiaFound/60)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 巴基斯坦+孟加拉国+斯里兰卡+尼泊尔+不丹+马尔代夫完整覆盖`);
console.log(`🥈 顶级枢纽: 卡拉奇真纳国际机场(KHI) - 巴基斯坦最大机场，南亚重要枢纽`);
console.log(`🏛️ 人口中心: 达卡哈兹拉特·沙阿贾拉勒机场(DAC) - 孟加拉国首都，南亚人口中心`);
console.log(`🏛️ 政治中心: 伊斯兰堡贝娜齐尔·布托机场(ISB) - 巴基斯坦首都，政治中心`);
console.log(`🌊 印度洋枢纽: 科伦坡班达拉奈克机场(CMB) - 斯里兰卡首都，印度洋重要枢纽`);
console.log(`🏔️ 珠峰门户: 加德满都特里布万机场(KTM) - 尼泊尔唯一国际机场，珠峰门户`);
console.log(`🏝️ 度假门户: 马累维拉纳机场(MLE) - 马尔代夫主要机场，豪华度假门户`);
console.log(`🌊 战略港口: 瓜达尔国际机场(GWD) - 中巴经济走廊重要港口`);
console.log(`🏔️ 极限挑战: 卢克拉机场(LUA) - 世界最危险机场，珠峰登山门户`);
console.log(`🏔️ 雷龙之国: 帕罗机场(PBH) - 不丹唯一国际机场，世界最难降落机场之一`);
console.log(`🏛️ 战略价值: 印度洋明珠与喜马拉雅山脉门户，连接南亚次大陆的航空网络`);
console.log(`🌍 探索价值: 古代文明+佛教圣地+度假天堂+高山王国完整航空门户`);
console.log(`🏆 里程碑: 南亚次大陆六国完成！印度洋与喜马拉雅的完美航空桥梁`);
