// V108版本调试验证脚本
console.log('🔧 V108版本 - 机场代码阻止规则强化版调试');
console.log('=================================================');

// 模拟问题分析
console.log('\n📋 V107版本问题分析：');
console.log('1. 第525行正则 /([A-Z0-9]+[\\s?]*[^，。；\\n\\s\\d?]{2,10}机?)/ 匹配了"WAW设备及配件"');
console.log('2. 第194行条件 !result.name 阻止了修复逻辑执行');
console.log('3. 第576行 result.name = productName 覆盖了正确的产品名称');

console.log('\n🔧 V108版本修复要点：');
console.log('1. ✅ 强化第525行正则过滤：includes(机场代码) + startsWith(机场代码)');
console.log('2. ✅ 移除第194行!result.name条件，确保修复逻辑总是执行');
console.log('3. ✅ 增加额外保护机制，拒绝包含机场代码的名称覆盖');

console.log('\n🧪 测试数据：');
const testInput = `WAW设备及配件
2500 kgs ; 14.71 cbm ; 6托
货在广州`;

console.log(`输入: ${testInput.replace(/\n/g, '\\n')}`);

console.log('\n🎯 期望执行流程：');
console.log('Step 1: 第127行识别机场代码 WAW');
console.log('Step 2: 第141行立即提取产品名称 "设备及配件" (排除WAW)');
console.log('Step 3: 第525行正则匹配 "WAW设备及配件"');
console.log('Step 4: 新增检查 match[1].includes("WAW") = true，排除此匹配');
console.log('Step 5: 第567行额外保护，拒绝包含WAW的名称覆盖');
console.log('Step 6: 最终结果：货物名称 = "设备及配件"');

console.log('\n🚫 关键阻止点：');
console.log('• 第528行：🚫 完全排除包含机场代码的产品匹配');
console.log('• 第570行：🛡️ 保护已有产品名称，拒绝包含机场代码的覆盖');
console.log('• 第586行：🚫 强制规则触发，移除机场代码');

console.log('\n📝 验证步骤：');
console.log('1. 在网页中输入测试数据');
console.log('2. 打开浏览器开发者工具查看Console');
console.log('3. 查找调试日志："🚫 完全排除包含机场代码的产品匹配"');
console.log('4. 确认货物名称显示为"设备及配件"');

console.log('\n✅ 成功标准：');
console.log('✅ 货物名称: "设备及配件" (不是"WAW设备及配件")');
console.log('✅ 目的地: "WAW,华沙,Warsaw"');
console.log('✅ Console显示: "🚫 完全排除包含机场代码的产品匹配: WAW设备及配件"');
