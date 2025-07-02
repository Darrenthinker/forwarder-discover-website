@echo off
echo ================================
echo 🚀 项目工作区快速启动器
echo ================================
echo 1. 项目1 - 智能货运报价系统 (端口3000)
echo 2. 项目2 - 税金代付专家 (端口3001)
echo 3. 项目3 - 新项目系统 (端口3002)
echo 4. 主工作区 - 全部项目管理
echo ================================

set /p choice=请选择要打开的项目 (1-4): 

if "%choice%"=="1" (
    echo 🚀 打开项目1工作区...
    code "..\freight-quote-system\project1.code-workspace"
    echo ✅ 项目1工作区已在新窗口打开
    echo 📁 工作目录: freight-quote-system/
    echo 🌐 访问地址: http://localhost:3000
) else if "%choice%"=="2" (
    echo 🚀 打开项目2工作区...
    code "..\payduty-deploy\project2.code-workspace"
    echo ✅ 项目2工作区已在新窗口打开
    echo 📁 工作目录: payduty-deploy/
    echo 🌐 访问地址: http://localhost:3001
) else if "%choice%"=="3" (
    echo 🚀 打开项目3工作区...
    code "..\project3-new-system\project3.code-workspace"
    echo ✅ 项目3工作区已在新窗口打开
    echo 📁 工作目录: project3-new-system/
    echo 🌐 访问地址: http://localhost:3002
) else if "%choice%"=="4" (
    echo 🚀 打开主工作区...
    code ".."
    echo ✅ 主工作区已在新窗口打开
    echo 📁 工作目录: discover-website/
    echo 🛠️ 可以管理所有项目和工具
) else (
    echo ❌ 无效选择，请输入 1-4
    pause
    goto start
)

echo.
echo ================================
echo 💡 使用提示:
echo - 每个工作区都是独立的VS Code窗口
echo - 终端会自动切换到对应项目目录
echo - 可以使用 Ctrl+Shift+` 打开集成终端
echo - 使用 Ctrl+Shift+P 打开命令面板
echo ================================

echo.
echo 按任意键退出...
pause >nul 