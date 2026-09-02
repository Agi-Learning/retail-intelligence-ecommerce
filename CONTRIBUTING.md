# Contributing

1. Make one bounded change per branch.
2. Update the owning API, event or data-product contract with interface changes.
3. Add unit, contract and integration tests at the correct boundary.
4. Never modify an applied versioned database migration.
5. Never commit secrets, generated datasets, checkpoints or local warehouses.
6. Record material architecture trade-offs as ADRs.
7. Do not create empty services merely to match a scale manifest.
