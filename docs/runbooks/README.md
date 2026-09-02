# Runbook Index

[Documentation home](../README.md) · [Local platform](local-platform.md) · [Replay and recovery](replay-and-recovery.md) · [Production readiness](../operations/production-readiness.md)

Every production service, pipeline, data product, model endpoint, index and agent needs an owner-linked runbook.

## Required runbook fields

- scope, owner, on-call/escalation and dependencies;
- SLOs, dashboards, alerts and healthy baseline;
- safe diagnostics and access requirements;
- restart/retry/replay/backfill procedure;
- rollback or forward-fix procedure;
- data integrity and reconciliation checks;
- customer/consumer communication;
- recovery verification and incident evidence.

## Planned runbooks

| Runbook | Introduced |
|---|---|
| Local stack start/stop and smoke check | Phase 2 |
| PostgreSQL restore and migration recovery | Phase 3 |
| Checkout/payment reconciliation | Phase 6 |
| Kafka consumer lag and poison record | Phase 8 |
| Outbox/CDC replay and reconciliation | Phase 9 |
| Databricks checkpoint/backfill and product recovery | Phases 12–15 |
| Model rollback and feature fallback | Phase 20 |
| RAG re-index, ACL/delete propagation and model fallback | Phase 22 |
| Agent kill switch and tool revocation | Phase 23 |
| Regional/platform disaster recovery | Phase 24 |

