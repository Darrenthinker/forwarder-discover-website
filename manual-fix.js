// 手动修复重复的提单号前缀
const fs = require('fs');

console.log('🔧 手动修复重复的提单号前缀\n');

console.log('需要修复的航司：');
console.log('1. 春秋航空 (9C): 731 → 089');
console.log('2. 华信航空 (AE): 297 → 803');
console.log('3. 香料航空 (SG): 131 → 870\n');

console.log('请手动在 src/lib/airline-search.ts 文件中进行以下修改：\n');

console.log('=== 修复1: 春秋航空 ===');
console.log('找到第188行附近的代码：');
console.log('  {');
console.log('    code: \'9C\',');
console.log('    prefix: \'089\',');
console.log('    icao: \'CQH\',');
console.log('    name: { chinese: \'春秋航空\', english: \'Spring Airlines\' },');
console.log('    country: \'中国\',');
console.log('    countryCode: \'CN\',');
console.log('    type: \'LCC\',');
console.log('    hub: [\'PVG\'],');
console.log('    fleetSize: 110,');
console.log('    active: true');
console.log('  },\n');

console.log('=== 修复2: 华信航空 ===');
console.log('找到华信航空的代码：');
console.log('  {');
console.log('    code: \'AE\',');
console.log('    prefix: \'803\',');
console.log('    icao: \'MDA\',');
console.log('    name: { chinese: \'华信航空\', english: \'Mandarin Airlines\' },');
console.log('    country: \'中国台湾\',');
console.log('    countryCode: \'TW\',');
console.log('    type: \'Regional\',');
console.log('    hub: [\'TSA\', \'TPE\'],');
console.log('    fleetSize: 12,');
console.log('    active: true');
console.log('  },\n');

console.log('=== 修复3: 香料航空 ===');
console.log('找到香料航空的代码：');
console.log('  {');
console.log('    code: \'SG\',');
console.log('    prefix: \'870\',');
console.log('    icao: \'SEJ\',');
console.log('    name: { chinese: \'香料航空\', english: \'SpiceJet\' },');
console.log('    country: \'印度\',');
console.log('    countryCode: \'IN\',');
console.log('    type: \'LCC\',');
console.log('    hub: [\'DEL\', \'BOM\'],');
console.log('    fleetSize: 116,');
console.log('    active: true');
console.log('  },\n');

console.log('✅ 修复完成后，所有重复的提单号前缀将被解决！');
console.log('📋 修复总结：');
console.log('- 春秋航空 (9C): 731 → 089');
console.log('- 华信航空 (AE): 297 → 803');
console.log('- 香料航空 (SG): 131 → 870'); 