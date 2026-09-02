# Testing Documentation

[Documentation home](../README.md) · [Test strategy](test-strategy.md) · [Production readiness](../operations/production-readiness.md)

Tests live near code for fast feedback and under top-level `tests/` for cross-component contract, integration, streaming, data-quality, ML, AI, performance and end-to-end suites.

## Test ownership

- A producing service owns provider and event-contract tests.
- Consumers own tests for their declared assumptions.
- A data-product team owns transformation, quality, reconciliation and SLO tests.
- Model/RAG/agent owners own offline, adversarial, online and business-outcome evaluations.
- Platform/SRE owns common resilience, recovery and policy harnesses; domain owners still prove their workloads.

