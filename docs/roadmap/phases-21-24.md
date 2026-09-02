# Phases 21–24 — GenAI, Agents and Production Capstone

[Roadmap index](README.md) · [Phases 1–10](phases-01-10.md) · [Phases 11–20](phases-11-20.md) · [Phases 21–24](phases-21-24.md) · [All 120 lessons](all-120-lessons.md)

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
