# Production-Readiness Checklist

[Operations index](README.md) · [Platform operations](../architecture/platform-operations.md) · [Phase 24](../roadmap/phases-21-24.md)

Record evidence links and an owner for every applicable item. A checked box without reproducible evidence is incomplete.

## Web MFEs and edge

- [ ] The React shell and every MFE have named owners and version manifests.
- [ ] MFEs deploy and roll back independently without breaking composition.
- [ ] Generated API clients and consumer/provider contract tests pass.
- [ ] Accessibility, localization, browser, CSP/CORS, XSS and dependency checks pass.
- [ ] Bundle/performance budgets and web-vital objectives pass.
- [ ] Front Door/WAF/CDN, TLS, cache, bot and rate-limit behavior are tested.
- [ ] Authentication/session/logout and privileged-admin separation are tested.
- [ ] MFEs cannot access databases, event infrastructure or Databricks directly.

## Microservices and transactions

- [ ] Domain/service ownership, aggregates and invariants are documented and tested.
- [ ] Each service owns its writable schema/database and Flyway chain.
- [ ] Cross-service table writes are absent.
- [ ] API authentication, authorization, validation, errors, timeouts and tracing pass.
- [ ] Checkout, payment, order and inventory commands are idempotent.
- [ ] Concurrent stock/price/order tests preserve invariants.
- [ ] Sagas persist state, compensate known failures and reconcile ambiguous outcomes.
- [ ] Provider webhooks are authenticated, idempotent and replay-safe.
- [ ] Redis/OpenSearch/read projections rebuild from authoritative sources.

## Events and CDC

- [ ] Event envelope, schemas, examples, ownership and compatibility policy exist.
- [ ] Topic/event-hub keys, partitions, ordering, retention, quotas, ACLs and SLOs are documented.
- [ ] The Kafka/Azure backbone ADR includes connector/client/load/recovery evidence.
- [ ] Domain state and outbox commit atomically.
- [ ] Debezium snapshot, restart, source position, schema history and heartbeat behavior are tested.
- [ ] Consumers deduplicate and apply idempotent durable effects.
- [ ] Duplicate, out-of-order, poison, delete/tombstone, restart and replay tests pass.
- [ ] Retry/quarantine ownership, alerts and replay procedure exist.
- [ ] Order/payment/inventory/shipment/outbox/event/Bronze reconciliation is automated.
- [ ] Prohibited secrets/card data and unnecessary PII do not appear in events.

## Azure landing zone and self-service platform

- [ ] Dev/test/prod subscription/resource-group/workspace/catalog boundaries are approved.
- [ ] Entra identities, workload federation, private endpoints/DNS and Key Vault are configured.
- [ ] ADLS encryption, RBAC/ACLs, diagnostics, lifecycle and deletion protection are configured.
- [ ] Terraform/Bicep plans pass validation, policy, security and cost checks.
- [ ] Domain onboarding is reproducible through versioned modules.
- [ ] Drift detection and upgrade/rollback procedures exist.
- [ ] Resource tags, budgets and product/domain cost allocation are enforced.
- [ ] A domain identity cannot access another domain's restricted assets.

## Data products and lakehouse

- [ ] Every published product has owner, purpose, consumers, contract, ports and lifecycle.
- [ ] Grain, keys, semantics, units, currency/timezone and event-time meaning are explicit.
- [ ] Quality rules, thresholds, violation policy and reconciliation source are implemented.
- [ ] Classification, purpose, retention, deletion, masks/filters and audits are implemented.
- [ ] Bronze is lossless, replayable and source-positioned.
- [ ] Silver CDC/SCD, deletes, duplicates, late data, restatements and backfills are tested.
- [ ] Gold grain/KPIs and cross-domain semantics are certified.
- [ ] Financial/operational totals reconcile within documented tolerances.
- [ ] Purview/Unity Catalog metadata authority and synchronization are defined.
- [ ] Runtime lineage, downstream impact and consumer dependencies are visible.
- [ ] Freshness, availability, quality, performance, adoption and cost SLOs are monitored.
- [ ] Product version, deprecation, successor, migration and deletion are demonstrated.

## Analytics, ML and deep learning

