# Data-Model Documentation

[Documentation home](../README.md) · [Data products](../data-products/README.md) · [Contracts](../contracts/README.md)

## Model layers

| Layer | Model responsibility |
|---|---|
| Operational | aggregates, invariants, ledgers, effective dates and service-owned writable schemas |
| Event | immutable business facts with stable identity, ordering key and versioned payload |
| Bronze | lossless, append-oriented source envelope plus ingestion metadata |
| Silver | typed, deduplicated, conformed domain state/history with CDC/deletion semantics |
| Gold | declared-grain facts, dimensions, aggregates, semantic KPIs and consumer products |
| Feature | point-in-time-safe entity features with event timestamp, freshness and lineage |
| Knowledge | document/chunk identity, source version, ACL, classification, effective date and deletion state |

## Modeling standards

- Use stable public IDs across domain boundaries; never depend on another service's private surrogate key.
- Store UTC instants and preserve the business timezone/market required for interpretation.
- Represent money as decimal amount plus ISO currency; define rounding and conversion authority.
- Model status changes as validated transitions and preserve history for auditable ledgers.
- Define SCD Type 1/2 per attribute; do not apply SCD2 mechanically to every column.
- State the grain and primary key for every Silver/Gold table.
- Define null, unknown, not-applicable and deleted semantics explicitly.
- Put flexible attributes in JSON only when their query, validation and evolution behavior is understood.

## Required diagrams and dictionaries

Maintain domain DBML/ERDs, table/column dictionaries, relationship boundaries, event-to-table mappings, KPI formulas and classification tags. Cross-service relationships are logical references enforced through APIs/events and reconciliation, not cross-database foreign keys.

