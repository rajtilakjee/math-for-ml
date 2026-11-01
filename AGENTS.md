# Agent instructions

## Commits and pushes

When asked to commit, or to commit and push, write the commit message in [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) form.

```
<type>(<optional scope>): <imperative summary>

<optional body>

<optional footer>
```

- Use a lowercase type from: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- Write the summary in the imperative mood, with no trailing period, and keep it within 72 characters.
- Add a scope when the change is confined to one area, for example `feat(train): add early stopping`.
- Use a body, separated by a blank line, when the reason is not obvious from the summary.
- Mark a breaking change with `!` after the type or scope, and add a `BREAKING CHANGE:` footer that says what broke.
- Match the type to the change: `feat` for a new capability, `fix` for a bug, `docs` for documentation only, `refactor` for behavior-preserving restructuring, `test` for tests, `chore` for maintenance that is none of the above.

```
feat(eval): add stratified k-fold scoring

Hold out a fixed seed so metric comparisons stay stable across runs.
```

```
fix(data)!: reject unlabeled rows at load time

BREAKING CHANGE: load_dataset now raises on rows that are missing a label.
```

Push only when the request includes a push. After a successful commit, push the current branch and report the remote result.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
