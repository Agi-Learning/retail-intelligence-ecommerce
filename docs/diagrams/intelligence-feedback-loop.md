# Intelligence Feedback Loop

[Diagram index](README.md) · [Analytics, ML and AI](../architecture/analytics-ml-ai.md)

```mermaid
flowchart TB
    EVENTS["Domain events and outcomes"] --> PRODUCTS["Trusted data and feature products"]
    PRODUCTS --> BI["Certified analytics"]
    PRODUCTS --> ML["ML and deep learning"]
    PRODUCTS --> RAG["ACL-aware RAG"]
    PRODUCTS --> AGENT["Bounded agents"]

    ML --> EVAL["Evaluation, registry and monitoring"]
    RAG --> EVAL
    AGENT --> EVAL

    BI --> RESULT["Insight"]
    EVAL --> RESULT
    RESULT --> POLICY["Identity, policy, limits and approval"]
    POLICY --> API["Owning domain API"]
    API --> DECISION["Authoritative business decision"]
    DECISION --> EVENTS
```

## Control rule

Analytics and AI may recommend, explain or propose. The owning service authorizes and executes the state transition. Orders, prices, payment status, inventory, consent and customer records remain operational truth.

