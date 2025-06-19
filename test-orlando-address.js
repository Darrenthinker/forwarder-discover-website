// 🧪 测试奥兰多地址解析
import { parseAddressAndFindAirports } from './src/lib/address-parser.js';

console.log('🧪 测试奥兰多地址解析\n');

// 用户输入的地址
const testAddress = '5257 Dove Tree St, Orlanda, Florida, US  zipcode: 32811';

console.log(`测试地址: "${testAddress}"`);
console.log('');

try {
  const result = parseAddressAndFindAirports(testAddress);

  console.log('解析结果:');
  console.log(JSON.stringify(result, null, 2));

  if (result.success) {
    console.log('\n✅ 解析成功!');
    console.log(`国家: ${result.address.country}`);
    console.log(`城市: ${result.address.city}`);
    console.log(`州: ${result.address.state}`);
    if (result.primaryAirport) {
      console.log(`推荐机场: ${result.primaryAirport.code} - ${result.primaryAirport.name}`);
    }
    console.log(`置信度: ${result.confidence}%`);
  } else {
    console.log('\n❌ 解析失败');
  }
} catch (error) {
  console.log(`🔥 错误: ${error.message}`);
}

// 测试各种变体
console.log('\n🔍 测试各种地址变体:');

const variants = [
  '5257 Dove Tree St, Orlando, Florida, US  zipcode: 32811',  // 修正拼写
  '5257 Dove Tree St, Orlando, FL 32811',                     // 标准格式
  'Orlando, FL 32811',                                        // 简化格式
  'Orlando, Florida',                                         // 城市+州名
  'Orlando, FL'                                               // 城市+州代码
];

variants.forEach((address, index) => {
  console.log(`\n${index + 1}. 测试: "${address}"`);

  try {
    const result = parseAddressAndFindAirports(address);

    if (result.success) {
      console.log(`   ✅ 成功: ${result.address.city}, ${result.address.state} -> ${result.primaryAirport?.code || '无机场'} (${result.confidence}%)`);
    } else {
      console.log('   ❌ 失败');
    }
  } catch (error) {
    console.log(`   🔥 错误: ${error.message}`);
  }
});
