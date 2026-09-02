# Data-Product Standard

[Documentation home](../README.md) · [Data mesh](../architecture/data-mesh.md) · [Contract example](../contracts/data-product-contract.example.yaml)

A table is not automatically a data product. A published data product exists to serve named consumers through governed output ports.

## Required product contract

| Section | Required contents |
|---|---|
| Identity | name, domain, owner, steward, lifecycle state and version |
| Purpose | problem, consumers, decisions and non-goals |
| Inputs | source ports, owners, contracts, freshness and replay assumptions |
| Outputs | Delta tables/views, SQL endpoint, stream, share, feature set or API |
| Semantics | grain, keys, field definitions, time, money and deletion rules |
| Quality | schema, uniqueness, completeness, validity, referential and reconciliation tests |
| SLO | freshness, availability, quality, incident and support objectives |
| Security | classification, purpose, grants, masks/filters, retention and deletion |
| Operations | lineage, observability, runbook, backfill, recovery and cost |
| Evolution | compatibility, consumer notice, deprecation and successor |

## Initial products

- Customer: customer history, consent ledger and customer 360.
- Product: product master/history, price history and catalog quality.
- Commerce: checkout funnel, orders, returns and net revenue.
- Payment/Risk: token-safe payment outcomes and risk signals.
- Supply: inventory availability, movements and fulfillment performance.
- Engagement: sessions, campaign performance and support outcomes.
- AI feedback: predictions, retrieval/answer evaluations and governed agent traces.

## Certification gate

Contract, schema, quality, security, lineage, SLO, reconciliation, backfill/replay, consumer acceptance and runbook evidence must pass before `certified` status.

