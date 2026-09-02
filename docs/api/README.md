# API Documentation

[Documentation home](../README.md) · [Application architecture](../architecture/application-platform.md) · [Event documentation](../events/README.md)

## API ownership

Each BFF or microservice owns its OpenAPI definition under `contracts/api/<owner>/`. Generated TypeScript and Java clients are build artifacts; the OpenAPI source is authoritative.

## Command contract requirements

Every mutating operation defines:

- authentication and required roles/scopes;
- idempotency-key scope, storage duration and duplicate response;
- validation and domain invariants;
- optimistic concurrency/version behavior;
- timeout and retry safety;
- stable error envelope and trace/correlation ID;
- audit and privacy behavior;
- emitted integration events.

## Query contract requirements

Every query defines authorization, pagination, filters, sorting, maximum page size, consistency/freshness, caching and field-level classification.

## Standard headers

| Header | Direction | Purpose |
|---|---|---|
| `Authorization` | request | OIDC/OAuth bearer credential |
| `Idempotency-Key` | command request | stable business retry key |
| `If-Match` | conditional command | optimistic concurrency |
| `traceparent` | both | W3C distributed tracing |
| `X-Correlation-Id` | both | request/workflow diagnosis |
| `Retry-After` | response | bounded retry guidance |

## Versioning

- Prefer backward-compatible additive changes.
- Treat removal, renaming, type narrowing and semantic reinterpretation as breaking.
- Run consumer/provider contract tests against supported versions.
- Publish deprecation date, affected consumers, migration instructions and removal criteria.

## Browser boundary

The browser calls Front Door/API Management and a purpose-specific BFF. It never calls a service database, Kafka/Event Hubs, ADLS or Databricks directly.

