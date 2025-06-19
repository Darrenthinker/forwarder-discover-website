// 生成国家和地区Excel/CSV文件
const fs = require('fs');

// 读取数据库文件
const fileContent = fs.readFileSync('./src/lib/complete-countries.ts', 'utf8');

// 提取数据库数组内容
const arrayStart = fileContent.indexOf('export const completeCountriesDatabase: CountryInfo[] = [');
const arrayEnd = fileContent.indexOf('];', arrayStart);
const arrayContent = fileContent.substring(arrayStart, arrayEnd);

// 解析每个条目
const entries = [];
const lines = arrayContent.split('\n');
let currentEntry = {};

for (const line of lines) {
  const trimmedLine = line.trim();

  // 跳过注释行和空行
  if (trimmedLine.startsWith('//') || trimmedLine === '' || trimmedLine === '[') {
    continue;
  }

  // 检测条目开始
  if (trimmedLine.startsWith('{ chinese:')) {
    currentEntry = {};

    // 解析这一行的所有字段
    const entryText = trimmedLine;

    // 提取各个字段
    const chineseMatch = entryText.match(/chinese:\s*'([^']+)'/);
    const englishMatch = entryText.match(/english:\s*'([^']+)'/);
    const codeMatch = entryText.match(/code:\s*'([^']+)'/);
    const continentMatch = entryText.match(/continent:\s*'([^']+)'/);
    const hasAirportMatch = entryText.match(/hasAirport:\s*(true|false)/);
    const capitalMatch = entryText.match(/capital:\s*'([^']*?)'/);
    const typeMatch = entryText.match(/type:\s*'([^']+)'/);
    const sovereigntyMatch = entryText.match(/sovereignty:\s*'([^']*?)'/);
    const noteMatch = entryText.match(/note:\s*'([^']*?)'/);

    if (chineseMatch && englishMatch && codeMatch) {
      currentEntry = {
        chinese: chineseMatch[1],
        english: englishMatch[1],
        code: codeMatch[1],
        continent: continentMatch ? continentMatch[1] : '',
        hasAirport: hasAirportMatch ? hasAirportMatch[1] === 'true' : false,
        capital: capitalMatch ? capitalMatch[1] : '',
        type: typeMatch ? typeMatch[1] : '',
        sovereignty: sovereigntyMatch ? sovereigntyMatch[1] : '',
        note: noteMatch ? noteMatch[1] : ''
      };

      entries.push(currentEntry);
    }
  }
}

// 生成CSV内容
const csvHeader = [
  '序号',
  '中文名称',
  '英文名称',
  '代码',
  '大洲',
  '有机场',
  '首都',
  '类型',
  '隶属关系',
  '备注'
].join(',');

const csvRows = entries.map((entry, index) => {
  return [
    index + 1,
    `"${entry.chinese}"`,
    `"${entry.english}"`,
    entry.code,
    entry.continent,
    entry.hasAirport ? '是' : '否',
    `"${entry.capital || ''}"`,
    entry.type === 'country' ? '国家' : entry.type === 'territory' ? '地区' : '',
    `"${entry.sovereignty || ''}"`,
    `"${entry.note || ''}"`
  ].join(',');
});

const csvContent = [csvHeader, ...csvRows].join('\n');

// 写入CSV文件
fs.writeFileSync('countries-database.csv', csvContent, 'utf8');

console.log('=== 国家地区数据库导出完成 ===');
console.log('');
console.log(`✅ 已生成文件: countries-database.csv`);
console.log(`📊 总条目数: ${entries.length}`);
console.log('');

// 按类型统计
const countryCount = entries.filter(e => e.type === 'country').length;
const territoryCount = entries.filter(e => e.type === 'territory').length;

console.log('📈 数据统计:');
console.log(`- 国家: ${countryCount}个`);
console.log(`- 地区: ${territoryCount}个`);
console.log(`- 有机场: ${entries.filter(e => e.hasAirport).length}个`);
console.log(`- 无机场: ${entries.filter(e => !e.hasAirport).length}个`);
console.log('');

// 按大洲统计
const continentStats = {};
entries.forEach(entry => {
  if (!continentStats[entry.continent]) {
    continentStats[entry.continent] = 0;
  }
  continentStats[entry.continent]++;
});

console.log('🌍 各大洲分布:');
Object.entries(continentStats).forEach(([continent, count]) => {
  console.log(`- ${continent}: ${count}个`);
});

console.log('');
console.log('💡 使用说明:');
console.log('1. 在Excel中打开 countries-database.csv 文件');
console.log('2. 使用Excel的筛选功能验证数据');
console.log('3. 可以按类型、大洲、是否有机场等字段筛选');
console.log('4. 建议重点验证搜索功能是否能找到所有条目');

console.log('');
console.log('🔍 测试建议:');
console.log('- 测试中文名称搜索 (如: 梵蒂冈、摩纳哥)');
console.log('- 测试英文名称搜索 (如: Vatican City, Monaco)');
console.log('- 测试机场代码搜索 (如: LAX, LHR)');
console.log('- 测试国家代码搜索 (如: CN, US, JP)');
console.log('- 测试小国家和地区的搜索功能');
