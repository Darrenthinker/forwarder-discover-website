#!/usr/bin/env node
/**
 * 国际货运智能报价系统 - 智能自动启动脚本
 * 检测环境并自动启动开发服务器
 */

const { spawn, exec } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 国际货运智能报价系统 - 智能自动启动');
console.log('📅 版本: v161');
console.log('🔍 检测启动环境...');

// 检查是否已有服务器运行
function checkServerRunning() {
  return new Promise((resolve) => {
    exec('curl -s -o /dev/null -w "%{http_code}" http://localhost:3000', (error, stdout) => {
      resolve(stdout === '200');
    });
  });
}

// 主启动函数
async function smartStart() {
  try {
    // 检查是否已有服务器运行
    const isRunning = await checkServerRunning();
    if (isRunning) {
      console.log('✅ 检测到服务器已运行在 http://localhost:3000');
      console.log('🎯 无需重复启动，直接访问即可！');
      return;
    }

    console.log('🌟 启动开发服务器...');
    console.log('📍 访问地址: http://localhost:3000');
    console.log('⏰ 编译需要3-5秒，请稍候...');

    // 使用最适合的启动命令
    const command = fs.existsSync('./node_modules/.bin/next') ?
      ['./node_modules/.bin/next', ['dev', '-H', '0.0.0.0', '-p', '3000']] :
      ['bun', ['run', 'dev']];

    const server = spawn(command[0], command[1], {
      stdio: 'inherit',
      shell: true,
      cwd: process.cwd()
    });

    // 监听进程事件
    server.on('spawn', () => {
      console.log('🎉 服务器启动成功！');
    });

    server.on('error', (err) => {
      console.error('❌ 启动失败:', err.message);
      console.log('🔄 尝试备用启动方式...');

      // 备用启动方式
      const fallback = spawn('bun', ['run', 'dev'], {
        stdio: 'inherit',
        shell: true
      });
    });

    // 优雅退出处理
    process.on('SIGINT', () => {
      console.log('\n👋 正在关闭服务器...');
      server.kill('SIGTERM');
      process.exit(0);
    });

  } catch (error) {
    console.error('❌ 启动过程出错:', error);
    process.exit(1);
  }
}

// 立即执行
smartStart();
