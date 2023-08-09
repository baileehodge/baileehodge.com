@echo off
for /f "tokens=2 delims=@" %%i in ('npm outdated -g firebase-tools') do (
    echo %%i
)
timeout /t 10 >nul