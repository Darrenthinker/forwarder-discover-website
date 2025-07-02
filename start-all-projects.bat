@echo off
echo 启动所有项目...
echo.

echo 智能货运报价系统 (端口 3000) - 已运行
echo.

echo 启动税金代付项目 (端口 3001)...
start "税金代付项目-3001" cmd /k "cd payduty-deploy && python -m http.server 3001"

echo.
echo 启动货代群项目 (端口 3002)...
start "货代群项目-3002" cmd /k "cd project3-new-system && npm run dev"

echo.
echo 所有项目启动完成！
echo.
echo 访问地址：
echo 智能货运报价系统: http://localhost:3000
echo 税金代付项目: http://localhost:3001
echo 货代群项目: http://localhost:3002
echo.
pause 