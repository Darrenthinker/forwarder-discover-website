const { spawn, exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// 项目配置
const projects = [
  {
    name: '项目1 - 智能货运报价系统',
    folder: 'freight-quote-system',
    port: 3000,
    startCommand: 'npm run dev',
    type: 'nextjs'
  },
  {
    name: '项目2 - 税金代付专家', 
    folder: 'payduty-deploy',
    port: 3001,
    startCommand: 'python -m http.server 3001',
    type: 'static'
  },
  {
    name: '项目3 - 新项目系统',
    folder: 'project3-new-system', 
    port: 3002,
    startCommand: 'npm run dev',
    type: 'nextjs'
  }
];

class ProjectManager {
  constructor() {
    this.runningProjects = new Map();
  }

  // 检查项目文件夹是否存在
  checkProjectExists(project) {
    const projectPath = path.join('..', project.folder);
    return fs.existsSync(projectPath);
  }

  // 启动单个项目
  async startProject(project) {
    if (!this.checkProjectExists(project)) {
      console.log(`❌ 项目文件夹不存在: ${project.folder}`);
      return false;
    }

    console.log(`🚀 启动 ${project.name}...`);
    
    const projectPath = path.join('..', project.folder);
    const [command, ...args] = project.startCommand.split(' ');
    
    try {
      const child = spawn(command, args, {
        cwd: projectPath,
        stdio: ['ignore', 'pipe', 'pipe'],
        shell: true
      });

      child.stdout.on('data', (data) => {
        console.log(`[${project.name}] ${data.toString().trim()}`);
      });

      child.stderr.on('data', (data) => {
        console.error(`[${project.name}] 错误: ${data.toString().trim()}`);
      });

      child.on('close', (code) => {
        console.log(`[${project.name}] 进程退出，代码: ${code}`);
        this.runningProjects.delete(project.name);
      });

      this.runningProjects.set(project.name, {
        process: child,
        project: project,
        startTime: new Date()
      });

      console.log(`✅ ${project.name} 启动成功 (PID: ${child.pid})`);
      console.log(`🌐 访问地址: http://localhost:${project.port}`);
      
      return true;
    } catch (error) {
      console.error(`❌ 启动 ${project.name} 失败:`, error.message);
      return false;
    }
  }

  // 停止单个项目
  stopProject(projectName) {
    const running = this.runningProjects.get(projectName);
    if (!running) {
      console.log(`⚠️  项目 ${projectName} 未在运行`);
      return false;
    }

    console.log(`🛑 停止 ${projectName}...`);
    running.process.kill();
    this.runningProjects.delete(projectName);
    console.log(`✅ ${projectName} 已停止`);
    return true;
  }

  // 启动所有项目
  async startAll() {
    console.log('🚀 启动所有项目...\n');
    
    for (const project of projects) {
      await this.startProject(project);
      // 等待2秒再启动下一个项目，避免端口冲突
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    console.log('\n📊 项目启动完成！');
    this.showStatus();
  }

  // 停止所有项目
  stopAll() {
    console.log('🛑 停止所有项目...\n');
    
    for (const [projectName] of this.runningProjects) {
      this.stopProject(projectName);
    }
    
    console.log('✅ 所有项目已停止');
  }

  // 显示项目状态
  showStatus() {
    console.log('\n📊 项目状态:');
    console.log('─'.repeat(60));
    
    projects.forEach(project => {
      const running = this.runningProjects.get(project.name);
      if (running) {
        const uptime = Math.floor((Date.now() - running.startTime) / 1000);
        console.log(`✅ ${project.name}`);
        console.log(`   端口: ${project.port} | 运行时间: ${uptime}秒 | PID: ${running.process.pid}`);
        console.log(`   访问: http://localhost:${project.port}`);
      } else {
        console.log(`❌ ${project.name} - 未运行`);
      }
      console.log('');
    });
  }

  // 重启项目
  async restartProject(projectName) {
    console.log(`🔄 重启 ${projectName}...`);
    
    this.stopProject(projectName);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const project = projects.find(p => p.name === projectName);
    if (project) {
      await this.startProject(project);
    } else {
      console.log(`❌ 找不到项目: ${projectName}`);
    }
  }

  // 检查端口占用
  async checkPorts() {
    console.log('🔍 检查端口占用情况...\n');
    
    for (const project of projects) {
      await this.checkSinglePort(project.port, project.name);
    }
  }

  checkSinglePort(port, projectName) {
    return new Promise((resolve) => {
      exec(`netstat -ano | findstr :${port}`, (error, stdout) => {
        if (error || !stdout.trim()) {
          console.log(`✅ 端口 ${port} 可用 - ${projectName}`);
        } else {
          console.log(`❌ 端口 ${port} 被占用 - ${projectName}`);
          const lines = stdout.trim().split('\n');
          lines.forEach(line => {
            const parts = line.trim().split(/\s+/);
            if (parts.length >= 5) {
              console.log(`   进程 PID: ${parts[4]}`);
            }
          });
        }
        resolve();
      });
    });
  }
}

// 命令行参数处理
const args = process.argv.slice(2);
const command = args[0];

const manager = new ProjectManager();

switch (command) {
  case 'start-all':
    manager.startAll();
    break;
    
  case 'stop-all':
    manager.stopAll();
    break;
    
  case 'status':
    manager.showStatus();
    break;
    
  case 'check-ports':
    manager.checkPorts();
    break;
    
  case 'start':
    const projectToStart = args[1];
    if (projectToStart) {
      const project = projects.find(p => p.name.includes(projectToStart) || p.folder === projectToStart);
      if (project) {
        manager.startProject(project);
      } else {
        console.log(`❌ 找不到项目: ${projectToStart}`);
      }
    } else {
      console.log('请指定要启动的项目名称或文件夹名');
    }
    break;
    
  case 'stop':
    const projectToStop = args[1];
    if (projectToStop) {
      const project = projects.find(p => p.name.includes(projectToStop) || p.folder === projectToStop);
      if (project) {
        manager.stopProject(project.name);
      } else {
        console.log(`❌ 找不到项目: ${projectToStop}`);
      }
    } else {
      console.log('请指定要停止的项目名称或文件夹名');
    }
    break;
    
  default:
    console.log('🛠️  项目管理工具');
    console.log('');
    console.log('使用方法:');
    console.log('  node project-manager.js start-all     - 启动所有项目');
    console.log('  node project-manager.js stop-all      - 停止所有项目');
    console.log('  node project-manager.js status        - 查看项目状态');
    console.log('  node project-manager.js check-ports   - 检查端口占用');
    console.log('  node project-manager.js start [项目]   - 启动指定项目');
    console.log('  node project-manager.js stop [项目]    - 停止指定项目');
    console.log('');
    console.log('可用项目:');
    projects.forEach(project => {
      console.log(`  - ${project.name} (${project.folder})`);
    });
}

// 优雅退出处理
process.on('SIGINT', () => {
  console.log('\n🛑 收到退出信号，正在停止所有项目...');
  manager.stopAll();
  process.exit(0);
}); 