#!/bin/bash

# Auto-commit and push script
# Usage: ./auto-push.sh

echo "🔍 Checking for changes..."

# Check if there are any changes
if git diff --quiet && git diff --staged --quiet; then
    echo "✅ No changes to commit"
    exit 0
fi

echo "📝 Committing changes..."
git add .

# Create commit message with timestamp
COMMIT_MSG="auto: update $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MSG"

echo "🚀 Pushing to main..."
git push origin main

echo "✅ Successfully pushed changes!"