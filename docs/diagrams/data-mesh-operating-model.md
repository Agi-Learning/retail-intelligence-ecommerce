# Data-Mesh Operating Model

[Diagram index](README.md) · [Data-mesh architecture](../architecture/data-mesh.md)

```mermaid
flowchart TB
    DOMAIN["Domain product teams"] --> PRODUCTS["Source, aggregate and consumer-aligned products"]
    PLATFORM["Self-service platform team"] --> PAVED["Landing zones, templates, messaging, pipelines and observability"]
    PAVED --> DOMAIN
    COUNCIL["Federated governance council"] --> POLICY["Interoperability, security, privacy, quality and lifecycle policy"]
    POLICY --> DOMAIN
    POLICY --> PAVED
    PRODUCTS --> CATALOG["Purview and Unity Catalog"]
    CATALOG --> CONSUMERS["Named consumers with approved purpose"]
    CONSUMERS --> FEEDBACK["Usage, quality and product feedback"]
    FEEDBACK --> DOMAIN
```

## Responsibility mapping

| Capability | Domain team | Platform team | Federated council | Consumer |
|---|---|---|---|---|
| Business meaning | Accountable | Consulted | Global terminology standards | Validates usefulness |
| Product contract | Owns | Supplies schema/template/registry | Defines minimum fields/policy | Registers dependency |
| Pipeline and quality | Owns product logic/SLO | Supplies runtime and controls | Defines global minimum | Reports observed quality |
| Access and privacy | Classifies/approves | Automates grants/masks/audit | Defines policy | States purpose and constraints |
| Lifecycle | Versions/deprecates/supports | Supplies usage/dependency tooling | Defines notice/retention | Migrates before deadline |
| Cost | Owns product budget | Allocates and optimizes platform | Defines allocation policy | Uses within contracted limits |

