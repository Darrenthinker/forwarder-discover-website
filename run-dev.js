const { spawn } = require('child_process');

console.log('🚀 启动开发服务器...');

function startServer() {
  const server = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true
  });

  server.on('exit', (code) => {
    if (code !== 0) {
      console.log('服务器意外退出，重新启动...');
      startServer();
    }
  });

  server.on('error', (error) => {
    console.log('启动错误，重新启动...');
    startServer();
  });
}

startServer(); 