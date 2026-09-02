# Complete 120-Lesson Implementation Roadmap

[Roadmap index](README.md) · [Phases 1–10](phases-01-10.md) · [Phases 11–20](phases-11-20.md) · [Phases 21–24](phases-21-24.md) · [All 120 lessons](all-120-lessons.md)

### Phase 1 — Business domains, data-mesh operating model, and architecture baseline

- **L001:** Convert retail actors and browse-to-support journeys into capabilities, bounded contexts, commands, events, decisions, KPIs, risks, and candidate data products.
- **L002:** Define Customer, Product, Commerce, Payment/Risk, Supply, Engagement, and Data/AI Platform domains; assign application ownership, data-product ownership, consumer responsibilities, and federated-governance representation.
- **L003:** Prioritize operational, analytics, ML, and GenAI use cases using business value, deterministic baseline, data readiness, latency, quality, privacy, explainability, risk, support, and cost.
- **L004:** Define service, MFE, event, data-product, model, and agent quality attributes/SLOs; create system-context, plane, domain, data-flow, threat, and Azure deployment diagrams.
- **L005:** Create the ADR register, product inventory, implementation backlog, dependency map, acceptance criteria, definition of done, milestone evidence, and responsibility matrix.

**Artifact:** Domain map, data-mesh operating model, architecture v2, use-case scorecard, ADR register, milestone backlog.  
**Gate:** Every MFE/service/product/platform component has a named requirement and owner; every AI use case has a non-AI baseline.

### Phase 2 — Workstation, versions, repository, and environments

- **L006:** Validate WSL2, CPU/RAM/disk allocation, networking, filesystem placement, and the 100 GB local-project budget.
- **L007:** Pin Node.js, package manager, TypeScript, React, MFE composition/build tooling, Java, Spring Boot, Gradle/Maven, database clients, Azure CLI, Terraform/Bicep, and browser-test versions.
- **L008:** Pin Python with `uv`, PySpark/Spark/Delta compatibility, notebooks, linting, typing, and tests.
- **L009:** Build Docker Compose for PostgreSQL, Kafka KRaft, Kafka Connect/Debezium, Redis, and optional OpenSearch/object-storage emulator.
- **L010:** Establish repository areas for `applications/frontend/shell`, domain MFEs, `applications/backend/bffs`, microservices, contracts, data products, platform modules, infrastructure, tests and docs; add configuration hierarchy, `.env.example`, secret handling, Git hooks, CI skeleton and reproducible bootstrap.

**Artifact:** Version manifest, architecture-aware repository, one-command local bootstrap.  
**Gate:** A clean machine can reproduce the environment and pass smoke tests without committing secrets.

### Phase 3 — Domain-driven microservices and secure physical data ownership

- **L011:** Run event storming for browse-to-delivery, returns, promotions, support, data-product publication, and consumer feedback; separate commands, domain events, integration events, and analytical facts.
- **L012:** Define Spring Boot microservice boundaries, aggregates, invariants, API/event ownership, synchronous/asynchronous calls, dependency direction, failure modes, and the application-domain-to-data-domain map.
- **L013:** Create conceptual/logical models, ubiquitous terminology, stable identifiers, temporal history, currency, timezone, tenant/market, consent, deletion, and reference-data rules.
- **L014:** Implement intentional normalization, PostgreSQL types, constraints, indexes, partitioning evidence, JSONB boundaries, audit columns, optimistic locking, and service-owned database credentials.
- **L015:** Implement isolated schemas/databases, owners/roles, per-service Flyway chains, pgModeler/DBML documentation, migration/rollback-forward tests, and a Spring Boot service template with health, telemetry, resilience, security and outbox support.

**Artifact:** Approved service/data-domain map, logical/physical model, microservice template and migration chains.  
**Gate:** No service writes another service's schema; constraints enforce invariants; least-privilege identities and migrations cannot cross unauthorized boundaries.

### Phase 4 — Web micro-frontends, edge, identity, BFFs, and API contracts

