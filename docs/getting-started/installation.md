# Installation and Workstation Baseline

[Getting started](README.md) · [Local platform runbook](../runbooks/local-platform.md) · [Roadmap](../roadmap/README.md)

## Recommended host

- Windows 11 with WSL2 and Ubuntu, or native Linux.
- At least 8 CPU cores, 32 GB RAM and 100 GB free SSD space for the full local data stack.
- Keep the repository on the Linux filesystem, for example `~/projects/retail-intelligence-ecommerce`.

## Required tools

Pin exact versions in `.tool-versions`, `.nvmrc`, Gradle wrapper, `pyproject.toml`/`uv.lock` and Terraform constraints during Phase 2.

| Tool group | Required capability |
|---|---|
| Git | source control and hooks |
| Docker Engine + Compose | local PostgreSQL, Kafka, Debezium, Redis, object storage and observability |
| Node.js + Corepack | React/TypeScript shell and MFEs |
| Java + Gradle wrapper | Spring Boot services, BFFs and gateway |
| Python + `uv` | data generation, PySpark, quality, ML and AI utilities |
| Azure CLI | authenticated Azure development |
| Terraform and optional Bicep CLI | reproducible cloud infrastructure |
| `jq`, `curl`, PostgreSQL client | smoke checks and operated diagnostics |

## Create the repository

Download `create-retail-intelligence-ecommerce.sh`, then run:

```bash
mkdir -p "$HOME/projects"
cd "$HOME/projects"
chmod +x "$HOME/Downloads/create-retail-intelligence-ecommerce.sh"
"$HOME/Downloads/create-retail-intelligence-ecommerce.sh" "$HOME/projects"
cd "$HOME/projects/retail-intelligence-ecommerce"
scripts/validation/validate-structure.sh
git status --short --branch
```

The creator refuses to overwrite an existing target. If the script is stored elsewhere, replace only the script path.

## Verify the workstation

```bash
git --version
docker --version
docker compose version
node --version
corepack --version
java -version
python3 --version
uv --version
az version
terraform version
```

Record the output in `docs/learning/evidence/L006-workstation.md` when Lesson `L006` begins.

## Configure local values

```bash
cp .env.example .env
```

Edit `.env` locally. Never commit it. Use development-only passwords and tokens; do not reuse production credentials.

## Initial validation

```bash
bash -n scripts/setup/*.sh scripts/validation/*.sh 2>/dev/null || true
scripts/validation/validate-structure.sh
rg -n "BEGIN (RSA|OPENSSH|EC) PRIVATE KEY|password\s*=\s*[^$]" --glob '!*.example' .
```

The last command should return no real secrets. Review any test fixture match manually.

## What to start first

Do not start every container on day one. Complete Phases 1–2, then bring up PostgreSQL and the Catalog vertical slice. Add Kafka/Debezium in Phase 8 and the local lakehouse runtime in Phase 11. This keeps failures attributable and resource usage manageable.

