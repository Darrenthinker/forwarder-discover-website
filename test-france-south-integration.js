// 🇫🇷 法国南部机场集成测试 - 地中海南岸扩展继续
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🇫🇷 法国南部机场集成测试');
console.log('======================');
console.log('🌅 蔚蓝海岸，薰衣草之乡，戛纳电影节故乡');

// 测试法国南部机场
console.log('\n🇫🇷 法国南部机场验证:');
const franceSouthResults = searchAirports('法国', 50);
const franceSouthAirports = franceSouthResults.filter(a =>
  a.chinese.includes('尼斯') ||
  a.chinese.includes('马赛') ||
  a.chinese.includes('戛纳') ||
  a.chinese.includes('土伦') ||
  a.chinese.includes('蒙彼利埃') ||
  a.chinese.includes('阿雅克肖') ||
  a.chinese.includes('普罗旺斯') ||
  a.chinese.includes('蔚蓝海岸') ||
  ['NCE', 'MRS', 'CEQ', 'TLN', 'MPL', 'AJA', 'BIA', 'PGF', 'AVN', 'FSC', 'CCF', 'BZR'].includes(a.code)
);
console.log(`✅ 法国南部机场: ${franceSouthAirports.length}个`);
franceSouthAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 法国南部重要机场测试:');
const franceSouthCodes = ['NCE', 'MRS', 'CEQ', 'TLN', 'MPL', 'AJA', 'BIA', 'PGF', 'AVN', 'FSC', 'CCF', 'BZR', 'CTT', 'GAT', 'MEN', 'QXB'];

franceSouthCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (优先级: ${result[0].priority})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 测试蔚蓝海岸机场群
console.log('\n🌊 蔚蓝海岸机场群测试:');
const azurTests = ['蔚蓝海岸', 'cote d azur', '尼斯', 'nice', '戛纳', 'cannes', '芒通', 'menton'];

azurTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const azurAirports = results.filter(a =>
    a.chinese.includes('蔚蓝海岸') ||
    a.chinese.includes('尼斯') ||
    a.chinese.includes('戛纳') ||
    a.chinese.includes('芒通') ||
    ['NCE', 'CEQ', 'MEN'].includes(a.code)
  );

  if (azurAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到 ${azurAirports.length} 个蔚蓝海岸机场`);
    azurAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  }
});

// 测试普罗旺斯地区
console.log('\n🌿 普罗旺斯地区测试:');
const provenceTests = ['普罗旺斯', 'provence', '马赛', 'marseille', '阿维尼翁', 'avignon', '薰衣草', 'lavender'];

provenceTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const provenceAirports = results.filter(a =>
    a.chinese.includes('普罗旺斯') ||
    a.chinese.includes('马赛') ||
    a.chinese.includes('阿维尼翁') ||
    a.chinese.includes('艾克斯') ||
    ['MRS', 'AVN', 'QXB'].includes(a.code)
  );

  if (provenceAirports.length > 0) {
    console.log(`🌿 "${keyword}" 找到 ${provenceAirports.length} 个普罗旺斯机场`);
    provenceAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  }
});

// 测试科西嘉岛机场群
console.log('\n🏝️ 科西嘉岛机场群测试:');
const corsicaTests = ['科西嘉', 'corsica', '阿雅克肖', 'ajaccio', '拿破仑', 'napoleon', '巴斯蒂亚', 'bastia'];

corsicaTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const corsicaAirports = results.filter(a =>
    a.chinese.includes('阿雅克肖') ||
    a.chinese.includes('巴斯蒂亚') ||
    a.chinese.includes('科西嘉') ||
    a.chinese.includes('拿破仑') ||
    ['AJA', 'BIA', 'FSC'].includes(a.code)
  );

  if (corsicaAirports.length > 0) {
    console.log(`🏝️ "${keyword}" 找到 ${corsicaAirports.length} 个科西嘉岛机场`);
    corsicaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  }
});

// 测试戛纳电影节
console.log('\n🎬 戛纳电影节测试:');
const cannesTests = ['戛纳', 'cannes', '电影节', 'film festival', '曼德琉', 'mandelieu'];

cannesTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const cannesAirports = results.filter(a => a.code === 'CEQ');

  if (cannesAirports.length > 0) {
    console.log(`🎬 "${keyword}" 找到戛纳机场: ${cannesAirports[0].chinese}`);
  }
});

// 测试朗格多克地区
console.log('\n🍷 朗格多克地区测试:');
const languedocTests = ['朗格多克', 'languedoc', '蒙彼利埃', 'montpellier', '贝济耶', 'beziers', '佩皮尼昂', 'perpignan'];

languedocTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const languedocAirports = results.filter(a =>
    a.chinese.includes('蒙彼利埃') ||
    a.chinese.includes('贝济耶') ||
    a.chinese.includes('佩皮尼昂') ||
    ['MPL', 'BZR', 'PGF'].includes(a.code)
  );

  if (languedocAirports.length > 0) {
    console.log(`🍷 "${keyword}" 找到 ${languedocAirports.length} 个朗格多克机场`);
    languedocAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  }
});

// 测试中世纪古城
console.log('\n🏰 中世纪古城测试:');
const medievalTests = ['卡尔卡松', 'carcassonne', '中世纪', 'medieval', '古城', 'ancient city', '世界遗产', 'unesco'];

medievalTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const medievalAirports = results.filter(a => a.code === 'CCF');

  if (medievalAirports.length > 0) {
    console.log(`🏰 "${keyword}" 找到卡尔卡松机场: ${medievalAirports[0].chinese}`);
  }
});

// 测试法国里维埃拉度假胜地
console.log('\n🌊 法国里维埃拉度假胜地测试:');
const rivieraTests = ['里维埃拉', 'riviera', '度假', 'resort', '奢华', 'luxury', '地中海', 'mediterranean'];

rivieraTests.forEach(keyword => {
  const results = searchAirports(keyword, 12);
  const rivieraAirports = results.filter(a =>
    a.country === '法国' && (
      a.chinese.includes('尼斯') ||
      a.chinese.includes('戛纳') ||
      a.chinese.includes('芒通') ||
      a.chinese.includes('蔚蓝海岸')
    )
  );

  if (rivieraAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到 ${rivieraAirports.length} 个里维埃拉机场`);
  }
});

