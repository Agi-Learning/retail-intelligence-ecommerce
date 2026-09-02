# Federated Governance

[Documentation home](../README.md) · [Data-mesh architecture](../architecture/data-mesh.md) · [Security](../security/README.md)

## Operating rule

Domains own meaning and product outcomes. The platform supplies paved roads. A federated council defines global interoperability, security, privacy, quality and lifecycle rules and encodes them in CI/policy wherever possible.

## Authority map

| Concern | Authority |
|---|---|
| Business definition and product acceptance | domain product owner |
| Enterprise glossary/discovery/classification | Microsoft Purview |
| Databricks grants, tags, masks, filters and technical lineage | Unity Catalog |
| Cloud resource policy | Azure Policy plus Terraform/Bicep validation |
| Event/API schema compatibility | contract repository and CI |
| Data quality thresholds | domain contract above federated minimum |
| Incident severity and SLO | product/service owner with platform/SRE policy |

Do not maintain two conflicting authorities for ownership, classification, lifecycle or metric meaning.

## Global policies

- every asset has an owner and classification;
- every published interface is versioned and compatibility-tested;
- restricted data uses purpose-bound access and time-limited grants;
- retention/deletion propagates across lakehouse, features, indexes and traces;
- production changes are reviewable, attributable and reversible;
- costs are tagged and allocated by environment/domain/product;
- deprecation identifies consumers and provides a migration window.

