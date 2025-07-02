const net = require('net');
const { exec } = require('child_process');

// 项目端口配置
const projects = [
  { name: '项目1 - 智能货运报价系统', port: 3000, folder: 'freight-quote-system' },
  { name: '项目2 - 税金代付专家', port: 3001, folder: 'payduty-deploy' },
  { name: '项目3 - 新项目系统', port: 3002, folder: 'project3-new-system' },
  { name: '预留端口4', port: 3003, folder: 'project4-reserved' },
  { name: '预留端口5', port: 3004, folder: 'project5-reserved' }
];

console.log('🔍 端口检查工具启动...\n');

// 检查端口是否被占用
function checkPort(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    
    server.listen(port, (err) => {
      if (err) {
        resolve({ port, available: false, error: err.message });
      } else {
        server.close();
        resolve({ port, available: true });
      }
    });
    
    server.on('error', (err) => {
      resolve({ port, available: false, error: err.message });
    });
  });
}

// 获取占用端口的进程信息
function getPortProcess(port) {
  return new Promise((resolve) => {
    exec(`netstat -ano | findstr :${port}`, (error, stdout) => {
      if (error) {
        resolve(null);
        return;
      }
      
      const lines = stdout.trim().split('\n');
      const processes = [];
      
      lines.forEach(line => {
        const parts = line.trim().split(/\s+/);
        if (parts.length >= 5 && parts[1].includes(`:${port}`)) {
          const pid = parts[4];
          processes.push(pid);
        }
      });
      
      resolve(processes[0] || null);
    });
  });
}

// 获取进程名称
function getProcessName(pid) {
  return new Promise((resolve) => {
    exec(`tasklist /FI "PID eq ${pid}" /FO CSV /NH`, (error, stdout) => {
      if (error) {
        resolve('未知进程');
        return;
      }
      
      const lines = stdout.trim().split('\n');
      if (lines.length > 0) {
        const parts = lines[0].split(',');
        const processName = parts[0].replace(/"/g, '');
        resolve(processName);
      } else {
        resolve('未知进程');
      }
    });
  });
}

// 主检查函数
async function checkAllPorts() {
  console.log('📊 端口占用情况:\n');
  
  for (const project of projects) {
    const result = await checkPort(project.port);
    
    if (result.available) {
      console.log(`✅ 端口 ${project.port} 可用 - ${project.name}`);
    } else {
      console.log(`❌ 端口 ${project.port} 被占用 - ${project.name}`);
      
      // 获取占用进程信息
      const pid = await getPortProcess(project.port);
      if (pid) {
        const processName = await getProcessName(pid);
        console.log(`   占用进程: ${processName} (PID: ${pid})`);
        console.log(`   终止命令: taskkill /PID ${pid} /F`);
      }
    }
  }
  
  console.log('\n🔧 使用建议:');
  console.log('1. 如果端口被占用，使用 taskkill /PID [进程ID] /F 终止进程');
  console.log('2. 确保每个项目使用不同的端口');
  console.log('3. 建议按顺序启动项目: 3000 -> 3001 -> 3002');
  
  console.log('\n📋 项目启动命令:');
  projects.forEach(project => {
    if (project.folder !== 'project4-reserved' && project.folder !== 'project5-reserved') {
      console.log(`${project.name}:`);
      console.log(`  cd ${project.folder} && npm run dev`);
    }
  });
}

// 执行检查
checkAllPorts().catch(console.error); 