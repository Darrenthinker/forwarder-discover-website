// 测试当前系统是否能正确解析第一个示例
const traditionalSample = `WAW设备及配件
2500 kgs ; 14.71 cbm ; 6托
货在广州
120x100x65 cm`;

console.log('🚀 测试传统格式示例数据');
console.log('输入数据:', traditionalSample);
console.log('期望结果:');
console.log('- 产品名称: 设备及配件');
console.log('- 目的地: WAW,华沙,Warsaw');
console.log('- 重量: 2500kg');
console.log('- 体积: 14.71cbm');
console.log('- 托盘: 6托');
console.log('- 起运地: 广州');
console.log('- 尺寸: 120x100x65 cm');

// 模拟解析过程
console.log('\n🔍 开始模拟解析...');

// 1. 机场代码识别
const airportMatch = traditionalSample.match(/\b([A-Z]{3})\b/g);
console.log('1. 机场代码识别:', airportMatch);

// 2. 传统格式识别
const traditionalFormatMatch = traditionalSample.match(/(\d+(?:\.\d+)?)\s*(?:kgs?|KGS?|公斤)\s*[;；,]\s*(\d+(?:\.\d+)?)\s*(?:cbm|CBM|方|立方|m3)\s*[;；,]\s*(\d+(?:\.\d+)?)\s*(?:托|pallet)/i);
console.log('2. 传统格式识别:', traditionalFormatMatch);

// 3. 产品名称提取
const firstLine = traditionalSample.split('\n')[0]?.trim();
console.log('3. 第一行内容:', firstLine);

// 4. 起运地识别
const originMatch = traditionalSample.match(/货在(.+?)(?=\s|$)/);
console.log('4. 起运地识别:', originMatch);

// 5. 尺寸识别
const dimensionMatch = traditionalSample.match(/(\d+)\s*[xX×]\s*(\d+)\s*[xX×]\s*(\d+)\s*(cm|mm|m)/i);
console.log('5. 尺寸识别:', dimensionMatch);

console.log('\n✅ 模拟解析完成');
