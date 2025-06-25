@echo off
chcp 65001 >nul
echo.
echo =================================================
echo           自动Git备份推送脚本
echo =================================================
echo.

echo [%time%] 开始自动备份...

REM 检查是否在Git仓库中
git status >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 错误: 当前目录不是Git仓库
    pause
    exit /b 1
)

echo [%time%] ✓ Git仓库检测成功

REM 自动添加所有文件
echo [%time%] 📁 添加所有文件到暂存区...
git add -A
if %errorlevel% neq 0 (
    echo ❌ 添加文件失败
    pause
    exit /b 1
)

echo [%time%] ✓ 文件添加成功

REM 检查是否有更改需要提交
git diff --cached --quiet
if %errorlevel% equ 0 (
    echo [%time%] ℹ️  没有新的更改需要提交
    echo [%time%] 检查远程更新...
    git pull origin main
    echo [%time%] ✓ 备份检查完成
    pause
    exit /b 0
)

REM 生成时间戳
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "YY=%dt:~2,2%" & set "YYYY=%dt:~0,4%" & set "MM=%dt:~4,2%" & set "DD=%dt:~6,2%"
set "HH=%dt:~8,2%" & set "Min=%dt:~10,2%" & set "Sec=%dt:~12,2%"
set "timestamp=%YYYY%-%MM%-%DD% %HH%:%Min%:%Sec%"

REM 自动提交
echo [%time%] 💾 提交更改...
git commit -m "自动备份 - %timestamp%

- 项目状态备份
- 代码更改保存  
- 配置文件同步
- 自动推送时间: %timestamp%"

if %errorlevel% neq 0 (
    echo ❌ 提交失败
    pause
    exit /b 1
)

echo [%time%] ✓ 提交成功

REM 自动推送
echo [%time%] 🚀 推送到远程仓库...
git push origin main
if %errorlevel% neq 0 (
    echo ❌ 推送失败，可能需要先拉取远程更改
    echo [%time%] 尝试拉取远程更改...
    git pull origin main
    if %errorlevel% equ 0 (
        echo [%time%] 重新推送...
        git push origin main
        if %errorlevel% equ 0 (
            echo [%time%] ✅ 推送成功！
        ) else (
            echo ❌ 推送仍然失败
            pause
            exit /b 1
        )
    ) else (
        echo ❌ 拉取失败
        pause
        exit /b 1
    )
) else (
    echo [%time%] ✅ 推送成功！
)

echo.
echo =================================================
echo        🎉 自动备份完成！
echo        时间: %timestamp%
echo =================================================
echo.
echo 备份将在5秒后自动关闭...
timeout /t 5 /nobreak >nul
exit /b 0 