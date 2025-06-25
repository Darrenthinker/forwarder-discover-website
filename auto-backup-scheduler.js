const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

class AutoBackupScheduler {
    constructor() {
        this.backupInterval = 30 * 60 * 1000; // 30分钟备份一次
        this.isRunning = false;
        this.lastBackupTime = null;
        this.backupCount = 0;
    }

    log(message) {
        const timestamp = new Date().toLocaleString('zh-CN');
        console.log(`[${timestamp}] ${message}`);
    }

    async executeGitCommand(command) {
        return new Promise((resolve, reject) => {
            exec(command, { cwd: process.cwd() }, (error, stdout, stderr) => {
                if (error) {
                    reject({ error, stderr });
                } else {
                    resolve(stdout);
                }
            });
        });
    }

    async checkForChanges() {
        try {
            // 检查是否有未提交的更改
            await this.executeGitCommand('git add -A');
            const result = await this.executeGitCommand('git diff --cached --name-only');
            return result.trim().length > 0;
        } catch (error) {
            this.log(`❌ 检查更改失败: ${error.stderr || error.error.message}`);
            return false;
        }
    }

    async performBackup() {
        const timestamp = new Date().toLocaleString('zh-CN');
        
        try {
            this.log('🔍 检查是否有更改需要备份...');
            
            const hasChanges = await this.checkForChanges();
            if (!hasChanges) {
                this.log('ℹ️ 没有新的更改需要备份');
                return true;
            }

            this.log('📁 发现更改，开始备份...');

            // 提交更改
            const commitMessage = `自动备份 - ${timestamp}

- 项目状态自动备份
- 代码更改自动保存
- 备份序号: #${this.backupCount + 1}
- 自动备份时间: ${timestamp}`;

            await this.executeGitCommand(`git commit -m "${commitMessage}"`);
            this.log('✓ 提交成功');

            // 推送到远程
            await this.executeGitCommand('git push origin main');
            this.log('✅ 推送成功');

            this.backupCount++;
            this.lastBackupTime = new Date();
            
            this.log(`🎉 自动备份完成！(第 ${this.backupCount} 次)`);
            return true;

        } catch (error) {
            this.log(`❌ 备份失败: ${error.stderr || error.error.message}`);
            
            // 如果推送失败，尝试先拉取再推送
            if (error.stderr && error.stderr.includes('rejected')) {
                try {
                    this.log('🔄 尝试拉取远程更改...');
                    await this.executeGitCommand('git pull origin main');
                    await this.executeGitCommand('git push origin main');
                    this.log('✅ 重新推送成功');
                    this.backupCount++;
                    this.lastBackupTime = new Date();
                    return true;
                } catch (retryError) {
                    this.log(`❌ 重试失败: ${retryError.stderr || retryError.error.message}`);
                    return false;
                }
            }
            return false;
        }
    }

    start() {
        if (this.isRunning) {
            this.log('⚠️ 自动备份已在运行中');
            return;
        }

        this.isRunning = true;
        this.log('🚀 启动自动备份调度器...');
        this.log(`⏰ 备份间隔: ${this.backupInterval / 60000} 分钟`);

        // 立即执行一次备份
        this.performBackup();

        // 设置定时备份
        this.intervalId = setInterval(() => {
            this.performBackup();
        }, this.backupInterval);

        this.log('✅ 自动备份调度器已启动');
    }

    stop() {
        if (!this.isRunning) {
            this.log('⚠️ 自动备份未在运行');
            return;
        }

        clearInterval(this.intervalId);
        this.isRunning = false;
        this.log('🛑 自动备份调度器已停止');
    }

    getStatus() {
        return {
            isRunning: this.isRunning,
            backupCount: this.backupCount,
            lastBackupTime: this.lastBackupTime,
            nextBackupIn: this.isRunning ? this.backupInterval / 60000 : null
        };
    }

    // 手动触发备份
    async manualBackup() {
        this.log('🔧 手动触发备份...');
        return await this.performBackup();
    }
}

// 创建实例
const scheduler = new AutoBackupScheduler();

// 处理命令行参数
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
    case 'start':
        scheduler.start();
        break;
    case 'stop':
        scheduler.stop();
        break;
    case 'status':
        console.log('📊 备份状态:', scheduler.getStatus());
        break;
    case 'backup':
        scheduler.manualBackup().then(() => {
            process.exit(0);
        });
        break;
    default:
        console.log(`
🔧 自动Git备份调度器

使用方法:
  node auto-backup-scheduler.js start   - 启动自动备份
  node auto-backup-scheduler.js stop    - 停止自动备份
  node auto-backup-scheduler.js backup  - 手动备份一次
  node auto-backup-scheduler.js status  - 查看状态

功能:
  ✅ 自动检测文件更改
  ✅ 定时自动提交推送
  ✅ 智能冲突处理
  ✅ 备份状态监控
        `);
        break;
}

// 保持进程运行 (仅在start命令时)
if (command === 'start') {
    process.on('SIGINT', () => {
        scheduler.log('📥 收到停止信号...');
        scheduler.stop();
        process.exit(0);
    });
} 