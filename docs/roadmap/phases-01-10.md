# Phases 1–10 — Application and Reliable Event Platform

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
