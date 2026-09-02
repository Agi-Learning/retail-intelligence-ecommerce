# Local Platform Runbook

[Runbooks](README.md) · [Installation](../getting-started/installation.md)

## Start

```bash
cp -n .env.example .env
docker compose -f infrastructure/docker/data-platform/compose.yml config
docker compose -f infrastructure/docker/data-platform/compose.yml up -d
docker compose -f infrastructure/docker/data-platform/compose.yml ps
```

Start only the profiles required by the active phase if the compose file defines profiles.

## Smoke checks

```bash
docker compose -f infrastructure/docker/data-platform/compose.yml ps
curl --fail --silent http://localhost:8083/connectors
curl --fail --silent http://localhost:8081/subjects
```

Ports and health URLs are examples until Phase 2 freezes the local manifest.

## Stop safely

```bash
docker compose -f infrastructure/docker/data-platform/compose.yml stop
```

Do not use volume deletion during normal stop/restart or incident diagnosis. Capture container status and relevant bounded log windows before making stateful recovery changes.

## Failure triage

1. Confirm disk/memory and container health.
2. Check dependency order and network/DNS resolution.
3. Inspect bounded logs for the failing component.
4. Check database migration, Kafka metadata, connector offsets and schema history.
5. Apply the component-specific recovery procedure and verify business/data reconciliation.

