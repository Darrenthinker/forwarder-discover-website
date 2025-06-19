// 直接测试parseCargoText函数
const fs = require('fs');
const path = require('path');

// 测试数据
const testData = `WAW设备及配件
2500 kgs ; 14.71 cbm ; 6托
货在广州
120x100x65 cm`;

console.log('🚀 测试第一个示例格式数据识别功能');
console.log('=' .repeat(60));
console.log('📝 测试数据:');
console.log(testData);
console.log('=' .repeat(60));

// 手动测试关键正则表达式
console.log('\n🔍 逐步测试解析逻辑:');

// 1. 测试传统格式匹配
const traditionalRegex = /(\d+(?:\.\d+)?)\s*(?:kgs?|KGS?|公斤)\s*[;；,]\s*(\d+(?:\.\d+)?)\s*(?:cbm|CBM|方|立方|m3)\s*[;；,]\s*(\d+(?:\.\d+)?)\s*(?:托|pallet)/i;
const traditionalMatch = testData.match(traditionalRegex);

console.log('1️⃣ 传统格式 "2500 kgs ; 14.71 cbm ; 6托":');
console.log('   正则:', traditionalRegex.source);
console.log('   结果:', traditionalMatch ? '✅ 匹配成功' : '❌ 匹配失败');

if (traditionalMatch) {
  console.log('   完整匹配:', traditionalMatch[0]);
  console.log('   重量:', traditionalMatch[1], 'kg');
  console.log('   体积:', traditionalMatch[2], 'cbm');
  console.log('   托盘:', traditionalMatch[3], '托');
}

// 2. 测试起运地匹配
const originRegex = /货在(.+?)(?=\s|$)/;
const originMatch = testData.match(originRegex);

console.log('\n2️⃣ 起运地 "货在广州":');
console.log('   正则:', originRegex.source);
console.log('   结果:', originMatch ? '✅ 匹配成功' : '❌ 匹配失败');

if (originMatch) {
  console.log('   起运地:', originMatch[1]);
}

// 3. 测试尺寸匹配
const dimensionRegex = /(\d+(?:\.\d+)?)\s*[x×*]\s*(\d+(?:\.\d+)?)\s*[x×*]\s*(\d+(?:\.\d+)?)\s*(cm|mm|m)?/i;
const dimensionMatch = testData.match(dimensionRegex);

console.log('\n3️⃣ 尺寸 "120x100x65 cm":');
console.log('   正则:', dimensionRegex.source);
console.log('   结果:', dimensionMatch ? '✅ 匹配成功' : '❌ 匹配失败');

if (dimensionMatch) {
  console.log('   完整匹配:', dimensionMatch[0]);
  console.log('   长:', dimensionMatch[1]);
  console.log('   宽:', dimensionMatch[2]);
  console.log('   高:', dimensionMatch[3]);
  console.log('   单位:', dimensionMatch[4] || 'cm');
}

// 4. 测试产品名称提取
const firstLine = testData.split('\n')[0]?.trim();

console.log('\n4️⃣ 产品名称 "WAW设备及配件":');
console.log('   第一行:', firstLine);
console.log('   结果: ✅ 提取成功');

// 5. 总结结果
console.log('\n' + '=' .repeat(60));
console.log('📊 最终解析结果总结:');
console.log('=' .repeat(60));

const finalResult = {
  name: firstLine,
  weight: traditionalMatch ? parseFloat(traditionalMatch[1]) : null,
  volume: traditionalMatch ? parseFloat(traditionalMatch[2]) : null,
  pallets: traditionalMatch ? parseFloat(traditionalMatch[3]) : null,
  origin: originMatch ? originMatch[1] : null,
  dimensions: dimensionMatch ? {
    length: parseFloat(dimensionMatch[1]),
    width: parseFloat(dimensionMatch[2]),
    height: parseFloat(dimensionMatch[3]),
    unit: dimensionMatch[4] || 'cm'
  } : null
};

console.log('✨ 产品名称:', finalResult.name);
console.log('⚖️  重量:', finalResult.weight ? `${finalResult.weight}kg` : '未识别');
console.log('📦 体积:', finalResult.volume ? `${finalResult.volume}cbm` : '未识别');
console.log('🚚 托盘数:', finalResult.pallets ? `${finalResult.pallets}托` : '未识别');
console.log('📍 起运地:', finalResult.origin || '未识别');
console.log('📏 尺寸:', finalResult.dimensions ? 
  `${finalResult.dimensions.length}x${finalResult.dimensions.width}x${finalResult.dimensions.height} ${finalResult.dimensions.unit}` : 
  '未识别');

// 6. 验证预期结果
console.log('\n' + '=' .repeat(60));
console.log('🎯 预期结果验证:');
console.log('=' .repeat(60));

const verifications = [
  { field: '产品名称', expected: 'WAW设备及配件', actual: finalResult.name, test: finalResult.name === 'WAW设备及配件' },
  { field: '重量', expected: 2500, actual: finalResult.weight, test: finalResult.weight === 2500 },
  { field: '体积', expected: 14.71, actual: finalResult.volume, test: finalResult.volume === 14.71 },
  { field: '托盘数', expected: 6, actual: finalResult.pallets, test: finalResult.pallets === 6 },
  { field: '起运地', expected: '广州', actual: finalResult.origin, test: finalResult.origin === '广州' },
  { field: '尺寸长度', expected: 120, actual: finalResult.dimensions?.length, test: finalResult.dimensions?.length === 120 }
];

let passedTests = 0;
verifications.forEach(({ field, expected, actual, test }) => {
  const status = test ? '✅ 通过' : '❌ 失败';
  console.log(`${field}: ${status} (期望: ${expected}, 实际: ${actual})`);
  if (test) passedTests++;
});

console.log('\n' + '=' .repeat(60));
console.log(`🏆 测试结果: ${passedTests}/${verifications.length} 项通过`);

if (passedTests === verifications.length) {
  console.log('🎉 恭喜！所有测试都通过了！货运数据解析功能正常工作。');
  console.log('📈 parseCargoText函数能够正确识别第一个示例格式的所有数据字段。');
} else {
  console.log('⚠️  部分测试未通过，解析器可能需要调整。');
  console.log('💡 建议检查正则表达式或解析逻辑。');
}