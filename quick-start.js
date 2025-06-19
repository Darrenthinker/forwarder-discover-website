#!/usr/bin/env node

console.log('🚀 快速启动 - 智能货运报价系统');

const { spawn } = require('child_process');

// 杀死旧进程
const { exec } = require('child_process');
exec('pkill -f "next dev"', () => {
  console.log('🧹 清理旧进程完成');

  // 启动新进程
  setTimeout(() => {
    console.log('✨ 启动开发服务器...');

    const server = spawn('bun', ['run', 'dev'], {
      stdio: 'inherit',
      shell: true
    });

    server.on('error', (err) => {
      console.error('❌ 启动失败:', err);
    });

    console.log('🌐 访问地址: http://localhost:3000');
  }, 1000);
});
