@echo off
IF EXIST public (
    echo Public folder found.
    choice /C YN /M "Would you like do deploy everything in the public folder?"
    IF ERRORLEVEL 2 (
        echo Deployment cancelled.
    ) ELSE (
        echo Deploying with Firebase...
        firebase deploy
    )
)

for /f "tokens=2 delims=@" %%i in ('npm outdated -g firebase-tools') do (
    echo Firebase Tools is outdated (what a boomer). 
    choice /C YN /M "Would you like to update?"
    IF ERRORLEVEL 2 (
        echo Not updating...
    ) ELSE (
        echo Updating Firebase Tools...
        npm install -g firebase-tools
    )
)

IF NOT EXIST public (
    echo The public folder doesn't exist. That is a problem.
)

timeout /t 10 >nul
