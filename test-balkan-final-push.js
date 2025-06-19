// 巴尔干半岛最终冲刺测试 - 波黑+北马其顿集成验证
import { searchAirports } from './src/lib/airport-search.ts';

console.log('🌍 巴尔干半岛最终冲刺测试');
console.log('========================');

// 测试新增的波黑和北马其顿机场
console.log('\n🇧🇦 波黑机场快速验证:');
const bosniaResults = searchAirports('波斯尼亚', 8);
const bosniaAirports = bosniaResults.filter(a => a.country === '波斯尼亚和黑塞哥维那');
console.log(`✅ 波黑机场: ${bosniaAirports.length}个`);
bosniaAirports.slice(0, 3).forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

console.log('\n🇲🇰 北马其顿机场快速验证:');
const macedoniaResults = searchAirports('北马其顿', 8);
const macedoniaAirports = macedoniaResults.filter(a => a.country === '北马其顿');
console.log(`✅ 北马其顿机场: ${macedoniaAirports.length}个`);
macedoniaAirports.forEach(airport => {
  console.log(`   ${airport.code} - ${airport.chinese} (${airport.priority})`);
});

// 测试关键机场代码
console.log('\n🎯 关键机场代码测试:');
const keyCodes = ['SJJ', 'SKP', 'BNX', 'OHD', 'TZL', 'OMO'];

keyCodes.forEach(code => {
  const result = searchAirports(code, 1);
  if (result.length > 0) {
    console.log(`✅ ${code} - ${result[0].chinese} (${result[0].country})`);
  } else {
    console.log(`❌ ${code} - 未找到`);
  }
});

// 巴尔干半岛完整统计
console.log('\n🌍 巴尔干半岛完整统计:');
const balkanCountries = [
  '希腊', '塞尔维亚', '保加利亚', '斯洛文尼亚',
  '克罗地亚', '罗马尼亚', '波斯尼亚和黑塞哥维那', '北马其顿'
];

let totalBalkanAirports = 0;
balkanCountries.forEach(country => {
  const results = searchAirports(country, 25);
  const countryAirports = results.filter(a => a.country === country);
  totalBalkanAirports += countryAirports.length;
  console.log(`${country}: ${countryAirports.length}个机场`);
});

console.log(`🌍 巴尔干半岛总计: ${totalBalkanAirports}个机场`);

// 测试亚历山大大帝机场
console.log('\n👑 亚历山大大帝机场测试:');
const alexanderTests = ['亚历山大', 'alexander', '大帝', 'great', '斯科普里', 'skopje'];

alexanderTests.forEach(keyword => {
  const results = searchAirports(keyword, 3);
  const alexanderAirports = results.filter(a => a.code === 'SKP');

  if (alexanderAirports.length > 0) {
    console.log(`👑 "${keyword}" 找到亚历山大大帝机场: ${alexanderAirports[0].chinese}`);
  }
});

// 测试世界文化遗产奥赫里德湖
console.log('\n🌊 奥赫里德湖世界遗产测试:');
const ohridTests = ['奥赫里德', 'ohrid', '世界遗产', 'heritage', '湖泊', 'lake'];

ohridTests.forEach(keyword => {
  const results = searchAirports(keyword, 3);
  const ohridAirports = results.filter(a => a.code === 'OHD');

  if (ohridAirports.length > 0) {
    console.log(`🌊 "${keyword}" 找到奥赫里德机场: ${ohridAirports[0].chinese}`);
  }
});

// 测试萨拉热窝历史名城
console.log('\n🏛️ 萨拉热窝历史名城测试:');
const sarajevoTests = ['萨拉热窝', 'sarajevo', '历史', 'history'];

sarajevoTests.forEach(keyword => {
  const results = searchAirports(keyword, 3);
  const sarajevoAirports = results.filter(a => a.code === 'SJJ');

  if (sarajevoAirports.length > 0) {
    console.log(`🏛️ "${keyword}" 找到萨拉热窝机场: ${sarajevoAirports[0].chinese}`);
  }
});

// 巴尔干半岛剩余目标
console.log('\n🎯 巴尔干半岛完成进度:');
const completedCountries = 8; // 已完成的国家数
const totalCountries = 11; // 总目标国家数
const completedPercentage = ((completedCountries / totalCountries) * 100).toFixed(1);

console.log(`✅ 已完成国家: ${completedCountries}/${totalCountries} (${completedPercentage}%)`);
console.log(`✅ 已完成机场: ${totalBalkanAirports}个`);
console.log(`🎯 剩余目标: 黑山(2个) + 阿尔巴尼亚(3个) + 科索沃(2个)`);
console.log(`🚀 预计总机场: 约${totalBalkanAirports + 7}个机场`);
console.log(`🏆 即将成就: 巴尔干半岛100%完成 - 欧洲首个完整地区！`);

// 前南斯拉夫地区完整统计
console.log('\n🏛️ 前南斯拉夫地区完整统计:');
const yugoslavCountries = ['斯洛文尼亚', '克罗地亚', '波斯尼亚和黑塞哥维那', '塞尔维亚', '北马其顿'];
let totalYugoslavAirports = 0;

yugoslavCountries.forEach(country => {
  const results = searchAirports(country, 20);
  const countryAirports = results.filter(a => a.country === country);
  totalYugoslavAirports += countryAirports.length;
  console.log(`${country}: ${countryAirports.length}个机场`);
});

console.log(`🏛️ 前南斯拉夫地区总计: ${totalYugoslavAirports}个机场`);

console.log('\n🎉 巴尔干半岛最终冲刺测试完成!');
console.log('===============================');
console.log(`✨ 新增验证: 波黑${bosniaAirports.length}个 + 北马其顿${macedoniaAirports.length}个机场`);
console.log(`🌍 巴尔干总计: ${totalBalkanAirports}个机场 (${completedPercentage}%完成)`);
console.log(`🏆 成就解锁: 即将完成欧洲首个100%地区覆盖!`);
console.log(`👑 特色机场: 亚历山大大帝机场(SKP) - 古代文明传承`);
console.log(`🌊 世界遗产: 奥赫里德湖机场(OHD) - 欧洲最古老湖泊`);
console.log(`🏛️ 历史名城: 萨拉热窝机场(SJJ) - 多元文化交汇点`);
