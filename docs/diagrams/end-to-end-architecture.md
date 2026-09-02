---
title: End-to-End Architecture
sidebar_position: 2
---

# End-to-End Architecture

[Diagram index](README.md) · [Architecture overview](../architecture/README.md)

The commit-ready vector diagram is [end-to-end-architecture.svg](end-to-end-architecture.svg). The Mermaid source below remains in Markdown for text search, review and maintenance.

![Retail Intelligence Platform end-to-end architecture](end-to-end-architecture.svg)

```mermaid
flowchart TB
    subgraph UX["Web experience"]
        SHELL["React shell"]
        MFE1["Account and catalog MFEs"]
        MFE2["Cart, orders, support and admin MFEs"]
        SHELL --> MFE1
        SHELL --> MFE2
    end

    subgraph EDGE["Edge and experience APIs"]
        FRONT["Azure Front Door, CDN and WAF"]
        ID["Microsoft Entra ID"]
        APIM["API Management"]
        BFF["Shopper and admin BFFs"]
        FRONT --> APIM --> BFF
        ID --> APIM
    end

    subgraph OPS["Operational commerce"]
        CUSTOMER["Customer and identity"]
        PRODUCT["Catalog, pricing and search"]
        COMMERCE["Cart, checkout, payment and order"]
        SUPPLY["Inventory and fulfillment"]
        ENGAGE["CMS, CRM and support"]
    end

    subgraph STORES["Service-owned stores"]
        PG["PostgreSQL per boundary"]
        REDIS["Redis"]
        SEARCH["OpenSearch"]
        OBJECT["Object storage"]
    end

    subgraph INTEGRATION["Events and ingestion"]
        OUTBOX["Transactional outbox"]
        CDC["Debezium and Kafka Connect"]
        BUS["Kafka or Azure Event Hubs"]
        ADF["Azure Data Factory"]
        ADLS["ADLS Gen2 raw landing"]
    end

    subgraph MESH["Azure Databricks data mesh"]
        LAKEFLOW["Lakeflow, Auto Loader and AUTO CDC"]
        MEDALLION["Domain Bronze, Silver and Gold products"]
        UC["Unity Catalog"]
        PURVIEW["Microsoft Purview"]
        CONTRACT["Executable product contracts"]
    end

    subgraph CONSUMERS["Governed consumption"]
        BI["Databricks SQL and Power BI"]
        ML["Features, MLflow and serving"]
        RAG["AI Search and RAG"]
        AGENT["Bounded agents"]
    end

    MFE1 --> FRONT
    MFE2 --> FRONT
    BFF --> CUSTOMER
    BFF --> PRODUCT
    BFF --> COMMERCE
    BFF --> SUPPLY
    BFF --> ENGAGE

    CUSTOMER --> PG
    PRODUCT --> PG
    PRODUCT --> SEARCH
    COMMERCE --> PG
    COMMERCE --> REDIS
    SUPPLY --> PG
    ENGAGE --> PG
    ENGAGE --> OBJECT

    CUSTOMER --> OUTBOX
    PRODUCT --> OUTBOX
    COMMERCE --> OUTBOX
    SUPPLY --> OUTBOX
    ENGAGE --> OUTBOX
    OUTBOX --> CDC --> BUS --> ADLS
    EXTERNAL["External databases, SaaS, APIs and files"] --> ADF --> ADLS

    ADLS --> LAKEFLOW --> MEDALLION
    UC -.-> MEDALLION
    PURVIEW -.-> MEDALLION
    CONTRACT -.-> MEDALLION

    MEDALLION --> BI
    MEDALLION --> ML
    MEDALLION --> RAG
    MEDALLION --> AGENT
    ML -->|"Governed API request"| APIM
    RAG -->|"Authorized structured lookup"| APIM
    AGENT -->|"Policy and approval"| APIM

    CONTROL["Security, privacy, quality, lineage, observability, CI/CD, SRE and FinOps"]
    CONTROL -.-> EDGE
    CONTROL -.-> OPS
    CONTROL -.-> INTEGRATION
    CONTROL -.-> MESH
    CONTROL -.-> CONSUMERS
```

## Boundary summary

- MFEs use BFF/domain APIs only.
- Microservices own transactional truth and writable data.
- The outbox/CDC path publishes facts without a database/event dual write.
- ADF lands controlled batch/external inputs.
- Domain teams own Bronze/Silver/Gold products under contracts and federated governance.
- BI/ML/RAG/agents consume governed ports; state changes return through APIs.
