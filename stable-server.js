#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class StableServer {
  constructor() {
    this.process = null;
    this.restartCount = 0;
    this.maxRestarts = 5;
    this.isShuttingDown = false;
    this.startTime = Date.now();
  }

  log(message) {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] ${message}`);
  }

  async cleanupAndRestart() {
    this.log('🧹 清理环境...');
    
    try {
      // 清理进程
      if (process.platform === 'win32') {
        try {
          const { execSync } = require('child_process');
          execSync('taskkill /F /IM node.exe', { stdio: 'ignore' });
        } catch (e) {
          // 忽略错误，可能没有进程需要清理
        }
      }
      
      // 等待进程清理
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 清理缓存
      const cacheDir = path.join(process.cwd(), '.next');
      if (fs.existsSync(cacheDir)) {
        fs.rmSync(cacheDir, { recursive: true, force: true });
        this.log('✅ 已清理 .next 缓存');
      }
      
    } catch (error) {
      this.log(`⚠️ 清理过程中出现错误: ${error.message}`);
    }
  }

  startServer() {
    return new Promise((resolve, reject) => {
      if (this.isShuttingDown) {
        resolve();
        return;
      }

      this.log(`🚀 启动开发服务器 (重启次数: ${this.restartCount})`);

      const serverProcess = spawn('npm', ['run', 'dev'], {
        stdio: ['inherit', 'pipe', 'pipe'],
        shell: true,
        cwd: process.cwd()
      });

      this.process = serverProcess;

      // 处理服务器输出
      serverProcess.stdout.on('data', (data) => {
        const output = data.toString();
        console.log(output);
        
        // 检测服务器就绪状态
        if (output.includes('Ready in') || output.includes('Local:')) {
          this.log('✅ 服务器启动成功');
          this.restartCount = 0; // 重置重启计数
          resolve();
        }
      });

      serverProcess.stderr.on('data', (data) => {
        const error = data.toString();
        console.error(error);
        
        // 检测常见错误
        if (error.includes('EADDRINUSE') || error.includes('port') || error.includes('already in use')) {
          this.log('❌ 端口被占用，准备清理并重启...');
          this.handleRestart();
        }
      });

      // 处理进程退出
      serverProcess.on('exit', (code, signal) => {
        if (this.isShuttingDown) return;
        
        this.log(`⚠️ 服务器进程退出 (代码: ${code}, 信号: ${signal})`);
        
        if (code !== 0 && this.restartCount < this.maxRestarts) {
          this.handleRestart();
        } else if (this.restartCount >= this.maxRestarts) {
          this.log('❌ 达到最大重启次数，停止重启');
        }
      });

      // 处理进程错误
      serverProcess.on('error', (error) => {
        this.log(`❌ 服务器启动错误: ${error.message}`);
        reject(error);
      });

      // 超时处理
      setTimeout(() => {
        if (!this.isShuttingDown) {
          this.log('⏰ 启动超时，继续等待...');
          resolve(); // 不要reject，让服务器继续运行
        }
      }, 30000);
    });
  }

  async handleRestart() {
    if (this.isShuttingDown) return;
    
    this.restartCount++;
    
    if (this.restartCount > this.maxRestarts) {
      this.log('❌ 超过最大重启次数，停止服务');
      return;
    }

    this.log(`🔄 准备重启服务器 (${this.restartCount}/${this.maxRestarts})`);
    
    // 清理当前进程
    if (this.process) {
      this.process.kill('SIGTERM');
      this.process = null;
    }

    // 清理环境并重启
    await this.cleanupAndRestart();
    
    // 延迟重启
    setTimeout(async () => {
      try {
        await this.startServer();
      } catch (error) {
        this.log(`重启失败: ${error.message}`);
      }
    }, 3000);
  }

  async start() {
    this.log('🌟 启动稳定服务器管理器');
    
    // 初始清理
    await this.cleanupAndRestart();
    
    // 启动服务器
    try {
      await this.startServer();
      
      // 设置定期健康检查
      setInterval(() => {
        this.healthCheck();
      }, 60000); // 每分钟检查一次

      // 处理进程退出信号
      process.on('SIGINT', () => this.shutdown());
      process.on('SIGTERM', () => this.shutdown());
      
      this.log('🎉 服务器管理器启动完成');
      
    } catch (error) {
      this.log(`启动失败: ${error.message}`);
      throw error;
    }
  }

  healthCheck() {
    const http = require('http');
    
    const req = http.get('http://localhost:3000', (res) => {
      if (res.statusCode === 200) {
        // 服务器正常
      } else {
        this.log('⚠️ 健康检查失败，准备重启');
        this.handleRestart();
      }
    });

    req.on('error', (error) => {
      this.log('⚠️ 健康检查连接失败，准备重启');
      this.handleRestart();
    });

    req.setTimeout(5000, () => {
      req.destroy();
      this.log('⚠️ 健康检查超时，准备重启');
      this.handleRestart();
    });
  }

  shutdown() {
    this.log('🛑 正在关闭服务器...');
    this.isShuttingDown = true;
    
    if (this.process) {
      this.process.kill('SIGTERM');
    }
    
    process.exit(0);
  }
}

// 启动稳定服务器
const server = new StableServer();
server.start().catch(error => {
  console.error('启动失败:', error);
  process.exit(1);
});

// 导出以供其他模块使用
module.exports = StableServer;
