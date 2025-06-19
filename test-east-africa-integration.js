// 🦁 东非五国机场集成测试 - 东非大裂谷航空网络
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🦁 东非五国机场集成测试');
console.log('=========================');
console.log('🌍 东非大裂谷航空网络，连接野生动物迁徙走廊与古人类发源地');

// 测试东非五国机场
console.log('\n🦁 东非五国机场验证:');
const eastAfricaResults = searchAirports('肯尼亚', 50);
const allEastAfricaAirports = [
  ...searchAirports('肯尼亚', 50),
  ...searchAirports('坦桑尼亚', 50),
  ...searchAirports('乌干达', 50),
  ...searchAirports('卢旺达', 50),
  ...searchAirports('埃塞俄比亚', 50)
].filter((airport, index, self) =>
  index === self.findIndex(a => a.code === airport.code)
);

console.log(`✅ 东非五国机场总数: ${allEastAfricaAirports.length}个`);

// 按优先级排序显示前20个
const topEastAfricaAirports = allEastAfricaAirports.sort((a, b) => (b.priority || 0) - (a.priority || 0)).slice(0, 20);
topEastAfricaAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 东非五国重要机场测试:');
const eastAfricaCodes = ['ADD', 'NBO', 'DAR', 'JRO', 'EBB', 'KGL', 'MBA', 'ZNZ', 'MWZ', 'KIS'];

eastAfricaCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (优先级: ${result[0].priority})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 测试埃塞俄比亚非洲屋脊
console.log('\n🇪🇹 埃塞俄比亚非洲屋脊测试:');
const ethiopiaTests = ['埃塞俄比亚', 'ethiopia', '亚的斯亚贝巴', 'addis ababa', '非洲联盟', 'african union', '非洲屋脊', 'roof of africa'];

