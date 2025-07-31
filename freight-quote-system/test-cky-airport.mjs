// 测试CKY机场代码识别
import { getAirportCity, getAirportInfo, formatAirportDisplay, airportCodes } from './src/lib/airport-codes.ts';

console.log('=== CKY机场代码测试 ===');

// 直接检查airportCodes对象
console.log('直接检查 airportCodes["CKY"]:', airportCodes['CKY']);

// 测试1：获取城市名称
const cityName = getAirportCity('CKY');
console.log('getAirportCity("CKY"):', cityName);

// 测试2：获取完整信息
const airportInfo = getAirportInfo('CKY');
console.log('getAirportInfo("CKY"):', airportInfo);

// 测试3：格式化显示
const displayFormat = formatAirportDisplay('CKY');
console.log('formatAirportDisplay("CKY"):', displayFormat);

// 测试4：测试其他已知机场作为对比
console.log('\n=== 对比测试 ===');
console.log('LAX:', getAirportCity('LAX'));
console.log('DXB:', getAirportCity('DXB'));
console.log('CKY:', getAirportCity('CKY'));

// 测试5：查看所有包含'CKY'的条目
console.log('\n=== 搜索CKY相关条目 ===');
const allCodes = Object.keys(airportCodes);
const ckyRelated = allCodes.filter(code => 
  code.includes('CKY') || 
  airportCodes[code].chinese.includes('科纳克里') ||
  airportCodes[code].english.includes('Conakry')
);
console.log('找到的CKY相关机场:', ckyRelated);
ckyRelated.forEach(code => {
  console.log(`${code}: ${JSON.stringify(airportCodes[code])}`);
}); 