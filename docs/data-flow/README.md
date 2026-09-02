# Data Flows

[Documentation home](../README.md) · [Data-mesh architecture](../architecture/data-mesh.md) · [End-to-end diagram](../diagrams/end-to-end-architecture.md)

## Primary flows

| Flow | Path | Authority |
|---|---|---|
| User command | MFE → edge → BFF → owning microservice → owned database | microservice ledger |
| Domain event | database transaction + outbox → Debezium → Kafka/Event Hubs | immutable integration event plus source ledger |
| Streaming data | event backbone → raw archive/ADLS → Bronze → Silver → Gold | source domain owns meaning; product owns published contract |
| Batch/external | source/API/file → ADF → ADLS landing → Databricks | source contract and ingestion manifest |
| BI | Gold → Databricks SQL/semantic model → Power BI | certified KPI contract |
| ML | Silver/Gold/feature products → MLflow → serving → outcome event | model version plus owning domain decision |
| RAG | governed documents → parse/chunk/index → ACL-aware retrieval → answer/citations | source document and access policy |
| Agent action | governed product/tool → policy/approval → domain API → event | owning microservice accepts or rejects |

## Required metadata at every hop

- owner and data domain;
- source and contract/schema version;
- business event time and ingestion/processing time;
- trace/correlation identity;
- classification, tenant/market and allowed purpose;
- source position/checkpoint for replay;
- quality status and quarantine reason;
- lineage to the published output port.

## Delete and correction flow

A source correction or deletion is a first-class contract behavior. Bronze preserves the governed raw fact, Silver applies the declared CDC/SCD rule, Gold recomputes affected aggregates, indexes/features honor deletion policy, and consumers receive an auditable refresh or retraction. Backups expire under retention policy rather than being silently ignored.

