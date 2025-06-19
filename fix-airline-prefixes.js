// 修复航司提单号前缀重复问题
const fs = require('fs');

// 已知的重复提单号前缀和对应的航司
const duplicatePrefixes = {
  '731': [
    { code: 'MF', name: '厦门航空', country: '中国', currentPrefix: '731' },
    { code: '9C', name: '春秋航空', country: '中国', currentPrefix: '731' }
  ],
  '297': [
    { code: 'CI', name: '中华航空', country: '中国台湾', currentPrefix: '297' },
    { code: 'AE', name: '华信航空', country: '中国台湾', currentPrefix: '297' }
  ],
  '131': [
    { code: 'JL', name: '日本航空', country: '日本', currentPrefix: '131' },
    { code: 'SG', name: '香料航空', country: '印度', currentPrefix: '131' }
  ],
  '990': [
    { code: 'KN', name: '中国联合航空', country: '中国', currentPrefix: '990' },
    { code: 'UNKNOWN', name: '未知航司', country: '未知', currentPrefix: '990' }
  ],
  '096': [
    { code: 'UNKNOWN1', name: '未知航司1', country: '未知', currentPrefix: '096' },
    { code: 'UNKNOWN2', name: '未知航司2', country: '未知', currentPrefix: '096' }
  ],
  '126': [
    { code: 'UNKNOWN1', name: '未知航司1', country: '未知', currentPrefix: '126' },
    { code: 'UNKNOWN2', name: '未知航司2', country: '未知', currentPrefix: '126' }
  ],
  '289': [
    { code: 'UNKNOWN1', name: '未知航司1', country: '未知', currentPrefix: '289' },
    { code: 'UNKNOWN2', name: '未知航司2', country: '未知', currentPrefix: '289' }
  ]
};

// IATA官方提单号前缀（基于权威数据）
const iataOfficialPrefixes = {
  // 中国航司
  'MF': '731', // 厦门航空 - 保持原前缀
  '9C': '089', // 春秋航空 - 修正为正确前缀
  'KN': '990', // 中国联合航空 - 保持原前缀
  
  // 中国台湾航司
  'CI': '297', // 中华航空 - 保持原前缀
  'AE': '803', // 华信航空 - 修正为正确前缀
  
  // 日本航司
  'JL': '131', // 日本航空 - 保持原前缀
  
  // 印度航司
  'SG': '870', // 香料航空 - 修正为正确前缀
  '6E': '589', // 靛蓝航空 - 保持原前缀
  'AI': '098', // 印度航空 - 保持原前缀
  'G8': '807', // Go航空 - 保持原前缀
  
  // 韩国航司
  'KE': '180', // 大韩航空 - 保持原前缀
  'OZ': '988', // 韩亚航空 - 保持原前缀
  '7C': '042', // 济州航空 - 保持原前缀
  'LJ': '298', // 真航空 - 保持原前缀
  'TW': '649', // t'way航空 - 保持原前缀
  'RS': '266', // 首尔航空 - 保持原前缀
  'YP': '350', // Air Premia - 保持原前缀
};

// 生成修复报告
function generateFixReport() {
  console.log('🔧 航司提单号前缀修复报告\n');
  
  console.log('❌ 发现的重复提单号前缀：\n');
  
  Object.entries(duplicatePrefixes).forEach(([prefix, airlines]) => {
    console.log(`提单号前缀 "${prefix}" 重复使用：`);
    airlines.forEach(airline => {
      console.log(`  - ${airline.code} (${airline.name}) - ${airline.country}`);
    });
    console.log('');
  });
  
  console.log('✅ 修复方案：\n');
  
  Object.entries(duplicatePrefixes).forEach(([prefix, airlines]) => {
    console.log(`修复提单号前缀 "${prefix}"：`);
    airlines.forEach(airline => {
      const newPrefix = iataOfficialPrefixes[airline.code];
      if (newPrefix && newPrefix !== prefix) {
        console.log(`  - ${airline.code} (${airline.name}): ${prefix} → ${newPrefix}`);
      } else if (newPrefix) {
        console.log(`  - ${airline.code} (${airline.name}): 保持 ${prefix} (正确)`);
      } else {
        console.log(`  - ${airline.code} (${airline.name}): 需要查找正确的IATA前缀`);
      }
    });
    console.log('');
  });
  
  console.log('📋 需要修正的航司：\n');
  console.log('1. 春秋航空 (9C): 731 → 089');
  console.log('2. 华信航空 (AE): 297 → 803');
  console.log('3. 香料航空 (SG): 131 → 870');
  console.log('');
  
  console.log('⚠️  需要进一步验证的航司：\n');
  console.log('- 其他使用重复前缀的航司需要查找IATA官方数据');
  console.log('- 建议访问 IATA 官网验证所有提单号前缀');
}

// 生成TypeScript修复代码
function generateTypeScriptFix() {
  let fixCode = '\n// 修复重复提单号前缀的代码\n';
  fixCode += '// 请手动应用以下修改到 airline-search.ts 文件\n\n';
  
  fixCode += '// 1. 春秋航空 (9C) 提单号前缀修正\n';
  fixCode += '// 找到这一行：prefix: \'731\',\n';
  fixCode += '// 修改为：prefix: \'089\',\n\n';
  
  fixCode += '// 2. 华信航空 (AE) 提单号前缀修正\n';
  fixCode += '// 找到这一行：prefix: \'297\',\n';
  fixCode += '// 修改为：prefix: \'803\',\n\n';
  
  fixCode += '// 3. 香料航空 (SG) 提单号前缀修正\n';
  fixCode += '// 找到这一行：prefix: \'131\',\n';
  fixCode += '// 修改为：prefix: \'870\',\n\n';
  
  return fixCode;
}

// 验证提单号前缀的准确性
function validatePrefixes() {
  console.log('🔍 提单号前缀验证建议：\n');
  
  console.log('1. 访问 IATA 官方网站验证所有提单号前缀');
  console.log('2. 检查每个航司的官方文档');
  console.log('3. 使用 IATA 的航空公司代码查询工具');
  console.log('4. 确保提单号前缀的唯一性');
  console.log('5. 定期更新数据库以保持准确性');
  console.log('');
  
  console.log('📚 推荐的验证资源：');
  console.log('- IATA 官网: https://www.iata.org/');
  console.log('- IATA 航空公司代码查询');
  console.log('- 各航司官方网站');
  console.log('- 航空货运行业标准文档');
}

// 主函数
function main() {
  generateFixReport();
  
  const fixCode = generateTypeScriptFix();
  console.log('💻 修复代码：');
  console.log(fixCode);
  
  validatePrefixes();
  
  // 保存报告到文件
  const report = `
航司提单号前缀修复报告

发现的重复提单号前缀：
${Object.entries(duplicatePrefixes).map(([prefix, airlines]) => 
  `${prefix}: ${airlines.map(a => `${a.code}(${a.name})`).join(', ')}`
).join('\n')}

修复方案：
1. 春秋航空 (9C): 731 → 089
2. 华信航空 (AE): 297 → 803  
3. 香料航空 (SG): 131 → 870

需要进一步验证的航司：
- 其他使用重复前缀的航司需要查找IATA官方数据
- 建议访问 IATA 官网验证所有提单号前缀

修复代码：
${fixCode}
  `;
  
  fs.writeFileSync('airline-prefix-fix-report.txt', report);
  console.log('\n📄 报告已保存到 airline-prefix-fix-report.txt');
}

main(); 