@echo off
echo 正在为您自动推送到Git...
git add .
git commit -m "优化机场搜索功能：增强显示更多按钮和国际机场排序"
git push origin main
echo Git推送完成！
pause 