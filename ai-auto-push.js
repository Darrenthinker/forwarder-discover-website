const { spawn } = require('child_process');
const fs = require('fs');

console.log('🤖 AI助手正在为您自动推送到Git...');
console.log('⏳ 请稍候，正在执行推送操作...');

// 创建推送脚本
const pushScript = `@echo off
echo 🚀 AI助手执行Git推送...
git add -A
if %errorlevel% equ 0 (
    echo ✅ 文件添加成功
) else (
    echo ❌ 文件添加失败
    exit /b 1
)

git commit -m "AI助手自动推送 - %date% %time%"
if %errorlevel% equ 0 (
    echo ✅ 提交成功
) else (
    echo ℹ️ 没有新更改需要提交
)

git push origin main
if %errorlevel% equ 0 (
    echo ✅ 推送成功！
) else (
    echo 🔄 推送失败，尝试修复...
    git pull origin main
    git push origin main
    if %errorlevel% equ 0 (
        echo ✅ 修复后推送成功！
    ) else (
        echo ❌ 推送失败
        exit /b 1
    )
)

echo 🎉 AI助手推送完成！
timeout /t 2 >nul
`;

// 写入临时推送脚本
fs.writeFileSync('temp-auto-push.bat', pushScript);

// 立即执行推送
const pushProcess = spawn('cmd', ['/c', 'temp-auto-push.bat'], {
    stdio: 'inherit',
    shell: true
});

pushProcess.on('close', (code) => {
    // 清理临时文件
    try {
        fs.unlinkSync('temp-auto-push.bat');
    } catch (e) {
        // 忽略清理错误
    }
    
    if (code === 0) {
        console.log('✅ AI助手推送操作完成！');
    } else {
        console.log('❌ 推送过程中出现问题');
    }
    process.exit(code);
});

pushProcess.on('error', (error) => {
    console.log('❌ 执行错误:', error.message);
    process.exit(1);
}); 