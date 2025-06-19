#!/usr/bin/env node

const http = require('http');
const fs = require('fs');

class HealthChecker {
  constructor() {
    this.url = 'http://localhost:3000';
    this.checkInterval = 30000; // 30秒检查一次
    this.logFile = 'health-check.log';
    this.isRunning = false;
  }

  async checkHealth() {
    return new Promise((resolve) => {
      const req = http.get(this.url, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          const isHealthy = res.statusCode === 200;
          resolve({
            healthy: isHealthy,
            statusCode: res.statusCode,
            responseTime: Date.now() - startTime,
            timestamp: new Date().toISOString()
          });
        });
      });

      const startTime = Date.now();

      req.on('error', (error) => {
        resolve({
          healthy: false,
          error: error.message,
          timestamp: new Date().toISOString()
        });
      });

      req.setTimeout(5000, () => {
        req.destroy();
        resolve({
          healthy: false,
          error: 'Request timeout',
          timestamp: new Date().toISOString()
        });
      });
    });
  }

  log(message) {
    const logMessage = `[${new Date().toISOString()}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async start() {
    if (this.isRunning) return;
    this.isRunning = true;

    this.log('🏥 健康检查器启动');

    const check = async () => {
      if (!this.isRunning) return;

      try {
        const result = await this.checkHealth();

        if (result.healthy) {
          this.log(`✅ 服务器健康 (${result.statusCode}) - 响应时间: ${result.responseTime}ms`);
        } else {
          this.log(`❌ 服务器异常: ${result.error || result.statusCode}`);
        }
      } catch (error) {
        this.log(`💥 健康检查失败: ${error.message}`);
      }

      setTimeout(check, this.checkInterval);
    };

    check();
  }

  stop() {
    this.isRunning = false;
    this.log('🛑 健康检查器停止');
  }
}

// 如果直接运行此文件
if (require.main === module) {
  const checker = new HealthChecker();
  checker.start();

  // 处理退出信号
  process.on('SIGINT', () => {
    checker.stop();
    process.exit(0);
  });
}

module.exports = HealthChecker;
