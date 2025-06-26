@echo off
echo 正在为您自动推送到Git...
git add .
git commit -m "补充尼日尔机场数据：新增7个机场包括2个国际机场，参考物流巴巴等权威数据源"
git push origin main
echo Git推送完成！
pause 