// 修复airline-search.ts文件中的重复提单号前缀
const fs = require('fs');

// 读取文件
function readFile() {
  try {
    return fs.readFileSync('src/lib/airline-search.ts', 'utf8');
  } catch (error) {
    console.error('无法读取文件:', error.message);
    return null;
  }
}

// 修复重复的提单号前缀
function fixPrefixes(content) {
  let fixedContent = content;
  
  // 修复春秋航空 (9C) 的提单号前缀
  fixedContent = fixedContent.replace(
    /(code: '9C',\s+prefix: '731',)/,
    "code: '9C',\n    prefix: '089',"
  );
  
  // 修复华信航空 (AE) 的提单号前缀
  fixedContent = fixedContent.replace(
    /(code: 'AE',\s+prefix: '297',)/,
    "code: 'AE',\n    prefix: '803',"
  );
  
  // 修复香料航空 (SG) 的提单号前缀
  fixedContent = fixedContent.replace(
    /(code: 'SG',\s+prefix: '131',)/,
    "code: 'SG',\n    prefix: '870',"
  );
  
  return fixedContent;
}

// 保存修复后的文件
function saveFile(content) {
  try {
    fs.writeFileSync('src/lib/airline-search.ts', content, 'utf8');
    console.log('✅ 文件修复成功！');
    return true;
  } catch (error) {
    console.error('保存文件失败:', error.message);
    return false;
  }
}

// 主函数
function main() {
  console.log('🔧 开始修复重复的提单号前缀...\n');
  
  const content = readFile();
  if (!content) {
    console.log('无法读取文件，退出修复。');
    return;
  }
  
  console.log('修复以下航司的提单号前缀：');
  console.log('1. 春秋航空 (9C): 731 → 089');
  console.log('2. 华信航空 (AE): 297 → 803');
  console.log('3. 香料航空 (SG): 131 → 870\n');
  
  const fixedContent = fixPrefixes(content);
  
  if (fixedContent !== content) {
    if (saveFile(fixedContent)) {
      console.log('🎉 所有重复的提单号前缀已修复！');
      console.log('\n修复详情：');
      console.log('- 春秋航空 (9C): 731 → 089');
      console.log('- 华信航空 (AE): 297 → 803');
      console.log('- 香料航空 (SG): 131 → 870');
    }
  } else {
    console.log('⚠️  没有找到需要修复的内容，可能已经修复过了。');
  }
}

main(); 