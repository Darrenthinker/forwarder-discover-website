// 测试多crate格式解析功能
import { parseCargoText } from './src/lib/cargo-parser.ts';

console.log('🧪 测试多crate格式解析功能\n');

// 测试用例：完整的多crate格式
const testCase = `241 N Congress Ave
Delray Beach, FL  33445

Our order is ready,  Here is the info.
crate 1:  300 sheets, 618kgs, 117X84x88cm
crate 2:  300 sheets, 618kgs, 117X84x88cm
crate 3:  275 sheets, 572kgs, 117X84x83cm
There are  3 crates/ 1808kgs/ 2.54m³ in total.`;

console.log('📋 测试输入:');
console.log(testCase);
console.log('\n🔍 解析结果:');

const result = parseCargoText(testCase);

console.log('\n📊 关键数据分析:');
console.log(`起运地: ${result.origin || '未识别'}`);
console.log(`货物名称: ${result.name || '未识别'}`);
console.log(`总件数: ${result.pieces || 0} crates`);
console.log(`总重量: ${result.weight || 0}kg`);
console.log(`总体积: ${result.volume || 0}cbm`);
console.log(`包装类型: ${result.packageType || '未识别'}`);

console.log('\n📐 尺寸明细:');
if (result.dimensions && result.dimensions.length > 0) {
  result.dimensions.forEach((dim, index) => {
    const volume = (dim.length * dim.width * dim.height) / 1000000; // cm³ -> m³
    console.log(`  crate ${index + 1}: ${dim.length}×${dim.width}×${dim.height}${dim.unit} (体积: ${volume.toFixed(4)}cbm)`);
  });

  // 计算总体积验证
  const calculatedTotalVolume = result.dimensions.reduce((sum, dim) => {
    return sum + (dim.length * dim.width * dim.height) / 1000000;
  }, 0);
  console.log(`  计算总体积: ${calculatedTotalVolume.toFixed(3)}cbm`);
  console.log(`  给定总体积: 2.54cbm`);
  console.log(`  差异: ${Math.abs(calculatedTotalVolume - 2.54).toFixed(3)}cbm`);
} else {
  console.log('  无尺寸信息');
}

console.log('\n🎯 验证结果:');
const expectedResults = {
  pieces: 3,
  weight: 1808,
  volume: 2.54
};

let allCorrect = true;

if (result.pieces !== expectedResults.pieces) {
  console.log(`❌ 件数错误: 期望${expectedResults.pieces}, 实际${result.pieces}`);
  allCorrect = false;
} else {
  console.log(`✅ 件数正确: ${result.pieces} crates`);
}

if (result.weight !== expectedResults.weight) {
  console.log(`❌ 重量错误: 期望${expectedResults.weight}kg, 实际${result.weight}kg`);
  allCorrect = false;
} else {
  console.log(`✅ 重量正确: ${result.weight}kg`);
}

if (Math.abs((result.volume || 0) - expectedResults.volume) > 0.01) {
  console.log(`❌ 体积错误: 期望${expectedResults.volume}cbm, 实际${result.volume}cbm`);
  allCorrect = false;
} else {
  console.log(`✅ 体积正确: ${result.volume}cbm`);
}

if (result.origin !== 'MIA') {
  console.log(`❌ 起运地错误: 期望MIA, 实际${result.origin}`);
  allCorrect = false;
} else {
  console.log(`✅ 起运地正确: ${result.origin} (基于地址自动识别)`);
}

console.log(`\n🏆 总体结果: ${allCorrect ? '✅ 全部正确!' : '❌ 存在错误'}`);

// 额外测试：简化版多crate格式
console.log('\n\n🧪 测试简化版多crate格式:');
const simplifiedCase = `crate 1: 200 sheets, 500kgs, 100X80x60cm
crate 2: 150 sheets, 400kgs, 90X70x50cm
2 crates/900kgs/0.51cbm`;

console.log('输入:', simplifiedCase);
const simplifiedResult = parseCargoText(simplifiedCase);
console.log('结果:', {
  pieces: simplifiedResult.pieces,
  weight: simplifiedResult.weight,
  volume: simplifiedResult.volume,
  name: simplifiedResult.name
});
