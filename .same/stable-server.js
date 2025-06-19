#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 启动稳定服务器监控...');

// 服务器配置
const SERVER_CONFIG = {
  command: 'bunx',
  args: ['next', 'dev', '-H', '0.0.0.0', '-p', '3000'],
  cwd: process.cwd(),
  restartDelay: 2000, // 2秒重启延迟
  maxRestarts: 10,    // 最大重启次数
  timeWindow: 60000   // 1分钟时间窗口
};

let serverProcess = null;
let restartCount = 0;
let lastRestartTime = 0;

// 清理函数
function cleanup() {
  if (serverProcess) {
    console.log('🛑 正在停止服务器...');
    serverProcess.kill('SIGTERM');
    setTimeout(() => {
      if (serverProcess && !serverProcess.killed) {
        serverProcess.kill('SIGKILL');
      }
    }, 5000);
  }
}

// 启动服务器
function startServer() {
  console.log(`📡 启动开发服务器 (重启次数: ${restartCount})`);

  serverProcess = spawn(SERVER_CONFIG.command, SERVER_CONFIG.args, {
    cwd: SERVER_CONFIG.cwd,
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'development' }
  });

  serverProcess.on('close', (code, signal) => {
    console.log(`🔄 服务器进程结束 (代码: ${code}, 信号: ${signal})`);

    if (signal !== 'SIGTERM' && signal !== 'SIGKILL') {
      // 检查重启限制
      const now = Date.now();
      if (now - lastRestartTime > SERVER_CONFIG.timeWindow) {
        restartCount = 0; // 重置计数器
      }

      if (restartCount < SERVER_CONFIG.maxRestarts) {
        restartCount++;
        lastRestartTime = now;

        console.log(`⏳ ${SERVER_CONFIG.restartDelay/1000}秒后重启服务器...`);
        setTimeout(startServer, SERVER_CONFIG.restartDelay);
      } else {
        console.error('❌ 服务器重启次数过多，停止自动重启');
        process.exit(1);
      }
    }
  });

  serverProcess.on('error', (err) => {
    console.error('❌ 服务器启动失败:', err.message);
  });
}

// 信号处理
process.on('SIGINT', () => {
  console.log('\n🛑 接收到停止信号...');
  cleanup();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 接收到终止信号...');
  cleanup();
  process.exit(0);
});

// 未捕获异常处理
process.on('uncaughtException', (err) => {
  console.error('❌ 未捕获异常:', err);
  cleanup();
  process.exit(1);
});

// 启动服务器
startServer();

console.log('✅ 稳定服务器监控已启动');
console.log('💡 使用 Ctrl+C 停止服务器');
