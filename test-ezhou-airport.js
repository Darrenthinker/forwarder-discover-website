// 测试鄂州花湖机场(EHU)数据完善验证
const { searchAirports } = require('./src/lib/airport-search.ts');

console.log('🧪 测试鄂州花湖机场(EHU)数据完善验证');
console.log('=====================================');

// 测试1: 搜索"鄂州"
console.log('\n1️⃣ 搜索关键词: "鄂州"');
const ezhou1 = searchAirports('鄂州', '中国', 10);
console.log(`找到 ${ezhou1.length} 个结果:`);
ezhou1.forEach((airport, index) => {
  console.log(`  ${index + 1}. ${airport.code} - ${airport.chinese} (${airport.english})`);
  console.log(`     国家: ${airport.country}, 优先级: ${airport.priority}`);
});

// 测试2: 搜索"花湖"
console.log('\n2️⃣ 搜索关键词: "花湖"');
const ezhou2 = searchAirports('花湖', '中国', 10);
console.log(`找到 ${ezhou2.length} 个结果:`);
ezhou2.forEach((airport, index) => {
  console.log(`  ${index + 1}. ${airport.code} - ${airport.chinese} (${airport.english})`);
  console.log(`     国家: ${airport.country}, 优先级: ${airport.priority}`);
});

// 测试3: 搜索"EHU"
console.log('\n3️⃣ 搜索机场代码: "EHU"');
const ezhou3 = searchAirports('EHU', '中国', 10);
console.log(`找到 ${ezhou3.length} 个结果:`);
ezhou3.forEach((airport, index) => {
  console.log(`  ${index + 1}. ${airport.code} - ${airport.chinese} (${airport.english})`);
  console.log(`     国家: ${airport.country}, 优先级: ${airport.priority}`);
});

// 测试4: 搜索"中国"看湖北地区机场排序
console.log('\n4️⃣ 搜索"中国"看湖北地区机场排序:');
const china = searchAirports('中国', '', 50);
const hubeiAirports = china.filter(airport => 
  airport.chinese.includes('武汉') || 
  airport.chinese.includes('鄂州') ||
  airport.code === 'WUH' || 
  airport.code === 'EHU'
);
console.log(`湖北地区机场 (${hubeiAirports.length}个):`);
hubeiAirports.forEach((airport, index) => {
  console.log(`  ${index + 1}. ${airport.code} - ${airport.chinese} (${airport.english})`);
  console.log(`     类型: ${airport.type}, 优先级: ${airport.priority}`);
});

// 测试5: 验证鄂州机场的详细信息
console.log('\n5️⃣ 验证鄂州机场详细信息:');
const ehuDetails = china.find(airport => airport.code === 'EHU');
if (ehuDetails) {
  console.log('✅ EHU机场信息:');
  console.log(`   代码: ${ehuDetails.code}`);
  console.log(`   中文名: ${ehuDetails.chinese}`);
  console.log(`   英文名: ${ehuDetails.english}`);
  console.log(`   国家: ${ehuDetails.country}`);
  console.log(`   类型: ${ehuDetails.type}`);
  console.log(`   海关: ${ehuDetails.customs}`);
  console.log(`   优先级: ${ehuDetails.priority}`);
  console.log(`   大洲: ${ehuDetails.continent}`);
} else {
  console.log('❌ 未找到EHU机场信息');
}

console.log('\n🎯 测试完成！鄂州花湖机场应该作为重要的货运枢纽机场出现在搜索结果中。'); 