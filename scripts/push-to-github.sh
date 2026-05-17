#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."

if ! command -v gh >/dev/null 2>&1; then
  echo "Install GitHub CLI: brew install gh"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "Log in to GitHub first:"
  echo "  gh auth login"
  exit 1
fi

# Create repo 'Website' on your GitHub account and push (skip if remote exists)
if git remote get-url origin >/dev/null 2>&1; then
  echo "Remote 'origin' already exists. Pushing..."
  git push -u origin main
else
  gh repo create Website --public --source=. --remote=origin --push
fi

echo ""
echo "Done. Open your repo:"
gh repo view --web
