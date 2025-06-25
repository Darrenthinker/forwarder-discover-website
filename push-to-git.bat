@echo off
git add -A
git commit -m "代码更新推送 - %date% %time%"
git push origin main
echo 推送完成
timeout /t 2 >nul 