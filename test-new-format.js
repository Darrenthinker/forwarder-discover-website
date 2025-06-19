console.log('🧪 测试新格式解析功能...');

// 模拟导入 - 这里手动复制解析逻辑核心部分来测试
const testData = `148*113*80/1
168*113*72.5/1
188.5*35.5*71/1
单个托盘120KG`;

console.log('📝 输入数据:');
console.log(testData);

// 测试尺寸模式匹配
const dimensionPatterns = [
  // 🔥 新增：148*113*80/1 格式 - 无单位，需要智能判断
  /(\d+(?:\.\d+)?)\*(\d+(?:\.\d+)?)\*(\d+(?:\.\d+)?)\/(\d+)/gi,
  // 🔥 新增：148x113x80/1 格式 - 无单位，需要智能判断
  /(\d+(?:\.\d+)?)x(\d+(?:\.\d+)?)x(\d+(?:\.\d+)?)\/(\d+)/gi,
];

console.log('\n🔍 测试尺寸模式匹配:');
for (let i = 0; i < dimensionPatterns.length; i++) {
  const pattern = dimensionPatterns[i];
  const matches = [...testData.matchAll(pattern)];
  console.log(`模式 ${i}: ${pattern}`);
  console.log(`匹配结果:`, matches);

  if (matches.length > 0) {
    for (const match of matches) {
      console.log(`  - ${match[1]} × ${match[2]} × ${match[3]} / ${match[4]}件`);
    }
  }
}

// 测试重量模式匹配
const weightPatterns = [
  // 🔥 新增：处理"单个托盘120KG"这种格式
  /单个托盘(\d+(?:\.\d+)?)\s*(?:KG|kg|公斤)/i,
  // 🔥 新增：处理"单个/每个 + 重量"格式
  /(?:单个|每个).*?(\d+(?:\.\d+)?)\s*(?:KG|kg|公斤)/i,
];

console.log('\n🔍 测试重量模式匹配:');
for (let i = 0; i < weightPatterns.length; i++) {
  const pattern = weightPatterns[i];
  const match = testData.match(pattern);
  console.log(`模式 ${i}: ${pattern}`);
  console.log(`匹配结果:`, match);

  if (match) {
    console.log(`  - 单个重量: ${match[1]}KG`);
  }
}

// 测试智能单位判断
function testSmartUnitDetection(length, width, height) {
  const lengthStr = length.toString();
  const widthStr = width.toString();
  const heightStr = height.toString();

  const maxDimension = Math.max(length, width, height);
  let unit = 'cm'; // 默认厘米

  if (maxDimension >= 1000) {
    unit = 'mm'; // 四位数通常是毫米
  } else if (maxDimension <= 10 && (lengthStr.includes('.') || widthStr.includes('.') || heightStr.includes('.'))) {
    unit = 'm'; // 小数且小于10通常是米
  } else if (maxDimension >= 100) {
    unit = 'cm'; // 三位数通常是厘米
  } else if (maxDimension >= 10) {
    unit = 'cm'; // 两位数通常是厘米
  } else {
    // 一位数需要更仔细判断
    if (lengthStr.includes('.') || widthStr.includes('.') || heightStr.includes('.')) {
      unit = 'm'; // 有小数的一位数可能是米
    } else {
      unit = 'cm'; // 整数的一位数可能是厘米（不太常见但保险起见）
    }
  }

  console.log(`智能单位判断: ${length}*${width}*${height} → ${unit} (最大值: ${maxDimension})`);
  return unit;
}

console.log('\n🧠 测试智能单位判断:');
testSmartUnitDetection(148, 113, 80);     // 应该是 cm
testSmartUnitDetection(168, 113, 72.5);   // 应该是 cm
testSmartUnitDetection(188.5, 35.5, 71);  // 应该是 cm
testSmartUnitDetection(1480, 1130, 800);  // 应该是 mm
testSmartUnitDetection(1.48, 1.13, 0.8);  // 应该是 m

console.log('\n✅ 测试完成');
