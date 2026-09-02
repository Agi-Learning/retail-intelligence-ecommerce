# Event and Data Flow

[Diagram index](README.md) · [Event platform](../architecture/event-platform.md) · [Data mesh](../architecture/data-mesh.md)

```mermaid
flowchart TB
    COMMAND["MFE command"] --> API["Owning microservice API"]
    API --> TX["Domain state and outbox transaction"]
    TX --> CDC["Debezium logical CDC"]
    CDC --> BUS["Kafka or Event Hubs"]
    BUS --> RAW["Lossless event archive and Bronze"]

    BATCHSRC["Databases, SaaS, APIs and files"] --> ADF["Metadata-driven ADF ingestion"]
    ADF --> RAW

    RAW --> SILVER["Trusted domain Silver products"]
    SILVER --> GOLD["Certified Gold and feature products"]
    GOLD --> CONSUMER["BI, other domains, ML, RAG and agents"]
    CONSUMER --> PROPOSAL["Prediction, answer or proposed action"]
    PROPOSAL --> POLICY["Identity, policy and human approval"]
    POLICY --> API

    RECON["Reconciliation and replay"] -.-> TX
    RECON -.-> BUS
    RECON -.-> RAW
    QUALITY["Contracts, quality, lineage and SLOs"] -.-> RAW
    QUALITY -.-> SILVER
    QUALITY -.-> GOLD
```

## Processing semantics

| Boundary | Required behavior |
|---|---|
| Service transaction | Domain state and outbox commit atomically |
| Event delivery | At least once; stable ID, key, contract and trace metadata |
| Consumer | Deduplicated/idempotent durable effect before checkpoint commit |
| Bronze | Lossless, replayable, source-positioned and quarantines corruption |
| Silver | Deterministic CDC, deletes, SCD, late data and source reconciliation |
| Gold | Declared grain, semantics, owner, SLO and ledger reconciliation |
| Feedback | Policy-approved API request; no direct operational database write |

