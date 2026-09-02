# Implementation Roadmap

[Documentation home](../README.md) · [All 120 lessons](all-120-lessons.md)

The roadmap contains 24 phases, five lessons per phase and six milestone release gates. A lesson is complete only when its artifact and verification evidence exist.

## Milestones

| Milestone | Phases | Lessons | Primary evidence |
|---|---:|---:|---|
| Web MFE and transactional microservices | 1–7 | 35 | Independently deployable MFEs, contract-tested APIs, microservice-owned data and an end-to-end sandbox purchase |
| Reliable event platform | 8–10 | 15 | Compatible schemas, outbox/CDC, idempotent replay, reconciliation and measured 20M→100M capacity |
| Governed lakehouse and data mesh | 11–15 | 25 | Self-service Azure/Databricks provisioning, executable product contracts, certified products, lineage and SLOs |
| ML and deep learning | 16–20 | 25 | Reproducible features/models, baselines, registry, serving, monitored rollout and feedback |
| GenAI and agentic AI | 21–23 | 15 | Golden evaluations, ACL-aware RAG, typed tools, approvals, traces and adversarial tests |
| Production capstone | 24 | 5 | Reproducible infrastructure, CI/CD, resilience/DR, security, FinOps and release evidence |

## Phase volumes

### [Phases 1–10 — Application and reliable events](phases-01-10.md)

- Phases 1–4: domains, workstation, microservices and web MFEs.
- Phases 5–7: commerce and engagement services.
- Phases 8–10: event platform, CDC/sagas and 20M→100M performance.

### [Phases 11–20 — Data mesh, analytics, ML and deep learning](phases-11-20.md)

- Phases 11–15: Azure landing zones, product contracts, Bronze/Silver/Gold and federated DataOps.
- Phases 16–20: data science, features, classical ML, deep learning and MLOps.

### [Phases 21–24 — GenAI, agents and production](phases-21-24.md)

- Phases 21–22: LLM foundations and governed RAG.
- Phase 23: bounded agentic and multimodal workflows.
- Phase 24: production platform and capstone.

## Lesson execution cycle

For every lesson:

1. Read the goal, prerequisites, architecture rule and acceptance evidence.
2. Record the current versions and commands used.
3. Implement the smallest complete vertical slice.
4. Run unit, contract, integration, security, data-quality and performance checks applicable to the lesson.
5. Capture commands, queries, metrics, screenshots or reports as evidence.
6. Update diagrams, contracts, runbooks and ADRs when behavior changes.
7. Pass the phase gate before advancing.

## Numbering rule

- Lessons `L001` through `L120` are globally unique and sequential.
- Every phase contains exactly five lessons.
- Do not insert a lesson by renumbering later lessons. Amend an existing lesson or create a roadmap revision with a migration note.

