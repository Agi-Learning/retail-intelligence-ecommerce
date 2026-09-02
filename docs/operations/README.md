# Operations and Runbooks

[Documentation home](../README.md) · [Platform operations](../architecture/platform-operations.md) · [Production-readiness checklist](production-readiness.md)

## Required runbooks

| Runbook | Owner | Minimum content |
|---|---|---|
| MFE rollback | Web platform/domain MFE | Version identification, CDN/cache invalidation, rollback and composition verification |
| Service rollback/forward fix | Owning service | Deployment version, schema compatibility, traffic shift and verification |
| Database restore | Owning service/DB platform | Backup selection, PITR, validation, reconciliation and audit |
| Outbox/connector recovery | Event platform | Backlog, offsets, schema history, restart, duplicate safety and catch-up |
| Event replay | Producer/consumer/platform | Scope, isolation, reset, shadow validation, promotion and reconciliation |
| ADF ingestion recovery | Data platform/domain | Watermark/CDC state, failed slices, checksum, retry and duplicate handling |
| Lakeflow/checkpoint recovery | Data product owner | Checkpoint diagnosis, replay/backfill, state validation and SLO recovery |
| Data-quality incident | Product owner | Quarantine, lineage impact, consumer notice, fix, backfill and certification |
| Product schema rollback/version | Product owner/governance | Compatibility, parallel version, consumer migration and deprecation |
| Model rollback | ML owner | Alias/version switch, fallback, cache, monitoring and outcome comparison |
| RAG index rebuild | AI/data owner | Sources, ACLs, deletion, versions, embedding/index validation and cutover |
| Agent kill switch | Agent/service/security owner | Disable path, credential revocation, in-flight action handling and audit |
| Provider outage | Service owner | Timeout/circuit breaker, queued work, customer status and reconciliation |
| Regional disaster recovery | Platform/SRE | Detection, declaration, failover, data recovery, DNS/traffic and return |

## Incident evidence

Every incident records detection time, affected services/products/consumers, severity, timeline, trace/lineage evidence, containment, recovery, reconciliation, data/privacy impact, customer impact, cost, root cause, corrective actions and owners.

## Operational review cadence

- Daily: critical availability, error, event lag, pipeline freshness, data-quality and security alerts.
- Weekly: SLO/error budgets, incidents, cost anomalies, capacity and product health.
- Monthly: access review exceptions, recovery evidence, dependency/lifecycle risk and cost optimization.
- Quarterly: restore/DR exercise, product certification/access recertification, threat model and architecture/ADR review.

