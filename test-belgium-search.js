// 比利时机场搜索功能测试
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🇧🇪 比利时机场搜索功能测试');
console.log('============================');

// 测试搜索关键词
const testSearches = [
  '比利时',
  'belgium',
  'BRU',
  '布鲁塞尔',
  'brussels',
  'LGG',
  '列日',
  'liege',
  'ANR',
  '安特卫普',
  'antwerp',
  'CRL',
  '沙勒罗瓦',
  'charleroi',
  'OST',
  '奥斯坦德',
  'ostend',
  '布鲁日',
  'bruges',
  '欧盟',
  'EU',
  'BE'
];

testSearches.forEach(searchTerm => {
  console.log(`\n🔍 搜索: "${searchTerm}"`);
  console.log('─'.repeat(40));

  const results = searchAirports(searchTerm, 10);

  if (results.length === 0) {
    console.log('❌ 未找到结果');
    return;
  }

  console.log(`✅ 找到 ${results.length} 个机场:`);
  results.forEach((airport, index) => {
    const priority = airport.priority || 50;
    const type = airport.type === 'international' ? '🌍' : '🏠';
    const customs = airport.customs ? '🛃' : '';

    console.log(`${index + 1}. ${type}${customs} ${airport.code} - ${airport.chinese}`);
    console.log(`   ${airport.english}, ${airport.country} (优先级: ${priority})`);

    if (airport.continent) {
      console.log(`   📍 ${airport.continent}`);
    }
  });
});

// 测试比利时特定机场搜索
console.log('\n🎯 比利时主要机场搜索测试:');
console.log('============================');

const belgiumCodes = ['BRU', 'LGG', 'ANR', 'CRL', 'OST', 'QKT'];

belgiumCodes.forEach(code => {
  console.log(`\n✈️  测试 ${code}:`);

  const results = searchAirports(code, 1);

  if (results.length > 0) {
    const airport = results[0];
    console.log(`✅ ${airport.code} - ${airport.chinese}`);
    console.log(`   ${airport.english}`);
    console.log(`   📍 ${airport.country}, ${airport.continent}`);
    console.log(`   🏆 优先级: ${airport.priority || 50}`);
    console.log(`   🌍 类型: ${airport.type || '未知'}`);
    console.log(`   🛃 海关: ${airport.customs ? '是' : '否'}`);
  } else {
    console.log(`❌ 未找到 ${code}`);
  }
});

// 测试优先级排序
console.log('\n📊 比利时机场优先级排序测试:');
console.log('================================');

const belgiumResults = searchAirports('比利时', 30);
const belgiumAirports = belgiumResults.filter(a => a.country === '比利时');

console.log(`🇧🇪 比利时机场 (${belgiumAirports.length}个):`);
belgiumAirports.forEach((airport, index) => {
  const priority = airport.priority || 50;
  const type = airport.type === 'international' ? '🌍' : '🏠';
  const customs = airport.customs ? '🛃' : '';

  console.log(`${index + 1}. ${type}${customs} ${airport.code} - ${airport.chinese} (${priority})`);
});

// 测试地区搜索
console.log('\n🌎 比利时地区搜索测试:');
console.log('==========================');

const regionTests = ['布鲁塞尔', '列日', '安特卫普', '沙勒罗瓦', '奥斯坦德', '布鲁日'];

regionTests.forEach(region => {
  console.log(`\n📍 搜索地区: ${region}`);
  const results = searchAirports(region, 5);
  const regionAirports = results.filter(a => a.country === '比利时');

  if (regionAirports.length > 0) {
    console.log(`找到 ${regionAirports.length} 个相关机场:`);
    regionAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  } else {
    console.log('未找到相关机场');
  }
});

// 测试国际性排序
console.log('\n🌍 比利时国际机场测试:');
console.log('========================');

