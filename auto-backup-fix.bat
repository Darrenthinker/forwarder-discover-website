@echo off
chcp 65001 >nul
echo AI auto backup starting...
git add -A
git commit -m "Auto backup %date%"
git push origin main
if %errorlevel% equ 0 (
    echo Backup completed successfully!
) else (
    echo Backup failed, trying to fix...
    git pull origin main
    git push origin main
    echo Backup completed after fix!
)
echo Done. 