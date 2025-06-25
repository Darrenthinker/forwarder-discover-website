const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

async function pushToGit() {
    console.log('🚀 开始推送到Git...');
    
    try {
        // 添加所有文件
        console.log('📁 添加文件...');
        await execAsync('git add -A');
        
        // 提交更改
        console.log('💾 提交更改...');
        const timestamp = new Date().toLocaleString('zh-CN');
        await execAsync(`git commit -m "代码更新 - ${timestamp}"`);
        
        // 推送到远程
        console.log('🚀 推送到远程仓库...');
        await execAsync('git push origin main');
        
        console.log('✅ 推送完成！');
        
    } catch (error) {
        if (error.message.includes('nothing to commit')) {
            console.log('ℹ️ 没有新的更改需要提交');
            try {
                console.log('🔄 检查远程更新...');
                await execAsync('git push origin main');
                console.log('✅ 同步完成！');
            } catch (pushError) {
                console.log('❌ 推送失败:', pushError.message);
            }
        } else if (error.message.includes('rejected')) {
            console.log('🔄 推送被拒绝，尝试拉取并重新推送...');
            try {
                await execAsync('git pull origin main');
                await execAsync('git push origin main');
                console.log('✅ 修复后推送完成！');
            } catch (retryError) {
                console.log('❌ 重试失败:', retryError.message);
            }
        } else {
            console.log('❌ Git操作失败:', error.message);
        }
    }
}

// 立即执行
pushToGit(); 