- **L016:** Select route-based composition and justified runtime module federation; build the React/TypeScript web shell plus Account, Catalog, Cart/Checkout, Orders, Support, and Admin MFEs with independent manifests, error boundaries and releases.
- **L017:** Define minimal shared design tokens, accessibility/localization, shell identity/navigation/feature flags, typed cross-MFE events, state boundaries, dependency/version policy, bundle budgets, SEO and failure isolation.
- **L018:** Configure local edge and the Azure Front Door/CDN/WAF + API Management target; create shopper/admin BFF boundaries, routing, TLS, CORS/CSP, rate limits, correlation IDs, caching and anti-bot controls.
- **L019:** Implement Entra/OIDC login, PKCE/session/refresh/logout, JWT validation, roles/claims, consent and security events; enforce authorization again in BFFs and domain microservices.
- **L020:** Design/version OpenAPI/AsyncAPI contracts, pagination, idempotency, optimistic concurrency, validation and errors; generate TypeScript/Java clients and add consumer/provider contracts, MFE composition/E2E/accessibility/telemetry/performance/security tests.

**Artifact:** Independently deployable web MFEs with an authenticated, observable BFF-to-microservice request path.  
**Gate:** Independent MFE rollout/rollback works; unauthorized, replayed, malformed and duplicate commands behave predictably; no MFE bypasses its API boundary.

### Phase 5 — Customer, catalog, pricing, and search microservices

- **L021:** Implement customer profiles, addresses, credentials boundary, consent, status history, and customer events.
- **L022:** Implement brands, categories, products, variants/SKUs, attributes, media, and publication workflow.
- **L023:** Implement price history, currency, tax inputs, promotion/coupon rules, effective dating, and approval/audit.
- **L024:** Build an OpenSearch read projection, indexing consumer, faceting, autocomplete, relevance tests, and rebuild/replay path.
- **L025:** Add service unit/component/contract tests, seed data, caching, observability, outbox event specifications, data classifications, and draft source-aligned product contracts.

**Artifact:** Secure browse/search/profile capability with versioned events.  
**Gate:** Search is rebuildable from sources/events, and price/profile truth remains in owning services.

### Phase 6 — Transactional commerce microservices and sagas

- **L026:** Implement active/durable carts, totals, promotions, expiration, merge-on-login, and abandonment events.
- **L027:** Implement checkout orchestration, quote validation, address/shipping choice, inventory checks, and workflow state.
- **L028:** Integrate a payment sandbox using tokenization, signed webhooks, idempotent authorization/capture/refund, and reconciliation.
- **L029:** Implement order ledger/status transitions, order items, stock/reservation/movement ledgers, and oversell protection.
- **L030:** Implement shipping quotes, shipment/tracking lifecycle, the checkout saga, compensations, timeouts, and recovery.

**Artifact:** End-to-end sandbox purchase and fulfillment journey.  
**Gate:** Duplicate submissions do not duplicate orders/payments; injected failures compensate or reconcile correctly.

### Phase 7 — Engagement microservices, support, and behavioral tracking

- **L031:** Implement content models, media pipeline, versioning, scheduling, preview, publication, CDN invalidation, and accessibility metadata.
- **L032:** Implement customer segments, campaigns, touchpoints, suppression/consent, attribution, and CRM events.
- **L033:** Implement email/SMS/push templates, provider adapters, retries, deduplication, preferences, bounce/delivery events.
- **L034:** Implement support tickets, case history, SLA/escalation, attachments, customer-visible audit, and knowledge articles.
- **L035:** Design privacy-aware clickstream/session/product-impression/add-to-cart/search tracking with bot filtering, identity stitching, consent, event-time, schema, retention, replay and Engagement-domain product rules.

**Artifact:** Complete engagement and telemetry plane.  
**Gate:** Consent and suppression are enforced end to end, and every tracked field has an owner and purpose.

### Phase 8 — Domain events and common Kafka/Event Hubs platform

