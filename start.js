#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 国际货运智能报价系统 - 自动启动');
console.log('📦 检查项目配置...');

// 检查package.json
if (!fs.existsSync('package.json')) {
  console.error('❌ 错误: 未找到package.json文件');
  process.exit(1);
}

// 检查node_modules
if (!fs.existsSync('node_modules')) {
  console.log('📥 安装依赖...');
  const install = spawn('bun', ['install'], {
    stdio: 'inherit',
    shell: true
  });

  install.on('close', (code) => {
    if (code === 0) {
      startDevServer();
    } else {
      console.error('❌ 依赖安装失败');
      process.exit(1);
    }
  });
} else {
  startDevServer();
}

function startDevServer() {
  console.log('🌟 启动开发服务器...');
  console.log('📍 访问地址: http://localhost:3000');
  console.log('⏰ 正在编译，请稍候...');

  const dev = spawn('bun', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true
  });

  dev.on('close', (code) => {
    console.log(`开发服务器退出，代码: ${code}`);
  });

  dev.on('error', (err) => {
    console.error('❌ 启动失败:', err);
  });
}
