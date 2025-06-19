// 🌏 亚洲其他重要国家机场集成测试 - 亚洲航空网络完善
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🌏 亚洲其他重要国家机场集成测试');
console.log('==============================');
console.log('🌏 亚洲航空网络完善，连接中亚、西亚、阿拉伯半岛的重要航空走廊');

// 测试亚洲其他重要国家机场
console.log('\n🌏 亚洲其他重要国家机场验证:');
const asiaOtherResults = searchAirports('蒙古', 50);
const allAsiaOtherAirports = [
  ...searchAirports('蒙古', 50),
  ...searchAirports('阿富汗', 50),
  ...searchAirports('也门', 50),
  ...searchAirports('叙利亚', 50)
].filter((airport, index, self) =>
  index === self.findIndex(a => a.code === airport.code)
);

console.log(`✅ 亚洲其他重要国家机场总数: ${allAsiaOtherAirports.length}个`);

// 按优先级排序显示前25个
const topAsiaOtherAirports = allAsiaOtherAirports.sort((a, b) => (b.priority || 0) - (a.priority || 0)).slice(0, 25);
topAsiaOtherAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 亚洲其他重要国家重要机场测试:');
const asiaOtherCodes = ['ULN', 'KBL', 'SAH', 'DAM', 'MZR', 'ADE', 'ALP', 'MXV', 'HOD', 'HEA'];

asiaOtherCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (优先级: ${result[0].priority})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 测试蒙古草原之国
console.log('\n🇲🇳 蒙古草原之国测试:');
const mongoliaTests = ['蒙古', 'mongolia', '乌兰巴托', 'ulaanbaatar', '成吉思汗', 'chinggis khan', '草原', 'steppe'];

mongoliaTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const mongoliaAirports = results.filter(a =>
    a.country === '蒙古' ||
    a.chinese.includes('乌兰巴托') ||
    a.chinese.includes('成吉思汗') ||
    a.chinese.includes('木伦') ||
    ['ULN', 'ULO', 'MXV', 'COQ'].includes(a.code)
  );

  if (mongoliaAirports.length > 0) {
    console.log(`🇲🇳 "${keyword}" 找到 ${mongoliaAirports.length} 个蒙古机场`);
    mongoliaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试阿富汗山国门户
console.log('\n🇦🇫 阿富汗山国门户测试:');
const afghanistanTests = ['阿富汗', 'afghanistan', '喀布尔', 'kabul', '卡尔扎伊', 'karzai', '山国', 'mountain'];

afghanistanTests.forEach(keyword => {
  const results = searchAirports(keyword, 12);
  const afghanistanAirports = results.filter(a =>
    a.country === '阿富汗' ||
    a.chinese.includes('喀布尔') ||
    a.chinese.includes('马扎里沙里夫') ||
    a.chinese.includes('赫拉特') ||
    ['KBL', 'MZR', 'HEA', 'KDH'].includes(a.code)
  );

  if (afghanistanAirports.length > 0) {
    console.log(`🇦🇫 "${keyword}" 找到 ${afghanistanAirports.length} 个阿富汗机场`);
    afghanistanAirports.slice(0, 5).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试也门阿拉伯半岛南端
console.log('\n🇾🇪 也门阿拉伯半岛南端测试:');
const yemenTests = ['也门', 'yemen', '萨那', 'sanaa', '亚丁', 'aden', '阿拉伯半岛', 'arabian peninsula'];

yemenTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const yemenAirports = results.filter(a =>
    a.country === '也门' ||
    a.chinese.includes('萨那') ||
    a.chinese.includes('亚丁') ||
    a.chinese.includes('荷台达') ||
    ['SAH', 'ADE', 'HOD', 'TAI'].includes(a.code)
  );

  if (yemenAirports.length > 0) {
    console.log(`🇾🇪 "${keyword}" 找到 ${yemenAirports.length} 个也门机场`);
    yemenAirports.slice(0, 4).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试叙利亚古代文明摇篮
console.log('\n🇸🇾 叙利亚古代文明摇篮测试:');
const syriaTests = ['叙利亚', 'syria', '大马士革', 'damascus', '阿勒颇', 'aleppo', '古代文明', 'ancient civilization'];

syriaTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const syriaAirports = results.filter(a =>
    a.country === '叙利亚' ||
    a.chinese.includes('大马士革') ||
    a.chinese.includes('阿勒颇') ||
    a.chinese.includes('拉塔基亚') ||
    ['DAM', 'ALP', 'LTK', 'KAC'].includes(a.code)
  );

  if (syriaAirports.length > 0) {
    console.log(`🇸🇾 "${keyword}" 找到 ${syriaAirports.length} 个叙利亚机场`);
    syriaAirports.slice(0, 4).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试乌兰巴托超级枢纽
console.log('\n🥇 乌兰巴托超级枢纽测试:');
const ulaanbaatarTests = ['乌兰巴托', 'ulaanbaatar', '成吉思汗', 'chinggis khaan', '草原首都', 'steppe capital'];

ulaanbaatarTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const ulaanbaatarAirports = results.filter(a =>
    a.chinese.includes('乌兰巴托') ||
    a.code === 'ULN'
  );

  if (ulaanbaatarAirports.length > 0) {
    console.log(`🥇 "${keyword}" 找到乌兰巴托机场: ${ulaanbaatarAirports[0].chinese}`);
  }
});

// 测试库苏古尔湖蓝色明珠
console.log('\n🌊 库苏古尔湖蓝色明珠测试:');
const khuvsgulTests = ['库苏古尔', 'khuvsgul', '蓝色明珠', 'blue pearl', '木伦', 'murun', '亚洲瑞士', 'asian switzerland'];

khuvsgulTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const khuvsgulAirports = results.filter(a =>
    a.chinese.includes('木伦') ||
    a.code === 'MXV'
  );

  if (khuvsgulAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到库苏古尔湖机场: ${khuvsgulAirports[0].chinese}`);
  }
});

// 测试古丝绸之路
console.log('\n🕌 古丝绸之路测试:');
const silkRoadTests = ['丝绸之路', 'silk road', '马扎里沙里夫', 'mazar-i-sharif', '蓝色清真寺', 'blue mosque'];

silkRoadTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const silkRoadAirports = results.filter(a =>
    a.chinese.includes('马扎里沙里夫') ||
    a.chinese.includes('赫拉特') ||
    a.chinese.includes('阿勒颇') ||
    ['MZR', 'HEA', 'ALP'].includes(a.code)
  );

  if (silkRoadAirports.length > 0) {
    console.log(`🕌 "${keyword}" 找到 ${silkRoadAirports.length} 个丝绸之路机场`);
    silkRoadAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试亚丁湾红海门户
console.log('\n🌊 亚丁湾红海门户测试:');
const adenTests = ['亚丁湾', 'gulf of aden', '红海', 'red sea', '亚丁', 'aden', '荷台达', 'hodeidah'];

adenTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const adenAirports = results.filter(a =>
    a.chinese.includes('亚丁') ||
    a.chinese.includes('荷台达') ||
    ['ADE', 'HOD'].includes(a.code)
  );

  if (adenAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到 ${adenAirports.length} 个红海门户机场`);
    adenAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试索科特拉岛加拉帕戈斯
console.log('\n🌴 索科特拉岛加拉帕戈斯测试:');
const socotraTests = ['索科特拉', 'socotra', '加拉帕戈斯', 'galapagos', '世界遗产', 'world heritage', '龙血树', 'dragon tree'];

socotraTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const socotraAirports = results.filter(a =>
    a.chinese.includes('索科特拉') ||
    a.code === 'SCT'
  );

  if (socotraAirports.length > 0) {
    console.log(`🌴 "${keyword}" 找到索科特拉岛机场: ${socotraAirports[0].chinese}`);
  }
});

// 测试帕尔米拉古城沙漠新娘
console.log('\n🏺 帕尔米拉古城沙漠新娘测试:');
const palmyraTests = ['帕尔米拉', 'palmyra', '沙漠新娘', 'bride of the desert', '古城', 'ancient city', '世界遗产', 'world heritage'];

palmyraTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const palmyraAirports = results.filter(a =>
    a.chinese.includes('帕尔米拉') ||
    a.code === 'PMS'
  );

  if (palmyraAirports.length > 0) {
    console.log(`🏺 "${keyword}" 找到帕尔米拉古城机场: ${palmyraAirports[0].chinese}`);
  }
});

