// 🔍 调试地址格式匹配
console.log('🔍 调试地址格式匹配\n');

// 用户输入的地址
const userAddress = '5257 Dove Tree St, Orlanda, Florida, US  zipcode: 32811';

// 美国地址正则表达式
const US_ADDRESS_PATTERNS = [
  // 完整格式: 241 N Congress Ave, Delray Beach, FL 33445
  /^(\d+.*?(?:Ave|Avenue|Street|St|Road|Rd|Blvd|Boulevard|Drive|Dr|Lane|Ln|Way|Circle|Cir|Court|Ct|Place|Pl))\s*,\s*([A-Za-z\s]+)\s*,\s*([A-Z]{2})\s+(\d{5}(?:-\d{4})?)$/i,
  // 简化格式: Delray Beach, FL 33445
  /^([A-Za-z\s]+)\s*,\s*([A-Z]{2})\s+(\d{5}(?:-\d{4})?)$/i,
  // 城市州格式: Miami, FL 或 Miami, Florida
  /^([A-Za-z\s]+)\s*,\s*((?:[A-Z]{2})|(?:Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming))$/i
];

console.log(`原始地址: "${userAddress}"`);
console.log('');

// 测试每个正则表达式
US_ADDRESS_PATTERNS.forEach((pattern, index) => {
  const match = userAddress.match(pattern);
  console.log(`模式 ${index + 1}: ${pattern}`);
  console.log(`匹配结果: ${match ? '✅ 匹配' : '❌ 不匹配'}`);
  if (match) {
    console.log(`匹配组: [${match.slice(1).join(', ')}]`);
  }
  console.log('');
});

// 尝试清理和标准化地址
console.log('🛠️ 尝试地址清理和标准化:');

const addressVariants = [
  // 移除 "US zipcode:" 部分
  userAddress.replace(/,?\s*US\s+zipcode:\s*/i, ', FL '),

  // 修正拼写错误 Orlanda -> Orlando
  userAddress.replace(/Orlanda/i, 'Orlando').replace(/,?\s*US\s+zipcode:\s*/i, ', FL '),

  // 简化为标准格式
  '5257 Dove Tree St, Orlando, FL 32811',

  // 只保留城市和州
  'Orlando, Florida',
  'Orlando, FL'
];

addressVariants.forEach((variant, index) => {
  console.log(`\n变体 ${index + 1}: "${variant}"`);

  US_ADDRESS_PATTERNS.forEach((pattern, patternIndex) => {
    const match = variant.match(pattern);
    if (match) {
      console.log(`   ✅ 匹配模式 ${patternIndex + 1}`);
      console.log(`   匹配组: [${match.slice(1).join(', ')}]`);
      return;
    }
  });
});
