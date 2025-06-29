@echo off
chcp 65001 >nul
title 国际货运智能报价系统 - 稳定启动

echo 正在启动国际货运智能报价系统...
echo.

:: 清理可能存在的Node进程
echo 清理进程中...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

:: 清理端口
echo 清理端口中...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000') do (
    taskkill /F /PID %%a 2>nul
)
timeout /t 1 /nobreak >nul

:: 启动开发服务器
echo 启动开发服务器...
echo 访问地址: http://localhost:3000
echo 按 Ctrl+C 停止服务器
echo.
npm run dev-stable

pause
