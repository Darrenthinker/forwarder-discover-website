@echo off
chcp 65001 >nul

echo.
echo ===========================================
echo              Git 手动备份确认
echo ===========================================
echo.
echo 当前将要备份以下更改:
git status --porcelain
echo.
echo 📝 备份信息:
echo    - 时间: %date% %time%
echo    - 分支: main
echo    - 操作: 添加所有文件 + 提交 + 推送
echo.
set /p confirm=确认要备份这些更改到Git吗? (y/n): 

if /i not "%confirm%"=="y" (
    echo.
    echo ❌ 备份已取消
    timeout /t 2 >nul
    exit /b 0
)

echo.
echo 🚀 开始备份...

git add -A
git commit -m "快速备份 - %date% %time%"
git push origin main

if %errorlevel% equ 0 (
    echo.
    echo ✅ 备份完成！
    echo    - 所有文件已提交到Git
    echo    - 已推送到远程仓库
    echo    - 备份时间: %date% %time%
) else (
    echo.
    echo ❌ 备份失败，尝试修复...
    git pull origin main
    git push origin main
    if %errorlevel% equ 0 (
        echo ✅ 修复后备份完成！
        echo    - 已拉取远程更改并重新推送
        echo    - 备份时间: %date% %time%
    ) else (
        echo ❌ 备份失败，请检查网络连接或Git配置
    )
)

echo.
echo 按任意键关闭...
pause >nul y