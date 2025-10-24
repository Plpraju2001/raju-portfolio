# Portfolio Update Script for Windows PowerShell
# This script will add, commit, and push changes to GitHub
# Your site will automatically update at lakshmipathirajup.com

Write-Host "🚀 Updating your portfolio..." -ForegroundColor Green

# Add all changes
git add .

# Check if there are changes to commit
$stagedChanges = git diff --staged --name-only
if ($stagedChanges.Count -eq 0) {
    Write-Host "✅ No changes to commit" -ForegroundColor Yellow
    Read-Host "Press Enter to continue"
    exit
}

# Get commit message from user or use default
if ($args.Count -eq 0) {
    $commitMessage = Read-Host "Enter commit message (or press Enter for default)"
    if ([string]::IsNullOrWhiteSpace($commitMessage)) {
        $commitMessage = "Update portfolio content"
    }
} else {
    $commitMessage = $args[0]
}

# Commit changes
git commit -m $commitMessage

# Push to GitHub
git push origin main

Write-Host "✅ Portfolio updated successfully!" -ForegroundColor Green
Write-Host "🌐 Your site will be live at lakshmipathirajup.com in a few minutes" -ForegroundColor Cyan
Write-Host "📝 Changes committed: $commitMessage" -ForegroundColor Blue
Read-Host "Press Enter to continue"
