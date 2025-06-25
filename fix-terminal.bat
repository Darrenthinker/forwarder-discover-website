@echo off
title 终端修复工具
echo 🔧 终端诊断和修复工具
echo =====================================
echo.

echo [1/6] 清理Node.js进程...
taskkill /F /IM node.exe >nul 2>&1
taskkill /F /IM npm.exe >nul 2>&1
taskkill /F /IM next.exe >nul 2>&1
echo ✅ Node进程清理完成

echo.
echo [2/6] 清理端口占用...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do (
    taskkill /F /PID %%a >nul 2>&1
)
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3001') do (
    taskkill /F /PID %%a >nul 2>&1
)
echo ✅ 端口清理完成

echo.
echo [3/6] 重置PowerShell...
powershell.exe -Command "Get-Process | Where-Object {$_.ProcessName -eq 'powershell'} | ForEach-Object {$_.CloseMainWindow()}" >nul 2>&1
echo ✅ PowerShell重置完成

echo.
echo [4/6] 清理缓存...
if exist .next rmdir /s /q .next >nul 2>&1
if exist node_modules\.cache rmdir /s /q node_modules\.cache >nul 2>&1
echo ✅ 缓存清理完成

echo.
echo [5/6] 检查Git状态...
git --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Git正常
) else (
    echo ❌ Git不可用
)

echo.
echo [6/6] 检查Node环境...
node --version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Node.js正常
) else (
    echo ❌ Node.js不可用
)

echo.
echo =====================================
echo 🎯 修复完成！现在测试Git推送...
echo =====================================
echo.

echo 添加文件...
git add -A
if %errorlevel% equ 0 (
    echo ✅ git add 成功
) else (
    echo ❌ git add 失败
    goto error
)

echo 提交更改...
git commit -m "修复终端问题后的测试推送"
if %errorlevel% equ 0 (
    echo ✅ git commit 成功
) else (
    echo ℹ️ 没有新更改需要提交
)

echo 推送到远程...
git push origin main
if %errorlevel% equ 0 (
    echo ✅ git push 成功！
    echo.
    echo 🎉 终端修复成功，Git推送正常！
) else (
    echo ❌ git push 失败，尝试修复...
    git pull origin main
    git push origin main
    if %errorlevel% equ 0 (
        echo ✅ 修复后推送成功！
    ) else (
        echo ❌ 推送仍然失败
        goto error
    )
)

echo.
echo 按任意键关闭...
pause >nul
exit /b 0

:error
echo.
echo ❌ 仍有问题，可能需要：
echo 1. 重启计算机
echo 2. 检查网络连接
echo 3. 验证Git配置
echo.
pause
exit /b 1 