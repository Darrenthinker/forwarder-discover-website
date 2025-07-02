@echo off
echo ================================
echo 🚀 一键启动所有项目
echo ================================
echo 项目1: 端口 3000 (智能货运报价系统)
echo 项目2: 端口 3001 (税金代付专家)
echo 项目3: 端口 3002 (新项目系统)
echo ================================

cd /d "%~dp0"

echo 🔍 检查端口占用情况...
node port-checker.js

echo.
echo 🚀 启动所有项目...
node project-manager.js start-all

echo.
echo ================================
echo ✅ 所有项目启动完成！
echo ================================
echo 访问地址:
echo 项目1: http://localhost:3000
echo 项目2: http://localhost:3001  
echo 项目3: http://localhost:3002
echo ================================
echo 按任意键查看项目状态...
pause >nul

node project-manager.js status

echo.
echo 按任意键退出...
pause 