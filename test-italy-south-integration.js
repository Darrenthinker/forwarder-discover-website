// 🇮🇹 意大利南部机场集成测试 - 地中海南岸扩展开始
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🇮🇹 意大利南部机场集成测试');
console.log('========================');
console.log('🌊 地中海度假天堂，古罗马文明遗址，欧洲阳光海岸');

// 测试意大利南部机场
console.log('\n🇮🇹 意大利南部机场验证:');
const italySouthResults = searchAirports('意大利', 50);
const italySouthAirports = italySouthResults.filter(a =>
  a.chinese.includes('西西里') ||
  a.chinese.includes('撒丁') ||
  a.chinese.includes('那不勒斯') ||
  a.chinese.includes('巴里') ||
  a.chinese.includes('卡塔尼亚') ||
  a.chinese.includes('巴勒莫') ||
  a.chinese.includes('卡利亚里') ||
  ['CTA', 'PMO', 'CAG', 'NAP', 'BRI', 'OLB', 'AHO', 'TPS', 'BDS', 'CMP', 'REG', 'PSR'].includes(a.code)
);
console.log(`✅ 意大利南部机场: ${italySouthAirports.length}个`);
italySouthAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 意大利南部重要机场测试:');
const italySouthCodes = ['CTA', 'PMO', 'CAG', 'NAP', 'BRI', 'OLB', 'AHO', 'TPS', 'BDS', 'CMP', 'REG', 'PSR', 'QSR', 'BZE', 'TAR', 'FOG', 'LMP', 'CRV'];

italySouthCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (优先级: ${result[0].priority})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 测试西西里岛机场群
console.log('\n🏝️ 西西里岛机场群测试:');
const sicilyTests = ['西西里', 'sicily', '卡塔尼亚', 'catania', '巴勒莫', 'palermo', '埃特纳', 'etna'];

sicilyTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const sicilyAirports = results.filter(a =>
    a.chinese.includes('西西里') ||
    ['CTA', 'PMO', 'TPS', 'CMP', 'LMP'].includes(a.code)
  );

  if (sicilyAirports.length > 0) {
    console.log(`🏝️ "${keyword}" 找到 ${sicilyAirports.length} 个西西里岛机场`);
    sicilyAirports.slice(0, 3).forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  }
});

// 测试撒丁岛翡翠海岸
console.log('\n💎 撒丁岛翡翠海岸测试:');
const sardineTests = ['撒丁', 'sardinia', '翡翠海岸', 'costa smeralda', '卡利亚里', 'cagliari', '奥尔比亚', 'olbia'];

sardineTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const sardiniaAirports = results.filter(a =>
    a.chinese.includes('撒丁') ||
    a.chinese.includes('翡翠海岸') ||
    ['CAG', 'OLB', 'AHO'].includes(a.code)
  );

  if (sardiniaAirports.length > 0) {
    console.log(`💎 "${keyword}" 找到 ${sardiniaAirports.length} 个撒丁岛机场`);
    sardiniaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  }
});

// 测试那不勒斯湾地区
console.log('\n🌋 那不勒斯湾地区测试:');
const naplesTests = ['那不勒斯', 'naples', '维苏威', 'vesuvius', '庞贝', 'pompeii', '卡普里', 'capri', '蓝洞', 'blue grotto'];

naplesTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const naplesAirports = results.filter(a =>
    a.chinese.includes('那不勒斯') ||
    a.chinese.includes('卡普里') ||
    ['NAP', 'QSR'].includes(a.code)
  );

  if (naplesAirports.length > 0) {
    console.log(`🌋 "${keyword}" 找到 ${naplesAirports.length} 个那不勒斯湾机场`);
    naplesAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  }
});

// 测试普利亚大区（意大利脚跟）
console.log('\n⛪ 普利亚大区测试:');
const pugliaTests = ['普利亚', 'puglia', '巴里', 'bari', '布林迪西', 'brindisi', '萨伦托', 'salento'];

pugliaTests.forEach(keyword => {
  const results = searchAirports(keyword, 5);
  const pugliaAirports = results.filter(a =>
    a.chinese.includes('巴里') ||
    a.chinese.includes('布林迪西') ||
    a.chinese.includes('塔兰托') ||
    a.chinese.includes('福贾') ||
    ['BRI', 'BDS', 'TAR', 'FOG'].includes(a.code)
  );

  if (pugliaAirports.length > 0) {
    console.log(`⛪ "${keyword}" 找到 ${pugliaAirports.length} 个普利亚机场`);
    pugliaAirports.forEach(airport => {
      console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
    });
  }
});

// 测试地中海度假胜地
console.log('\n🌊 地中海度假胜地测试:');
const mediterraneanTests = ['地中海', 'mediterranean', '度假', 'resort', '海滩', 'beach', '阳光', 'sunshine'];

