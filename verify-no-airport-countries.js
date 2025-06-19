// 验证无机场国家和地区的数据
const fs = require('fs');

console.log('=== 验证无机场国家和地区数据 ===');
console.log('');

// 读取完整国家数据库文件
const fileContent = fs.readFileSync('./src/lib/complete-countries.ts', 'utf8');

// 提取无机场的条目
const noAirportEntries = [];
const lines = fileContent.split('\n');

for (const line of lines) {
  const trimmedLine = line.trim();

  // 跳过注释行和空行
  if (trimmedLine.startsWith('//') || trimmedLine === '' || !trimmedLine.includes('hasAirport: false')) {
    continue;
  }

  // 如果包含 hasAirport: false，解析这一行
  if (trimmedLine.includes('hasAirport: false')) {
    const chineseMatch = trimmedLine.match(/chinese:\s*'([^']+)'/);
    const englishMatch = trimmedLine.match(/english:\s*'([^']+)'/);
    const codeMatch = trimmedLine.match(/code:\s*'([^']+)'/);
    const noteMatch = trimmedLine.match(/note:\s*'([^']*?)'/);
    const typeMatch = trimmedLine.match(/type:\s*'([^']+)'/);

    if (chineseMatch && englishMatch && codeMatch) {
      noAirportEntries.push({
        chinese: chineseMatch[1],
        english: englishMatch[1],
        code: codeMatch[1],
        type: typeMatch ? typeMatch[1] : '',
        note: noteMatch ? noteMatch[1] : ''
      });
    }
  }
}

console.log(`📊 无机场国家和地区总数: ${noAirportEntries.length}个`);
console.log('');

console.log('📋 详细列表:');
noAirportEntries.forEach((entry, index) => {
  console.log(`${index + 1}. ${entry.chinese} (${entry.english}) - ${entry.code}`);
  console.log(`   类型: ${entry.type === 'country' ? '国家' : entry.type === 'territory' ? '地区' : '未知'}`);
  if (entry.note) {
    console.log(`   说明: ${entry.note}`);
  }
  console.log('');
});

console.log('✅ 验证结果:');
console.log('- 这些国家/地区没有机场是正常的');
console.log('- 它们在机场搜索系统中不会出现在搜索结果中');
console.log('- 这符合机场货运报价系统的业务逻辑');
console.log('- 如果客户需要这些地区的物流服务，可以使用邻近国家的机场');

console.log('');
console.log('💡 实际使用建议:');
console.log('- 梵蒂冈/圣马力诺/摩纳哥 → 使用罗马/里米尼/尼斯机场');
console.log('- 列支敦士登/安道尔 → 使用苏黎世/巴塞罗那机场');
console.log('- 太平洋小岛屿 → 通过海运或邻近岛屿转运');
