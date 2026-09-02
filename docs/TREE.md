# Documentation Tree

[Documentation home](README.md)

```text
docs/
├── README.md
├── TREE.md
├── references.md
├── getting-started/
│   ├── README.md
│   ├── installation.md
│   └── implementation-workflow.md
├── architecture/
│   ├── README.md
│   ├── retail-intelligence-platform-architecture-and-roadmap.md
│   ├── application-platform.md
│   ├── event-platform.md
│   ├── data-mesh.md
│   ├── analytics-ml-ai.md
│   ├── platform-operations.md
│   └── generated/
│       └── README.md
├── diagrams/
│   ├── README.md
│   ├── end-to-end-architecture.md
│   ├── end-to-end-architecture.svg
│   ├── event-and-data-flow.md
│   ├── data-mesh-operating-model.md
│   ├── checkout-saga.md
│   └── intelligence-feedback-loop.md
├── roadmap/
│   ├── README.md
│   ├── all-120-lessons.md
│   ├── phases-01-10.md
│   ├── phases-11-20.md
│   └── phases-21-24.md
├── contracts/
│   ├── README.md
│   ├── canonical-event-envelope.example.json
│   └── data-product-contract.example.yaml
├── api/
│   └── README.md
├── data-flow/
│   └── README.md
├── data-model/
│   └── README.md
├── events/
│   └── README.md
├── data-products/
│   └── README.md
├── governance/
│   └── README.md
├── learning/
│   ├── README.md
│   ├── lesson-template.md
│   └── progress-tracker.md
├── decisions/
│   ├── README.md
│   └── ADR-TEMPLATE.md
├── security/
│   ├── README.md
│   └── threat-model.md
├── testing/
│   ├── README.md
│   └── test-strategy.md
├── runbooks/
│   ├── README.md
│   ├── local-platform.md
│   └── replay-and-recovery.md
└── operations/
    ├── README.md
    └── production-readiness.md
```

## Ownership of documentation areas

| Area | Maintainer | Update trigger |
|---|---|---|
| `getting-started/` | Developer experience/platform owner | Toolchain, bootstrap or lesson workflow changes |
| `architecture/` | Architecture and platform owners | Component, boundary, technology or deployment decision changes |
| `diagrams/` | Owner of the matching architecture document | Flow, dependency, trust boundary or lifecycle changes |
| `roadmap/` | Learning/implementation lead | Phase gate or lesson outcome changes |
| `api/`, `events/`, `data-model/`, `data-products/` | Producing domain plus consumers | Published interface, semantics or SLO changes |
| `governance/`, `security/`, `testing/` | Federated governance, security and quality owners | Policy, threat, control or verification changes |
| `learning/` | Lesson owner | Lesson status, evidence or learned outcome changes |
| `contracts/` | Producing domain plus governance | Event or data-product interface changes |
| `decisions/` | Decision owner and reviewers | Any material architecture trade-off |
| `runbooks/` | Service/product owner with platform/SRE | Alert, incident, replay, recovery or dependency changes |
| `operations/` | Platform/SRE/security owners | Release, incident, recovery, SLO or control changes |

## Source-of-truth hierarchy

1. Executable application/data contracts and tested code define runtime behavior.
2. Accepted ADRs define why architecture choices were made.
3. The master architecture document describes the current system and target state.
4. Focused guides and diagrams provide navigable views of the same design.
5. Roadmap files define implementation order and evidence gates; they do not override accepted contracts or ADRs.
