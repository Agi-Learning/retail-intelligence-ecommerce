# Phases 11–20 — Data Mesh, Analytics, ML and Deep Learning

[Roadmap index](README.md) · [Phases 1–10](phases-01-10.md) · [Phases 11–20](phases-11-20.md) · [Phases 21–24](phases-21-24.md) · [All 120 lessons](all-120-lessons.md)

### Phase 11 — Azure landing zones and self-service Databricks platform

- **L051:** Learn the four data-mesh principles, source/aggregate/consumer-aligned products, ADLS Gen2, Parquet/Delta transaction logs, ACID/schema evolution/time travel, and the separation between platform ownership and domain-product ownership.
- **L052:** Design/provision dev-test-prod Azure data landing zones with subscriptions/resource groups, network/private endpoints/DNS, Entra groups/managed identities, Key Vault, ADLS containers, encryption, diagnostics, tags, budgets and recovery boundaries.
- **L053:** Design Azure Databricks workspaces/metastore, domain/environment catalog strategy, schemas, managed/external storage, credentials/external locations, cluster/serverless/SQL warehouse policies, tags, classification and least-privilege Unity Catalog grants.
- **L054:** Build self-service Terraform/Bicep and Declarative Automation Bundle modules for domain onboarding, messaging, ADF connector, catalog/schema, Lakeflow pipeline/job, quality, monitoring, access workflow, dashboard, runbook and cost allocation.
- **L055:** Onboard one domain through the paved road; verify reproducible provisioning, isolated identity, secret-free CI, policy compliance, diagnostics, deletion protection, drift detection, upgrade and teardown/recovery procedure.

**Artifact:** Governed Azure/Databricks landing zone and versioned self-service platform modules.  
**Gate:** A domain can provision an approved dev product without manual cloud configuration and cannot access another domain's restricted assets.

### Phase 12 — Domain data products, contracts, catalog, and output ports

- **L056:** Inventory existing and planned assets by Customer, Product, Commerce, Payment/Risk, Supply and Engagement; group them into source-aligned, aggregate, consumer-aligned and reference products with named producers/consumers.
- **L057:** Create versioned YAML/JSON product contracts covering purpose, owner/support, consumers/purpose, inputs/outputs, schema/semantics/grain, SLOs, quality, security/privacy, retention, lineage, cost, runbook and lifecycle.
- **L058:** Design addressable input/output ports for Kafka/Event Hubs streams, ADF/ADLS landing, Unity Catalog Delta tables/views, Databricks SQL, approved APIs and OpenSharing; specify identity, format, compatibility, query/volume limits and examples.
- **L059:** Register ownership, glossary, classifications, lineage, certification and access workflow in Microsoft Purview and Databricks assets/grants/technical lineage in Unity Catalog; declare an authoritative system for every shared metadata attribute and reconcile drift.
- **L060:** Build contract/schema/semantic/SLO/security/documentation CI, consumer-driven compatibility tests, dependency registration, access review, version/change notification, deprecation window, successor migration and deletion workflow.

**Artifact:** Searchable product catalog, executable contracts and consumer-tested output ports.  
**Gate:** A consumer can discover, understand, request, access and validate a product without undocumented producer knowledge; a breaking change is blocked or versioned.

### Phase 13 — Streaming/batch ingestion and replayable Bronze products

- **L061:** Ingest Kafka or Event Hubs with Lakeflow/Structured Streaming using domain identity, offsets, checkpoints, event metadata, schema registry, controlled trigger modes, lag/backpressure and raw-archive linkage.
- **L062:** Build metadata-driven ADF full/incremental/CDC pipelines for databases, files, APIs and SaaS sources with managed identity, watermarks/source positions, checksums, retries, delete handling, provenance, lineage and restart safety.
- **L063:** Use Auto Loader or equivalent incremental patterns to land files and CDC/event envelopes into domain Bronze Delta tables with immutable payload, source position, contract version, ingest timestamp and partition strategy.
- **L064:** Apply Bronze expectations for envelope readability, identity, source/topic/partition/offset, corruption, schema drift, rescued data, duplicates and classification; quarantine with owner alert instead of silently losing records.
- **L065:** Test initial load, restart, checkpoint loss/recovery, replay, file rediscovery, late arrival, schema change, throughput and source/event/archive-to-Bronze count/checksum reconciliation.

**Artifact:** Contracted, multi-source, domain-owned and replayable Bronze products.  
**Gate:** No accepted source record is silently lost, mutated or untraceable; all inputs meet their documented recovery and freshness behavior.

### Phase 14 — Silver/Gold domain products, cross-domain semantics, and BI

- **L066:** Parse event/contract versions, normalize identifiers/time/currency/reference data, deterministically deduplicate and apply ordered changes with Lakeflow AUTO CDC/SCD Type 1/2, deletes, snapshots and bitemporal history where justified.
- **L067:** Build trusted Customer, Product, Commerce, Payment/Risk, Supply and Engagement Silver products with domain invariants, late/out-of-order/restatement/backfill handling, quality expectations, quarantine and source reconciliation.
- **L068:** Design stable-grain facts/dimensions, surrogate keys/SCD joins and accumulating snapshots; build order/payment/revenue/returns/funnel, catalog/price/promotion, inventory/stockout/fulfillment and campaign/support Gold products.
- **L069:** Build governed cross-domain customer 360, enterprise KPIs, features and attribution as consumer-aligned products; define semantic metrics, consent boundaries, dependency contracts, Databricks SQL/Power BI models, APIs and approved sharing.
- **L070:** Optimize Delta layout/maintenance and SQL compute; implement freshness/availability/quality/cost SLOs, financial/source reconciliation, performance/load tests, certification evidence, usage telemetry and consumer acceptance.

