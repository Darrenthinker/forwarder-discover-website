// 测试地址解析和机场匹配功能
import { parseAddressAndFindAirports } from './src/lib/address-parser.ts';

console.log('🧪 测试地址解析和机场匹配功能\n');

// 测试用例：你提供的具体地址
const testAddress = '241 N Congress Ave, Delray Beach, FL 33445';

console.log('📋 测试输入:');
console.log(`地址: ${testAddress}\n`);

console.log('🔍 解析结果:');
const result = parseAddressAndFindAirports(testAddress);

console.log('\n📊 解析详情:');
if (result.address) {
  console.log('✅ 地址解析成功:');
  console.log(`  完整地址: ${result.address.fullAddress}`);
  console.log(`  街道: ${result.address.street}`);
  console.log(`  城市: ${result.address.city}`);
  console.log(`  州: ${result.address.state}`);
  console.log(`  邮编: ${result.address.zipCode}`);
  console.log(`  国家: ${result.address.country}`);
} else {
  console.log('❌ 地址解析失败');
}

console.log('\n✈️ 机场匹配结果:');
if (result.primaryAirport) {
  console.log('🥇 主要机场:');
  console.log(`  代码: ${result.primaryAirport.code}`);
  console.log(`  名称: ${result.primaryAirport.name}`);
  console.log(`  城市: ${result.primaryAirport.city}`);
  console.log(`  优先级: ${result.primaryAirport.priority}`);
} else {
  console.log('❌ 未找到匹配的机场');
}

if (result.airports.length > 1) {
  console.log('\n🥈 备选机场:');
  result.airports.slice(1).forEach((airport, index) => {
    console.log(`  ${index + 2}. ${airport.code} - ${airport.name} (${airport.city})`);
  });
}

console.log('\n🎯 业务结论:');
if (result.primaryAirport) {
  console.log(`✅ 推荐起运机场: ${result.primaryAirport.code} (${result.primaryAirport.name})`);
  console.log(`📍 距离: ${result.address?.city} → ${result.primaryAirport.city}`);
} else {
  console.log('❌ 无法确定起运机场');
}

// 额外测试其他地址格式
console.log('\n🧪 测试其他地址格式:');

const additionalTests = [
  'Miami, FL',
  'Houston, TX 77001',
  'New York, NY',
  'Los Angeles, CA 90210'
];

additionalTests.forEach((testAddr, index) => {
  console.log(`\n${index + 1}. 测试: ${testAddr}`);
  const testResult = parseAddressAndFindAirports(testAddr);
  if (testResult.primaryAirport) {
    console.log(`   ✅ ${testResult.primaryAirport.code} - ${testResult.primaryAirport.name}`);
  } else {
    console.log(`   ❌ 未找到机场`);
  }
});
