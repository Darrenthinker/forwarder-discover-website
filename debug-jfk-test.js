// 测试JFK是否在globalAirports中
const { findAirportByCode, globalAirports } = require('./src/lib/airport-search.ts');

console.log('=== 测试JFK ===');
console.log('JFK是否在globalAirports中:', 'JFK' in globalAirports);
console.log('globalAirports.JFK:', globalAirports.JFK);

const result = findAirportByCode('JFK');
console.log('findAirportByCode("JFK"):', result);

// 测试NRT对比
console.log('\n=== 对比NRT ===');
console.log('NRT是否在globalAirports中:', 'NRT' in globalAirports);
console.log('globalAirports.NRT:', globalAirports.NRT);

const nrtResult = findAirportByCode('NRT');
console.log('findAirportByCode("NRT"):', nrtResult); 