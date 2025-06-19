// V110简单测试 - 验证修改是否生效
console.log('=== V110测试 ===');

// 直接测试当前目录的cargo-parser.ts
const fs = require('fs');
const path = require('path');

// 检查当前目录的cargo-parser.ts是否包含V110标记
const cargoParserPath = path.join(__dirname, 'src/lib/cargo-parser.ts');

if (fs.existsSync(cargoParserPath)) {
  const content = fs.readFileSync(cargoParserPath, 'utf8');

  console.log('✅ 找到cargo-parser.ts文件');

  // 检查是否包含V110调试标记
  if (content.includes('🔥🔥🔥 V110 DEBUG')) {
    console.log('✅ 文件包含V110调试标记');

    // 检查是否包含parseCargoText函数
    if (content.includes('export function parseCargoText')) {
      console.log('✅ 文件包含parseCargoText函数');

      // 检查最终分析步骤是否存在
      if (content.includes('最终分析步骤')) {
        console.log('✅ 文件包含最终分析步骤');
        console.log('📋 修改已正确应用到代码中');
      } else {
        console.log('❌ 文件不包含最终分析步骤');
      }
    } else {
      console.log('❌ 文件不包含parseCargoText函数');
    }
  } else {
    console.log('❌ 文件不包含V110调试标记');
    console.log('📝 显示文件前几行内容：');
    console.log(content.substring(0, 500));
  }
} else {
  console.log('❌ 未找到cargo-parser.ts文件在:', cargoParserPath);
}

console.log('\n🔍 检查项目结构:');
const srcPath = path.join(__dirname, 'src');
if (fs.existsSync(srcPath)) {
  console.log('✅ src目录存在');
  const libPath = path.join(srcPath, 'lib');
  if (fs.existsSync(libPath)) {
    console.log('✅ src/lib目录存在');
    const files = fs.readdirSync(libPath);
    console.log('📁 src/lib目录文件:', files);
  } else {
    console.log('❌ src/lib目录不存在');
  }
} else {
  console.log('❌ src目录不存在');
}

console.log('\n💡 如果Console中看不到V110调试日志，可能的原因：');
console.log('1. 浏览器缓存问题 - 请刷新页面(Ctrl+F5)');
console.log('2. 应用程序在使用不同目录的代码');
console.log('3. 开发服务器需要重启');
console.log('4. TypeScript编译缓存问题');
