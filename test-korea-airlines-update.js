// 测试韩国和朝鲜航司IATA数据更新
const { searchAirlines } = require('./src/lib/airline-search.ts');

console.log('🇰🇷🇰🇵 韩国和朝鲜航司IATA数据验证测试');
console.log('====================================');

// 测试所有韩国和朝鲜航司
const koreaAirlines = searchAirlines('韩国');
const northKoreaAirlines = searchAirlines('朝鲜');

console.log('\n🇰🇷 韩国航司列表:');
console.log('代码 | 前缀 | ICAO | 中文名称 | 英文名称 | IATA成员');
console.log('-----|------|------|----------|----------|----------');

koreaAirlines.forEach(airline => {
  const iataStatus = airline.isIata === true ? '✅是' : (airline.isIata === false ? '❌否' : '❓未知');
  console.log(`${airline.code.padEnd(4)} | ${airline.prefix.padEnd(4)} | ${(airline.icao || '').padEnd(4)} | ${airline.name.chinese.padEnd(12)} | ${airline.name.english.padEnd(15)} | ${iataStatus}`);
});

console.log('\n🇰🇵 朝鲜航司列表:');
console.log('代码 | 前缀 | ICAO | 中文名称 | 英文名称 | IATA成员');
console.log('-----|------|------|----------|----------|----------');

northKoreaAirlines.forEach(airline => {
  const iataStatus = airline.isIata === true ? '✅是' : (airline.isIata === false ? '❌否' : '❓未知');
  console.log(`${airline.code.padEnd(4)} | ${airline.prefix.padEnd(4)} | ${(airline.icao || '').padEnd(4)} | ${airline.name.chinese.padEnd(12)} | ${airline.name.english.padEnd(15)} | ${iataStatus}`);
});

// 验证官方IATA数据
console.log('\n📋 官方IATA数据验证:');
const officialIataData = [
  { code: 'OZ', prefix: '988', icao: 'AAR', name: 'Asiana Airlines', country: 'Korea, Republic of' },
  { code: 'KE', prefix: '180', icao: 'KAL', name: 'Korean Air', country: 'Korea, Republic of' },
  { code: 'KJ', prefix: '994', icao: 'AIH', name: 'Air Incheon', country: 'Korea, Republic of' },
  { code: 'LJ', prefix: '718', icao: 'JNA', name: 'Jin Air', country: 'Korea, Republic of' },
  { code: '7C', prefix: '806', icao: 'JJA', name: 'Jeju Air', country: 'Korea, Republic of' },
  { code: 'TW', prefix: '722', icao: 'TWB', name: 'T\'way Air', country: 'Korea, Republic of' },
  { code: 'YP', prefix: '350', icao: 'APZ', name: 'Air Premia', country: 'Korea, Republic of' },
  { code: 'JS', prefix: '120', icao: 'KOR', name: 'Air Koryo', country: 'Korea, Democratic People\'s Republic of' }
];

let allCorrect = true;

officialIataData.forEach(official => {
  const found = searchAirlines(official.code).find(airline => airline.code === official.code);
  
  if (!found) {
    console.log(`❌ ${official.code} ${official.name} - 未找到`);
    allCorrect = false;
    return;
  }

  const correctPrefix = found.prefix === official.prefix;
  const correctIcao = found.icao === official.icao;
  const isIataMember = found.isIata === true;

  const status = correctPrefix && correctIcao && isIataMember ? '✅' : '❌';
  
  console.log(`${status} ${official.code} ${official.name}`);
  if (!correctPrefix) console.log(`   ⚠️  前缀错误: 期望${official.prefix}, 实际${found.prefix}`);
  if (!correctIcao) console.log(`   ⚠️  ICAO错误: 期望${official.icao}, 实际${found.icao}`);
  if (!isIataMember) console.log(`   ⚠️  IATA状态错误: 期望true, 实际${found.isIata}`);
  
  if (!correctPrefix || !correctIcao || !isIataMember) {
    allCorrect = false;
  }
});

console.log('\n📊 数据验证结果:');
console.log(`韩国航司总数: ${koreaAirlines.length}`);
console.log(`朝鲜航司总数: ${northKoreaAirlines.length}`);
console.log(`IATA数据准确性: ${allCorrect ? '✅ 完全正确' : '❌ 需要修正'}`);

// 检查重复TW条目
const twAirlines = searchAirlines('TW');
console.log(`\n🔍 TW代码搜索结果数量: ${twAirlines.length}`);
if (twAirlines.length > 1) {
  console.log('⚠️ 发现重复的TW条目，需要清理');
  twAirlines.forEach((airline, index) => {
    console.log(`  ${index + 1}. ${airline.name.chinese} (${airline.name.english}) - IATA: ${airline.isIata}`);
  });
} 