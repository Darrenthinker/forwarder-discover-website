@echo off
echo Committing cleaned restart solution...

echo Adding all files...
git add -A

echo Committing changes...
git commit -m "重构: 清理重复启动脚本，简化刷新重启解决方案

- 删除所有多余的启动脚本 (simple-start.js, clean-restart.js, stable-dev.js, ultimate-dev.js, health-check.js)
- 简化package.json，只保留基本npm scripts  
- 修复Next.js配置，移除警告
- 保留唯一的启动方案: start.bat 和 npm run dev
- 添加README_RESTART_SOLUTION.md解决方案文档
- 彻底解决刷新后无法访问的问题"

echo Pushing to origin...
git push origin main

echo Done!
pause 