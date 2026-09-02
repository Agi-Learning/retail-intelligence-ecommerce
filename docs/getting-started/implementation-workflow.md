# Implementation Workflow

[Getting started](README.md) · [Lesson template](../learning/lesson-template.md) · [Testing strategy](../testing/test-strategy.md)

## One-lesson cycle

Every lesson follows the same path:

1. Create a branch named `lesson/LNNN-short-name`.
2. Copy the lesson template into `docs/learning/evidence/LNNN-short-name.md`.
3. Confirm prerequisites and write the measurable acceptance checks.
4. Implement the smallest end-to-end change that satisfies the lesson.
5. Run the applicable static, unit, contract, integration, security, data-quality and performance checks.
6. Capture commands, reports, screenshots or metric links in the evidence file.
7. Update contracts, diagrams, ADRs and runbooks when behavior changes.
8. Pass the phase gate, merge and tag the milestone when applicable.

## Commit convention

```text
<type>(<area>): <imperative summary> [LNNN]
```

Examples:

```text
docs(architecture): define operational and intelligence planes [L004]
feat(catalog): publish product-created outbox event [L021]
test(events): verify duplicate and replay convergence [L044]
```

## Evidence rules

- Evidence must be reproducible from committed code and documented configuration.
- A screenshot alone is not a test; include the command or query that produced it.
- A green unit suite does not replace contract, integration, security or reconciliation evidence.
- Generated build directories, raw secrets and large local datasets remain untracked.
- If a lesson changes a boundary, accept an ADR before merging the implementation.

## Pull-request checklist

- Lesson ID and outcome are stated.
- Acceptance checks pass locally and in CI.
- Backward compatibility and migration are addressed.
- Security, privacy and data classification are reviewed.
- Observability and rollback/recovery behavior exist.
- Documentation and contracts match code.

