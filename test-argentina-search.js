// 阿根廷机场搜索功能测试
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🇦🇷 阿根廷机场搜索功能测试');
console.log('============================');

// 测试搜索关键词
const testSearches = [
  '阿根廷',
  'argentina',
  'EZE',
  '布宜诺斯艾利斯',
  'buenos aires',
  'AEP',
  '门多萨',
  'mendoza',
  'BRC',
  '巴里洛切',
  'bariloche',
  'AR'
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

// 测试阿根廷特定机场搜索
console.log('\n🎯 阿根廷主要机场搜索测试:');
console.log('============================');

const argentinaCodes = ['EZE', 'AEP', 'COR', 'MDZ', 'ROS', 'BRC', 'USH'];

argentinaCodes.forEach(code => {
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
console.log('\n📊 阿根廷机场优先级排序测试:');
console.log('================================');

const argentinaResults = searchAirports('阿根廷', 30);
const argentinaAirports = argentinaResults.filter(a => a.country === '阿根廷');

console.log(`🇦🇷 阿根廷机场 (${argentinaAirports.length}个):`);
argentinaAirports.forEach((airport, index) => {
  const priority = airport.priority || 50;
  const type = airport.type === 'international' ? '🌍' : '🏠';
  const customs = airport.customs ? '🛃' : '';

  console.log(`${index + 1}. ${type}${customs} ${airport.code} - ${airport.chinese} (${priority})`);
});

// 测试地区搜索
console.log('\n🌎 阿根廷地区搜索测试:');
console.log('==========================');

const regionTests = ['布宜诺斯艾利斯', '巴塔哥尼亚', '科尔多瓦', '门多萨', '巴里洛切'];

regionTests.forEach(region => {
  console.log(`\n📍 搜索地区: ${region}`);
  const results = searchAirports(region, 10);
  const regionAirports = results.filter(a => a.country === '阿根廷');

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
  'EZE优先级100': argentinaAirports.find(a => a.code === 'EZE')?.priority === 100,
  'AEP优先级95': argentinaAirports.find(a => a.code === 'AEP')?.priority === 95,
  'COR优先级92': argentinaAirports.find(a => a.code === 'COR')?.priority === 92,
  '有国际机场': argentinaAirports.some(a => a.type === 'international'),
  '有海关机场': argentinaAirports.some(a => a.customs === true),
  '正确的洲际': argentinaAirports.every(a => a.continent === '南美')
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

console.log('\n🎉 阿根廷机场搜索测试完成！');

// 最终统计
const totalArgentinaFound = searchAirports('阿根廷', 50).filter(a => a.country === '阿根廷').length;
console.log(`📈 总结: 成功集成 ${totalArgentinaFound} 个阿根廷机场到搜索系统`);