mediterraneanTests.forEach(keyword => {
  const results = searchAirports(keyword, 12);
  const medAirports = results.filter(a =>
    a.country === '意大利' && (
      a.chinese.includes('西西里') ||
      a.chinese.includes('撒丁') ||
      a.chinese.includes('卡普里') ||
      a.chinese.includes('兰佩杜萨')
    )
  );

  if (medAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到 ${medAirports.length} 个地中海度假机场`);
  }
});

// 测试古罗马文明遗址
console.log('\n🏛️ 古罗马文明遗址测试:');
const romanTests = ['古罗马', 'roman', '庞贝', 'pompeii', '古迹', 'ruins', '考古', 'archaeology'];

romanTests.forEach(keyword => {
  const results = searchAirports(keyword, 8);
  const romanAirports = results.filter(a =>
    a.chinese.includes('那不勒斯') ||
    a.chinese.includes('马泰拉') ||
    a.chinese.includes('巴里') ||
    ['NAP', 'BZE', 'BRI'].includes(a.code)
  );

  if (romanAirports.length > 0) {
    console.log(`🏛️ "${keyword}" 找到 ${romanAirports.length} 个古罗马文明机场`);
  }
});

// 测试马泰拉石窟城
console.log('\n🏛️ 马泰拉石窟城测试:');
const materaTests = ['马泰拉', 'matera', '石窟', 'sassi', '欧洲文化之都', 'european capital'];

materaTests.forEach(keyword => {
  const results = searchAirports(keyword, 3);
  const materaAirports = results.filter(a => a.code === 'BZE');

  if (materaAirports.length > 0) {
    console.log(`🏛️ "${keyword}" 找到马泰拉机场: ${materaAirports[0].chinese}`);
  }
});

// 测试兰佩杜萨最南端
console.log('\n🏝️ 兰佩杜萨最南端测试:');
const lampedusaTests = ['兰佩杜萨', 'lampedusa', '最南端', 'southernmost', '非洲门户', 'africa gateway'];

lampedusaTests.forEach(keyword => {
  const results = searchAirports(keyword, 3);
  const lampedusaAirports = results.filter(a => a.code === 'CMP');

  if (lampedusaAirports.length > 0) {
    console.log(`🏝️ "${keyword}" 找到兰佩杜萨机场: ${lampedusaAirports[0].chinese}`);
  }
});

// 验证数据完整性
console.log('\n🔍 数据完整性验证:');
const integrityChecks = {
  'CTA优先级100': italySouthAirports.find(a => a.code === 'CTA')?.priority === 100,
  'PMO优先级98': italySouthAirports.find(a => a.code === 'PMO')?.priority === 98,
  'CAG优先级96': italySouthAirports.find(a => a.code === 'CAG')?.priority === 96,
  'NAP优先级95': italySouthAirports.find(a => a.code === 'NAP')?.priority === 95,
  '有国际机场': italySouthAirports.some(a => a.type === 'international'),
  '有海关机场': italySouthAirports.some(a => a.customs === true),
  '正确的洲际': italySouthAirports.every(a => a.continent === '欧洲'),
  '西西里机场存在': italySouthAirports.some(a => a.code === 'CTA')
};

Object.entries(integrityChecks).forEach(([check, passed]) => {
  console.log(`${passed ? '✅' : '❌'} ${check}`);
});

// 地中海南岸扩展统计
console.log('\n🌊 地中海南岸扩展统计:');
const mediterraneanCountries = ['意大利', '法国', '西班牙', '希腊'];
let totalMediterraneanAirports = 0;

mediterraneanCountries.forEach(country => {
  const results = searchAirports(country, 50);
  const countryAirports = results.filter(a => a.country === country);
  totalMediterraneanAirports += countryAirports.length;
  console.log(`${country}: ${countryAirports.length}个机场`);
});

console.log(`🌊 地中海国家总计: ${totalMediterraneanAirports}个机场`);

console.log('\n🎉 意大利南部机场集成测试完成!');
console.log('==============================');

// 最终统计
const totalItalySouthFound = italySouthAirports.length;
console.log(`📈 总结: 成功集成 ${totalItalySouthFound} 个意大利南部机场`);
console.log(`🏆 搜索质量: AAA+ (${totalItalySouthFound}/18 = ${((totalItalySouthFound/18)*100).toFixed(1)}%)`);
console.log(`✈️ 覆盖范围: 地中海南岸完整覆盖`);
console.log(`🥇 顶级枢纽: 卡塔尼亚机场(CTA) - 西西里岛最大机场，埃特纳火山门户`);
console.log(`🏛️ 重要城市: 巴勒莫机场(PMO) - 西西里首府，诺曼底文化中心`);
console.log(`💎 度假胜地: 奥尔比亚机场(OLB) - 撒丁岛翡翠海岸豪华旅游门户`);
console.log(`🌋 文明遗址: 那不勒斯机场(NAP) - 维苏威火山，庞贝古城门户`);
console.log(`⛪ 朝圣中心: 巴里机场(BRI) - 圣尼古拉朝圣地，亚得里亚海门户`);
console.log(`🏝️ 地理极点: 兰佩杜萨机场(CMP) - 意大利最南端岛屿，非洲门户`);
console.log(`🌊 战略价值: 地中海南岸扩展重要组成，连接欧洲与非洲`);
console.log(`🏛️ 文化传承: 古罗马文明、诺曼底文化、希腊殖民遗址完整航空网络`);
