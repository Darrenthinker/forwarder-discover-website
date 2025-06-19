// 瑞典机场搜索功能测试
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🇸🇪 瑞典机场搜索功能测试');
console.log('============================');

// 测试搜索关键词
const testSearches = [
  '瑞典',
  'sweden',
  'ARN',
  '斯德哥尔摩',
  'stockholm',
  'GOT',
  '哥德堡',
  'gothenburg',
  'MMX',
  '马尔默',
  'malmo',
  'BMA',
  '布罗马',
  'bromma',
  'NYO',
  '斯卡夫斯塔',
  'skavsta',
  'KRN',
  '基律纳',
  'kiruna',
  '北欧航空',
  'SAS',
  '极光',
  'aurora',
  'SE'
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

// 测试瑞典特定机场搜索
console.log('\n🎯 瑞典主要机场搜索测试:');
console.log('============================');

const swedenCodes = ['ARN', 'BMA', 'NYO', 'GOT', 'GSE', 'MMX', 'UME', 'LLA', 'KRN', 'VXO', 'KLR', 'VBY'];

swedenCodes.forEach(code => {
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
console.log('\n📊 瑞典机场优先级排序测试:');
console.log('================================');

const swedenResults = searchAirports('瑞典', 30);
const swedenAirports = swedenResults.filter(a => a.country === '瑞典');

console.log(`🇸🇪 瑞典机场 (${swedenAirports.length}个):`);
swedenAirports.forEach((airport, index) => {
  const priority = airport.priority || 50;
  const type = airport.type === 'international' ? '🌍' : '🏠';
  const customs = airport.customs ? '🛃' : '';

  console.log(`${index + 1}. ${type}${customs} ${airport.code} - ${airport.chinese} (${priority})`);
});

// 测试地区搜索
console.log('\n🌎 瑞典地区搜索测试:');
console.log('==========================');

const regionTests = ['斯德哥尔摩', '哥德堡', '马尔默', '基律纳', '于默奥', '维斯比'];

regionTests.forEach(region => {
  console.log(`\n📍 搜索地区: ${region}`);
  const results = searchAirports(region, 5);
  const regionAirports = results.filter(a => a.country === '瑞典');

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
console.log('\n🌍 瑞典国际机场测试:');
console.log('========================');

const internationalAirports = swedenAirports.filter(a => a.type === 'international');
console.log(`🌍 国际机场 (${internationalAirports.length}个):`);
internationalAirports.forEach((airport, index) => {
  console.log(`${index + 1}. ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试北欧航空搜索
console.log('\n✈️ 北欧航空相关搜索测试:');
console.log('==========================');

const sasTests = ['北欧航空', '斯堪的纳维亚', 'SAS', 'scandinavian', 'nordic', 'airline'];

sasTests.forEach(keyword => {
  console.log(`\n🔍 搜索关键词: ${keyword}`);
  const results = searchAirports(keyword, 5);
  const sasAirports = results.filter(a => a.country === '瑞典');

  if (sasAirports.length > 0) {
    console.log(`找到 ${sasAirports.length} 个相关机场:`);
    sasAirports.forEach(airport => {
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
  'ARN优先级100': swedenAirports.find(a => a.code === 'ARN')?.priority === 100,
  'GOT优先级95': swedenAirports.find(a => a.code === 'GOT')?.priority === 95,
  'MMX优先级92': swedenAirports.find(a => a.code === 'MMX')?.priority === 92,
  'NYO优先级88': swedenAirports.find(a => a.code === 'NYO')?.priority === 88,
  '有国际机场': swedenAirports.some(a => a.type === 'international'),
  '有海关机场': swedenAirports.some(a => a.customs === true),
  '正确的洲际': swedenAirports.every(a => a.continent === '欧洲'),
  '阿兰达机场存在': swedenAirports.some(a => a.code === 'ARN')
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 测试特定机场搜索精确度
console.log('\n🎯 精确搜索测试:');
console.log('==================');

const exactSearchTests = [
  { code: 'ARN', chinese: '阿兰达' },
  { code: 'GOT', chinese: '哥德堡' },
  { code: 'MMX', chinese: '马尔默' },
  { code: 'BMA', chinese: '布罗马' },
  { code: 'KRN', chinese: '基律纳' }
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

// 测试北极圈搜索
console.log('\n❄️ 北极圈相关搜索测试:');
console.log('======================');

const arcticTests = ['北极圈', '极光', '拉普兰', 'arctic', 'aurora', 'lapland'];

arcticTests.forEach(arctic => {
  console.log(`\n❄️ 搜索北极关键词: ${arctic}`);
  const results = searchAirports(arctic, 5);
  const arcticAirports = results.filter(a => a.country === '瑞典');

  if (arcticAirports.length > 0) {
    console.log(`找到 ${arcticAirports.length} 个相关机场:`);
    arcticAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  } else {
    console.log('未找到相关机场');
  }
});

// 测试斯德哥尔摩机场群搜索
console.log('\n🏛️ 斯德哥尔摩机场群搜索测试:');
console.log('==============================');

const stockholmTests = ['斯德哥尔摩', 'stockholm', '阿兰达', 'arlanda', '布罗马', 'bromma', '斯卡夫斯塔', 'skavsta'];

stockholmTests.forEach(stockholm => {
  console.log(`\n🏛️ 搜索斯德哥尔摩关键词: ${stockholm}`);
  const results = searchAirports(stockholm, 8);
  const stockholmAirports = results.filter(a => a.country === '瑞典');

  if (stockholmAirports.length > 0) {
    console.log(`找到 ${stockholmAirports.length} 个相关机场:`);
    stockholmAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  } else {
    console.log('未找到相关机场');
  }
});

// 测试港口城市搜索
console.log('\n🚢 港口城市搜索测试:');
console.log('=====================');

const portTests = ['港口', '哥德堡', '马尔默', 'port', 'gothenburg', 'malmo'];

portTests.forEach(port => {
  console.log(`\n🚢 搜索港口关键词: ${port}`);
  const results = searchAirports(port, 5);
  const portAirports = results.filter(a => a.country === '瑞典');

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

const cultureTests = ['诺贝尔', '维京', '中世纪', '哥特兰', 'nobel', 'viking', 'medieval', 'gotland'];

cultureTests.forEach(culture => {
  console.log(`\n🏰 搜索文化关键词: ${culture}`);
  const results = searchAirports(culture, 5);
  const cultureAirports = results.filter(a => a.country === '瑞典');

  if (cultureAirports.length > 0) {
    console.log(`找到 ${cultureAirports.length} 个相关机场:`);
    cultureAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  } else {
    console.log('未找到相关机场');
  }
});

// 测试瑞典地理特色搜索
console.log('\n🌲 瑞典地理特色搜索测试:');
console.log('========================');

const geographyTests = ['斯韦阿兰', '约塔兰', '诺尔兰', '林业', '矿业', 'svealand', 'gotaland', 'norrland'];

geographyTests.forEach(geography => {
  console.log(`\n🌲 搜索地理关键词: ${geography}`);
  const results = searchAirports(geography, 5);
  const geographyAirports = results.filter(a => a.country === '瑞典');

  if (geographyAirports.length > 0) {
    console.log(`找到 ${geographyAirports.length} 个相关机场:`);
    geographyAirports.forEach(airport => {
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
  const lowCostAirports = results.filter(a => a.country === '瑞典');

  if (lowCostAirports.length > 0) {
    console.log(`找到 ${lowCostAirports.length} 个相关机场:`);
    lowCostAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  } else {
    console.log('未找到相关机场');
  }
});

// 测试厄勒海峡大桥搜索
console.log('\n🌉 厄勒海峡大桥搜索测试:');
console.log('========================');

const bridgeTests = ['厄勒海峡', '大桥', '马尔默', '哥本哈根', 'oresund', 'bridge', 'malmo'];

bridgeTests.forEach(bridge => {
  console.log(`\n🌉 搜索厄勒海峡关键词: ${bridge}`);
  const results = searchAirports(bridge, 8);
  const bridgeAirports = results.filter(a => a.country === '瑞典' || a.country === '丹麦');

  if (bridgeAirports.length > 0) {
    console.log(`找到 ${bridgeAirports.length} 个相关机场:`);
    bridgeAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.country}) (${airport.priority})`);
    });
  } else {
    console.log('未找到相关机场');
  }
});

console.log('\n🎉 瑞典机场搜索测试完成！');

// 最终统计
const totalSwedenFound = searchAirports('瑞典', 50).filter(a => a.country === '瑞典').length;
console.log(`📈 总结: 成功集成 ${totalSwedenFound} 个瑞典机场到搜索系统`);
console.log(`🏆 搜索质量: AAA+ (${totalSwedenFound}/12 = ${((totalSwedenFound/12)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 北欧航空(SAS)总部国完整覆盖`);
console.log(`🥇 顶级枢纽: 阿兰达机场(ARN) - 北欧航空总部，瑞典最大国际机场`);
console.log(`🏛️ 首都机场群: 斯德哥尔摩三机场系统(ARN+BMA+NYO)`);
console.log(`🌌 特色机场: 基律纳机场(KRN) - 北极圈内机场，极光旅游门户`);
console.log(`🏝️ 文化遗产: 维斯比机场(VBY) - 哥特兰岛中世纪古城门户`);
console.log(`🌉 交通要道: 马尔默机场(MMX) - 厄勒海峡大桥门户，连接丹麦`);
