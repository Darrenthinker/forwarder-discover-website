@echo off
setlocal enabledelayedexpansion

if "%1"=="" (
    echo 使用方法: smart-launcher.bat [项目编号或名称]
    echo 示例: 
    echo   smart-launcher.bat 1     ^(打开项目1^)
    echo   smart-launcher.bat 项目1  ^(打开项目1^)
    echo   smart-launcher.bat 货运   ^(打开项目1^)
    echo   smart-launcher.bat 2     ^(打开项目2^)
    echo   smart-launcher.bat 项目2  ^(打开项目2^)
    echo   smart-launcher.bat 税金   ^(打开项目2^)
    echo   smart-launcher.bat 3     ^(打开项目3^)
    echo   smart-launcher.bat 项目3  ^(打开项目3^)
    pause
    exit /b
)

set "input=%1"

REM 项目1的匹配
if "%input%"=="1" goto project1
if "%input%"=="项目1" goto project1
if "%input%"=="货运" goto project1
if "%input%"=="智能货运" goto project1
if "%input%"=="报价" goto project1
if "%input%"=="freight" goto project1

REM 项目2的匹配
if "%input%"=="2" goto project2
if "%input%"=="项目2" goto project2
if "%input%"=="税金" goto project2
if "%input%"=="代付" goto project2
if "%input%"=="payduty" goto project2

REM 项目3的匹配
if "%input%"=="3" goto project3
if "%input%"=="项目3" goto project3
if "%input%"=="新项目" goto project3
if "%input%"=="project3" goto project3

echo 未识别的项目: %input%
echo 请使用: 1/项目1/货运 或 2/项目2/税金 或 3/项目3/新项目
pause
exit /b

:project1
echo 🚚 正在打开项目1 - 智能货运报价系统 (端口3000)...
code ..\freight-quote-system\project1.code-workspace
echo ✅ 项目1工作区已打开！
exit /b

:project2
echo 💰 正在打开项目2 - 税金代付专家 (端口3001)...
code ..\payduty-deploy\project2.code-workspace
echo ✅ 项目2工作区已打开！
exit /b

:project3
echo 🆕 正在打开项目3 - 新项目系统 (端口3002)...
code ..\project3-new-system\project3.code-workspace
echo ✅ 项目3工作区已打开！
exit /b 