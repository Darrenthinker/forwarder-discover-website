// 分析重复的提单号前缀
const fs = require('fs');

// 从grep搜索结果中提取的提单号前缀
const prefixes = [
  '205', '131', '440', '434', '908', '824', '781', '784', '999', '880', 
  '731', '876', '324', '731', '990', '889', '921', '619', '160', '851', 
  '633', '288', '043', '297', '695', '319', '538', '297', '180', '350', 
  '988', '042', '298', '649', '266', '589', '098', '131', '807', '996', 
  '194', '217', '693', '435', '829', '615', '975', '232', '643', '955', 
  '320', '126', '990', '614', '938', '106', '751', '570', '838', '176', 
  '171', '738', '926', '584', '112', '296', '141', '065', '593', '560', 
  '157', '229', '414', '072', '910', '289', '512', '076', '096', '096', 
  '135', '111', '771', '606', '580', '250', '465', '438', '762', '289', 
  '255', '214', '420', '854', '551', '209', '126', '235', '624', '405'
];

// 查找重复的提单号前缀
function findDuplicates(prefixes) {
  const prefixCount = {};
  const duplicates = {};
  
  prefixes.forEach(prefix => {
    prefixCount[prefix] = (prefixCount[prefix] || 0) + 1;
    if (prefixCount[prefix] > 1) {
      if (!duplicates[prefix]) {
        duplicates[prefix] = prefixCount[prefix];
      }
    }
  });
  
  return duplicates;
}

// 主函数
function main() {
  console.log('分析提单号前缀重复情况...\n');
  
  const duplicates = findDuplicates(prefixes);
  
  if (Object.keys(duplicates).length === 0) {
    console.log('✅ 没有发现重复的提单号前缀！');
  } else {
    console.log(`❌ 发现 ${Object.keys(duplicates).length} 个重复的提单号前缀：\n`);
    
    Object.entries(duplicates).forEach(([prefix, count]) => {
      console.log(`提单号前缀 "${prefix}" 重复 ${count} 次`);
    });
    
    console.log('\n重复的提单号前缀详情：');
    console.log('1. "731" - 厦门航空(MF) 和 春秋航空(9C)');
    console.log('2. "297" - 中华航空(CI) 和 华信航空(AE)');
    console.log('3. "131" - 日本航空(JL) 和 另一个航司');
    console.log('4. "990" - 中国联合航空(KN) 和 另一个航司');
    console.log('5. "096" - 两个航司使用');
    console.log('6. "126" - 两个航司使用');
    console.log('7. "289" - 两个航司使用');
  }
  
  // 统计信息
  const uniquePrefixes = [...new Set(prefixes)];
  console.log(`\n📊 统计信息：`);
  console.log(`- 总提单号前缀数量: ${prefixes.length}`);
  console.log(`- 唯一提单号前缀数量: ${uniquePrefixes.length}`);
  console.log(`- 重复的提单号前缀数量: ${Object.keys(duplicates).length}`);
}

main(); 