#!/usr/bin/env node

console.log('🧪 验证重要城市代码添加\n');

// 直接读取文件内容验证
const fs = require('fs');

const files = [
  { file: 'src/lib/airport-codes-europe.ts', codes: ['LON', 'PAR'] },
  { file: 'src/lib/airport-codes-asia.ts', codes: ['TYO', 'BJS'] },
  { file: 'src/lib/airport-codes-north-america.ts', codes: ['NYC'] }
];

files.forEach(({ file, codes }) => {
  console.log(`📁 检查文件: ${file}`);

  try {
    const content = fs.readFileSync(file, 'utf8');

    codes.forEach(code => {
      if (content.includes(`'${code}':`)) {
        console.log(`  ✅ ${code} 代码已添加`);
      } else {
        console.log(`  ❌ ${code} 代码缺失`);
      }
    });
  } catch (error) {
    console.log(`  ❌ 无法读取文件: ${error.message}`);
  }

  console.log();
});

console.log('📋 已添加的重要城市代码:');
console.log('- LON (伦敦) - 伦敦地区机场群');
console.log('- TYO (东京) - 东京地区机场群 (成田+羽田)');
console.log('- NYC (纽约) - 纽约地区机场群 (JFK+LGA+EWR)');
console.log('- PAR (巴黎) - 巴黎地区机场群 (CDG+ORY)');
console.log('- BJS (北京) - 北京地区机场群 (PEK+PKX)');

console.log('\n💡 这些城市代码在国际货运中非常重要！');
console.log('它们代表城市的所有主要机场，便于客户选择。');
console.log('\n🎯 用户体验改进:');
console.log('- 搜索"伦敦"时，LON排在最前面');
console.log('- 客户可直接选择城市代码，无需了解具体机场');
console.log('- 符合国际货运行业标准');
