const { spawn } = require('child_process');

console.log('🚀 启动开发服务器...');

const server = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true
});

server.on('error', (error) => {
  console.error('启动失败:', error.message);
});

// 保持进程运行
process.on('SIGINT', () => {
  console.log('\n正在关闭...');
  server.kill();
  process.exit(0);
}); 