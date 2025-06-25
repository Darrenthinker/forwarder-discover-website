@echo off
echo Starting development server...
echo.

:cleanup
echo Cleaning processes...
taskkill /F /IM node.exe >nul 2>&1
timeout /t 2 /nobreak >nul

echo Cleaning cache...
if exist .next (
    rmdir /s /q .next >nul 2>&1
)

echo Waiting for system to stabilize...
timeout /t 3 /nobreak >nul

:start
echo Starting Next.js development server...
npm run dev

echo Server exited unexpectedly. Restarting in 3 seconds...
timeout /t 3 /nobreak >nul
goto cleanup
