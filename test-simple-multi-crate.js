console.log('🧪 简单测试多crate格式解析功能\n');

// 模拟parseCargoText函数的简化版本来测试正则表达式
function testMultiCrateRegex() {
  const testText = `241 N Congress Ave, Delray Beach, FL 33445

Our order is ready, Here is the info.
crate 1: 300 sheets, 618kgs, 117X84x88cm
crate 2: 300 sheets, 618kgs, 117X84x88cm
crate 3: 275 sheets, 572kgs, 117X84x83cm
There are 3 crates/ 1808kgs/ 2.54m³ in total.`;

  console.log('📋 测试输入:');
  console.log(testText);
  console.log('\n🔍 测试结果:');

  // 检查是否包含crate关键词
  const containsCrate = testText.includes('crate');
  const containsSheets = testText.includes('sheets');

  console.log(`✅ 包含'crate': ${containsCrate}`);
  console.log(`✅ 包含'sheets': ${containsSheets}`);

  // 测试crate解析正则表达式
  const cratePattern = /crate\s+(\d+):\s*(\d+)\s*sheets?\s*,\s*(\d+(?:\.\d+)?)kgs?\s*,\s*(\d+(?:\.\d+)?)[xX×*](\d+(?:\.\d+)?)[xX×*](\d+(?:\.\d+)?)cm/gi;

  let match;
  let crateCount = 0;
  let totalWeight = 0;

  while ((match = cratePattern.exec(testText)) !== null) {
    crateCount++;
    const [fullMatch, crateNum, sheets, weight, length, width, height] = match;
    const weightNum = parseFloat(weight);
    totalWeight += weightNum;

    console.log(`📦 Crate ${crateNum}: ${sheets} sheets, ${weight}kg, ${length}×${width}×${height}cm`);
  }

  console.log(`\n📊 统计结果:`);
  console.log(`总crate数: ${crateCount}`);
  console.log(`总重量: ${totalWeight}kg`);

  // 测试总计信息解析
  const totalPattern = /(?:There\s+are\s+)?(\d+)\s*crates?\s*[\/,]\s*(\d+(?:\.\d+)?)kgs?\s*[\/,]\s*(\d+(?:\.\d+)?)\s*(?:m³|cbm)/i;
  const totalMatch = testText.match(totalPattern);

  if (totalMatch) {
    console.log(`✅ 总计信息: ${totalMatch[1]} crates, ${totalMatch[2]}kg, ${totalMatch[3]}cbm`);
  } else {
    console.log(`❌ 未找到总计信息`);
  }

  // 测试地址解析
  const addressPattern = /\b\d+.*?[A-Za-z\s]+(Ave|Street|St|Road|Rd|Blvd|Drive|Dr|Lane|Ln|Way|Circle|Cir),\s*([A-Za-z\s]+),\s*([A-Z]{2})\s*\d{5}/gi;
  const addressMatch = testText.match(addressPattern);

  if (addressMatch) {
    console.log(`✅ 检测到地址: ${addressMatch[0]}`);
  } else {
    console.log(`❌ 未检测到地址`);
  }

  return {
    crateCount,
    totalWeight,
    totalInfo: totalMatch ? { crates: totalMatch[1], weight: totalMatch[2], volume: totalMatch[3] } : null,
    address: addressMatch ? addressMatch[0] : null
  };
}

const result = testMultiCrateRegex();
console.log('\n🎯 最终结果:', result);

// 验证预期结果
console.log('\n🏆 验证结果:');
const expected = { crates: 3, weight: 1808, volume: 2.54 };
const actual = result.totalInfo;

if (actual) {
  const cratesCorrect = parseInt(actual.crates) === expected.crates;
  const weightCorrect = parseFloat(actual.weight) === expected.weight;
  const volumeCorrect = parseFloat(actual.volume) === expected.volume;

  console.log(`件数 ${cratesCorrect ? '✅' : '❌'}: ${actual.crates} (期望 ${expected.crates})`);
  console.log(`重量 ${weightCorrect ? '✅' : '❌'}: ${actual.weight}kg (期望 ${expected.weight}kg)`);
  console.log(`体积 ${volumeCorrect ? '✅' : '❌'}: ${actual.volume}cbm (期望 ${expected.volume}cbm)`);

  const allCorrect = cratesCorrect && weightCorrect && volumeCorrect;
  console.log(`\n🏆 总体结果: ${allCorrect ? '✅ 全部正确!' : '❌ 存在错误'}`);
} else {
  console.log('❌ 未能解析总计信息');
}