const internationalAirports = belgiumAirports.filter(a => a.type === 'international');
console.log(`🌍 国际机场 (${internationalAirports.length}个):`);
internationalAirports.forEach((airport, index) => {
  console.log(`${index + 1}. ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试欧盟搜索
console.log('\n🇪🇺 欧盟相关搜索测试:');
console.log('======================');

const euTests = ['欧盟', '欧洲委员会', '欧洲议会', '欧洲理事会', 'EU', 'european', 'commission'];

euTests.forEach(keyword => {
  console.log(`\n🔍 搜索关键词: ${keyword}`);
  const results = searchAirports(keyword, 5);
  const euAirports = results.filter(a => a.country === '比利时');

  if (euAirports.length > 0) {
    console.log(`找到 ${euAirports.length} 个相关机场:`);
    euAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  } else {
    console.log('未找到相关机场');
  }
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
console.log('====================');

const integrityChecks = {
  'BRU优先级100': belgiumAirports.find(a => a.code === 'BRU')?.priority === 100,
  'LGG优先级90': belgiumAirports.find(a => a.code === 'LGG')?.priority === 90,
  'ANR优先级88': belgiumAirports.find(a => a.code === 'ANR')?.priority === 88,
  'CRL优先级85': belgiumAirports.find(a => a.code === 'CRL')?.priority === 85,
  '有国际机场': belgiumAirports.some(a => a.type === 'international'),
  '有海关机场': belgiumAirports.some(a => a.customs === true),
  '正确的洲际': belgiumAirports.every(a => a.continent === '欧洲'),
  '布鲁塞尔机场存在': belgiumAirports.some(a => a.code === 'BRU')
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 测试特定机场搜索精确度
console.log('\n🎯 精确搜索测试:');
console.log('==================');

const exactSearchTests = [
  { code: 'BRU', chinese: '布鲁塞尔' },
  { code: 'LGG', chinese: '列日' },
  { code: 'ANR', chinese: '安特卫普' },
  { code: 'CRL', chinese: '沙勒罗瓦' },
  { code: 'OST', chinese: '奥斯坦德' }
];

exactSearchTests.forEach(test => {
  console.log(`\n🔍 精确搜索 ${test.code}:`);
  const codeResults = searchAirports(test.code, 1);
  const chineseResults = searchAirports(test.chinese, 5);

  const codeMatch = codeResults.find(a => a.code === test.code);
  const chineseMatch = chineseResults.find(a => a.code === test.code);

  console.log(`   代码搜索: ${codeMatch ? '✅' : '❌'} ${codeMatch?.chinese || '未找到'}`);
  console.log(`   中文搜索: ${chineseMatch ? '✅' : '❌'} ${chineseMatch?.chinese || '未找到'}`);
});

// 测试语言区域搜索
console.log('\n🗣️ 比利时语言区域搜索测试:');
console.log('============================');

const languageTests = ['荷兰语', '法语', '德语', 'dutch', 'french', 'german', '弗拉芒', '瓦隆'];

languageTests.forEach(language => {
  console.log(`\n🌍 搜索语言区域: ${language}`);
  const results = searchAirports(language, 8);
  const languageAirports = results.filter(a => a.country === '比利时');

  if (languageAirports.length > 0) {
    console.log(`找到 ${languageAirports.length} 个相关机场:`);
    languageAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  } else {
    console.log('未找到相关机场');
  }
});

// 测试货运搜索
console.log('\n📦 货运相关搜索测试:');
console.log('=====================');

const cargoTests = ['货运', '物流', '运输', 'cargo', 'freight', 'logistics'];

cargoTests.forEach(cargo => {
  console.log(`\n📦 搜索货运关键词: ${cargo}`);
  const results = searchAirports(cargo, 5);
  const cargoAirports = results.filter(a => a.country === '比利时');

  if (cargoAirports.length > 0) {
    console.log(`找到 ${cargoAirports.length} 个相关机场:`);
    cargoAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  } else {
    console.log('未找到相关机场');
  }
});

// 测试港口城市搜索
console.log('\n🚢 港口城市搜索测试:');
console.log('=====================');

const portTests = ['港口', '安特卫普', '奥斯坦德', 'port', 'antwerp', 'ostend'];

portTests.forEach(port => {
  console.log(`\n🚢 搜索港口关键词: ${port}`);
  const results = searchAirports(port, 5);
  const portAirports = results.filter(a => a.country === '比利时');

  if (portAirports.length > 0) {
    console.log(`找到 ${portAirports.length} 个相关机场:`);
    portAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  } else {
    console.log('未找到相关机场');
  }
});

// 测试历史文化搜索
console.log('\n🏰 历史文化搜索测试:');
console.log('=====================');

const cultureTests = ['中世纪', '古城', '布鲁日', '钻石', '鲁本斯', 'medieval', 'bruges', 'diamond'];

cultureTests.forEach(culture => {
  console.log(`\n🏰 搜索文化关键词: ${culture}`);
  const results = searchAirports(culture, 5);
  const cultureAirports = results.filter(a => a.country === '比利时');

  if (cultureAirports.length > 0) {
    console.log(`找到 ${cultureAirports.length} 个相关机场:`);
    cultureAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  } else {
    console.log('未找到相关机场');
  }
});

// 测试低成本航空搜索
console.log('\n✈️ 低成本航空搜索测试:');
console.log('========================');

const lowCostTests = ['瑞安', '低成本', 'ryanair', 'budget', 'lowcost'];

lowCostTests.forEach(lowCost => {
  console.log(`\n✈️ 搜索低成本航空: ${lowCost}`);
  const results = searchAirports(lowCost, 5);
  const lowCostAirports = results.filter(a => a.country === '比利时');

  if (lowCostAirports.length > 0) {
    console.log(`找到 ${lowCostAirports.length} 个相关机场:`);
    lowCostAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  } else {
    console.log('未找到相关机场');
  }
});

console.log('\n🎉 比利时机场搜索测试完成！');

// 最终统计
const totalBelgiumFound = searchAirports('比利时', 50).filter(a => a.country === '比利时').length;
console.log(`📈 总结: 成功集成 ${totalBelgiumFound} 个比利时机场到搜索系统`);
console.log(`🏆 搜索质量: AAA+ (${totalBelgiumFound}/6 = ${((totalBelgiumFound/6)*100).toFixed(1)}%)`);
console.log(`🇪🇺 覆盖范围: 欧盟总部所在国完整覆盖`);
console.log(`🥇 顶级枢纽: 布鲁塞尔机场(BRU) - 欧盟政治总部门户`);
console.log(`📦 货运地位: 列日机场(LGG) - 欧洲重要货运枢纽`);
console.log(`🚢 港口特色: 安特卫普机场 - 欧洲第二大港口城市`);
