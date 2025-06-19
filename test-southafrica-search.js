// 南非机场搜索功能测试
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🇿🇦 南非机场搜索功能测试');
console.log('============================');

// 测试搜索关键词
const testSearches = [
  '南非',
  'south africa',
  'JNB',
  '约翰内斯堡',
  'johannesburg',
  'CPT',
  '开普敦',
  'cape town',
  'DUR',
  '德班',
  'durban',
  'ZA'
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

// 测试南非特定机场搜索
console.log('\n🎯 南非主要机场搜索测试:');
console.log('============================');

const southAfricaCodes = ['JNB', 'CPT', 'DUR', 'PLZ', 'MQP', 'HLA', 'BFN'];

southAfricaCodes.forEach(code => {
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
console.log('\n📊 南非机场优先级排序测试:');
console.log('================================');

const southAfricaResults = searchAirports('南非', 20);
const southAfricaAirports = southAfricaResults.filter(a => a.country === '南非');

console.log(`🇿🇦 南非机场 (${southAfricaAirports.length}个):`);
southAfricaAirports.forEach((airport, index) => {
  const priority = airport.priority || 50;
  const type = airport.type === 'international' ? '🌍' : '🏠';
  const customs = airport.customs ? '🛃' : '';

  console.log(`${index + 1}. ${type}${customs} ${airport.code} - ${airport.chinese} (${priority})`);
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
console.log('====================');

const integrityChecks = {
  'JNB优先级100': southAfricaAirports.find(a => a.code === 'JNB')?.priority === 100,
  'CPT优先级98': southAfricaAirports.find(a => a.code === 'CPT')?.priority === 98,
  'DUR优先级92': southAfricaAirports.find(a => a.code === 'DUR')?.priority === 92,
  '有国际机场': southAfricaAirports.some(a => a.type === 'international'),
  '有海关机场': southAfricaAirports.some(a => a.customs === true),
  '正确的洲际': southAfricaAirports.every(a => a.continent === '非洲')
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

console.log('\n🎉 南非机场搜索测试完成！');

// 最终统计
const totalSouthAfricaFound = searchAirports('南非', 50).filter(a => a.country === '南非').length;
console.log(`📈 总结: 成功集成 ${totalSouthAfricaFound} 个南非机场到搜索系统`);
