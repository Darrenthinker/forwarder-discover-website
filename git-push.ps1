Write-Host "开始推送到Git..." -ForegroundColor Green

Write-Host "添加所有文件..." -ForegroundColor Yellow
git add -A

Write-Host "提交更改..." -ForegroundColor Yellow
git commit -m @"
重构: 清理重复启动脚本，简化刷新重启解决方案

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
新增: README_RESTART_SOLUTION.md, git-commit.bat, GIT_COMMIT_SUMMARY.md
"@

if ($LASTEXITCODE -eq 0) {
    Write-Host "推送到远程仓库..." -ForegroundColor Yellow
    git push origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ 推送成功完成！" -ForegroundColor Green
    } else {
        Write-Host "❌ 推送失败" -ForegroundColor Red
    }
} else {
    Write-Host "❌ 提交失败" -ForegroundColor Red
}

Write-Host "按任意键继续..." -ForegroundColor Cyan
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 