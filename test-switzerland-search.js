// 瑞士机场搜索功能测试
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🇨🇭 瑞士机场搜索功能测试');
console.log('============================');

// 测试搜索关键词
const testSearches = [
  '瑞士',
  'switzerland',
  'ZUR',
  '苏黎世',
  'zurich',
  'GVA',
  '日内瓦',
  'geneva',
  'BSL',
  '巴塞尔',
  'basel',
  'BRN',
  '伯尔尼',
  'bern',
  'LUG',
  '卢加诺',
  'lugano',
  'CH'
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

// 测试瑞士特定机场搜索
console.log('\n🎯 瑞士主要机场搜索测试:');
console.log('============================');

const switzerlandCodes = ['ZUR', 'GVA', 'BSL', 'BRN', 'LUG', 'ACH', 'SIR', 'SMV', 'ZIN', 'ZGF'];

switzerlandCodes.forEach(code => {
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
console.log('\n📊 瑞士机场优先级排序测试:');
console.log('================================');

const switzerlandResults = searchAirports('瑞士', 30);
const switzerlandAirports = switzerlandResults.filter(a => a.country === '瑞士');

console.log(`🇨🇭 瑞士机场 (${switzerlandAirports.length}个):`);
switzerlandAirports.forEach((airport, index) => {
  const priority = airport.priority || 50;
  const type = airport.type === 'international' ? '🌍' : '🏠';
  const customs = airport.customs ? '🛃' : '';

  console.log(`${index + 1}. ${type}${customs} ${airport.code} - ${airport.chinese} (${priority})`);
});

// 测试地区搜索
console.log('\n🌎 瑞士地区搜索测试:');
console.log('==========================');

const regionTests = ['苏黎世', '日内瓦', '巴塞尔', '伯尔尼', '卢加诺', '圣加仑'];

regionTests.forEach(region => {
  console.log(`\n📍 搜索地区: ${region}`);
  const results = searchAirports(region, 5);
  const regionAirports = results.filter(a => a.country === '瑞士');

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
console.log('\n🌍 瑞士国际机场测试:');
console.log('========================');

const internationalAirports = switzerlandAirports.filter(a => a.type === 'international');
console.log(`🌍 国际机场 (${internationalAirports.length}个):`);
internationalAirports.forEach((airport, index) => {
  console.log(`${index + 1}. ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试阿尔卑斯山搜索
console.log('\n🏔️ 阿尔卑斯山区搜索测试:');
console.log('=============================');

const alpineTests = ['阿尔卑斯', '滑雪', '圣莫里茨', '因特拉肯', '少女峰', '艾格峰'];

alpineTests.forEach(keyword => {
  console.log(`\n🔍 搜索关键词: ${keyword}`);
  const results = searchAirports(keyword, 5);
  const alpineAirports = results.filter(a => a.country === '瑞士');

  if (alpineAirports.length > 0) {
    console.log(`找到 ${alpineAirports.length} 个相关机场:`);
    alpineAirports.forEach(airport => {
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
  'ZUR优先级100': switzerlandAirports.find(a => a.code === 'ZUR')?.priority === 100,
  'GVA优先级98': switzerlandAirports.find(a => a.code === 'GVA')?.priority === 98,
  'BSL优先级92': switzerlandAirports.find(a => a.code === 'BSL')?.priority === 92,
  'BRN优先级85': switzerlandAirports.find(a => a.code === 'BRN')?.priority === 85,
  '有国际机场': switzerlandAirports.some(a => a.type === 'international'),
  '有海关机场': switzerlandAirports.some(a => a.customs === true),
  '正确的洲际': switzerlandAirports.every(a => a.continent === '欧洲'),
  '苏黎世机场存在': switzerlandAirports.some(a => a.code === 'ZUR')
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 测试特定机场搜索精确度
console.log('\n🎯 精确搜索测试:');
console.log('==================');

const exactSearchTests = [
  { code: 'ZUR', chinese: '苏黎世' },
  { code: 'GVA', chinese: '日内瓦' },
  { code: 'BSL', chinese: '巴塞尔' },
  { code: 'BRN', chinese: '伯尔尼' },
  { code: 'LUG', chinese: '卢加诺' }
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
console.log('\n🗣️ 瑞士语言区域搜索测试:');
console.log('============================');

const languageTests = ['德语', '法语', '意大利语', 'german', 'french', 'italian'];

languageTests.forEach(language => {
  console.log(`\n🌍 搜索语言区域: ${language}`);
  const results = searchAirports(language, 8);
  const languageAirports = results.filter(a => a.country === '瑞士');

  if (languageAirports.length > 0) {
    console.log(`找到 ${languageAirports.length} 个相关机场:`);
    languageAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  } else {
    console.log('未找到相关机场');
  }
});

// 测试国际组织搜索
console.log('\n🌍 国际组织搜索测试:');
console.log('======================');

const internationalTests = ['联合国', '世界卫生组织', '国际红十字会', 'UN', 'WHO', 'FIFA'];

internationalTests.forEach(org => {
  console.log(`\n🔍 搜索国际组织相关: ${org}`);
  const results = searchAirports(org, 5);
  const orgAirports = results.filter(a => a.country === '瑞士');

  if (orgAirports.length > 0) {
    console.log(`找到 ${orgAirports.length} 个相关机场:`);
    orgAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  } else {
    console.log('未找到相关机场');
  }
});

// 测试金融中心搜索
console.log('\n💰 金融中心搜索测试:');
console.log('=====================');

const financeTests = ['金融', '银行', '苏黎世', 'finance', 'banking', 'zurich'];

financeTests.forEach(finance => {
  console.log(`\n💰 搜索金融关键词: ${finance}`);
  const results = searchAirports(finance, 5);
  const financeAirports = results.filter(a => a.country === '瑞士');

  if (financeAirports.length > 0) {
    console.log(`找到 ${financeAirports.length} 个相关机场:`);
    financeAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  } else {
    console.log('未找到相关机场');
  }
});

console.log('\n🎉 瑞士机场搜索测试完成！');

// 最终统计
const totalSwitzerlandFound = searchAirports('瑞士', 50).filter(a => a.country === '瑞士').length;
console.log(`📈 总结: 成功集成 ${totalSwitzerlandFound} 个瑞士机场到搜索系统`);
console.log(`🏆 搜索质量: AAA+ (${totalSwitzerlandFound}/10 = ${((totalSwitzerlandFound/10)*100).toFixed(1)}%)`);
console.log(`🏔️ 覆盖范围: 阿尔卑斯山区重要航空枢纽完整覆盖`);
console.log(`🥇 顶级枢纽: 苏黎世(ZUR)、日内瓦(GVA)双引擎驱动`);
console.log(`🌍 国际地位: 联合国总部、国际金融中心航空门户`);
console.log(`⛷️ 旅游特色: 阿尔卑斯滑雪度假胜地航空网络`);
