// 测试体积计算优先级：有尺寸时以计算的体积为准
import { parseCargoText } from './src/lib/cargo-parser.ts';

console.log('🧪 测试体积计算优先级...\n');

// 测试用例：既有明确体积又有尺寸的情况
const testCase = `
Comm: 运动装备
数量：17箱
尺寸：每箱48 x 48 x 58 厘米
总重量：400 公斤
体积：14.71 CBM
`;

console.log('📋 测试输入:');
console.log(testCase);
console.log('\n🔍 解析结果:');

const result = parseCargoText(testCase);

console.log('\n📊 关键数据对比:');
console.log(`件数: ${result.pieces}`);
console.log(`重量: ${result.weight} kg`);
console.log(`明确给出的体积: 14.71 CBM`);
console.log(`根据尺寸计算的体积: ${result.volume} CBM`);

// 计算预期的体积
const expectedVolumePerBox = (48 * 48 * 58) / 1000000; // cm³ -> m³
const expectedTotalVolume = expectedVolumePerBox * 17;

console.log('\n🧮 体积计算验证:');
console.log(`单箱体积 (48×48×58cm): ${expectedVolumePerBox.toFixed(6)} CBM`);
console.log(`预期总体积 (${expectedVolumePerBox.toFixed(6)} × 17): ${expectedTotalVolume.toFixed(3)} CBM`);
console.log(`实际解析结果: ${result.volume} CBM`);

if (Math.abs(result.volume - expectedTotalVolume) < 0.001) {
  console.log('\n✅ 测试通过: 优先使用尺寸计算的体积 (4.68 CBM)');
  console.log('   ✅ 忽略了明确给出的体积 (14.71 CBM)');
} else {
  console.log('\n❌ 测试失败: 没有优先使用尺寸计算的体积');
  console.log(`   期望: ${expectedTotalVolume.toFixed(3)} CBM`);
  console.log(`   实际: ${result.volume} CBM`);
}

console.log('\n📐 尺寸信息:');
if (result.dimensions && result.dimensions.length > 0) {
  result.dimensions.forEach((dim, index) => {
    console.log(`  尺寸${index + 1}: ${dim.length}×${dim.width}×${dim.height} ${dim.unit}, 数量: ${dim.quantity}`);
  });
} else {
  console.log('  无尺寸信息');
}
