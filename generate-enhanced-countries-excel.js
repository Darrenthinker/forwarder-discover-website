// 生成增强版国家和地区Excel/CSV文件（包含验证信息）
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

for (const line of lines) {
  const trimmedLine = line.trim();

  // 跳过注释行和空行
  if (trimmedLine.startsWith('//') || trimmedLine === '' || trimmedLine === '[') {
    continue;
  }

  // 检测条目开始
  if (trimmedLine.startsWith('{ chinese:')) {
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
      const entry = {
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

      entries.push(entry);
    }
  }
}

// 生成增强版CSV内容
const csvHeader = [
  '序号',
  '中文名称',
  '英文名称',
  '国家代码',
  '大洲',
  '有机场',
  '首都',
  '类型',
  '隶属关系',
  '备注',
  '搜索测试项',
  '机场搜索说明'
].join(',');

const csvRows = entries.map((entry, index) => {
  // 生成搜索测试建议
  const searchTests = [];
  searchTests.push(entry.chinese);
  searchTests.push(entry.english);
  searchTests.push(entry.code);
  if (entry.capital) searchTests.push(entry.capital);

  // 机场搜索说明
  let airportSearchNote = '';
  if (!entry.hasAirport) {
    airportSearchNote = '无机场-不会在机场搜索中出现';
  } else {
    airportSearchNote = '有机场-应该在机场搜索中出现';
  }

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
    `"${entry.note || ''}"`,
    `"${searchTests.join('; ')}"`,
    `"${airportSearchNote}"`
  ].join(',');
});

const csvContent = [csvHeader, ...csvRows].join('\n');

// 写入CSV文件
fs.writeFileSync('countries-verification-database.csv', csvContent, 'utf8');

console.log('=== 增强版国家地区数据库导出完成 ===');
console.log('');
console.log(`✅ 已生成文件: countries-verification-database.csv`);
console.log(`📊 总条目数: ${entries.length}`);
console.log('');

// 按类型统计
const countryCount = entries.filter(e => e.type === 'country').length;
const territoryCount = entries.filter(e => e.type === 'territory').length;
const withAirportCount = entries.filter(e => e.hasAirport).length;
const withoutAirportCount = entries.filter(e => !e.hasAirport).length;

console.log('📈 数据统计:');
console.log(`- 国家: ${countryCount}个`);
console.log(`- 地区: ${territoryCount}个`);
console.log(`- 有机场: ${withAirportCount}个`);
console.log(`- 无机场: ${withoutAirportCount}个`);
console.log('');

// 无机场的国家和地区
const noAirportEntries = entries.filter(e => !e.hasAirport);
console.log('🚫 无机场的国家和地区:');
noAirportEntries.forEach(entry => {
  console.log(`- ${entry.chinese} (${entry.english}) ${entry.code} - ${entry.note || '原因未知'}`);
});

console.log('');
console.log('💡 使用说明:');
console.log('1. 在Excel中打开 countries-verification-database.csv 文件');
console.log('2. "搜索测试项"列包含了该条目的所有搜索关键词');
console.log('3. "机场搜索说明"列说明该条目是否应该在机场搜索中出现');
console.log('4. 重点测试有机场的国家和地区');
console.log('');

console.log('🔍 重要提醒:');
console.log(`❗ 梵蒂冈等${withoutAirportCount}个国家/地区没有机场，所以不会在机场搜索中出现`);
console.log('❗ 这是正确的行为，因为机场搜索系统是为了查找机场');
console.log('❗ 如果需要搜索所有国家（包括无机场的），需要另外的功能');

console.log('');
console.log('📋 测试重点:');
console.log('- 验证所有有机场的224个国家/地区都能被搜索到');
console.log('- 确认无机场的9个国家/地区不在机场搜索结果中');
console.log('- 测试中文名、英文名、国家代码搜索');
console.log('- 特别关注小国家和地区的搜索准确性');
