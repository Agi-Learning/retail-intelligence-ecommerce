# Retail Intelligence Docusaurus Site

This site publishes the repository's existing `../docs` directory. Markdown
remains the source of truth; Docusaurus supplies navigation, Mermaid rendering,
responsive presentation, local search, and a production build.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Run locally

```bash
cd documentation-site
npm ci
npm start
```

Open `http://localhost:3000`. The `prestart` task regenerates
`static/search-index.json` from all Markdown under `../docs`.

## Verify a production build

```bash
cd documentation-site
npm run typecheck
npm run build
npm run serve
```

The static site is written to `documentation-site/build/`.

## Environment variables

| Variable | Local default | Purpose |
|---|---|---|
| `DOCS_URL` | `http://localhost:3000` | Canonical site origin |
| `DOCS_BASE_URL` | `/` | Deployment path; include repository path for GitHub Pages |
| `DOCS_ORGANIZATION` | `Agi-Learning` | GitHub organization/user |
| `DOCS_PROJECT_NAME` | `retail-intelligence-ecommerce` | Repository name |
| `DOCS_REPOSITORY_URL` | Project GitHub URL | Navbar source link |

Copy `.env.example` only when local overrides are required. The deployment
workflow sets the URL and base URL directly.

## Authoring workflow

1. Edit files in `docs/`; do not create a second copy inside this directory.
2. Add `_category_.json` only to control sidebar labels and ordering.
3. Use fenced `mermaid` blocks for topology or sequences and committed SVG for
   the final architecture export.
4. Run `../scripts/documentation/validate-docs.sh`.
5. Run `npm run build`; broken internal links fail the build.

## Deployment

`.github/workflows/docs-docusaurus.yml` builds pull requests and deploys the
`main` branch through GitHub Pages. Enable **Settings → Pages → Source → GitHub
Actions** once for the repository.
