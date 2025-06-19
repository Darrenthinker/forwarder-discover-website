#!/usr/bin/env node

console.log('🧪 检查机场数据中的国家代码覆盖情况\n');

// 从机场数据文件中获取所有国家
const fs = require('fs');

// 读取所有机场代码文件
const airportFiles = [
  'src/lib/airport-codes-asia.ts',
  'src/lib/airport-codes-europe.ts',
  'src/lib/airport-codes-north-america.ts',
  'src/lib/airport-codes-south-america.ts',
  'src/lib/airport-codes-oceania.ts',
  'src/lib/airport-codes-africa.ts'
];

const countries = new Set();

airportFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');

    // 使用正则表达式提取 country 字段
    const countryMatches = content.match(/country:\s*'([^']+)'/g);

    if (countryMatches) {
      countryMatches.forEach(match => {
        const country = match.match(/country:\s*'([^']+)'/)[1];
        countries.add(country);
      });
    }
  } catch (error) {
    console.log(`⚠️ 无法读取文件: ${file}`);
  }
});

console.log(`📊 找到 ${countries.size} 个不同的国家/地区:`);

// 从国家代码映射中获取已映射的国家
const countryCodeFile = 'src/lib/country-codes.ts';
const mappedCountries = new Set();

try {
  const content = fs.readFileSync(countryCodeFile, 'utf8');
  const countryEntries = content.match(/'([^']+)':\s*{[^}]+}/g);

  if (countryEntries) {
    countryEntries.forEach(entry => {
      const country = entry.match(/'([^']+)':/)[1];
      mappedCountries.add(country);
    });
  }
} catch (error) {
  console.log('⚠️ 无法读取国家代码映射文件');
}

console.log(`🗺️ 已映射 ${mappedCountries.size} 个国家的代码\n`);

// 检查覆盖情况
const sortedCountries = Array.from(countries).sort();
let covered = 0;
let missing = 0;

console.log('📋 国家代码覆盖情况:');
sortedCountries.forEach(country => {
  if (mappedCountries.has(country)) {
    console.log(`✅ ${country}`);
    covered++;
  } else {
    console.log(`❌ ${country} (缺少代码映射)`);
    missing++;
  }
});

console.log(`\n📈 统计结果:`);
console.log(`- ✅ 已覆盖: ${covered} 个国家 (${(covered/countries.size*100).toFixed(1)}%)`);
console.log(`- ❌ 未覆盖: ${missing} 个国家 (${(missing/countries.size*100).toFixed(1)}%)`);

if (missing > 0) {
  console.log(`\n🔧 需要补充的国家:`);
  sortedCountries.forEach(country => {
    if (!mappedCountries.has(country)) {
      console.log(`  - ${country}`);
    }
  });
}

console.log(`\n💡 建议:`);
if (missing === 0) {
  console.log('🎉 所有国家都已映射代码！系统完整覆盖。');
} else {
  console.log(`📝 还需要为 ${missing} 个国家添加二字码映射`);
  console.log('🌍 可以查询 ISO 3166-1 alpha-2 标准获取正确的国家代码');
}
