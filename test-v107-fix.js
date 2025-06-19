// V107版本修复验证测试
console.log('🧪 V107版本 - 机场代码阻止规则修复验证');
console.log('================================================');

// 模拟测试数据
const testCases = [
  {
    name: '传统格式示例',
    input: `WAW设备及配件
2500 kgs ; 14.71 cbm ; 6托
货在广州`,
    expected: {
      name: '设备及配件', // 不应该包含WAW
      destinationCode: 'WAW',
      destination: 'WAW,华沙,Warsaw'
    }
  },
  {
    name: '其他机场代码测试',
    input: `LAX音响设备
100 kg ; 2 cbm ; 3件`,
    expected: {
      name: '音响设备', // 不应该包含LAX
      destinationCode: 'LAX'
    }
  },
  {
    name: '产品名称中间包含机场代码',
    input: `产品JFK包装设备
50 kg ; 1 cbm`,
    expected: {
      name: '产品包装设备', // 应该移除JFK
      destinationCode: 'JFK'
    }
  }
];

console.log('✅ 期望修复效果：');
testCases.forEach((testCase, index) => {
  console.log(`\n${index + 1}. ${testCase.name}:`);
  console.log(`   输入: "${testCase.input.split('\n')[0]}"`);
  console.log(`   期望货物名称: "${testCase.expected.name}"`);
  console.log(`   期望目的地: "${testCase.expected.destinationCode}"`);
});

console.log('\n🔥 V107修复规则说明：');
console.log('1. 第一重规则：如果货物名称包含已识别的机场代码，强制移除');
console.log('2. 第二重规则：扫描并移除货物名称中的任何三字机场代码');
console.log('3. 智能提取：尝试保留机场代码后面的有效部分');
console.log('4. 兜底机制：如果无法提取有效名称，使用"普货"');

console.log('\n📋 测试步骤：');
console.log('1. 在网页中输入上述测试数据');
console.log('2. 查看解析结果中的"货物名称"字段');
console.log('3. 确认不包含任何机场代码');
console.log('4. 确认目的地字段正确显示机场信息');

console.log('\n🎯 成功标准：');
console.log('✅ 货物名称: "设备及配件" (不是"WAW设备及配件")');
console.log('✅ 目的地: "WAW,华沙,Warsaw"');
console.log('✅ 其他数据: 重量、体积、托盘数等保持正确');
