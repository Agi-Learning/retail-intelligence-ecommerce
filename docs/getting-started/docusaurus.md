---
title: Docusaurus Documentation Site
sidebar_position: 4
---

# Docusaurus Documentation Site

The repository publishes this complete Markdown tree through Docusaurus. The
site adds navigation, responsive rendering, Mermaid diagrams, the committed SVG
architecture export, dark mode, and local full-text search.

## Source-of-truth rule

Edit Markdown only under `docs/`. The Docusaurus project lives in
`documentation-site/` and points its docs plugin to `../docs`. Never copy the
120 lessons into `documentation-site/docs`; two copies would drift.

## Install and run

```bash
cd documentation-site
npm ci
npm start
```

Open `http://localhost:3000`. Before Docusaurus starts, the project regenerates
`static/search-index.json` from every committed Markdown page.

## Validate before commit

From the repository root:

```bash
scripts/documentation/validate-docs.sh
cd documentation-site
npm run typecheck
npm run build
```

The first command checks the exact 24-phase/120-lesson contract, sequential
lesson numbers, required documents, SVG validity, and relative links. The site
build then checks Docusaurus routes and renders Mermaid diagrams.

## Add or reorganize documentation

1. Add the page under the appropriate `docs/<area>/` directory.
2. Link it from that area's `README.md` when it is a primary entry point.
3. Update `docs/TREE.md`.
4. Set `sidebar_position` in page front matter only when order matters.
5. Update the area's `_category_.json` only when the category name or position
   changes.
6. Run both validation commands above.

## Search design

`documentation-site/scripts/build-search-index.mjs` recursively indexes page
titles, headings, and body text. The `/search` page ranks title matches first,
then headings, then body content. This is appropriate for local and internal
use because it needs no search credential and sends no content to a third-party
index.

If public traffic later requires typo tolerance, analytics, and federated
search, adopt an approved hosted provider through an ADR; do not silently
replace the local privacy boundary.

## GitHub Pages

The workflow `.github/workflows/docs-docusaurus.yml` performs the following:

1. Install pinned dependencies with `npm ci`.
2. Validate the source Markdown.
3. Run the TypeScript check.
4. Build the static site using the repository-specific base URL.
5. Upload and deploy the build only for `main` branch pushes.

Enable **Settings → Pages → Source → GitHub Actions** in the GitHub repository.
Pull requests build and validate the site but do not deploy it.

## Definition of done

- Markdown validation passes.
- Docusaurus TypeScript validation passes.
- The production build completes with no broken link.
- `/search` returns the updated page.
- Mermaid diagrams render in light and dark modes.
- `docs/diagrams/end-to-end-architecture.svg` opens from the diagram index.
