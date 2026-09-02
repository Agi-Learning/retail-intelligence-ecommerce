# Learning and Evidence

[Documentation home](../README.md) · [Roadmap](../roadmap/README.md) · [Lesson template](lesson-template.md) · [Progress tracker](progress-tracker.md)

The roadmap is an implementation curriculum, not a reading list. Every lesson produces a committed artifact and reproducible evidence.

## Evidence directory

Create one file per lesson:

```text
docs/learning/evidence/L001-domain-map.md
docs/learning/evidence/L002-ownership.md
...
docs/learning/evidence/L120-capstone.md
```

Store small reports under `docs/learning/evidence/assets/`. Keep large data, logs and build output outside Git and link to the reproducible command or CI run.

## Status values

`NOT_STARTED` → `IN_PROGRESS` → `BLOCKED` or `DONE`

A phase is complete only when all five lessons are `DONE` and the phase gate is evidenced. A milestone is complete only when its release gate passes end to end.

