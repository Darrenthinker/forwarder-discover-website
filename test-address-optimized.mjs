// 测试优化后的地址解析功能
import { parseCargoText } from './src/lib/cargo-parser.ts';

console.log('🧪 测试优化后的地址解析功能\n');

// 测试用例：在货物信息中包含地址
const testCases = [
  {
    name: '包含完整地址的货物信息',
    text: `241 N Congress Ave, Delray Beach, FL 33445
Our order is ready, Here is the info.
crate 1: 300 sheets, 618kgs, 117X84x88cm
crate 2: 300 sheets, 618kgs, 117X84x88cm
crate 3: 275 sheets, 572kgs, 117X84x83cm
There are 3 crates/ 1808kgs/ 2.54m³ in total.`
  },
  {
    name: '包含简化地址的货物信息',
    text: `Miami, FL 33101
150件，总重量500kg，体积3.2cbm
电子产品，不带电`
  },
  {
    name: '包含州城市的货物信息',
    text: `Los Angeles, CA
250箱，每箱重15kg，尺寸50x40x30cm
服装类商品`
  }
];

for (const testCase of testCases) {
  console.log(`\n📋 ${testCase.name}:`);
  console.log('输入:', testCase.text.replace(/\n/g, ' | '));

  const result = parseCargoText(testCase.text);

  console.log('✅ 解析结果:');
  console.log(`  起运地: ${result.origin || '未识别'}`);
  console.log(`  目的地: ${result.destination || '未识别'}`);
  console.log(`  货物名称: ${result.name || '未识别'}`);
  console.log(`  重量: ${result.weight || 0}kg`);
  console.log(`  体积: ${result.volume || 0}cbm`);
  console.log(`  件数: ${result.pieces || 0}`);

  if (result.origin) {
    console.log(`🎯 成功检测到地址并设置起运地: ${result.origin}`);
  } else {
    console.log(`⚠️ 未检测到有效地址`);
  }
}
