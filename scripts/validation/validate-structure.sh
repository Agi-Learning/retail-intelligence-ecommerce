#!/usr/bin/env bash

set -Eeuo pipefail

REPOSITORY_ROOT=$(cd "$(dirname "$0")/../.." && pwd)
missing=0

while IFS= read -r required_path; do
  [[ -z "$required_path" ]] && continue
  if [[ ! -e "$REPOSITORY_ROOT/$required_path" ]]; then
    printf 'Missing: %s\n' "$required_path" >&2
    missing=$((missing + 1))
  fi
done <<'REQUIRED_PATHS'
applications/frontend/shell
applications/frontend/mfes/catalog-search
applications/backend/platform/service-starter
applications/backend/services/customer-service
contracts/events/envelope
contracts/events/event-catalog.yaml
source-system/database/migrations/versioned
ingestion/streaming/cdc
lakehouse/bronze/customer
lakehouse/silver/customer
lakehouse/gold/customer
data-products/customer/customer-history
analytics/kpis
machine-learning/training/recommendations
ai/rag/retrieval
orchestration/databricks/pipelines
governance/catalog/unity-catalog
infrastructure/azure/terraform/environments/dev
infrastructure/kubernetes/overlays/local
tests/contracts/events
docs/architecture/end-to-end-architecture.md
docs/roadmap/README.md
REQUIRED_PATHS

if (( missing > 0 )); then
  printf 'Structure validation failed with %s missing paths.\n' "$missing" >&2
  exit 1
fi

printf 'Structure validation passed.\n'
