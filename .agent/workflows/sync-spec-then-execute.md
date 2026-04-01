---
description: On-demand workflow that reviews the latest spec in plans, checks whether /base is synced, summarizes objective, constraints, and risks, then creates an execution plan before any implementation starts in main-repo.
---

# Workflow: Sync Spec Then Execute

## Purpose

Use the latest research-backed plan before implementation work.

## Steps

1. Ask which feature, phase, or deliverable is being updated.
2. Locate the relevant source material in `plans/`.
3. Summarize:
   - objective,
   - constraints,
   - risks,
   - latest research changes.
4. Check whether `main-repo/base/` reflects the current source.
5. If not updated, instruct to run the mirror sync before proceeding.
6. Produce a short execution plan with:
   - files to touch,
   - tests or checks,
   - expected deliverables.
7. Only then start implementation or documentation updates.
8. End with a validation checklist and next action.
