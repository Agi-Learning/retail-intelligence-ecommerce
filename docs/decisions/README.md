# Architecture Decision Records

[Documentation home](../README.md) · [ADR template](ADR-TEMPLATE.md)

Use ADRs for choices that materially affect boundaries, contracts, security, operability, cost or long-term migration.

## Decision inventory

| ADR | Decision topic | Initial status |
|---:|---|---|
| 001 | Route composition versus runtime module federation | Proposed |
| 002 | MFE shell, shared dependency, state and version policy | Proposed |
| 003 | BFF boundaries and generated frontend API clients | Proposed |
| 004 | Microservice/database ownership and service extraction criteria | Proposed |
| 005 | API versus event versus data-product communication | Proposed |
| 006 | Transactional outbox and Debezium CDC | Accepted target |
| 007 | Local Kafka versus Event Hubs versus managed Kafka | Proposed; compatibility test required |
| 008 | Event schema, key, retention, archive and replay policy | Proposed |
| 009 | Data domains and product-type criteria | Proposed |
| 010 | Azure landing-zone, workspace, identity and environment boundaries | Proposed |
| 011 | Unity Catalog catalog/schema/storage strategy | Proposed |
| 012 | Microsoft Purview versus Unity Catalog metadata authority | Proposed |
| 013 | Data-product contract, registry and certification | Proposed |
| 014 | Stream, Delta/view, SQL, API and sharing output-port selection | Proposed |
| 015 | Azure Data Factory versus Lakeflow responsibility | Proposed |
| 016 | Bronze archive, retention and replay source | Proposed |
| 017 | CDC, SCD1/SCD2, delete, late-data and bitemporal semantics | Proposed |
| 018 | Cross-domain joins, KPI ownership and reconciliation | Proposed |
| 019 | Federated global policy versus domain autonomy | Proposed |
| 020 | Self-service golden paths and exception workflow | Proposed |
| 021 | Product SLO, incident, cost and lifecycle ownership | Proposed |
| 022 | Offline/online features and batch/online serving | Proposed |
| 023 | Model approval, rollout, rollback and feedback | Proposed |
| 024 | RAG source, ACL, freshness and deletion design | Proposed |
| 025 | Agent workflow/tool identity/approval/audit/kill switch | Proposed |
| 026 | PII, payment and consent across all planes | Proposed |
| 027 | Software/data supply chain and deployment order | Proposed |
| 028 | End-to-end traces, lineage correlation and SLO ownership | Proposed |
| 029 | Backup, regional DR, replay, retention and deletion guarantees | Proposed |
| 030 | Product/platform FinOps allocation and budgets | Proposed |

## Workflow

1. Copy [ADR-TEMPLATE.md](ADR-TEMPLATE.md) to `ADR-NNN-short-title.md`.
2. State context, forces, options and measurable evidence.
3. Record security/privacy/operability/cost and migration consequences.
4. Obtain named reviewers and date the decision.
5. Update affected diagrams, contracts, tests, runbooks and roadmap gates.
6. Mark superseded ADRs; never silently rewrite historical rationale.

