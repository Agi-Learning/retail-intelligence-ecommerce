# Event and Data Replay Runbook

[Runbooks](README.md) · [Event platform](../architecture/event-platform.md) · [Data flows](../data-flow/README.md)

## Preconditions

- Incident/change ticket and named operator.
- Exact source, contract versions, time/offset range and affected consumers.
- Backup/checkpoint of mutable consumer state.
- Approved isolation from live processing where required.
- Expected counts, monetary totals and state transitions.

## Procedure

1. Reproduce the issue with a bounded fixture.
2. Validate schema compatibility and upcasters.
3. Replay to a shadow topic/table/index for high-impact data.
4. Compare event IDs, counts, sums, deletes and final entity state.
5. Quarantine invalid records with reason and ownership.
6. Promote/reset only after the reconciliation gate passes.
7. Resume live processing and verify lag/freshness/SLO recovery.
8. Record offsets, versions, commands, results and unresolved differences.

## Stop conditions

Stop if the source range is ambiguous, schema meaning is unknown, a replay would repeat an unsafe external side effect, expected totals are unavailable or access/approval is missing.

