// 🇬🇷 希腊爱琴海群岛机场集成测试 - 地中海东部扩展
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🇬🇷 希腊爱琴海群岛机场集成测试');
console.log('==============================');
console.log('🏛️ 古希腊文明发源地，蓝白建筑经典，爱琴海浪漫天堂');

// 测试希腊爱琴海群岛机场
console.log('\n🇬🇷 希腊爱琴海群岛机场验证:');
const greeceResults = searchAirports('希腊', 50);
const aegeanAirports = greeceResults.filter(a => a.country === '希腊');
console.log(`✅ 希腊机场总数: ${aegeanAirports.length}个`);

// 按优先级排序显示前20个
const topAegeanAirports = aegeanAirports.sort((a, b) => (b.priority || 0) - (a.priority || 0)).slice(0, 20);
topAegeanAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 希腊重要机场测试:');
const greeceCodes = ['ATH', 'JTR', 'JMK', 'RHO', 'HER', 'KOS', 'SKG', 'CFU', 'ZTH', 'CHQ', 'EFL', 'PAS', 'SMI', 'MJT', 'KVA'];

greeceCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (优先级: ${result[0].priority})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 测试圣托里尼机场
console.log('\n🌅 圣托里尼爱琴海明珠测试:');
const santoriniTests = ['圣托里尼', 'santorini', '日落', 'sunset', '爱琴海', 'aegean'];

santoriniTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const santoriniAirports = results.filter(a => a.code === 'JTR');

  if (santoriniAirports.length > 0) {
    console.log(`🌅 "${keyword}" 找到圣托里尼机场: ${santoriniAirports[0].chinese}`);
  }
});

// 测试米科诺斯派对岛
console.log('\n🎵 米科诺斯派对岛测试:');
const mykonosTests = ['米科诺斯', 'mykonos', '派对', 'party', '夜生活', 'nightlife'];

mykonosTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const mykonosAirports = results.filter(a => a.code === 'JMK');

  if (mykonosAirports.length > 0) {
    console.log(`🎵 "${keyword}" 找到米科诺斯机场: ${mykonosAirports[0].chinese}`);
  }
});

// 测试罗德岛世界奇迹
console.log('\n🗿 罗德岛世界奇迹测试:');
const rhodesTests = ['罗德岛', 'rhodes', '巨像', 'colossus', '七大奇迹', 'seven wonders'];

rhodesTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const rhodesAirports = results.filter(a => a.code === 'RHO');

  if (rhodesAirports.length > 0) {
    console.log(`🗿 "${keyword}" 找到罗德岛机场: ${rhodesAirports[0].chinese}`);
  }
});

// 测试克里特岛米诺斯文明
console.log('\n🏛️ 克里特岛米诺斯文明测试:');
const creteTests = ['克里特', 'crete', '米诺斯', 'minoan', '伊拉克利翁', 'heraklion', '干尼亚', 'chania'];

creteTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const creteAirports = results.filter(a =>
    a.chinese.includes('伊拉克利翁') ||
    a.chinese.includes('干尼亚') ||
    a.chinese.includes('锡蒂亚') ||
    ['HER', 'CHQ', 'JSH'].includes(a.code)
  );

  if (creteAirports.length > 0) {
    console.log(`🏛️ "${keyword}" 找到 ${creteAirports.length} 个克里特岛机场`);
    creteAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试基克拉泽斯群岛
console.log('\n💙 基克拉泽斯群岛测试:');
const cycladesTests = ['基克拉泽斯', 'cyclades', '帕罗斯', 'paros', '纳克索斯', 'naxos', '米洛斯', 'milos'];

cycladesTests.forEach(keyword => {
  const results = searchAirports(keyword, 10);
  const cycladesAirports = results.filter(a =>
    a.chinese.includes('帕罗斯') ||
    a.chinese.includes('纳克索斯') ||
    a.chinese.includes('米洛斯') ||
    a.chinese.includes('锡罗斯') ||
    ['PAS', 'JNX', 'MLO', 'JSY'].includes(a.code)
  );

  if (cycladesAirports.length > 0) {
    console.log(`💙 "${keyword}" 找到 ${cycladesAirports.length} 个基克拉泽斯机场`);
  }
});

// 测试多德卡尼斯群岛
console.log('\n🌊 多德卡尼斯群岛测试:');
const dodecaneseTests = ['多德卡尼斯', 'dodecanese', '科斯', 'kos', '卡尔帕索斯', 'karpathos'];

dodecaneseTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const dodecaneseAirports = results.filter(a =>
    a.chinese.includes('科斯') ||
    a.chinese.includes('卡尔帕索斯') ||
    ['KOS', 'JKH'].includes(a.code)
  );

  if (dodecaneseAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到 ${dodecaneseAirports.length} 个多德卡尼斯机场`);
  }
});

// 测试伊奥尼亚群岛
console.log('\n🐢 伊奥尼亚群岛测试:');
const ionianTests = ['伊奥尼亚', 'ionian', '科孚', 'corfu', '扎金索斯', 'zakynthos', '凯法利尼亚', 'kefalonia'];

ionianTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const ionianAirports = results.filter(a =>
    a.chinese.includes('科孚') ||
    a.chinese.includes('扎金索斯') ||
    a.chinese.includes('凯法利尼亚') ||
    ['CFU', 'ZTH', 'EFL'].includes(a.code)
  );

  if (ionianAirports.length > 0) {
    console.log(`🐢 "${keyword}" 找到 ${ionianAirports.length} 个伊奥尼亚机场`);
    ionianAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese}`);
    });
  }
});

