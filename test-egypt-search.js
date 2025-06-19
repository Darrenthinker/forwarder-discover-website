// 埃及机场搜索功能测试
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🇪🇬 埃及机场搜索功能测试');
console.log('============================');

// 测试搜索关键词
const testSearches = [
  '埃及',
  'egypt',
  'CAI',
  '开罗',
  'cairo',
  'SSH',
  '沙姆沙伊赫',
  'sharm el sheikh',
  'HRG',
  '赫尔格达',
  'hurghada',
  'EG'
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

// 测试埃及特定机场搜索
console.log('\n🎯 埃及主要机场搜索测试:');
console.log('============================');

const egyptCodes = ['CAI', 'SSH', 'HRG', 'ALY', 'LXR', 'ASW', 'SPX'];

egyptCodes.forEach(code => {
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
console.log('\n📊 埃及机场优先级排序测试:');
console.log('================================');

const egyptResults = searchAirports('埃及', 20);
const egyptAirports = egyptResults.filter(a => a.country === '埃及');

console.log(`🇪🇬 埃及机场 (${egyptAirports.length}个):`);
egyptAirports.forEach((airport, index) => {
  const priority = airport.priority || 50;
  const type = airport.type === 'international' ? '🌍' : '🏠';
  const customs = airport.customs ? '🛃' : '';

  console.log(`${index + 1}. ${type}${customs} ${airport.code} - ${airport.chinese} (${priority})`);
});

// 测试旅游热点搜索
console.log('\n🏖️ 埃及旅游热点搜索测试:');
console.log('============================');

const touristTests = ['红海', '尼罗河', '金字塔', '卢克索', '阿斯旺'];

touristTests.forEach(keyword => {
  console.log(`\n🔍 搜索旅游关键词: ${keyword}`);
  const results = searchAirports(keyword, 5);
  const egyptTouristAirports = results.filter(a => a.country === '埃及');

  if (egyptTouristAirports.length > 0) {
    console.log(`找到 ${egyptTouristAirports.length} 个相关机场:`);
    egyptTouristAirports.forEach(airport => {
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
  'CAI优先级100': egyptAirports.find(a => a.code === 'CAI')?.priority === 100,
  'SSH优先级92': egyptAirports.find(a => a.code === 'SSH')?.priority === 92,
  'HRG优先级90': egyptAirports.find(a => a.code === 'HRG')?.priority === 90,
  '有国际机场': egyptAirports.some(a => a.type === 'international'),
  '有海关机场': egyptAirports.some(a => a.customs === true),
  '正确的洲际': egyptAirports.every(a => a.continent === '非洲')
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

console.log('\n🎉 埃及机场搜索测试完成！');

// 最终统计
const totalEgyptFound = searchAirports('埃及', 50).filter(a => a.country === '埃及').length;
console.log(`📈 总结: 成功集成 ${totalEgyptFound} 个埃及机场到搜索系统`);
