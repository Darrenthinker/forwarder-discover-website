const { spawn, exec } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

class DevServerManager {
  constructor() {
    this.serverProcess = null;
    this.isRunning = false;
    this.restartCount = 0;
    this.maxRestarts = 999; // 几乎无限重启
    this.checkInterval = 5000; // 每5秒检查一次
    this.startTime = Date.now();
    this.logFile = path.join(__dirname, 'server.log');
    
    // 绑定方法
    this.startServer = this.startServer.bind(this);
    this.checkHealth = this.checkHealth.bind(this);
    this.restart = this.restart.bind(this);
    
    // 初始化日志
    this.initLog();
  }

  initLog() {
    const logHeader = `\n=== 开发服务器启动 ${new Date().toLocaleString()} ===\n`;
    fs.writeFileSync(this.logFile, logHeader);
  }

  log(message) {
    const timestamp = new Date().toLocaleString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (e) {
      // 忽略日志写入错误
    }
  }

  async killExistingProcesses() {
    return new Promise((resolve) => {
      // 强制杀死所有Node进程
      exec('taskkill /F /IM node.exe', (error) => {
        if (error) {
          this.log('🧹 没有现有Node进程需要清理');
        } else {
          this.log('🧹 已清理现有Node进程');
        }
        
        // 清理特定端口
        exec('netstat -ano | findstr :3000', (error, stdout) => {
          if (stdout) {
            const lines = stdout.split('\n');
            lines.forEach(line => {
              const parts = line.trim().split(/\s+/);
              if (parts.length > 4) {
                const pid = parts[parts.length - 1];
                if (pid && !isNaN(pid)) {
                  exec(`taskkill /F /PID ${pid}`, () => {
                    this.log(`🧹 已清理端口3000的进程 PID: ${pid}`);
                  });
                }
              }
            });
          }
          resolve();
        });
      });
    });
  }

  async cleanCache() {
    const cacheDir = path.join(__dirname, '.next');
    try {
      if (fs.existsSync(cacheDir)) {
        // 使用系统命令删除，更可靠
        await new Promise((resolve) => {
          exec(`rd /s /q "${cacheDir}"`, (error) => {
            if (!error) {
              this.log('🧹 已清理.next缓存');
            }
            resolve();
          });
        });
      }
    } catch (e) {
      this.log(`⚠️ 清理缓存时出错: ${e.message}`);
    }
  }

  startServer() {
    if (this.serverProcess) {
      this.serverProcess.kill('SIGKILL');
      this.serverProcess = null;
    }

    this.log(`🚀 启动开发服务器 (第${this.restartCount + 1}次)`);

    this.serverProcess = spawn('npm', ['run', 'dev'], {
      stdio: ['ignore', 'pipe', 'pipe'],
      shell: true,
      env: { ...process.env, FORCE_COLOR: '1' }
    });

    let serverReady = false;

    // 处理标准输出
    this.serverProcess.stdout.on('data', (data) => {
      const output = data.toString();
      console.log(output);
      
      // 检测服务器启动成功
      if ((output.includes('Ready in') || output.includes('Local:')) && !serverReady) {
        serverReady = true;
        this.isRunning = true;
        this.restartCount = 0;
        this.log('✅ 服务器启动成功！');
        
        // 启动健康检查
        setTimeout(() => {
          this.startHealthCheck();
        }, 3000);
      }
    });

    // 处理错误输出
    this.serverProcess.stderr.on('data', (data) => {
      const error = data.toString();
      console.error(error);
      
      // 检测端口占用错误
      if (error.includes('EADDRINUSE') || error.includes('address already in use')) {
        this.log('❌ 端口被占用，准备重启...');
        setTimeout(() => this.restart(), 2000);
      }
    });

    // 处理进程退出
    this.serverProcess.on('exit', (code, signal) => {
      this.isRunning = false;
      this.log(`⚠️ 服务器进程退出 (代码: ${code}, 信号: ${signal})`);
      
      if (code !== 0) {
        this.log('🔄 准备自动重启...');
        setTimeout(() => this.restart(), 3000);
      }
    });

    // 处理进程错误
    this.serverProcess.on('error', (error) => {
      this.isRunning = false;
      this.log(`❌ 服务器启动错误: ${error.message}`);
      setTimeout(() => this.restart(), 3000);
    });

    // 启动超时检测
    setTimeout(() => {
      if (!serverReady) {
        this.log('⏰ 启动超时，重新启动...');
        this.restart();
      }
    }, 30000);
  }

  startHealthCheck() {
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
    }

    this.healthCheckInterval = setInterval(() => {
      this.checkHealth();
    }, this.checkInterval);
  }

  checkHealth() {
    const req = http.get('http://localhost:3000', (res) => {
      if (res.statusCode === 200) {
        // 服务器正常
        if (!this.isRunning) {
          this.isRunning = true;
          this.log('✅ 服务器恢复正常');
        }
      } else {
        this.log(`⚠️ 服务器响应异常: ${res.statusCode}`);
        this.restart();
      }
    });

    req.on('error', (error) => {
      if (this.isRunning) {
        this.log('❌ 健康检查失败，服务器不可达');
        this.isRunning = false;
        this.restart();
      }
    });

    req.setTimeout(3000, () => {
      req.destroy();
      if (this.isRunning) {
        this.log('⏰ 健康检查超时');
        this.restart();
      }
    });
  }

  async restart() {
    if (this.restarting) {
      return; // 防止重复重启
    }
    
    this.restarting = true;
    this.restartCount++;
    
    this.log(`🔄 重启服务器 (${this.restartCount}/${this.maxRestarts})`);
    
    // 停止健康检查
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
    }
    
    // 清理现有进程
    await this.killExistingProcesses();
    
    // 等待进程完全清理
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // 清理缓存
    await this.cleanCache();
    
    // 重新启动
    this.restarting = false;
    this.startServer();
  }

  async start() {
    this.log('🌟 启动开发服务器管理器');
    
    // 初始清理
    await this.killExistingProcesses();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await this.cleanCache();
    
    // 启动服务器
    this.startServer();
    
    // 处理进程信号
    process.on('SIGINT', () => this.shutdown());
    process.on('SIGTERM', () => this.shutdown());
    process.on('beforeExit', () => this.shutdown());
    
    // 定期清理和优化
    setInterval(() => {
      this.cleanup();
    }, 300000); // 每5分钟清理一次
  }

  cleanup() {
    // 定期清理日志文件
    try {
      const stats = fs.statSync(this.logFile);
      if (stats.size > 10 * 1024 * 1024) { // 超过10MB
        this.initLog();
        this.log('🧹 已清理日志文件');
      }
    } catch (e) {
      // 忽略错误
    }
  }

  shutdown() {
    this.log('🛑 正在关闭服务器管理器...');
    
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
    }
    
    if (this.serverProcess) {
      this.serverProcess.kill('SIGKILL');
    }
    
    this.log('✅ 服务器管理器已关闭');
    process.exit(0);
  }
}

// 启动服务器管理器
const manager = new DevServerManager();
manager.start();

// 导出供其他模块使用
module.exports = DevServerManager; 