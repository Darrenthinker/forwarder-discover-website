#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

function log(message) {
    const timestamp = new Date().toLocaleString('zh-CN');
    console.log(`[${timestamp}] ${message}`);
}

function executeCommand(command, description) {
    try {
        log(`🔄 ${description}...`);
        const result = execSync(command, { 
            encoding: 'utf8', 
            stdio: 'pipe',
            timeout: 30000 
        });
        log(`✅ ${description}成功`);
        return { success: true, output: result };
    } catch (error) {
        log(`❌ ${description}失败: ${error.message}`);
        return { success: false, error: error.message };
    }
}

async function pushToGit() {
    log('🚀 开始自动Git推送...');
    
    // 检查是否在Git仓库中
    const gitCheck = executeCommand('git status', 'Git仓库检查');
    if (!gitCheck.success) {
        log('❌ 当前目录不是Git仓库');
        process.exit(1);
    }
    
    // 添加所有文件
    const addResult = executeCommand('git add -A', '添加所有文件');
    if (!addResult.success) {
        log('❌ 无法添加文件到Git');
        process.exit(1);
    }
    
    // 检查是否有更改需要提交
    const statusResult = executeCommand('git status --porcelain', '检查更改状态');
    if (statusResult.success && statusResult.output.trim() === '') {
        log('ℹ️ 没有新的更改需要提交');
        log('🔍 检查远程状态...');
        executeCommand('git remote show origin', '检查远程状态');
        log('✅ 所有内容已是最新状态');
        return;
    }
    
    // 提交更改
    const timestamp = new Date().toLocaleString('zh-CN');
    const commitMessage = `自动推送 - ${timestamp}`;
    const commitResult = executeCommand(`git commit -m "${commitMessage}"`, '提交更改');
    
    if (!commitResult.success && !commitResult.error.includes('nothing to commit')) {
        log('❌ 提交失败');
        process.exit(1);
    }
    
    // 推送到远程仓库
    let pushResult = executeCommand('git push origin main', '推送到远程仓库');
    
    if (!pushResult.success) {
        // 如果推送失败，尝试先拉取然后重新推送
        log('🔄 推送失败，尝试先拉取远程更改...');
        const pullResult = executeCommand('git pull origin main', '拉取远程更改');
        
        if (pullResult.success) {
            pushResult = executeCommand('git push origin main', '重新推送到远程仓库');
            if (pushResult.success) {
                log('✅ 拉取后推送成功！');
            } else {
                log('❌ 重新推送仍然失败');
                process.exit(1);
            }
        } else {
            log('❌ 拉取远程更改失败');
            process.exit(1);
        }
    } else {
        log('✅ 推送成功！');
    }
    
    log('🎉 Git推送完成！');
    log(`📝 提交信息: ${commitMessage}`);
    log(`⏰ 完成时间: ${new Date().toLocaleString('zh-CN')}`);
}

// 执行推送
pushToGit().catch(error => {
    log(`❌ 推送过程出错: ${error.message}`);
    process.exit(1);
}); 