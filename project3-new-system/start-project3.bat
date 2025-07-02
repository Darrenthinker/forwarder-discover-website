@echo off
echo ================================
echo 🚀 启动项目3 - 新项目系统
echo ================================
echo 端口: 3002
echo 文件夹: project3-new-system
echo ================================

cd /d "%~dp0"

echo 检查依赖...
if not exist "node_modules" (
    echo 正在安装依赖...
    npm install
)

echo 启动开发服务器...
echo 访问地址: http://localhost:3002
echo 按 Ctrl+C 停止服务器
echo ================================

npm run dev

pause 