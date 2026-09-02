# Contract Documentation

[Documentation home](../README.md) · [Event architecture](../architecture/event-platform.md) · [Data mesh](../architecture/data-mesh.md)

Contracts turn architecture boundaries into testable interfaces.

## Included examples

- [Canonical event envelope](canonical-event-envelope.example.json)
- [Data-product contract](data-product-contract.example.yaml)

## Event-contract workflow

1. The producing domain defines owner, business meaning, aggregate key, payload, classification and examples.
2. The schema receives a semantic version and compatibility policy.
3. CI validates schema syntax, required envelope fields, prohibited fields, examples and compatibility.
4. Producer and consumer contract tests run.
5. The schema and metadata publish to Schema Registry/event catalog.
6. Consumers register dependencies and receive breaking/deprecation notices.

## Data-product contract workflow

1. A producer and named consumer agree the purpose, semantics, ports, SLO, quality and access.
2. The contract is stored beside pipeline code and validated in CI.
3. The product registers into Purview/Unity Catalog with declared authoritative metadata fields.
4. Certification verifies schema, quality, security, lineage, SLO and consumer tests.
5. Runtime monitors compare observed behavior with the contract.
6. Changes follow compatibility, versioning and deprecation policy.

## Contract gates

- No missing owner, purpose, grain/key or support contact.
- No prohibited payment secrets or unjustified PII.
- No breaking schema change under a backward-compatible version.
- No publication without access policy, quality checks, lineage and SLO monitor.
- No deprecation without known-consumer notification and migration window.

