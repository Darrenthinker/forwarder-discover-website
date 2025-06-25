@echo off
chcp 65001 >nul

echo 推送到Git...
git add -A
git commit -m "代码更新 - %date% %time%"
git push origin main

if %errorlevel% neq 0 (
    echo 推送失败，尝试修复...
    git pull origin main
    git push origin main
)

echo 完成！
timeout /t 2 >nul 