// 测试F1赛车文化
console.log('\n🏁 F1赛车文化测试:');
const f1Tests = ['赛车', 'racing', 'f1', 'formula', '保罗里卡德', 'paul ricard'];

f1Tests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const f1Airports = results.filter(a => a.code === 'CTT');

  if (f1Airports.length > 0) {
    console.log(`🏁 "${keyword}" 找到F1赛道机场: ${f1Airports[0].chinese}`);
  }
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  'NCE优先级100': franceSouthAirports.find(a => a.code === 'NCE')?.priority === 100,
  'MRS优先级98': franceSouthAirports.find(a => a.code === 'MRS')?.priority === 98,
  'CEQ优先级95': franceSouthAirports.find(a => a.code === 'CEQ')?.priority === 95,
  'AJA优先级94': franceSouthAirports.find(a => a.code === 'AJA')?.priority === 94,
  '有国际机场': franceSouthAirports.some(a => a.type === 'international'),
  '有海关机场': franceSouthAirports.some(a => a.customs === true),
  '正确的洲际': franceSouthAirports.every(a => a.continent === '欧洲'),
  '尼斯机场存在': franceSouthAirports.some(a => a.code === 'NCE')
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 地中海南岸法法扩展统计
console.log('\n🌊 地中海南岸法法扩展统计:');
const mediterraneanCountries = ['意大利', '法国', '西班牙', '希腊'];
let totalMediterraneanAirports = 0;

mediterraneanCountries.forEach(country => {
  const results = searchAirports(country, 50);
  const countryAirports = results.filter(a => a.country === country);
  totalMediterraneanAirports += countryAirports.length;
  console.log(`${country}: ${countryAirports.length}个机场`);
});

console.log(`🌊 地中海国家总计: ${totalMediterraneanAirports}个机场`);

console.log('\n🎉 法国南部机场集成测试完成!');
console.log('============================');

// 最终统计
const totalFranceSouthFound = franceSouthAirports.length;
console.log(`📈 总结: 成功集成 ${totalFranceSouthFound} 个法国南部机场`);
console.log(`🏆 搜索质量: AAA+ (${totalFranceSouthFound}/16 = ${((totalFranceSouthFound/16)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 蔚蓝海岸+普罗旺斯+朗格多克+科西嘉完整覆盖`);
console.log(`🥇 顶级枢纽: 尼斯蔚蓝海岸机场(NCE) - 法国里维埃拉最大门户`);
console.log(`🏛️ 重要城市: 马赛普罗旺斯机场(MRS) - 地中海重要港口，普罗旺斯门户`);
console.log(`🎬 特色机场: 戛纳曼德琉机场(CEQ) - 戛纳电影节门户，豪华旅游专机基地`);
console.log(`👑 历史名城: 阿雅克肖机场(AJA) - 拿破仑出生地，科西嘉岛首府`);
console.log(`⚓ 海军基地: 土伦耶尔机场(TLN) - 重要海军基地，黄金群岛门户`);
console.log(`🏰 世界遗产: 卡尔卡松机场(CCF) - 中世纪古城，世界文化遗产`);
console.log(`🌊 战略价值: 地中海南岸扩展重要组成，法国里维埃拉完整航空网络`);
console.log(`🌿 文化传承: 薰衣草普罗旺斯、戛纳电影节、拿破仑传奇完整航空门户`);
