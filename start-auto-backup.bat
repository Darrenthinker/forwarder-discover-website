@echo off
chcp 65001 >nul
title 自动Git备份系统

echo.
echo =====================================
echo         自动Git备份系统
echo =====================================
echo.
echo 请选择备份方式:
echo.
echo 1. 立即备份一次
echo 2. 启动定时自动备份 (每30分钟)
echo 3. 查看备份状态
echo 4. 退出
echo.
set /p choice=请输入选择 (1-4): 

if "%choice%"=="1" goto manual_backup
if "%choice%"=="2" goto auto_backup
if "%choice%"=="3" goto status
if "%choice%"=="4" goto exit
goto invalid

:manual_backup
echo.
echo 🔧 执行立即备份...
call auto-backup.bat
goto menu

:auto_backup
echo.
echo 🚀 启动定时自动备份...
echo 提示: 按 Ctrl+C 可以停止自动备份
echo.
node auto-backup-scheduler.js start
goto menu

:status
echo.
echo 📊 查看备份状态...
node auto-backup-scheduler.js status
pause
goto menu

:invalid
echo.
echo ❌ 无效选择，请重新输入
timeout /t 2 >nul
goto menu

:menu
echo.
echo 按任意键返回主菜单...
pause >nul
cls
goto start

:start
echo.
echo =====================================
echo         自动Git备份系统
echo =====================================
echo.
echo 请选择备份方式:
echo.
echo 1. 立即备份一次
echo 2. 启动定时自动备份 (每30分钟)
echo 3. 查看备份状态
echo 4. 退出
echo.
set /p choice=请输入选择 (1-4): 

if "%choice%"=="1" goto manual_backup
if "%choice%"=="2" goto auto_backup
if "%choice%"=="3" goto status
if "%choice%"=="4" goto exit
goto invalid

:exit
echo.
echo 👋 感谢使用自动Git备份系统！
timeout /t 2 >nul
exit 