**Artifact:** Certified domain and cross-domain Silver/Gold products plus governed semantic/BI output ports.  
**Gate:** Controlled CDC fixtures produce exact state; KPI definitions are approved; totals reconcile to authoritative ledgers; consumers meet access, query and freshness tests.

### Phase 15 — Federated governance, quality, observability, lifecycle, and DataOps

- **L071:** Form the simulated federated council and encode global interoperability, documentation, security, privacy, quality, compliance, lifecycle, SLO, support and FinOps policies while leaving domain-specific semantics with product owners.
- **L072:** Implement Entra/ADLS/Unity Catalog least privilege, governed tags/ABAC, row filters, column masks/dynamic views, purpose/consent/deletion propagation, audits, access expiry/recertification and Purview classification/glossary/workflow evidence.
- **L073:** Monitor product freshness, volume, validity, duplicates, nulls, schema/contract change, lineage/dependency impact, streaming lag/checkpoints, pipeline/warehouse performance, incidents, adoption, access lead time and cost; publish product fitness scorecards.
- **L074:** Add PySpark/SQL/Lakeflow/ADF unit, property, contract, compatibility, integration, migration, security, reconciliation and performance tests; promote infrastructure/pipelines/products with policy-as-code, approvals, immutable artifacts and rollback.
- **L075:** Operate alert routing, SLO/error budgets, runbooks, replay/backfill, disaster recovery, postmortems, consumer notification, version/deprecation/archive/deletion, platform upgrades, cost showback/optimization and product retirement.

**Artifact:** Federated, policy-automated and operable data-mesh control plane.  
**Gate:** A bad contract/deployment and a data-quality/SLO incident are blocked or detected, traced through lineage, contained, communicated, recovered and costed; a product version can be safely deprecated.

### Phase 16 — Data science and experimental discipline

- **L076:** Frame prediction target, decision, user, action, horizon, baseline, constraints, and expected business value.
- **L077:** Perform reproducible EDA, distributions, missingness, leakage checks, cohorts, seasonality, imbalance, and causal cautions.
- **L078:** Design ground-truth collection, delayed labels, manual labels, feedback APIs, quality sampling, and label versioning.
- **L079:** Create time/entity-aware train-validation-test splits and offline, online, system, fairness, and business metrics.
- **L080:** Refactor notebooks into tested packages and reproducible pipelines with documented datasets and assumptions.

**Artifact:** Approved problem statement, EDA, labels, baseline, and evaluation protocol.  
**Gate:** The target is observable and linked to a real decision; leakage and success metrics are explicitly tested.

### Phase 17 — Feature engineering and Feature Store

- **L081:** Build customer, product, order, price, inventory, session, and interaction features with ownership and definitions.
- **L082:** Implement batch windows, streaming windows, event time, watermarks, state, skew handling, and freshness tiers.
- **L083:** Perform point-in-time joins, label alignment, temporal validation, and leakage tests.
- **L084:** Register offline features, publish only required online features, and integrate automated lookup with serving.
- **L085:** Test feature correctness, freshness, null/default behavior, distribution, lineage, reuse, and training-serving parity.

**Artifact:** Governed feature products and training datasets.  
**Gate:** Recomputing the same feature as of the same timestamp is deterministic and leakage-free.

### Phase 18 — Classical ML retail use cases

- **L086:** Build seasonal-naive and statistical/tree-based demand-forecast models with backtesting and prediction intervals.
- **L087:** Build churn and CLV baselines, calibration, segment evaluation, action policy, and uplift caveats.
- **L088:** Combine payment/business rules, supervised fraud risk, anomaly signals, explanations, and review thresholds.
- **L089:** Build conversion/return/next-best-action propensity models with cost-sensitive thresholds.
- **L090:** Build popularity, co-occurrence, collaborative-filtering, and learning-to-rank recommendation baselines; measure ranking and business metrics.

**Artifact:** Reproducible ML baselines and decision policies.  
**Gate:** A model beats the deterministic baseline on agreed offline metrics and has a safe application fallback.

### Phase 19 — Deep learning, recommendations, search, and multimodal features

- **L091:** Learn tensors, embeddings, optimization, regularization, batching, GPU use, reproducibility, and discriminative/generative/hybrid selection.
- **L092:** Build a two-tower user/item retrieval model with negative sampling, candidate generation, approximate nearest-neighbor search, and cold-start handling.
- **L093:** Build a session/sequential Transformer or RNN baseline; compare accuracy, latency, throughput, and operational cost.
- **L094:** Create text/image product embeddings for similarity, duplicate detection, attribute extraction, and multimodal search with quality review.
- **L095:** Combine candidate retrieval, business rules, neural reranking, diversity, inventory constraints, explanations, and offline/online evaluation.

**Artifact:** Hybrid recommendation/search pipeline.  
**Gate:** Deep learning earns its added complexity through measured gain while meeting serving and cost limits.

### Phase 20 — MLOps, serving, monitoring, and feedback

- **L096:** Track code, data, parameters, metrics, artifacts, environments, and runs with MLflow.
- **L097:** Register models in Unity Catalog, add aliases/approval metadata/model cards, and implement reproducible promotion.
- **L098:** Deploy batch inference and online Model Serving with feature lookup, validation, timeout, cache, fallback, and autoscaling tests.
- **L099:** Implement shadow, canary, A/B, champion/challenger, rollback, and business-impact experiments.
- **L100:** Monitor drift, quality, calibration, latency, errors, cost, fairness, and outcomes; automate retraining only behind gates.

**Artifact:** Production-style model lifecycle.  
**Gate:** A new version can be evaluated, canaried, promoted, monitored, and rolled back without code improvisation.
