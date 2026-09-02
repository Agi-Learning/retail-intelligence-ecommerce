# Repository Structure

The monorepo implements three connected planes and one control fabric.

| Plane | Directories |
|---|---|
| Web experience | applications/frontend |
| Operational commerce | applications/backend and source-system |
| Data and intelligence | ingestion, lakehouse, data-products, analytics, machine-learning and ai |
| Control fabric | contracts, governance, infrastructure, tests, docs and CI |

Generated capacity manifests are planning evidence. They do not authorize
creating empty deployables, low-value tables or shared writable databases.

Each real service or product must have an owner, contract, tests, deployment
boundary, observability, support route and lifecycle.
