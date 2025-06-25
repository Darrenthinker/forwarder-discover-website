@echo off
chcp 65001 >nul
title Git 手动备份工具

:start
cls
echo.
echo ================================================
echo              Git 手动备份工具
echo ================================================
echo.

echo 🔍 检查当前项目状态...
git status >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 错误: 当前目录不是Git仓库
    echo.
    echo 按任意键退出...
    pause >nul
    exit /b 1
)

echo ✅ Git仓库检查通过
echo.

echo 📂 当前项目更改列表:
echo ----------------------------------------
git status --short
echo ----------------------------------------
echo.

echo 📋 详细状态信息:
git status
echo.

echo 💡 备份操作说明:
echo    1. 添加所有更改文件到暂存区
echo    2. 提交更改到本地仓库
echo    3. 推送到远程仓库 (origin/main)
echo.

set /p confirm=❓ 确认要执行备份操作吗? (y/n): 

if /i not "%confirm%"=="y" (
    echo.
    echo ❌ 备份操作已取消
    goto menu
)

echo.
echo ===============================================
echo                开始备份过程
echo ===============================================

echo.
echo [1/3] 📁 添加所有文件到暂存区...
git add -A
if %errorlevel% neq 0 (
    echo ❌ 添加文件失败
    goto error
)
echo ✅ 文件添加成功

echo.
echo [2/3] 💾 提交更改到本地仓库...
set commitMsg=手动备份 - %date% %time%
git commit -m "%commitMsg%"
if %errorlevel% neq 0 (
    echo ❌ 提交失败 (可能没有新的更改)
    goto check_push
)
echo ✅ 提交成功

:check_push
echo.
echo [3/3] 🚀 推送到远程仓库...
git push origin main
if %errorlevel% neq 0 (
    echo ❌ 推送失败，尝试先拉取远程更改...
    git pull origin main
    if %errorlevel% equ 0 (
        echo ✅ 拉取成功，重新推送...
        git push origin main
        if %errorlevel% equ 0 (
            echo ✅ 推送成功
            goto success
        ) else (
            echo ❌ 重新推送失败
            goto error
        )
    ) else (
        echo ❌ 拉取失败
        goto error
    )
) else (
    echo ✅ 推送成功
    goto success
)

:success
echo.
echo ================================================
echo              🎉 备份完成！
echo ================================================
echo    ✅ 所有更改已成功备份到Git
echo    📅 备份时间: %date% %time%
echo    🌐 远程仓库已更新
echo ================================================
goto menu

:error
echo.
echo ================================================
echo              ❌ 备份失败！
echo ================================================
echo    请检查:
echo    - 网络连接是否正常
echo    - Git配置是否正确
echo    - 是否有权限推送到远程仓库
echo ================================================
goto menu

:menu
echo.
echo 🔧 操作选项:
echo    1. 重新备份
echo    2. 查看Git状态
echo    3. 退出
echo.
set /p choice=请选择操作 (1-3): 

if "%choice%"=="1" goto start
if "%choice%"=="2" goto status
if "%choice%"=="3" goto exit
echo ❌ 无效选择
timeout /t 1 >nul
goto menu

:status
cls
echo.
echo ================================================
echo              Git 状态信息
echo ================================================
echo.
git status
echo.
git log --oneline -5
echo.
echo 按任意键返回菜单...
pause >nul
goto menu

:exit
echo.
echo 👋 谢谢使用Git手动备份工具！
timeout /t 2 >nul
exit 