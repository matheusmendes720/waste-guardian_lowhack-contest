---
trigger: always_on
---

# Specs First Baseline
Baseline workspace rule for hk-lowhack: implementation must follow approved research-backed specs from plans, keep /base synchronized, and update scope, risks, and deliverables before coding when research changes direction.

## Objective

This workspace follows a specs-first execution model.
Strategic research in `plans` is the source of truth.
Operational deliverables in `main-repo` must align with the latest approved specs mirrored into `/base`.

## Rules

- Before changing implementation code, locate the relevant spec in:
  - `plans/`
  - or `main-repo/base/`
- If no spec exists, create a short spec draft before coding.
- Treat `plans/` as the canonical strategic source.
- Treat `main-repo/base/` as a mirrored documentation layer for collaborators.
- When findings from research materially change scope, assumptions, risks, or execution order:
  - update the spec first,
  - then refresh `/base`,
  - then adapt implementation.
- Every substantial implementation task must state:
  - goal,
  - constraints,
  - dependencies,
  - expected output,
  - verification method.
- Prefer small auditable tasks over broad vague changes.
- For each feature or phase, maintain:
  - one spec,
  - one execution checklist,
  - one validation note.
- Never assume mirrored docs are current if new research was added but sync was not run.
