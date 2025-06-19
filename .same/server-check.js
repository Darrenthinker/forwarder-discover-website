#!/usr/bin/env node
/**
 * 服务器状态检测和自动启动脚本
 * 如果服务器未运行，自动启动
 */

const { exec } = require('child_process');

async function checkAndStart() {
  console.log('🔍 检测服务器状态...');

  // 检查3000端口是否有服务运行
  exec('curl -s -o /dev/null -w "%{http_code}" http://localhost:3000', (error, stdout) => {
    if (stdout === '200') {
      console.log('✅ 服务器已运行在 http://localhost:3000');
      console.log('🎯 可以直接访问应用！');
    } else {
      console.log('❌ 服务器未运行，正在启动...');

      // 启动服务器
      const { spawn } = require('child_process');
      const server = spawn('node', ['autostart.js'], {
        stdio: 'inherit',
        detached: true
      });

      server.unref(); // 让脚本可以退出
      console.log('🚀 启动命令已执行，请稍候...');
    }
  });
}

checkAndStart();