- **L036:** Distinguish commands, domain/integration events, event notifications and event-carried state; finalize the canonical envelope, ownership, classification, event-time, trace and data-product input-port metadata.
- **L037:** Create an ADR and compatibility test for local Kafka and the Azure target—Event Hubs Kafka endpoint or managed Kafka—covering protocol features, Connect/Debezium, transactions, retention, replay, quotas, security, operations and cost; choose one authoritative backbone per stream.
- **L038:** Design namespace/topic/event-hub names, aggregate keys, partition counts, ordering, retention/compaction, replication/resilience, consumer groups, environment/domain isolation, quotas and capacity growth.
- **L039:** Implement Schema Registry, Avro/Protobuf/JSON Schema as appropriate, semantic versions, backward/forward compatibility, AsyncAPI/event catalog, examples, ownership and contract CI.
- **L040:** Implement secured producers/consumers, offsets, rebalancing, idempotence, backpressure, pause/resume, lag/SLO monitoring, retry/quarantine, poison-record handling, replay tooling and OpenTelemetry propagation.

**Artifact:** Governed common messaging product, event catalog and cloud-backbone ADR.  
**Gate:** A breaking schema is rejected; Kafka and selected Azure target compatibility is evidenced; a consumer can rebuild/replay without corrupting state.

### Phase 9 — Transactional outbox, CDC, sagas, archival, and reconciliation

- **L041:** Implement service-owned outbox tables and atomic domain-state/outbox writes, stable event IDs, publish/cleanup status, partition keys, retention and operational metrics.
- **L042:** Configure PostgreSQL logical decoding, Debezium snapshots, offsets, schema history, heartbeats and secure Kafka Connect against the chosen backbone; test initial snapshot, restart and failover.
- **L043:** Preserve Debezium envelopes, transaction/source positions, before/after images, deletes/tombstones, headers and contract versions; land a lossless raw archive in ADLS-compatible storage without adding an application dual write.
- **L044:** Implement inbox/deduplication, idempotent consumers, per-key ordering, optimistic concurrency, side-effect safety, retry exhaustion, quarantine, replay and duplicate/out-of-order/delete fixtures.
- **L045:** Persist checkout/fulfillment saga state, compensations and timeouts; reconcile order, payment, stock and shipment ledgers plus event/archive counts, and publish incident/recovery evidence.

**Artifact:** Reliable transaction-to-event-to-raw-archive path.  
**Gate:** Crash, restart, duplicate, out-of-order, delete, replay and partial-provider-failure tests converge on authoritative state and reconciled counts.

### Phase 10 — Synthetic data, 20M→100M scale, and end-to-end performance

- **L046:** Build deterministic, referentially valid synthetic customers, products, carts, orders, payments, inventory, events, clickstream and malformed/late/delete fixtures with realistic skew and configurable distributions.
- **L047:** Generate/load 20M rows locally in resumable batches, preserve lineage/checksums, measure storage, then design the partitioned 100M-row and continuous-stream expansion.
- **L048:** Tune PostgreSQL and Spring Boot using `EXPLAIN (ANALYZE, BUFFERS)`, indexes, statistics, vacuum, pools, caching, partitions, concurrency, timeouts and failure-injection evidence.
- **L049:** Load/soak-test MFEs, BFFs, APIs, Kafka/Event Hubs clients, Connect/CDC and Bronze landing for throughput, p95/p99 latency, lag, skew, hot keys, retry storms, backpressure and graceful degradation.
- **L050:** Model disk/CPU/RAM/network, ADLS/Delta compression, retention, checkpoints, partitions, Databricks/ADF compute, observability overhead and Azure cost; map capacity to SLOs and the 100 GB local budget.

**Artifact:** Repeatable domain-data generator, end-to-end benchmark suite and local/Azure capacity-cost model.  
**Gate:** Targets are evidenced by measurements, failures and recovery; local results remain inside the resource budget and cloud sizing has traceable assumptions.

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

### Phase 21 — LLM foundations, prompts, evaluation, and serving

