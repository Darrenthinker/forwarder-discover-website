@echo off
chcp 65001 >nul 2>&1

echo.
echo ================================================
echo             自动Git推送系统
echo ================================================
echo 🚀 AI助手正在为您推送代码到Git...
echo.

echo [1/4] 📁 添加所有文件到暂存区...
git add -A
if %errorlevel% equ 0 (
    echo ✅ 文件添加成功
) else (
    echo ❌ 文件添加失败
    goto error
)

echo.
echo [2/4] 💾 提交更改到本地仓库...
git commit -m "AI助手自动推送 - %date% %time%"
if %errorlevel% equ 0 (
    echo ✅ 提交成功
) else (
    echo ℹ️ 没有新更改需要提交
)

echo.
echo [3/4] 🚀 推送到远程仓库...
git push origin main
if %errorlevel% equ 0 (
    echo ✅ 推送成功！
    goto success
) else (
    echo ❌ 推送失败，尝试修复...
    echo [4/4] 🔄 拉取远程更改并重新推送...
    git pull origin main
    if %errorlevel% equ 0 (
        git push origin main
        if %errorlevel% equ 0 (
            echo ✅ 修复后推送成功！
            goto success
        ) else (
            echo ❌ 重新推送失败
            goto error
        )
    ) else (
        echo ❌ 拉取失败
        goto error
    )
)

:success
echo.
echo ================================================
echo            🎉 推送完成！
echo ================================================
echo    ✅ 您的代码已成功推送到Git仓库
echo    📅 推送时间: %date% %time%
echo    🤖 由AI助手自动执行
echo ================================================
echo.
echo 窗口将在3秒后自动关闭...
timeout /t 3 >nul
exit /b 0

:error
echo.
echo ================================================
echo            ❌ 推送失败！
echo ================================================
echo    请检查:
echo    - 网络连接是否正常
echo    - Git配置是否正确
echo    - 是否有权限推送到远程仓库
echo ================================================
echo.
echo 按任意键关闭...
pause >nul
exit /b 1 