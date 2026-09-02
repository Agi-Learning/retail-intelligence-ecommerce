# Checkout Saga

[Diagram index](README.md) · [Application architecture](../architecture/application-platform.md) · [Event platform](../architecture/event-platform.md)

```mermaid
sequenceDiagram
    participant U as Web MFE
    participant B as Checkout BFF
    participant X as Checkout service
    participant I as Inventory service
    participant P as Payment service/provider
    participant O as Order service

    U->>B: Submit checkout and idempotency key
    B->>X: Validated checkout command
    X->>I: Reserve stock
    alt Stock unavailable
        I-->>X: Reject reservation
        X-->>B: Checkout rejected
    else Stock reserved
        I-->>X: Reservation ID
        X->>P: Authorize tokenized payment
        alt Payment declined or timeout
            P-->>X: Decline or ambiguous result
            X->>I: Release reservation when safe
            X->>X: Reconcile ambiguous provider outcome
        else Payment authorized
            P-->>X: Authorization ID
            X->>O: Create confirmed order
            O-->>X: Order ID and outbox event
            X-->>B: Checkout accepted
            B-->>U: Order confirmation
        end
    end
```

## Saga requirements

- Persist state and every transition.
- Make commands, callbacks and compensations idempotent.
- Use timeouts and explicit ambiguous states.
- Never hold a distributed database transaction.
- Reconcile provider, payment, order and inventory ledgers.
- Emit versioned outcome events after authoritative transitions.

