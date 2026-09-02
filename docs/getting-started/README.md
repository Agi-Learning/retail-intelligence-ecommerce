# Getting Started

[Documentation home](../README.md) · [Installation](installation.md) · [Implementation workflow](implementation-workflow.md) · [Docusaurus site](docusaurus.md)

This is a clean start for the repository named `retail-intelligence-ecommerce`. It does not import code or generated output from `retail-intelligence-platform`.

## Start order

1. Create the repository with `create-retail-intelligence-ecommerce.sh`.
2. Complete the workstation checks in [Installation](installation.md).
3. Read the [architecture rules](../architecture/README.md) and accept the initial ADRs.
4. Execute Lesson `L001`; do not skip directly to infrastructure or AI.
5. Work one lesson at a time using the [implementation workflow](implementation-workflow.md).
6. Commit only after the lesson evidence gate passes.

## First useful vertical slice

The first runnable slice is intentionally narrow:

```text
Catalog MFE -> shopper BFF -> catalog service -> PostgreSQL
                                      |
                                      +-> transactional outbox
                                           -> Debezium -> Kafka
                                           -> Bronze -> Silver -> Gold
```

This slice proves the application, event and data boundaries before the project multiplies services and pipelines.

## Definition of ready

Before `L001`, confirm that:

- the repository path is on the Linux filesystem under WSL2;
- Git reports a clean initial branch;
- secrets are absent from tracked files;
- version commands and Docker smoke checks pass;
- the documentation links and lesson numbering validation pass.
