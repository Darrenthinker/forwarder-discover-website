#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class StableDevServer {
  constructor() {
    this.process = null;
    this.restartCount = 0;
    this.maxRestarts = 10;
    this.restartDelay = 2000;
    this.logFile = path.join(__dirname, 'server.log');
    this.isShuttingDown = false;

    // 创建日志文件
    this.initLog();

    // 处理退出信号
    process.on('SIGINT', () => this.shutdown());
    process.on('SIGTERM', () => this.shutdown());
    process.on('uncaughtException', (error) => {
      this.log(`未捕获的异常: ${error.message}`);
      this.restart();
    });
  }

  initLog() {
    const logHeader = `\n=== 服务器启动日志 ${new Date().toISOString()} ===\n`;
    fs.writeFileSync(this.logFile, logHeader);
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  start() {
    if (this.isShuttingDown) return;

    this.log('🚀 启动开发服务器...');

    // 检查端口是否被占用
    this.checkPort(3000).then(isAvailable => {
      if (!isAvailable) {
        this.log('⚠️ 端口3000已被占用，尝试清理...');
        this.killPort(3000);
        setTimeout(() => this.startServer(), 1000);
      } else {
        this.startServer();
      }
    });
  }

  startServer() {
    const command = process.platform === 'win32' ? 'bun.exe' : 'bun';
    const args = ['run', 'dev'];

    this.process = spawn(command, args, {
      stdio: ['inherit', 'pipe', 'pipe'],
      env: { ...process.env, NODE_ENV: 'development' }
    });

    this.log(`✅ 服务器进程启动 (PID: ${this.process.pid})`);

    // 处理输出
    this.process.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(output);

      // 检查是否成功启动
      if (output.includes('Ready in') || output.includes('✓ Ready')) {
        this.log('🎉 服务器启动成功！');
        this.restartCount = 0; // 重置重启计数
      }

      // 检查编译错误
      if (output.includes('Error:') || output.includes('Failed to compile')) {
        this.log('❌ 编译错误detected');
      }
    });

    this.process.stderr.on('data', (data) => {
      const error = data.toString();
      this.log(`⚠️ 错误输出: ${error}`);
    });

    this.process.on('close', (code) => {
      this.log(`🔄 服务器进程退出 (代码: ${code})`);

      if (!this.isShuttingDown) {
        if (code !== 0 && this.restartCount < this.maxRestarts) {
          this.log(`⏰ ${this.restartDelay/1000}秒后自动重启...`);
          setTimeout(() => this.restart(), this.restartDelay);
        } else if (this.restartCount >= this.maxRestarts) {
          this.log('❌ 达到最大重启次数，服务器停止');
        }
      }
    });

    this.process.on('error', (error) => {
      this.log(`💥 进程错误: ${error.message}`);
      this.restart();
    });
  }

  restart() {
    if (this.isShuttingDown) return;

    this.restartCount++;
    this.log(`🔄 第${this.restartCount}次重启服务器...`);

    if (this.process) {
      this.process.kill('SIGTERM');
      this.process = null;
    }

    setTimeout(() => this.start(), 1000);
  }

  shutdown() {
    this.isShuttingDown = true;
    this.log('🛑 正在关闭服务器...');

    if (this.process) {
      this.process.kill('SIGTERM');
      this.process = null;
    }

    this.log('✅ 服务器已关闭');
    process.exit(0);
  }

  checkPort(port) {
    return new Promise((resolve) => {
      const net = require('net');
      const tester = net.createServer()
        .once('error', () => resolve(false))
        .once('listening', () => {
          tester.once('close', () => resolve(true)).close();
        })
        .listen(port);
    });
  }

  killPort(port) {
    try {
      const command = process.platform === 'win32'
        ? `netstat -ano | findstr :${port}`
        : `lsof -ti:${port}`;

      const { execSync } = require('child_process');
      const result = execSync(command, { encoding: 'utf8' });

      if (result) {
        const killCmd = process.platform === 'win32'
          ? `taskkill /F /PID ${result.split(/\s+/).pop()}`
          : `kill -9 ${result.trim()}`;

        execSync(killCmd);
        this.log(`🧹 清理端口${port}成功`);
      }
    } catch (error) {
      this.log(`清理端口失败: ${error.message}`);
    }
  }
}

// 启动稳定服务器
const server = new StableDevServer();
server.start();

// 导出以供其他模块使用
module.exports = StableDevServer;
