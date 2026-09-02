# Threat Model

[Security home](README.md)

| Threat | Example | Required controls and tests |
|---|---|---|
| Account/session compromise | stolen token or fixation | PKCE, secure cookies/token handling, rotation, logout/revocation, anomaly logging |
| Broken authorization | customer reads another order | object-level checks, tenant/purpose scope, negative contract/E2E tests |
| API abuse | credential stuffing or checkout replay | WAF/bot/rate limits, idempotency, fraud signals, bounded retries |
| Data-store crossover | service writes another schema | separate roles, migration ownership, architecture tests |
| Event poisoning | forged or malformed event | producer ACL, schema validation, classification, quarantine and provenance |
| Replay side effects | duplicate payment/email | inbox/dedup, idempotency keys and reconciliation |
| Data exfiltration | restricted rows copied to BI/vector index | UC grants/ABAC, masks/filters, ACL-preserving indexing and audit |
| Supply-chain compromise | malicious dependency/image | locks, SCA/SAST, SBOM, signing, provenance and policy gates |
| Prompt injection | document tells agent to call tool | separate instructions/data, tool policy, validation, least privilege and adversarial eval |
| Memory poisoning | untrusted durable agent memory | write policy, provenance, review, expiry and retrieval filtering |
| Excessive agency | autonomous refund/price change | typed tools, thresholds, approval, dry run, audit, compensation and kill switch |
| Cost denial | unbounded model/tool loop | quotas, step/time/token budgets, circuit breakers and cost alerts |

Review this model at every phase gate and whenever a new trust boundary, data class, external provider, model or tool is introduced.

