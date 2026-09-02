# Retail Intelligence Ecommerce Platform

An end-to-end learning and implementation monorepo covering:

- React and TypeScript web shell with independently deployable MFEs.
- Spring Boot BFFs and domain microservices.
- PostgreSQL, transactional outbox, Debezium and Kafka.
- Batch and streaming ingestion.
- Domain-owned Bronze, Silver and Gold lakehouse products.
- Azure, ADLS Gen2, Azure Databricks, Unity Catalog and Purview.
- Analytics, classical ML, deep learning, MLflow and model serving.
- Governed RAG, multimodal processing and controlled agents.
- Terraform, CI/CD, security, observability, DR, SRE and FinOps.
- Docusaurus documentation generated directly from the authoritative `docs/` tree.

## Architectural boundaries

1. MFEs call BFF or domain APIs; they never access databases, Kafka or the lakehouse.
2. Every microservice owns its transactional state and migrations.
3. Domain state and its outbox record commit atomically.
4. Delivery is treated as at-least-once; consumers are idempotent and reconciled.
5. The lakehouse never participates in checkout or another critical transaction.
6. AI proposes or requests actions through governed APIs and never writes operational databases.
7. Data products require contracts, quality, SLOs, lineage, security, support and lifecycle.

## Start

Read docs/README.md and docs/roadmap/README.md before adding implementation.

When `documentation-site/package.json` is present, run the documentation portal:

```bash
cd documentation-site
npm ci
npm start
```
