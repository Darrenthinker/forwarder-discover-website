// 精确统计数据库条目数量
const fs = require('fs');

// 读取数据库文件
const fileContent = fs.readFileSync('./src/lib/complete-countries.ts', 'utf8');

// 提取数据库数组内容
const arrayStart = fileContent.indexOf('export const completeCountriesDatabase: CountryInfo[] = [');
const arrayEnd = fileContent.indexOf('];', arrayStart);
const arrayContent = fileContent.substring(arrayStart, arrayEnd);

// 计算条目数 - 通过计算 { chinese: 的出现次数
const entries = arrayContent.match(/{\s*chinese:/g);
const totalEntries = entries ? entries.length : 0;

// 计算各大洲数量
const continents = {
  '亚洲': (arrayContent.match(/continent: '亚洲'/g) || []).length,
  '欧洲': (arrayContent.match(/continent: '欧洲'/g) || []).length,
  '北美洲': (arrayContent.match(/continent: '北美洲'/g) || []).length,
  '南美洲': (arrayContent.match(/continent: '南美洲'/g) || []).length,
  '非洲': (arrayContent.match(/continent: '非洲'/g) || []).length,
  '大洋洲': (arrayContent.match(/continent: '大洋洲'/g) || []).length
};

// 计算国家和地区数量
const countries = (arrayContent.match(/type: 'country'/g) || []).length;
const territories = (arrayContent.match(/type: 'territory'/g) || []).length;

console.log('=== 数据库条目精确统计 ===');
console.log('');
console.log(`📊 总条目数: ${totalEntries}`);
console.log(`🏛️  国家数量: ${countries}`);
console.log(`🏝️  地区数量: ${territories}`);
console.log('');

console.log('🌍 各大洲分布:');
Object.entries(continents).forEach(([continent, count]) => {
  console.log(`${continent}: ${count}个`);
});

console.log('');
console.log('✅ 验证计算:');
console.log(`国家 + 地区 = ${countries} + ${territories} = ${countries + territories}`);
console.log(`各大洲总和 = ${Object.values(continents).reduce((sum, count) => sum + count, 0)}`);

// 机场统计
const withAirports = (arrayContent.match(/hasAirport: true/g) || []).length;
const withoutAirports = (arrayContent.match(/hasAirport: false/g) || []).length;

console.log('');
console.log('✈️ 机场统计:');
console.log(`有机场: ${withAirports}个`);
console.log(`无机场: ${withoutAirports}个`);
console.log(`机场总验证: ${withAirports + withoutAirports} = ${totalEntries}`);