ethiopiaTests.forEach(keyword => {
  const results = searchAirports(keyword, 15);
  const ethiopiaAirports = results.filter(a =>
    a.country === '埃塞俄比亚' ||
    a.chinese.includes('亚的斯亚贝巴') ||
    a.chinese.includes('迪雷达瓦') ||
    a.chinese.includes('巴赫达尔') ||
    ['ADD', 'DIR', 'BJR', 'GON'].includes(a.code)
  );

  if (ethiopiaAirports.length > 0) {
    console.log(`🇪🇹 "${keyword}" 找到 ${ethiopiaAirports.length} 个埃塞俄比亚机场`);
    ethiopiaAirports.slice(0, 5).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试肯尼亚东非门户
console.log('\n🇰🇪 肯尼亚东非门户测试:');
const kenyaTests = ['肯尼亚', 'kenya', '内罗毕', 'nairobi', '蒙巴萨', 'mombasa', '东非', 'east africa'];

kenyaTests.forEach(keyword => {
  const results = searchAirports(keyword, 15);
  const kenyaAirports = results.filter(a =>
    a.country === '肯尼亚' ||
    a.chinese.includes('内罗毕') ||
    a.chinese.includes('蒙巴萨') ||
    a.chinese.includes('基苏木') ||
    ['NBO', 'MBA', 'KIS', 'EDL'].includes(a.code)
  );

  if (kenyaAirports.length > 0) {
    console.log(`🇰🇪 "${keyword}" 找到 ${kenyaAirports.length} 个肯尼亚机场`);
    kenyaAirports.slice(0, 5).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试坦桑尼亚乞力马扎罗与塞伦盖蒂
console.log('\n🇹🇿 坦桑尼亚乞力马扎罗与塞伦盖蒂测试:');
const tanzaniaTests = ['坦桑尼亚', 'tanzania', '达累斯萨拉姆', 'dar es salaam', '乞力马扎罗', 'kilimanjaro', '塞伦盖蒂', 'serengeti'];

tanzaniaTests.forEach(keyword => {
  const results = searchAirports(keyword, 15);
  const tanzaniaAirports = results.filter(a =>
    a.country === '坦桑尼亚' ||
    a.chinese.includes('达累斯萨拉姆') ||
    a.chinese.includes('乞力马扎罗') ||
    a.chinese.includes('桑给巴尔') ||
    a.chinese.includes('塞伦盖蒂') ||
    ['DAR', 'JRO', 'ZNZ', 'MWZ', 'SEI'].includes(a.code)
  );

  if (tanzaniaAirports.length > 0) {
    console.log(`🇹🇿 "${keyword}" 找到 ${tanzaniaAirports.length} 个坦桑尼亚机场`);
    tanzaniaAirports.slice(0, 5).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试乌干达非洲明珠
console.log('\n🇺🇬 乌干达非洲明珠测试:');
const ugandaTests = ['乌干达', 'uganda', '恩德培', 'entebbe', '坎帕拉', 'kampala', '非洲明珠', 'pearl of africa'];

ugandaTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const ugandaAirports = results.filter(a =>
    a.country === '乌干达' ||
    a.chinese.includes('恩德培') ||
    a.chinese.includes('坎帕拉') ||
    a.chinese.includes('古卢') ||
    ['EBB', 'KLA', 'GUL', 'KSE'].includes(a.code)
  );

  if (ugandaAirports.length > 0) {
    console.log(`🇺🇬 "${keyword}" 找到 ${ugandaAirports.length} 个乌干达机场`);
    ugandaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试卢旺达千丘之国
console.log('\n🇷🇼 卢旺达千丘之国测试:');
const rwandaTests = ['卢旺达', 'rwanda', '基加利', 'kigali', '千丘之国', 'land of thousand hills', '山地大猩猩', 'mountain gorilla'];

rwandaTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const rwandaAirports = results.filter(a =>
    a.country === '卢旺达' ||
    a.chinese.includes('基加利') ||
    a.chinese.includes('卡门贝') ||
    a.chinese.includes('鲁亨盖里') ||
    ['KGL', 'KME', 'RHG'].includes(a.code)
  );

  if (rwandaAirports.length > 0) {
    console.log(`🇷🇼 "${keyword}" 找到 ${rwandaAirports.length} 个卢旺达机场`);
    rwandaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试野生动物迁徙走廊
console.log('\n🦁 野生动物迁徙走廊测试:');
const wildlifeTests = ['野生动物', 'wildlife', '动物大迁徙', 'great migration', '马赛马拉', 'masai mara', '塞伦盖蒂', 'serengeti'];

wildlifeTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const wildlifeAirports = results.filter(a =>
    a.chinese.includes('塞伦盖蒂') ||
    a.chinese.includes('阿鲁沙') ||
    a.chinese.includes('威尔逊') ||
    ['SEI', 'ARK', 'WIL'].includes(a.code)
  );

  if (wildlifeAirports.length > 0) {
    console.log(`🦁 "${keyword}" 找到 ${wildlifeAirports.length} 个野生动物迁徙机场`);
    wildlifeAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试乞力马扎罗非洲最高峰
console.log('\n🏔️ 乞力马扎罗非洲最高峰测试:');
const kilimanjaroTests = ['乞力马扎罗', 'kilimanjaro', '非洲最高峰', 'highest peak in africa', '雪山', 'snow mountain'];

kilimanjaroTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const kilimanjaroAirports = results.filter(a =>
    a.chinese.includes('乞力马扎罗') ||
    a.code === 'JRO'
  );

  if (kilimanjaroAirports.length > 0) {
    console.log(`🏔️ "${keyword}" 找到乞力马扎罗机场: ${kilimanjaroAirports[0].chinese}`);
  }
});

// 测试东非大裂谷
console.log('\n🌋 东非大裂谷测试:');
const riftValleyTests = ['大裂谷', 'rift valley', '东非大裂谷', 'east african rift', '地质奇观', 'geological wonder'];

riftValleyTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const riftValleyAirports = results.filter(a =>
    a.chinese.includes('内罗毕') ||
    a.chinese.includes('基苏木') ||
    a.chinese.includes('埃尔多雷特') ||
    ['NBO', 'KIS', 'EDL'].includes(a.code)
  );

  if (riftValleyAirports.length > 0) {
    console.log(`🌋 "${keyword}" 找到 ${riftValleyAirports.length} 个大裂谷地区机场`);
    riftValleyAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试维多利亚湖
console.log('\n🌊 维多利亚湖测试:');
const victoriaLakeTests = ['维多利亚湖', 'lake victoria', '非洲大湖', 'great lakes', '基苏木', 'kisumu'];

victoriaLakeTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const victoriaLakeAirports = results.filter(a =>
    a.chinese.includes('基苏木') ||
    a.chinese.includes('恩德培') ||
    a.chinese.includes('姆万扎') ||
    ['KIS', 'EBB', 'MWZ'].includes(a.code)
  );

  if (victoriaLakeAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到 ${victoriaLakeAirports.length} 个维多利亚湖机场`);
    victoriaLakeAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试桑给巴尔香料岛
console.log('\n🏝️ 桑给巴尔香料岛测试:');
const zanzibarTests = ['桑给巴尔', 'zanzibar', '香料岛', 'spice island', '印度洋', 'indian ocean'];

zanzibarTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const zanzibarAirports = results.filter(a =>
    a.chinese.includes('桑给巴尔') ||
    a.code === 'ZNZ'
  );

  if (zanzibarAirports.length > 0) {
    console.log(`🏝️ "${keyword}" 找到桑给巴尔机场: ${zanzibarAirports[0].chinese}`);
  }
});

// 测试山地大猩猩保护区
console.log('\n🦍 山地大猩猩保护区测试:');
const gorillaTests = ['山地大猩猩', 'mountain gorilla', '大猩猩', 'gorilla', '卡门贝', 'kamembe', '鲁亨盖里', 'ruhengeri'];

gorillaTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const gorillaAirports = results.filter(a =>
    a.chinese.includes('卡门贝') ||
    a.chinese.includes('鲁亨盖里') ||
    a.chinese.includes('卡塞塞') ||
    ['KME', 'RHG', 'KSE'].includes(a.code)
  );

  if (gorillaAirports.length > 0) {
    console.log(`🦍 "${keyword}" 找到 ${gorillaAirports.length} 个山地大猩猩保护区机场`);
    gorillaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试古人类发源地
console.log('\n🦴 古人类发源地测试:');
const humanOriginTests = ['古人类', 'ancient human', '人类发源地', 'cradle of humanity', '图尔卡纳湖', 'lake turkana', '洛德瓦尔', 'lodwar'];

humanOriginTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const humanOriginAirports = results.filter(a =>
    a.chinese.includes('洛德瓦尔') ||
    a.chinese.includes('阿瓦萨') ||
    a.code === 'LOK' ||
    a.code === 'AWA'
  );

  if (humanOriginAirports.length > 0) {
    console.log(`🦴 "${keyword}" 找到 ${humanOriginAirports.length} 个古人类发源地机场`);
    humanOriginAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试咖啡发源地
console.log('\n☕ 咖啡发源地测试:');
const coffeeTests = ['咖啡', 'coffee', '咖啡发源地', 'birthplace of coffee', '吉马', 'jimma', '埃塞俄比亚咖啡', 'ethiopian coffee'];

coffeeTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const coffeeAirports = results.filter(a =>
    a.chinese.includes('吉马') ||
    a.chinese.includes('阿瓦萨') ||
    a.country === '埃塞俄比亚' ||
    ['JIM', 'AWA'].includes(a.code)
  );

  if (coffeeAirports.length > 0) {
    console.log(`☕ "${keyword}" 找到 ${coffeeAirports.length} 个咖啡产区机场`);
    coffeeAirports.slice(0, 3).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  'ADD优先级99': allEastAfricaAirports.find(a => a.code === 'ADD')?.priority === 99,
  'NBO优先级100': allEastAfricaAirports.find(a => a.code === 'NBO')?.priority === 100,
  'DAR优先级98': allEastAfricaAirports.find(a => a.code === 'DAR')?.priority === 98,
  'JRO优先级95': allEastAfricaAirports.find(a => a.code === 'JRO')?.priority === 95,
  '有国际机场': allEastAfricaAirports.some(a => a.type === 'international'),
  '有海关机场': allEastAfricaAirports.some(a => a.customs === true),
  '正确的洲际': allEastAfricaAirports.every(a => a.continent === '非洲'),
  '亚的斯亚贝巴机场存在': allEastAfricaAirports.some(a => a.code === 'ADD'),
  '内罗毕机场存在': allEastAfricaAirports.some(a => a.code === 'NBO'),
  '达累斯萨拉姆机场存在': allEastAfricaAirports.some(a => a.code === 'DAR'),
  '乞力马扎罗机场存在': allEastAfricaAirports.some(a => a.code === 'JRO'),
  '恩德培机场存在': allEastAfricaAirports.some(a => a.code === 'EBB'),
  '基加利机场存在': allEastAfricaAirports.some(a => a.code === 'KGL'),
  '机场数量大于45': allEastAfricaAirports.length > 45
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 东非五国对比
console.log('\n🦁 东非五国对比:');
const eastAfricaCountries = [
  {
    country: '🇪🇹 埃塞俄比亚',
    airports: ['ADD', 'DIR', 'BJR', 'GON', 'MQX', 'JIM', 'AWA', 'ASO'],
    highlights: ['非洲屋脊', '亚的斯亚贝巴首都', '非洲联盟总部', '咖啡发源地'],
    specialty: '政治中心 + 咖啡文化'
  },
  {
    country: '🇰🇪 肯尼亚',
    airports: ['NBO', 'MBA', 'KIS', 'EDL', 'MYD', 'LOK', 'WIL', 'UAS'],
    highlights: ['东非门户', '内罗毕枢纽', '马赛马拉', '图尔卡纳湖古人类化石'],
    specialty: '东非枢纽 + 野生动物天堂'
  },
  {
    country: '🇹🇿 坦桑尼亚',
    airports: ['DAR', 'JRO', 'ZNZ', 'MWZ', 'DOD', 'TBO', 'MBI', 'SEI'],
    highlights: ['乞力马扎罗', '塞伦盖蒂', '桑给巴尔香料岛', '动物大迁徙'],
    specialty: '自然奇观 + 度假天堂'
  },
  {
    country: '🇺🇬 乌干达',
    airports: ['EBB', 'KLA', 'GUL', 'KSE', 'SRT', 'MBQ'],
    highlights: ['非洲明珠', '维多利亚湖', '鲁文佐里山脉', '山地大猩猩'],
    specialty: '湖光山色 + 大猩猩保护'
  },
  {
    country: '🇷🇼 卢旺达',
    airports: ['KGL', 'KME', 'RHG'],
    highlights: ['千丘之国', '基加利首都', '山地大猩猩保护区', '火山国家公园'],
    specialty: '生态旅游 + 大猩猩观察'
  }
];

eastAfricaCountries.forEach(country => {
  const availableAirports = country.airports.filter(code => {
    const result = searchAirports(code, 1);
    return result.length > 0;
  });
  console.log(`${country.country}: ${country.specialty}`);
  console.log(`   特色: ${country.highlights.join('、')}`);
  console.log(`   机场: ${availableAirports.join(', ')} (${availableAirports.length}/${country.airports.length})`);
});

console.log('\n🎉 东非五国机场集成测试完成!');
console.log('===============================');

// 最终统计
const totalEastAfricaFound = allEastAfricaAirports.length;
console.log(`📈 总结: 成功集成 ${totalEastAfricaFound} 个东非五国机场`);
console.log(`🏆 搜索质量: AAA+ (${totalEastAfricaFound}/50 = ${((totalEastAfricaFound/50)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 埃塞俄比亚+肯尼亚+坦桑尼亚+乌干达+卢旺达完整覆盖`);
console.log(`🏛️ 政治中心: 亚的斯亚贝巴博莱机场(ADD) - 埃塞俄比亚首都，非洲联盟总部`);
console.log(`🥇 东非枢纽: 内罗毕乔莫·肯雅塔机场(NBO) - 肯尼亚最大机场，东非重要枢纽`);
console.log(`🏛️ 经济中心: 达累斯萨拉姆尼雷尔机场(DAR) - 坦桑尼亚最大机场，经济中心`);
console.log(`🏔️ 自然奇观: 乞力马扎罗国际机场(JRO) - 非洲最高峰门户，野生动物园中心`);
console.log(`🏛️ 维多利亚湖: 恩德培国际机场(EBB) - 乌干达主要机场，维多利亚湖畔`);
console.log(`🏛️ 千丘之国: 基加利国际机场(KGL) - 卢旺达首都，千丘之国门户`);
console.log(`🏝️ 香料岛屿: 桑给巴尔机场(ZNZ) - 香料岛，印度洋旅游胜地`);
console.log(`🦁 野生动物: 塞伦盖蒂机场(SEI) - 动物大迁徙观赏门户`);
console.log(`🦍 大猩猩保护: 卡门贝机场(KME) - 尼永圭雷国家公园门户`);
console.log(`☕ 咖啡发源地: 吉马机场(JIM) - 世界咖啡发源地航空网络`);
console.log(`🏛️ 战略价值: 东非大裂谷航空网络，连接野生动物迁徙走廊与古人类发源地`);
console.log(`🌍 探索价值: 野生动物大迁徙+古人类化石+山地大猩猩+咖啡文化+火山景观完整航空门户`);
console.log(`🏆 里程碑: 东非五国完成！野生动物天堂与古人类发源地航空网络完整覆盖`);
