# Implementation Salvage Plan (Preserve Intent, Rebuild Execution)

## Goal

Keep the **product ideas and UX direction** that emerged on this branch, while replacing the unstable implementation with a clean, testable, and reviewable code path.

## What to preserve (idea-level contract)

1. **Content platform direction**
   - Blog/content editing capability.
   - Analytics dashboard visibility.
   - SEO optimization utilities.

2. **Hero and brand direction**
   - Personal portrait-led hero.
   - Gold framing aesthetic (with reduced visual clutter).
   - Cleaner heading area (thumbnail logo removal).
   - Beams-style background replacing older particle style.

3. **Developer experience direction**
   - Stable path aliases for `@/app`, `@/components`, `@/lib`.
   - Predictable builds and CI gates.

## What NOT to preserve (implementation-level anti-patterns)

- Any `.next/` generated artifacts committed to git.
- Commits that combine source changes with build/cache outputs.
- “Syntax-fix” patches that leave broken parsing/typecheck state.

## Recovery strategy

### Phase 1 — Repository sanitation (Day 0)

1. Add/verify `.next/` and build outputs in `.gitignore`.
2. Remove tracked generated artifacts from version control.
3. Keep only source/config/assets under intentional ownership.

**Exit criteria**
- No `.next/` paths tracked by git.
- Clean `git status` after fresh install without running build.

### Phase 2 — Baseline compilation restore (Day 0-1)

1. Repair all syntax/truncation errors in app routes/pages/components.
2. Run and fix until `npx tsc --noEmit` is green.
3. Remove invalid `experimental.appDir` from `next.config.js` for current Next.js.

**Exit criteria**
- `npx tsc --noEmit` passes.
- `npm run build` reaches framework compilation (network-only font failures are separately handled).

### Phase 3 — Idea-preserving feature reconstruction (Day 1-3)

Rebuild in **small PRs**, each scoped to one idea:

1. **PR A — Hero intent only**
   - Portrait, gold frame, heading cleanup, beams background.
   - Include screenshot and visual acceptance checklist.

2. **PR B — Content tooling shell**
   - Blog editor + analytics + SEO components integrated behind stable routes.
   - Minimal mocked data path first.

3. **PR C — Data wiring hardening**
   - Connect API/database routes with validation and error handling.
   - Add smoke tests for route responses.

4. **PR D — Build/runtime hardening**
   - Final lint/type/build gates.
   - Remove dead code and stale imports.

**Exit criteria**
- Each PR is independently reviewable and mergeable.
- No PR includes generated artifacts.

### Phase 4 — Guardrails to prevent regression (Day 3+)

1. Add CI checks:
   - `npx tsc --noEmit`
   - `npm run build` (or equivalent CI build profile)
2. Add a pre-commit or pre-push guard that blocks `.next/` files.
3. Require PR template checklist:
   - “No generated artifacts”
   - “Typecheck/build green”
   - “Screenshots for UI changes”

## Suggested sequencing of immediate tickets

1. **Ticket 1 (P0):** Repo hygiene + `.next/` purge.
2. **Ticket 2 (P0):** Syntax restore sweep across failing files.
3. **Ticket 3 (P1):** Next config modernization.
4. **Ticket 4 (P1):** Hero UI reconstruction PR.
5. **Ticket 5 (P1):** Content tooling reconstruction PR.
6. **Ticket 6 (P1):** API/data stabilization PR.

## Definition of Done for this branch recovery

- Ideas retained and visible in product behavior.
- Implementation rewritten into stable, maintainable source diffs.
- CI/type/build checks consistently green.
- Branch history no longer dominated by generated-file churn.
