#!/usr/bin/env node

// 测试中文数字解析功能
const { parseCargoText } = require('./src/lib/cargo-parser.ts');

console.log('🧪 测试中文数字解析功能');
console.log('===============================');

// 测试用例
const testCases = [
  {
    name: '测试用户提供的案例',
    input: '83*63*77CM, 135KG, 一托',
    expected: { pieces: 1, weight: 135, packageType: 'pallets' }
  },
  {
    name: '中文数字+托盘+体积',
    input: '二托, 250KG, 1.5CBM',
    expected: { pieces: 2, weight: 250, volume: 1.5, packageType: 'pallets' }
  },
  {
    name: '中文数字+件数',
    input: '三件, 180KG',
    expected: { pieces: 3, weight: 180, packageType: 'pieces' }
  },
  {
    name: '数字+托盘',
    input: '2托, 300KG',
    expected: { pieces: 2, weight: 300, packageType: 'pallets' }
  },
  {
    name: '清空历史数据测试',
    input: '普货',
    expected: { name: '普货' }
  }
];

// 执行测试
testCases.forEach((testCase, index) => {
  console.log(`\n📋 测试 ${index + 1}: ${testCase.name}`);
  console.log(`📥 输入: "${testCase.input}"`);

  try {
    const result = parseCargoText(testCase.input);
    console.log('📤 解析结果:', {
      name: result.name,
      pieces: result.pieces,
      weight: result.weight,
      volume: result.volume,
      packageType: result.packageType,
      destination: result.destination,
      origin: result.origin
    });

    // 验证期望结果
    let passed = true;
    for (const [key, expectedValue] of Object.entries(testCase.expected)) {
      if (result[key] !== expectedValue) {
        console.log(`❌ ${key}: 期望 ${expectedValue}, 实际 ${result[key]}`);
        passed = false;
      }
    }

    if (passed) {
      console.log('✅ 测试通过');
    } else {
      console.log('❌ 测试失败');
    }

  } catch (error) {
    console.log('💥 解析错误:', error.message);
  }
});

console.log('\n🎯 测试完成');
