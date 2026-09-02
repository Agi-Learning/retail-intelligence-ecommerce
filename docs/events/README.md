# Event Documentation

[Documentation home](../README.md) · [Event architecture](../architecture/event-platform.md) · [Envelope example](../contracts/canonical-event-envelope.example.json)

## Catalog entry required for every event

Each event entry records owner, domain, event type/version, aggregate key, topic, schema subject, classification, retention, ordering guarantee, producers, consumers, example, SLO, replay behavior and deprecation policy.

## Canonical lifecycle

```text
business transaction -> outbox -> logical log -> Debezium/Connect
-> authoritative topic -> idempotent consumers -> ADLS/Bronze archive
```

## Naming

- Event types are completed business facts, for example `OrderConfirmed`.
- Topics follow `<environment>.<domain>.<aggregate>.<event-family>`.
- Registry subjects and AsyncAPI channels map unambiguously to the authoritative topic.
- Keys use the aggregate ID when per-aggregate ordering is required.

## Reliability checklist

- domain state and outbox commit atomically;
- event ID is globally unique and stable;
- consumers persist deduplication before unsafe side effects;
- offsets/checkpoints advance after durable processing;
- poison records enter owned quarantine with replay metadata;
- raw archive preserves source position and delete behavior;
- replay is tested against duplicates and out-of-order input;
- reconciliation compares business counts and monetary totals.

## Prohibited content

Do not publish secrets, payment-card data, password material, broad access tokens or unnecessary PII. Classification and minimization are contract requirements, not downstream cleanup tasks.

