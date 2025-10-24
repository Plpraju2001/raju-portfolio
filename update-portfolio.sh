#!/bin/bash

# Portfolio Update Script
# This script will add, commit, and push changes to GitHub
# Your site will automatically update at lakshmipathirajup.com

echo "🚀 Updating your portfolio..."

# Add all changes
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "✅ No changes to commit"
    exit 0
fi

# Get commit message from user or use default
if [ -z "$1" ]; then
    echo "Enter commit message (or press Enter for default):"
    read -r commit_message
    if [ -z "$commit_message" ]; then
        commit_message="Update portfolio content"
    fi
else
    commit_message="$1"
fi

# Commit changes
git commit -m "$commit_message"

# Push to GitHub
git push origin main

echo "✅ Portfolio updated successfully!"
echo "🌐 Your site will be live at lakshmipathirajup.com in a few minutes"
echo "📝 Changes committed: $commit_message"
