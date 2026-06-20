#!/usr/bin/env bash
# Optional: run the pipeline in a PHYSICALLY separate git worktree so your main
# checkout stays untouched. Creates the worktree + branch, then launches Claude
# Code inside it and runs /ship. /ship detects the existing pipeline/* branch
# and reuses it instead of creating a new one.
#
# Usage:   .claude/hooks/worktree-ship.sh "add rate limiting to the login endpoint"
# Cleanup: git worktree remove ../<repo>-<slug>   &&   git branch -D pipeline/<slug>
set -euo pipefail

REQ="${1:?Usage: worktree-ship.sh \"<feature description>\"}"

# Resolve the default branch (origin/HEAD if set, else current branch).
DEFAULT="$(git symbolic-ref --quiet --short refs/remotes/origin/HEAD 2>/dev/null | sed 's@^origin/@@' || true)"
DEFAULT="${DEFAULT:-$(git rev-parse --abbrev-ref HEAD)}"

SLUG="$(printf '%s' "$REQ" | tr '[:upper:] ' '[:lower:]-' | tr -cd 'a-z0-9-' | sed 's/-\{2,\}/-/g; s/^-//; s/-$//' | cut -c1-40)"
[ -n "$SLUG" ] || SLUG="run"
BRANCH="pipeline/$SLUG"
WT="../$(basename "$PWD")-$SLUG"

echo "Default branch : $DEFAULT"
echo "Feature branch : $BRANCH"
echo "Worktree path  : $WT"

git worktree add -b "$BRANCH" "$WT" "$DEFAULT"
cd "$WT"
echo "Launching Claude Code in the worktree..."
exec claude "/ship $REQ"
