#!/usr/bin/env bun

const { spawn, execSync } = require('child_process');

console.log('🚀 启动Next.js开发服务器...');

// 清理可能存在的进程
try {
  execSync('taskkill /F /IM node.exe', { stdio: 'ignore' });
  console.log('✅ 已清理现有进程');
} catch (e) {
  // 忽略错误
}

// 等待一秒
setTimeout(() => {
  // 启动开发服务器
  const server = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true
  });

  server.on('error', (error) => {
    console.error('❌ 启动失败:', error.message);
    process.exit(1);
  });

  server.on('exit', (code) => {
    if (code !== 0) {
      console.log('⚠️ 服务器意外退出，3秒后重启...');
      setTimeout(() => {
        // 重新启动脚本
        spawn('node', ['auto-start.js'], {
          stdio: 'inherit',
          shell: true,
          detached: true
        });
      }, 3000);
    }
  });

  // 处理退出信号
  process.on('SIGINT', () => {
    console.log('\n🛑 正在关闭服务器...');
    server.kill('SIGTERM');
    process.exit(0);
  });

}, 1000);
