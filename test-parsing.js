import { parseCargoText } from './src/lib/cargo-parser.ts';

const testData = `WAW设备及配件
2500 kgs ; 14.71 cbm ; 6托
货在广州
120x100x65 cm`;

try {
  const result = parseCargoText(testData);

  console.log('═══════════════════════════════════════');
  console.log('📦 第一个示例格式测试结果');
  console.log('═══════════════════════════════════════');
  console.log('✅ 货物名称：', result.name || '未识别');
  console.log('✅ 重量：', result.weight || '未识别', 'kg');
  console.log('✅ 体积：', result.volume || '未识别', 'cbm');
  console.log('✅ 件数：', result.pieces || '未识别');
  console.log('✅ 起运地：', result.origin || '未识别');
  console.log('✅ 目的地：', result.destination || result.destinationCode || '未识别');
  console.log('✅ 包装类型：', result.packageType || '未识别');

  if (result.dimensions && result.dimensions.length > 0) {
    console.log('✅ 尺寸明细：');
    result.dimensions.forEach((dim, index) => {
      console.log(`   ${index + 1}. ${dim.length} × ${dim.width} × ${dim.height} ${dim.unit || 'cm'} (${dim.quantity}件)`);
    });
  } else {
    console.log('❌ 尺寸明细：未识别');
  }

  console.log('═══════════════════════════════════════');
} catch (error) {
  console.error('❌ 解析失败：', error.message);
}
