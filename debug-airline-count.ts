// 调试航空公司数量
import fs from 'fs';

console.log('🔍 调试航空公司数量问题\n');

// 读取源文件内容
const content = fs.readFileSync('./src/lib/airline-search.ts', 'utf8');

// 1. 计算 code: 出现的次数
const codeMatches = content.match(/code: '/g);
console.log(`1. code: 字段出现次数: ${codeMatches ? codeMatches.length : 0}`);

// 2. 找到AIRLINES数组开始和结束位置
const arrayStart = content.indexOf('const AIRLINES: Airline[] = [');
const arrayEnd = content.indexOf('];', arrayStart);

if (arrayStart !== -1 && arrayEnd !== -1) {
  const arrayContent = content.substring(arrayStart, arrayEnd + 2);

  // 在数组内容中计算code:出现次数
  const arrayCodeMatches = arrayContent.match(/code: '/g);
  console.log(`2. AIRLINES数组内 code: 字段数量: ${arrayCodeMatches ? arrayCodeMatches.length : 0}`);

  // 计算对象数量（通过 }， 或 } 后跟 ] 来判断）
  const objectEndMatches = arrayContent.match(/\s*},?\s*(?=[\]\s])/g);
  console.log(`3. 对象结束符数量: ${objectEndMatches ? objectEndMatches.length : 0}`);
} else {
  console.log('❌ 无法找到AIRLINES数组');
}

// 3. 直接导入模块测试
try {
  const { searchAirlines } = require('./src/lib/airline-search.ts');

  // 搜索一个不存在的查询，获取所有航空公司
  const allAirlines = searchAirlines('___NON_EXISTENT___');
  console.log(`4. 搜索空结果数量: ${allAirlines.length}`);

  // 尝试搜索常见的字母获取大量结果
  const aResults = searchAirlines('A');
  console.log(`5. 搜索'A'的结果数量: ${aResults.length}`);

  // 使用正则表达式搜索所有单字母
  let maxResults = 0;
  let bestQuery = '';

  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i); // A-Z
    const results = searchAirlines(letter);
    if (results.length > maxResults) {
      maxResults = results.length;
      bestQuery = letter;
    }
  }

  console.log(`6. 最多结果查询'${bestQuery}': ${maxResults}个航空公司`);

} catch (error) {
  console.log(`❌ 导入模块失败: ${error.message}`);
}

console.log('\n🔍 调试完成！');
