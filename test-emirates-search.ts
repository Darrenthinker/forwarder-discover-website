// 测试阿联酋航空搜索功能
import { searchAirlines, findAirlineByCode } from './src/lib/airline-search';

console.log('🚀 测试阿联酋航空搜索功能\n');

// 1. 测试用提单号搜索阿联酋航空 (176)
console.log('1. 搜索提单号 "176"：');
const prefixResults = searchAirlines('176');
console.log(`找到 ${prefixResults.length} 个结果：`);
prefixResults.forEach((airline, index) => {
  console.log(`  ${index + 1}. ${airline.code} (${airline.prefix}) - ${airline.name.chinese} / ${airline.name.english}`);
});

if (prefixResults.length > 0) {
  const emirates = prefixResults.find(airline => airline.code === 'EK');
  if (emirates) {
    console.log('✅ 成功找到阿联酋航空！');
    console.log(`   详细信息：${emirates.code} - ${emirates.name.chinese} (${emirates.name.english})`);
    console.log(`   提单号：${emirates.prefix}`);
    console.log(`   国家：${emirates.country}`);
    console.log(`   枢纽：${emirates.hub?.join(', ')}`);
  } else {
    console.log('❌ 未找到阿联酋航空');
  }
} else {
  console.log('❌ 搜索176未返回任何结果');
}

console.log('\n2. 用航司代码搜索 "EK"：');
const codeResults = searchAirlines('EK');
console.log(`找到 ${codeResults.length} 个结果：`);
codeResults.forEach((airline, index) => {
  console.log(`  ${index + 1}. ${airline.code} (${airline.prefix}) - ${airline.name.chinese} / ${airline.name.english}`);
});

console.log('\n3. 用中文名称搜索 "阿联酋"：');
const chineseResults = searchAirlines('阿联酋');
console.log(`找到 ${chineseResults.length} 个结果：`);
chineseResults.forEach((airline, index) => {
  console.log(`  ${index + 1}. ${airline.code} (${airline.prefix}) - ${airline.name.chinese} / ${airline.name.english}`);
});

console.log('\n4. 用英文名称搜索 "Emirates"：');
const englishResults = searchAirlines('Emirates');
console.log(`找到 ${englishResults.length} 个结果：`);
englishResults.forEach((airline, index) => {
  console.log(`  ${index + 1}. ${airline.code} (${airline.prefix}) - ${airline.name.chinese} / ${airline.name.english}`);
});

console.log('\n5. 使用 findAirlineByCode 查找 "EK"：');
const directFind = findAirlineByCode('EK');
if (directFind) {
  console.log('✅ 找到航空公司：');
  console.log(`   ${directFind.code} (${directFind.prefix}) - ${directFind.name.chinese} / ${directFind.name.english}`);
} else {
  console.log('❌ 未找到航空公司');
}

console.log('\n✈️ 测试完成！');