- [ ] KPI semantic definitions and dashboard certification are approved.
- [ ] Prediction target, decision, labels, baseline, split and metrics are valid.
- [ ] Point-in-time features and leakage tests pass.
- [ ] Training code/data/environment/runs are reproducible.
- [ ] MLflow tracking and Unity Catalog model registration/approval exist.
- [ ] Model beats the deterministic/classical baseline at acceptable latency/cost.
- [ ] Batch/online serving has validation, timeout, fallback and version behavior.
- [ ] Shadow/canary/A-B rollout and rollback are demonstrated.
- [ ] Drift, calibration, fairness, latency, errors, cost and business outcomes are monitored.
- [ ] Retraining remains behind quality/approval gates.

## GenAI, RAG and agents

- [ ] Sources are classified, versioned, fresh and deletion-aware.
- [ ] Retrieval preserves source ACLs, tenant/market and purpose restrictions.
- [ ] Structured operational facts use authorized API/SQL tools rather than broad embeddings.
- [ ] Golden evaluation covers retrieval, correctness, groundedness, citations, safety, latency and cost.
- [ ] Prompt/model/tool/retrieval versions and privacy-redacted traces are captured.
- [ ] Prompt injection, exfiltration, poisoned content/memory and unsafe output are tested.
- [ ] Agent tools have typed schemas, least-privilege identities, timeouts, idempotency and audit.
- [ ] Risk tiers, policy-as-code, dry run and human approval protect sensitive actions.
- [ ] Step/time/spend limits, compensation, escalation and kill switch are tested.
- [ ] Models/agents cannot write operational databases directly.

## Security, privacy and supply chain

- [ ] Threat models cover browser, APIs, events, data, ML, RAG and agents.
- [ ] Secrets are absent from repositories, images, logs, events and prompts.
- [ ] Images/artifacts have SBOM, provenance/signing and vulnerability gates.
- [ ] Least privilege, privileged access and periodic access reviews pass.
- [ ] Encryption, key rotation and certificate renewal are tested.
- [ ] PII classification/minimization and purpose/consent enforcement are verified.
- [ ] Access, correction, export, retention and deletion flows are tested across all stores/indexes/traces.
- [ ] Security logging, alerting, incident response and evidence retention are approved.

## Observability and SRE

- [ ] Browser, gateway, BFF, service, database, event, pipeline, SQL/model and agent telemetry correlate.
- [ ] Critical SLIs/SLOs and error budgets have owners.
- [ ] Alerts are actionable and linked to tested runbooks.
- [ ] Capacity/load/soak tests meet p95/p99, throughput and lag targets.
- [ ] Dependency failure, retry storm, hot key/skew and backpressure behavior is safe.
- [ ] Incident severity, escalation, communication and postmortem workflow are rehearsed.
- [ ] Current deployed versions and health are discoverable.

## Backup, recovery and disaster recovery

- [ ] Database backups and point-in-time restore are tested.
- [ ] ADLS/Delta recovery/version/time-travel limitations are documented and tested.
- [ ] Event retention, offset/checkpoint recovery and replay are tested.
- [ ] Redis/OpenSearch/feature/index projections rebuild successfully.
- [ ] Zone/region failure and provider outage exercises pass.
- [ ] Service/product RPO and RTO are measured, not assumed.
- [ ] Rollback/forward-fix and reconciliation complete after recovery.

## CI/CD and change management

- [ ] MFE, service, database, event, data, model, RAG/agent and infrastructure pipelines are separate and ordered safely.
- [ ] Contracts and backward-compatible migrations deploy before dependent code.
- [ ] Test environments/catalogs use representative identities and policies.
- [ ] Canary/blue-green, promotion, rollback and consumer notification are automated where appropriate.
- [ ] ADRs, diagrams, contracts, runbooks and roadmap evidence match deployed behavior.

## FinOps

- [ ] Costs are tagged/allocated by environment, domain, product and owner.
- [ ] Budgets and anomaly alerts exist.
- [ ] Compute policies, autoscaling, idle shutdown and retention are enforced.
- [ ] Databricks, ADF, event, storage, observability, model and agent costs are monitored.
- [ ] Cost/performance trade-offs are reviewed before adding real-time, GPU, vector or multi-agent complexity.

## Final approval

- [ ] All six milestone gates pass.
- [ ] Residual risks have severity, owner, mitigation and due date.
- [ ] Rollback and recovery have been demonstrated.
- [ ] Operations accepts ownership and support procedures.
- [ ] Security/privacy/governance approval exists where required.
- [ ] The end-to-end capstone trace and evidence pack are complete.

