@echo off
echo 正在停止现有服务器进程...
taskkill /f /im node.exe 2>nul
timeout /t 2 /nobreak >nul

echo 清理缓存...
if exist .next rmdir /s /q .next
if exist node_modules\.cache rmdir /s /q node_modules\.cache

echo 重新启动开发服务器...
npm run dev 