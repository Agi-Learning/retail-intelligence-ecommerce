# Security and Privacy Architecture

[Documentation home](../README.md) · [Threat model](threat-model.md) · [Platform operations](../architecture/platform-operations.md)

## Trust boundaries

1. Browser to Azure edge and identity.
2. Edge/API Management to BFFs and services.
3. Service identity to service-owned stores.
4. Database log/outbox to connector and event backbone.
5. Event/batch inputs to ADLS and Databricks.
6. Product consumer to Unity Catalog/Purview governed assets.
7. Model/RAG/agent to tools and domain APIs.

## Baseline controls

- OIDC/OAuth with PKCE for web users and short-lived workload identities for services.
- Authorization enforced at edge and again by the owning service/data product/tool.
- Secrets in a secret manager, never source, images, events, tables, prompts or traces.
- TLS in transit, encryption at rest and private connectivity where justified.
- Service-specific database roles and event/data ACLs.
- Field classification, minimization, masking, retention and deletion propagation.
- Signed artifacts/SBOM, dependency scanning and reviewed infrastructure policy.
- Immutable audit records for privileged and agent actions.

## AI-specific controls

RAG retrieval applies source ACLs before context reaches the model. Agents use typed allow-listed tools, purpose-scoped identity, bounded steps/time/spend, validation, dry-run/approval, idempotency, audit and kill switch. Prompts never become an authorization boundary.

