# End-to-End Test Strategy

[Testing home](README.md) · [Lesson workflow](../getting-started/implementation-workflow.md)

| Layer | Minimum automated evidence |
|---|---|
| React/MFE | lint, type, unit, component, accessibility, composition, API contract, E2E and bundle/web-vitals budget |
| BFF/service | unit, slice/component, API consumer/provider, integration, migration, security and resilience |
| Transaction | idempotency, concurrency, saga compensation, provider ambiguity and ledger reconciliation |
| Event | schema compatibility, duplicate, ordering, restart, poison, delete/tombstone, replay and retention |
| Bronze/Silver/Gold | schema, quality, CDC/SCD, late data, backfill, checkpoint, lineage, reconciliation and freshness |
| Data product | executable contract, output-port access, consumer acceptance, SLO and deprecation |
| ML/DL | leakage, split, baseline, reproducibility, calibration/fairness, latency/cost, drift and outcome |
| RAG | retrieval recall, groundedness, citation, ACL, freshness/deletion, safety, latency and cost |
| Agent | prompt injection, tool abuse, privilege, approval, idempotency, cascading failure, kill switch and cost |
| Infrastructure | format/validate, policy, security, plan, smoke, restore, failover, rollback and drift |

## Test data

Use deterministic seeds and stable public IDs. Maintain small golden fixtures for every boundary and scalable synthetic generation for 20M→100M tests. Synthetic PII must be unmistakably fictional. Never clone production data into local development.

## Performance progression

1. Establish functional correctness with small fixtures.
2. Measure a repeatable baseline.
3. Increase to 20M records with representative skew and event rates.
4. Identify the measured bottleneck and tune one factor at a time.
5. Project/test the 100M design with partition, retention, storage, recovery and cost evidence.

## Gate rule

A test is not complete because it ran once. The command, environment, dataset/version, threshold and result must be captured so CI or another engineer can reproduce it.

