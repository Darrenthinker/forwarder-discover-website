@echo off
chcp 65001 >nul
echo 正在推送到Git...

echo 添加所有文件...
git add -A

echo 提交更改...
git commit -m "重构: 清理重复启动脚本，简化刷新重启解决方案

主要更改:
- 删除多余启动脚本: simple-start.js, clean-restart.js, stable-dev.js, ultimate-dev.js, health-check.js
- 简化package.json，只保留基本的4个npm scripts
- 修复Next.js配置警告，移除deprecated选项
- 保留唯一启动方案: start.bat (推荐) 和 npm run dev (备选)
- 添加README_RESTART_SOLUTION.md文档说明
- 完善香港航司数据，区分IATA和非IATA成员
- 解决服务器稳定性和重启问题

文件更改:
删除: simple-start.js, clean-restart.js, stable-dev.js, ultimate-dev.js, health-check.js
修改: package.json, next.config.js, start.bat
新增: README_RESTART_SOLUTION.md, git-commit.bat, GIT_COMMIT_SUMMARY.md"

echo 推送到远程仓库...
git push origin main

echo 推送完成！
pause 