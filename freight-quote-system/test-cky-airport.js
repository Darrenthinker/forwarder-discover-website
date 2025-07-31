// 测试CKY机场代码识别
const { getAirportCity, getAirportInfo, formatAirportDisplay } = require('./src/lib/airport-codes.ts');

console.log('=== CKY机场代码测试 ===');

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