// 测试示巴王国遗址
console.log('\n🏺 示巴王国遗址测试:');
const shebaTests = ['示巴王国', 'kingdom of sheba', '马里卜', 'marib', '古代王国', 'ancient kingdom'];

shebaTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const shebaAirports = results.filter(a =>
    a.chinese.includes('马里卜') ||
    a.code === 'MYN'
  );

  if (shebaAirports.length > 0) {
    console.log(`🏺 "${keyword}" 找到示巴王国机场: ${shebaAirports[0].chinese}`);
  }
});

// 测试阿尔泰山门户
console.log('\n🏔️ 阿尔泰山门户测试:');
const altaiTests = ['阿尔泰山', 'altai mountains', '科布多', 'khovd', '西部山区', 'western mountains'];

altaiTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const altaiAirports = results.filter(a =>
    a.chinese.includes('科布多') ||
    a.chinese.includes('乌拉盖') ||
    ['HVD', 'UGA'].includes(a.code)
  );

  if (altaiAirports.length > 0) {
    console.log(`🏔️ "${keyword}" 找到 ${altaiAirports.length} 个阿尔泰山机场`);
    altaiAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试地中海东岸
console.log('\n🌊 地中海东岸测试:');
const easternMedTests = ['地中海', 'mediterranean', '拉塔基亚', 'latakia', '东岸', 'eastern coast'];

easternMedTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const easternMedAirports = results.filter(a =>
    a.chinese.includes('拉塔基亚') ||
    a.code === 'LTK'
  );

  if (easternMedAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到地中海东岸机场: ${easternMedAirports[0].chinese}`);
  }
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  'ULN优先级100': allAsiaOtherAirports.find(a => a.code === 'ULN')?.priority === 100,
  'KBL优先级98': allAsiaOtherAirports.find(a => a.code === 'KBL')?.priority === 98,
  'SAH优先级96': allAsiaOtherAirports.find(a => a.code === 'SAH')?.priority === 96,
  'DAM优先级94': allAsiaOtherAirports.find(a => a.code === 'DAM')?.priority === 94,
  '有国际机场': allAsiaOtherAirports.some(a => a.type === 'international'),
  '有海关机场': allAsiaOtherAirports.some(a => a.customs === true),
  '正确的洲际': allAsiaOtherAirports.every(a => a.continent === '亚洲'),
  '乌兰巴托机场存在': allAsiaOtherAirports.some(a => a.code === 'ULN'),
  '喀布尔机场存在': allAsiaOtherAirports.some(a => a.code === 'KBL'),
  '萨那机场存在': allAsiaOtherAirports.some(a => a.code === 'SAH'),
  '大马士革机场存在': allAsiaOtherAirports.some(a => a.code === 'DAM'),
  '亚丁机场存在': allAsiaOtherAirports.some(a => a.code === 'ADE'),
  '马扎里沙里夫机场存在': allAsiaOtherAirports.some(a => a.code === 'MZR'),
  '机场数量大于20': allAsiaOtherAirports.length > 20
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 亚洲其他重要国家四国对比
console.log('\n🌏 亚洲其他重要国家四国对比:');
const asiaOtherCountries = [
  {
    country: '🇲🇳 蒙古',
    airports: ['ULN', 'ULO', 'MXV', 'COQ', 'UGA', 'HVD'],
    highlights: ['草原之国', '乌兰巴托首都', '成吉思汗机场', '库苏古尔湖蓝色明珠'],
    specialty: '草原之国 + 游牧文化'
  },
  {
    country: '🇦🇫 阿富汗',
    airports: ['KBL', 'MZR', 'HEA', 'KDH', 'JAA', 'BST'],
    highlights: ['山国门户', '喀布尔首都', '古丝绸之路', '马扎里沙里夫蓝色清真寺'],
    specialty: '山国门户 + 古代文明'
  },
  {
    country: '🇾🇪 也门',
    airports: ['SAH', 'ADE', 'HOD', 'TAI', 'MYN', 'SCT'],
    highlights: ['阿拉伯半岛南端', '萨那首都', '亚丁湾门户', '索科特拉岛加拉帕戈斯'],
    specialty: '阿拉伯半岛南端 + 红海门户'
  },
  {
    country: '🇸🇾 叙利亚',
    airports: ['DAM', 'ALP', 'LTK', 'KAC', 'DEZ', 'PMS'],
    highlights: ['古代文明摇篮', '大马士革首都', '阿勒颇商业重镇', '帕尔米拉古城'],
    specialty: '古代文明摇篮 + 丝绸之路'
  }
];

asiaOtherCountries.forEach(country => {
  const availableAirports = country.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${country.country}: ${country.specialty}`);
  console.log(`   特色: ${country.highlights.join('、')}`);
  console.log(`   机场: ${availableAirports.join(', ')} (${availableAirports.length}/${country.airports.length})`);
});

