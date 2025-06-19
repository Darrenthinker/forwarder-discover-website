#!/usr/bin/env bun

console.log('🚀 国际货运智能报价系统 - 自动启动');

// 启动开发服务器
import { spawn } from 'child_process';

const startServer = () => {
  console.log('🌟 启动开发服务器...');
  console.log('📍 访问地址: http://localhost:3000');

  const server = spawn('bun', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true
  });

  server.on('error', (err) => {
    console.error('❌ 启动失败:', err);
  });
};

// 立即启动
startServer();
