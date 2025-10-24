@echo off
echo 🚀 Updating your portfolio...

REM Add all changes
git add .

REM Check if there are changes to commit
git diff --staged --quiet
if %errorlevel% equ 0 (
    echo ✅ No changes to commit
    pause
    exit /b 0
)

REM Get commit message from user or use default
if "%1"=="" (
    set /p commit_message="Enter commit message (or press Enter for default): "
    if "%commit_message%"=="" set commit_message=Update portfolio content
) else (
    set commit_message=%1
)

REM Commit changes
git commit -m "%commit_message%"

REM Push to GitHub
git push origin main

echo ✅ Portfolio updated successfully!
echo 🌐 Your site will be live at lakshmipathirajup.com in a few minutes
echo 📝 Changes committed: %commit_message%
pause
