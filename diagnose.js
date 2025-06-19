#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const http = require('http');

console.log('🔍 开始系统诊断...\n');

// 检查端口占用
function checkPort(port) {
  try {
    const result = execSync(`netstat -tlnp 2>/dev/null | grep :${port} || lsof -ti:${port} 2>/dev/null || echo "端口${port}空闲"`).toString();
    console.log(`🔌 端口${port}状态: ${result.includes('空闲') ? '✅ 空闲' : '⚠️ 被占用'}`);
    if (!result.includes('空闲')) {
      console.log(`   详情: ${result.trim()}`);
    }
  } catch (error) {
    console.log(`🔌 端口${port}状态: ❓ 无法检查`);
  }
}

// 检查进程
function checkProcesses() {
  try {
    const nextProcesses = execSync(`ps aux | grep -v grep | grep "next dev" || echo "无Next.js进程"`).toString();
    const nodeProcesses = execSync(`ps aux | grep -v grep | grep "node.*stable-server" || echo "无稳定服务器进程"`).toString();

    console.log(`🖥️  Next.js进程: ${nextProcesses.includes('无') ? '❌ 未运行' : '✅ 运行中'}`);
    console.log(`🔄 稳定服务器进程: ${nodeProcesses.includes('无') ? '❌ 未运行' : '✅ 运行中'}`);
  } catch (error) {
    console.log('🖥️  进程检查: ❓ 无法检查');
  }
}

// 检查文件
function checkFiles() {
  const files = [
    'package.json',
    'next.config.js',
    'stable-server.js',
    'start-server.js',
    '.same/config.json'
  ];

  console.log('📁 文件检查:');
  files.forEach(file => {
    const exists = fs.existsSync(file);
    console.log(`   ${file}: ${exists ? '✅' : '❌'}`);
  });
}

// 检查服务器响应
async function checkServerResponse() {
  return new Promise((resolve) => {
    console.log('🌐 检查服务器响应...');

    const req = http.get('http://localhost:3000', (res) => {
      console.log(`   状态码: ${res.statusCode === 200 ? '✅' : '❌'} ${res.statusCode}`);
      resolve(true);
    });

    req.on('error', (error) => {
      console.log(`   服务器响应: ❌ 无响应 (${error.message})`);
      resolve(false);
    });

    req.setTimeout(5000, () => {
      console.log('   服务器响应: ❌ 超时');
      req.destroy();
      resolve(false);
    });
  });
}

// 主诊断函数
async function diagnose() {
  console.log('='.repeat(50));
  console.log('🏥 国际货运智能报价系统 - 诊断报告');
  console.log('='.repeat(50));

  checkPort(3000);
  console.log();

  checkProcesses();
  console.log();

  checkFiles();
  console.log();

  await checkServerResponse();
  console.log();

  // 提供建议
  console.log('💡 建议操作:');
  console.log('   1. 如果服务器未运行: node start-server.js');
  console.log('   2. 如果端口被占用: pkill -f "next dev"');
  console.log('   3. 如果需要重启: node stable-server.js');
  console.log('   4. 健康检查: node health-check.js');

  console.log('\n🔍 诊断完成!');
}

// 运行诊断
diagnose().catch(console.error);