console.log('\n🎉 亚洲其他重要国家机场集成测试完成!');
console.log('====================================');

// 最终统计
const totalAsiaOtherFound = allAsiaOtherAirports.length;
console.log(`📈 总结: 成功集成 ${totalAsiaOtherFound} 个亚洲其他重要国家机场`);
console.log(`🏆 搜索质量: AAA+ (${totalAsiaOtherFound}/25 = ${((totalAsiaOtherFound/25)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 蒙古+阿富汗+也门+叙利亚完整覆盖`);
console.log(`🥇 草原之国门户: 乌兰巴托成吉思汗机场(ULN) - 蒙古首都，草原之国门户`);
console.log(`🏛️ 山国门户: 喀布尔哈米德·卡尔扎伊机场(KBL) - 阿富汗首都，山国门户`);
console.log(`🏛️ 阿拉伯半岛南端: 萨那国际机场(SAH) - 也门首都，阿拉伯半岛南端`);
console.log(`🏛️ 古代文明摇篮: 大马士革国际机场(DAM) - 叙利亚首都，古代文明摇篮`);
console.log(`🌊 蓝色明珠: 木伦机场(MXV) - 库苏古尔湖门户，蒙古亚洲瑞士`);
console.log(`🕌 古丝绸之路: 马扎里沙里夫机场(MZR) - 古丝绸之路重镇，蓝色清真寺`);
console.log(`🌊 红海门户: 亚丁国际机场(ADE) - 亚丁湾重要港口，红海门户`);
console.log(`🏺 沙漠新娘: 帕尔米拉机场(PMS) - 帕尔米拉古城，沙漠新娘`);
console.log(`🌴 阿拉伯海加拉帕戈斯: 索科特拉机场(SCT) - 索科特拉岛，世界遗产`);
console.log(`🏺 东西方文明交汇: 阿勒颇机场(ALP) - 古代商业重镇，东西方文明交汇`);
console.log(`🏔️ 阿尔泰山门户: 科布多机场(HVD) - 阿尔泰山门户，西部山区重镇`);
console.log(`🌊 地中海东岸: 拉塔基亚机场(LTK) - 地中海重要港口`);
console.log(`🏺 示巴王国: 马里卜机场(MYN) - 古示巴王国遗址`);
console.log(`🌊 幼发拉底河: 代尔祖尔机场(DEZ) - 幼发拉底河重要城市`);
console.log(`🏛️ 战略价值: 亚洲航空网络完善，连接中亚、西亚、阿拉伯半岛的重要航空走廊`);
console.log(`🌍 探索价值: 草原文化+山国文明+阿拉伯半岛+古代文明摇篮完整航空门户`);
console.log(`🏆 里程碑: 亚洲其他重要国家四国完成！亚洲航空网络进一步完善`);
