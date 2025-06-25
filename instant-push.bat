@echo off
git add -A
git commit -m "AI自动推送 - %date% %time%"
git push origin main
if %errorlevel% neq 0 (
    git pull origin main
    git push origin main
)
echo 推送完成 