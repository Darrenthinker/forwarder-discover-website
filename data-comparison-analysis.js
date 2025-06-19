// 权威数据vs我们数据库的比对分析
console.log('=== 权威数据 vs 我们数据库比对分析 ===');
console.log('');

// 权威数据（来自xixik.com）
const authoritative = {
  totalEntries: 233,
  countries: 197, // 主权国家195 + 准主权2
  territories: 36,
  byContinent: {
    '亚洲': { countries: 48, territories: 0, total: 48 },
    '欧洲': { countries: 44, territories: 2, total: 46 },
    '非洲': { countries: 54, territories: 7, total: 61 },
    '北美洲': { countries: 23, territories: 17, total: 40 },
    '南美洲': { countries: 12, territories: 2, total: 14 },
    '大洋洲': { countries: 16, territories: 8, total: 24 }
  }
};

// 我们的数据
const ourData = {
  totalEntries: 235,
  countries: 195,
  territories: 40,
  byContinent: {
    '亚洲': { countries: 47, territories: 2, total: 49 },
    '欧洲': { countries: 44, territories: 2, total: 46 },
    '非洲': { countries: 54, territories: 4, total: 58 },
    '北美洲': { countries: 23, territories: 16, total: 39 },
    '南美洲': { countries: 12, territories: 3, total: 15 },
    '大洋洲': { countries: 14, territories: 13, total: 27 }
  }
};

console.log('📊 总体对比:');
console.log(`权威数据: ${authoritative.totalEntries}个 (${authoritative.countries}国家 + ${authoritative.territories}地区)`);
console.log(`我们数据: ${ourData.totalEntries}个 (${ourData.countries}国家 + ${ourData.territories}地区)`);
console.log(`差异: ${ourData.totalEntries - authoritative.totalEntries}个条目`);
console.log('');

console.log('🔍 详细分析:');
console.log('');

Object.keys(authoritative.byContinent).forEach(continent => {
  const auth = authoritative.byContinent[continent];
  const ours = ourData.byContinent[continent];

  console.log(`${continent}:`);
  console.log(`  权威: ${auth.countries}国家 + ${auth.territories}地区 = ${auth.total}个`);
  console.log(`  我们: ${ours.countries}国家 + ${ours.territories}地区 = ${ours.total}个`);

  const countryDiff = ours.countries - auth.countries;
  const territoryDiff = ours.territories - auth.territories;
  const totalDiff = ours.total - auth.total;

  if (countryDiff !== 0 || territoryDiff !== 0) {
    console.log(`  差异: 国家${countryDiff>=0?'+':''}${countryDiff}, 地区${territoryDiff>=0?'+':''}${territoryDiff}, 总计${totalDiff>=0?'+':''}${totalDiff}`);
  } else {
    console.log(`  ✅ 完全一致`);
  }
  console.log('');
});

console.log('🎯 主要差异原因分析:');
console.log('1. 亚洲: 我们少1个国家，多2个地区');
console.log('   - 可能将塞浦路斯归为欧洲，而权威归为亚洲');
console.log('   - 我们添加了香港、澳门作为地区');
console.log('');

console.log('2. 非洲: 我们地区少3个');
console.log('   - 权威包含7个地区，我们只有4个');
console.log('   - 可能遗漏了某些欧洲国家在非洲的属地');
console.log('');

console.log('3. 北美洲: 我们地区少1个');
console.log('   - 可能遗漏1个加勒比海地区');
console.log('');

console.log('4. 南美洲: 我们多1个地区');
console.log('   - 可能多计算了1个地区');
console.log('');

console.log('5. 大洋洲: 我们少2个国家，多5个地区');
console.log('   - 国家分类可能有差异');
console.log('   - 地区计算可能包含了更多澳、美、法属地区');
console.log('');

console.log('📝 建议调整:');
console.log('1. 检查塞浦路斯的分类 (亚洲 vs 欧洲)');
console.log('2. 确认非洲地区是否遗漏亚速尔群岛、马德拉群岛、加那利群岛');
console.log('3. 检查大洋洲国家分类，特别是库克群岛、纽埃的status');
console.log('4. 统一标准，与权威数据保持一致');
