const { spawn, exec } = require('child_process');

console.log('🚀 启动永续开发服务器...');

let serverProcess = null;
let restartCount = 0;

function log(message) {
  console.log(`[${new Date().toLocaleString()}] ${message}`);
}

function killExistingProcesses() {
  try {
    exec('taskkill /F /IM node.exe', () => {});
    exec('netstat -ano | findstr :3000', (error, stdout) => {
      if (stdout) {
        const lines = stdout.split('\n');
        lines.forEach(line => {
          const parts = line.trim().split(/\s+/);
          if (parts.length > 4) {
            const pid = parts[parts.length - 1];
            if (pid && !isNaN(pid)) {
              exec(`taskkill /F /PID ${pid}`, () => {});
            }
          }
        });
      }
    });
  } catch (e) {
    // 忽略错误
  }
}

function startServer() {
  restartCount++;
  log(`启动服务器 (第${restartCount}次)`);
  
  // 清理现有进程
  killExistingProcesses();
  
  setTimeout(() => {
    serverProcess = spawn('npm', ['run', 'dev'], {
      stdio: 'inherit',
      shell: true
    });

    serverProcess.on('exit', (code) => {
      log(`服务器退出，代码: ${code}`);
      if (code !== 0) {
        log('3秒后自动重启...');
        setTimeout(startServer, 3000);
      }
    });

    serverProcess.on('error', (error) => {
      log(`服务器错误: ${error.message}`);
      setTimeout(startServer, 3000);
    });
  }, 2000);
}

// 启动服务器
startServer();

// 定期检查服务器状态
setInterval(() => {
  const http = require('http');
  const req = http.get('http://localhost:3000', (res) => {
    // 服务器正常
  });
  
  req.on('error', () => {
    log('健康检查失败，重启服务器...');
    if (serverProcess) {
      serverProcess.kill();
    }
    setTimeout(startServer, 1000);
  });
  
  req.setTimeout(5000, () => {
    req.destroy();
  });
}, 10000); // 每10秒检查一次

// 处理退出
process.on('SIGINT', () => {
  log('正在关闭...');
  if (serverProcess) {
    serverProcess.kill();
  }
  process.exit(0);
}); 