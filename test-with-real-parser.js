// 使用实际的parseCargoText函数进行测试
import { parseCargoText } from './src/lib/cargo-parser.js';

// 测试数据
const testData = `WAW设备及配件
2500 kgs ; 14.71 cbm ; 6托
货在广州
120x100x65 cm`;

console.log('🚀 使用实际parseCargoText函数测试第一个示例');
console.log('=' .repeat(60));
console.log('📝 测试数据:');
console.log(testData);
console.log('=' .repeat(60));

try {
  // 调用实际的解析函数
  const result = parseCargoText(testData);
  
  console.log('\n📊 parseCargoText函数解析结果:');
  console.log('产品名称:', result.name || '未识别');
  console.log('重量:', result.weight ? `${result.weight}kg` : '未识别');
  console.log('体积:', result.volume ? `${result.volume}cbm` : '未识别');
  console.log('托盘数:', result.pallets ? `${result.pallets}托` : '未识别');
  console.log('件数:', result.pieces ? `${result.pieces}件` : '未识别');
  console.log('起运地:', result.origin || '未识别');
  console.log('目的地:', result.destination || '未识别');
  console.log('目的地代码:', result.destinationCode || '未识别');
  console.log('包装类型:', result.packageType || '未识别');
  console.log('尺寸:', result.dimensions ? 
    result.dimensions.map(d => `${d.length}x${d.width}x${d.height} ${d.unit} (数量: ${d.quantity})`).join(', ') : 
    '未识别');
  
  // 验证预期结果
  console.log('\n' + '=' .repeat(60));
  console.log('🎯 预期结果验证:');
  console.log('=' .repeat(60));
  
  const verifications = [
    { field: '产品名称', expected: 'WAW设备及配件', actual: result.name, test: result.name === 'WAW设备及配件' },
    { field: '重量', expected: 2500, actual: result.weight, test: result.weight === 2500 },
    { field: '体积', expected: 14.71, actual: result.volume, test: result.volume === 14.71 },
    { field: '托盘数', expected: 6, actual: result.pallets, test: result.pallets === 6 },
    { field: '起运地', expected: '广州', actual: result.origin, test: result.origin === '广州' },
    { field: '尺寸长度', expected: 120, actual: result.dimensions?.[0]?.length, test: result.dimensions?.[0]?.length === 120 }
  ];
  
  let passedTests = 0;
  verifications.forEach(({ field, expected, actual, test }) => {
    const status = test ? '✅ 通过' : '❌ 失败';
    console.log(`${field}: ${status} (期望: ${expected}, 实际: ${actual})`);
    if (test) passedTests++;
  });
  
  console.log('\n' + '=' .repeat(60));
  console.log(`🏆 实际函数测试结果: ${passedTests}/${verifications.length} 项通过`);
  
  if (passedTests === verifications.length) {
    console.log('🎉 恭喜！实际的parseCargoText函数完美解析了第一个示例格式！');
  } else {
    console.log('⚠️  实际函数存在一些问题，可能需要调整解析逻辑。');
  }
  
} catch (error) {
  console.error('❌ 测试失败:', error.message);
  console.log('\n💡 这可能是因为ES模块导入问题，让我们用CommonJS方式测试...');
}