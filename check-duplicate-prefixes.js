// 检查航司数据库中的提单号前缀重复
const fs = require('fs');

// 读取airline-search.ts文件
function readAirlineFile() {
  try {
    const content = fs.readFileSync('src/lib/airline-search.ts', 'utf8');
    return content;
  } catch (error) {
    console.error('无法读取文件:', error.message);
    return null;
  }
}

// 解析航司数据
function parseAirlines(content) {
  const airlines = [];
  const lines = content.split('\n');
  
  let currentAirline = null;
  let inAirlineArray = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // 检查是否进入AIRLINES数组
    if (line.includes('const AIRLINES: Airline[] = [')) {
      inAirlineArray = true;
      continue;
    }
    
    // 检查是否退出AIRLINES数组
    if (inAirlineArray && line === '];') {
      break;
    }
    
    if (!inAirlineArray) continue;
    
    // 检查是否开始新的航司对象
    if (line === '{') {
      currentAirline = {};
      continue;
    }
    
    // 检查是否结束航司对象
    if (line === '},' || line === '}') {
      if (currentAirline && currentAirline.prefix) {
        airlines.push(currentAirline);
      }
      currentAirline = null;
      continue;
    }
    
    // 解析航司属性
    if (currentAirline && line.includes(':')) {
      const [key, value] = line.split(':').map(s => s.trim());
      
      if (key === 'prefix') {
        // 提取前缀值（去掉引号和逗号）
        const prefixValue = value.replace(/['",]/g, '');
        currentAirline.prefix = prefixValue;
      } else if (key === 'code') {
        const codeValue = value.replace(/['",]/g, '');
        currentAirline.code = codeValue;
      } else if (key.includes('chinese')) {
        const chineseValue = value.replace(/['",]/g, '');
        if (!currentAirline.name) currentAirline.name = {};
        currentAirline.name.chinese = chineseValue;
      } else if (key.includes('english')) {
        const englishValue = value.replace(/['",]/g, '');
        if (!currentAirline.name) currentAirline.name = {};
        currentAirline.name.english = englishValue;
      } else if (key === 'country') {
        const countryValue = value.replace(/['",]/g, '');
        currentAirline.country = countryValue;
      }
    }
  }
  
  return airlines;
}

// 检查重复的提单号前缀
function checkDuplicatePrefixes(airlines) {
  const prefixMap = new Map();
  const duplicates = [];
  
  airlines.forEach(airline => {
    if (airline.prefix) {
      if (prefixMap.has(airline.prefix)) {
        duplicates.push({
          prefix: airline.prefix,
          airlines: [prefixMap.get(airline.prefix), airline]
        });
      } else {
        prefixMap.set(airline.prefix, airline);
      }
    }
  });
  
  return duplicates;
}

// 主函数
function main() {
  console.log('开始检查航司数据库中的提单号前缀重复...\n');
  
  const content = readAirlineFile();
  if (!content) {
    console.log('无法读取文件，退出检查。');
    return;
  }
  
  const airlines = parseAirlines(content);
  console.log(`解析到 ${airlines.length} 家航司\n`);
  
  const duplicates = checkDuplicatePrefixes(airlines);
  
  if (duplicates.length === 0) {
    console.log('✅ 没有发现重复的提单号前缀！');
  } else {
    console.log(`❌ 发现 ${duplicates.length} 个重复的提单号前缀：\n`);
    
    duplicates.forEach((dup, index) => {
      console.log(`${index + 1}. 提单号前缀 "${dup.prefix}" 被以下航司使用：`);
      dup.airlines.forEach(airline => {
        console.log(`   - ${airline.code} (${airline.name?.chinese || airline.name?.english}) - ${airline.country}`);
      });
      console.log('');
    });
  }
  
  // 显示所有提单号前缀
  console.log('📋 所有提单号前缀列表：');
  const allPrefixes = [...new Set(airlines.map(a => a.prefix).filter(p => p))].sort();
  allPrefixes.forEach(prefix => {
    const airline = airlines.find(a => a.prefix === prefix);
    console.log(`   ${prefix} - ${airline.code} (${airline.name?.chinese || airline.name?.english})`);
  });
  
  console.log(`\n总计: ${allPrefixes.length} 个唯一的提单号前缀`);
}

main(); 