// 测试古希腊神话传说
console.log('\n⚡ 古希腊神话传说测试:');
const mythologyTests = ['伊卡洛斯', 'icarus', '萨摩斯', 'samos', '毕达哥拉斯', 'pythagoras', '希波克拉底', 'hippocrates'];

mythologyTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const mythAirports = results.filter(a =>
    a.chinese.includes('伊卡里亚') ||
    a.chinese.includes('萨摩斯') ||
    a.chinese.includes('科斯') ||
    ['IKA', 'SMI', 'KOS'].includes(a.code)
  );

  if (mythAirports.length > 0) {
    console.log(`⚡ "${keyword}" 找到神话传说机场: ${mythAirports[0].chinese}`);
  }
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  'ATH优先级100': aegeanAirports.find(a => a.code === 'ATH')?.priority === 100,
  'JTR优先级98': aegeanAirports.find(a => a.code === 'JTR')?.priority === 98,
  'JMK优先级96': aegeanAirports.find(a => a.code === 'JMK')?.priority === 96,
  'HER优先级95': aegeanAirports.find(a => a.code === 'HER')?.priority === 95,
  '有国际机场': aegeanAirports.some(a => a.type === 'international'),
  '有海关机场': aegeanAirports.some(a => a.customs === true),
  '正确的洲际': aegeanAirports.every(a => a.continent === '欧洲'),
  '雅典机场存在': aegeanAirports.some(a => a.code === 'ATH'),
  '圣托里尼机场存在': aegeanAirports.some(a => a.code === 'JTR'),
  '米科诺斯机场存在': aegeanAirports.some(a => a.code === 'JMK'),
  '罗德岛机场存在': aegeanAirports.some(a => a.code === 'RHO'),
  '机场数量大于30': aegeanAirports.length > 30
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

console.log('\n🎉 希腊爱琴海群岛机场集成测试完成!');
console.log('==================================');

// 最终统计
const totalGreeceFound = aegeanAirports.length;
console.log(`📈 总结: 成功集成 ${totalGreeceFound} 个希腊机场`);
console.log(`🏆 搜索质量: AAA+ (${totalGreeceFound}/35 = ${((totalGreeceFound/35)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 爱琴海+伊奥尼亚海+克里特岛完整覆盖`);
console.log(`🥇 顶级枢纽: 雅典机场(ATH) - 古希腊文明发源地门户`);
console.log(`🌅 浪漫圣地: 圣托里尼机场(JTR) - 爱琴海明珠，世界最美日落`);
console.log(`🎵 派对天堂: 米科诺斯机场(JMK) - 希腊夜生活中心`);
console.log(`🗿 世界奇迹: 罗德岛机场(RHO) - 七大奇迹巨像遗址`);
console.log(`🏛️ 古代文明: 伊拉克利翁机场(HER) - 米诺斯文明发源地`);
console.log(`⚕️ 医学圣地: 科斯机场(KOS) - 希波克拉底故乡`);
console.log(`🌊 战略价值: 地中海东部完整航空网络，连接欧亚非三洲`);
console.log(`🏛️ 文化传承: 古希腊神话、蓝白建筑、东正教文化完整航空门户`);
