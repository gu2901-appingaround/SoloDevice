# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from training defaults. Always check local docs under node_modules/next/dist/docs before major edits.

## Mandatory Git CLI & GitHub Rule

1. Ensure GitHub CLI (`gh`) is installed and authenticated.
2. If not authenticated, prompt the user to run `gh auth login`.
3. Create the remote repository: `gh repo create` (follow prompts or use flags).
4. Push initial code: `git push -u origin main` (and `test` if applicable).

## Mandatory Git First-Interaction Rule

On the first interaction after reading this workspace, run the Git Specialist checklist from .ai/agents/git-specialist.md.
If the assistant is not running inside this project workspace yet, it must first instruct the user to open this project folder and then execute the checklist immediately at the first interaction in that workspace.