- **L101:** Learn tokens, context, embeddings, decoding, structured output, tool calling, model routing, hosted/open models, and latency/cost trade-offs.
- **L102:** Build versioned system/user prompt templates, schemas, examples, context rules, fallback behavior, and prompt CI.
- **L103:** Create golden datasets and scorers for correctness, instruction following, groundedness, safety, style, latency, and cost.
- **L104:** Implement model gateway controls, authentication, quotas, caching, redaction, provider fallbacks, tracing, and budget alerts.
- **L105:** Prototype product-description and support-answer generation with clear labeling, review workflow, and deterministic rollback.

**Artifact:** Evaluated, governed LLM service foundation.  
**Gate:** No prompt/model change ships without repeatable evaluation and privacy/security review.

### Phase 22 — RAG and governed enterprise knowledge

- **L106:** Inventory/classify sources; parse, clean, deduplicate, chunk, enrich, version, and schedule knowledge ingestion.
- **L107:** Build embeddings and hybrid AI Search, metadata filtering, reranking, freshness, deletion, and index-rebuild workflows.
- **L108:** Add authorized structured-data/API/SQL tools for customer/order/metric facts instead of forcing all data into vectors.
- **L109:** Generate grounded responses with citations, source dates, uncertainty, refusal, access-control filtering, and safe output handling.
- **L110:** Evaluate retrieval recall, context precision, answer correctness, groundedness, citation validity, safety, latency, cost, and production feedback.

**Artifact:** Production-style support/catalog/analytics RAG service.  
**Gate:** The system refuses unsupported answers, preserves source ACLs, and meets the golden-set threshold.

### Phase 23 — Agentic and multimodal workflows

- **L111:** Implement perception, task state, short-term context, approved memory, knowledge retrieval, planning, decision, action, and observation.
- **L112:** Build a typed tool registry with least-privilege identities, input/output schemas, timeouts, idempotency, audit, and scoped domain APIs.
- **L113:** Compare deterministic workflow, single-agent router, supervisor/specialists, and event-driven agents; choose the smallest justified pattern.
- **L114:** Add risk tiers, policy-as-code, dry run, human approval, compensation, limits, escalation, and kill switches for state-changing tools.
- **L115:** Trace and evaluate goal/plan/action alignment, tool correctness, prompt injection, memory poisoning, privilege abuse, cascading failure, outcome, latency, and cost.

**Artifact:** Bounded support or data-quality agent with governed tools.  
**Gate:** Red-team tests cannot make the agent exceed its identity, data, tool, spend, or approval boundary.

### Phase 24 — Production platform and capstone

- **L116:** Provision the production Azure landing zones, Entra identities, private network/DNS/endpoints, Front Door/WAF, APIM, AKS/managed compute, PostgreSQL/Redis, chosen Kafka/Event Hubs backbone, ADF, ADLS, Azure Databricks/Unity Catalog, Purview integration, Key Vault, monitoring and policies with Terraform/Bicep.
- **L117:** Implement independent MFE, microservice/database, event-contract, self-service platform, data-product, model and agent CI/CD with artifact signing/SBOM, contract/migration order, certification, blue-green/canary rollout, consumer notice and automated rollback.
- **L118:** Define autoscaling, zone/region resilience, backups and restore tests, RTO/RPO, event/data replay, chaos exercises, capacity, retention/deletion, observability, SLO/error budgets, support/on-call and domain/product FinOps showback.
- **L119:** Run end-to-end correctness, MFE composition, API/event/product contract, data quality/lineage/access/lifecycle, load/soak/resilience/privacy/security, DR, ML, RAG and agent evaluations; remediate or explicitly own every release risk.
- **L120:** Demonstrate web MFE action → BFF → owning microservice transaction/outbox → Kafka/Event Hubs → ADLS/Databricks domain products → Purview/Unity Catalog discovery/governance → BI/model/agent → governed service action and measured feedback; defend decisions and issue the production-readiness report.

**Artifact:** Capstone platform, runbooks, evidence pack, and production-readiness review.  
**Gate:** All milestone acceptance tests pass, residual risks are owned, and rollback/recovery has been demonstrated.

---
