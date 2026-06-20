#!/usr/bin/env bash
# PreToolUse(Bash) guard for pipeline agents.
# Blocks any git command that mutates history/index/branches/remotes, and any
# direct write to the .git directory. Read-only git (status/diff/log/show/blame)
# is allowed. The ORCHESTRATOR owns all commits and branches, never the agents.
set -euo pipefail

INPUT="$(cat)"

# Extract the command field. Prefer jq; fall back to python3; else fail closed.
if command -v jq >/dev/null 2>&1; then
  CMD="$(printf '%s' "$INPUT" | jq -r '.tool_input.command // empty')"
elif command -v python3 >/dev/null 2>&1; then
  CMD="$(printf '%s' "$INPUT" | python3 -c 'import sys,json;print(json.load(sys.stdin).get("tool_input",{}).get("command",""))')"
else
  echo "git-guard: cannot parse hook input (need jq or python3). Blocking to stay safe." >&2
  exit 2
fi
[ -z "$CMD" ] && exit 0

LC="$(printf '%s' "$CMD" | tr '[:upper:]' '[:lower:]')"

# 1) Mutating git subcommands (matched within a single command segment, so
#    chains like `git diff && git push` are caught on the push segment).
if echo "$LC" | grep -qE '\bgit\b[^&|;]*\b(commit|push|merge|rebase|reset|checkout|switch|cherry-pick|revert|stash|clean|branch|tag|apply|restore|rm|mv|add|am|format-patch|update-ref|gc|prune|filter-branch|filter-repo|config|remote|fetch|pull|clone|init|worktree|submodule|fast-import)\b'; then
  echo "git-guard: blocked a git state-changing command. Agents may only run read-only git (status, diff, log, show, blame). The orchestrator owns commits and branches." >&2
  exit 2
fi

# 2) Direct writes to the .git directory via shell.
if echo "$CMD" | grep -qE '(>>?|tee|rm|mv|cp|chmod|chown|truncate|sed -i|ln)[^&|;]*(^|[^a-zA-Z0-9._-])\.git(/|$|[^a-zA-Z0-9])'; then
  echo "git-guard: blocked a direct modification of the .git directory." >&2
  exit 2
fi

exit 0
