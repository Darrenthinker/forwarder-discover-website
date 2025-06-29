@echo off
chcp 65001 >nul
title 重启开发服务器

echo 正在重启开发服务器...

:: 强制结束所有Node进程
taskkill /F /IM node.exe 2>nul
taskkill /F /IM nodemon.exe 2>nul

:: 等待进程完全结束
timeout /t 3 /nobreak >nul

:: 清理端口
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000') do (
    taskkill /F /PID %%a 2>nul
)

echo 重启完成，请重新运行 start.bat
pause 