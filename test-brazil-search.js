// 巴西机场搜索功能测试
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🇧🇷 巴西机场搜索功能测试');
console.log('============================');

// 测试搜索关键词
const testSearches = [
  '巴西',
  'brazil',
  'GRU',
  '圣保罗',
  'sao paulo',
  'GIG',
  '里约热内卢',
  'rio de janeiro',
  'BSB',
  '巴西利亚',
  'brasilia',
  'BR'
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

// 测试巴西特定机场搜索
console.log('\n🎯 巴西主要机场搜索测试:');
console.log('============================');

const brazilCodes = ['GRU', 'GIG', 'BSB', 'CGH', 'VCP', 'CNF', 'SSA', 'REC', 'FOR', 'POA', 'CWB', 'MAO'];

brazilCodes.forEach(code => {
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
console.log('\n📊 巴西机场优先级排序测试:');
console.log('================================');

const brazilResults = searchAirports('巴西', 30);
const brazilAirports = brazilResults.filter(a => a.country === '巴西');

console.log(`🇧🇷 巴西机场 (${brazilAirports.length}个):`);
brazilAirports.forEach((airport, index) => {
  const priority = airport.priority || 50;
  const type = airport.type === 'international' ? '🌍' : '🏠';
  const customs = airport.customs ? '🛃' : '';

  console.log(`${index + 1}. ${type}${customs} ${airport.code} - ${airport.chinese} (${priority})`);
});

// 测试地区搜索
console.log('\n🌎 巴西地区搜索测试:');
console.log('=======================');

const regionTests = ['东南部', '东北部', '南部', '中西部', '北部'];

regionTests.forEach(region => {
  console.log(`\n📍 搜索地区: ${region}`);
  const results = searchAirports(region, 10);
  const regionAirports = results.filter(a => a.country === '巴西');

  if (regionAirports.length > 0) {
    console.log(`找到 ${regionAirports.length} 个相关机场:`);
    regionAirports.forEach(airport => {
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
  'GRU优先级100': brazilAirports.find(a => a.code === 'GRU')?.priority === 100,
  'GIG优先级98': brazilAirports.find(a => a.code === 'GIG')?.priority === 98,
  'BSB优先级95': brazilAirports.find(a => a.code === 'BSB')?.priority === 95,
  '有国际机场': brazilAirports.some(a => a.type === 'international'),
  '有海关机场': brazilAirports.some(a => a.customs === true),
  '正确的洲际': brazilAirports.every(a => a.continent === '南美')
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

console.log('\n🎉 巴西机场搜索测试完成！');

// 最终统计
const totalBrazilFound = searchAirports('巴西', 50).filter(a => a.country === '巴西').length;
console.log(`📈 总结: 成功集成 ${totalBrazilFound} 个巴西机场到搜索系统`);
