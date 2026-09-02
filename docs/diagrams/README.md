# Architecture Diagrams

[Documentation home](../README.md) · [Architecture overview](../architecture/README.md)

| Diagram | Purpose |
|---|---|
| [End-to-end architecture](end-to-end-architecture.md) | Full web-to-service-to-data-to-intelligence topology, with the commit-ready [SVG](end-to-end-architecture.svg) |
| [Event and data flow](event-and-data-flow.md) | Streaming, batch, medallion and governed feedback paths |
| [Data-mesh operating model](data-mesh-operating-model.md) | Domain, platform, governance and consumer responsibilities |
| [Checkout saga](checkout-saga.md) | Transactional orchestration and compensations |
| [Intelligence feedback loop](intelligence-feedback-loop.md) | BI/ML/RAG/agent consumption and safe return path |

## Diagram maintenance

- Keep component names consistent with the architecture documents and executable configuration.
- Show systems of record and trust boundaries explicitly.
- Distinguish synchronous request paths from asynchronous events and analytical products.
- Show that intelligence actions return through owning service APIs.
- Update the related ADR and architecture document when a diagram changes materially.
