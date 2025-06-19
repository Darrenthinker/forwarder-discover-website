#!/usr/bin/env node

console.log('🧪 测试国家代码功能\n');

// 手动导入关键函数来测试
const isCountryCode = (input) => {
  return input.length === 2 && /^[A-Z]{2}$/i.test(input);
};

const countryMapping = {
  'CN': '中国',
  'US': '美国',
  'JP': '日本',
  'GB': '英国',
  'DE': '德国',
  'FR': '法国',
  'AU': '澳大利亚',
  'CA': '加拿大',
  'HK': '香港',
  'MO': '澳门',
  'TW': '中国台湾'
};

const getCountryByCode = (code) => {
  return countryMapping[code.toUpperCase()];
};

// 测试1: 国家代码识别
console.log('📍 测试1: 国家代码识别功能');
const testCodes = ['CN', 'US', 'JP', 'GB', 'DE', 'FR', 'au', 'ca', 'HK', 'ABC', '12'];
testCodes.forEach(code => {
  const isValid = isCountryCode(code);
  const country = getCountryByCode(code);
  console.log(`${code}: ${isValid ? '✅' : '❌'} 有效代码 ${country ? `→ ${country}` : ''}`);
});

// 测试2: 格式化显示
console.log('\n📋 测试2: 国家显示格式 (国家名 + 代码)');
const countries = [
  { name: '中国', code: 'CN' },
  { name: '美国', code: 'US' },
  { name: '日本', code: 'JP' },
  { name: '英国', code: 'GB' },
  { name: '德国', code: 'DE' },
  { name: '香港', code: 'HK' },
  { name: '澳门', code: 'MO' }
];

countries.forEach(country => {
  const formatted = `${country.name} ${country.code}`;
  console.log(`${country.name} → ${formatted}`);
});

// 测试3: 用户输入示例
console.log('\n🔍 测试3: 用户输入国家代码的场景');
const userInputs = ['CN', 'cn', 'US', 'jp', 'GB', 'de', 'HK', 'tw'];
userInputs.forEach(input => {
  const normalized = input.toUpperCase();
  const isValid = isCountryCode(input);
  const country = getCountryByCode(input);

  if (isValid && country) {
    console.log(`✅ 用户输入 "${input}" → 识别为 "${country} ${normalized}"`);
  } else if (isValid) {
    console.log(`⚠️ 用户输入 "${input}" → 有效格式但未找到对应国家`);
  } else {
    console.log(`❌ 用户输入 "${input}" → 无效的国家代码格式`);
  }
});

console.log('\n✅ 国家代码功能测试完成！');
console.log('\n💡 预期改进效果:');
console.log('- 🎯 用户可以直接输入 "CN" 搜索中国所有机场');
console.log('- 📋 机场列表显示 "中国 CN" 而不是只显示 "中国"');
console.log('- 🔍 支持大小写输入 (cn, CN, Us, JP 都能识别)');
console.log('- 🌏 包含特殊地区 (香港 HK, 澳门 MO, 台湾 TW)');
console.log('- ⚡ 提升专业性和用户体验');
