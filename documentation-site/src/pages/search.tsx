import type {ReactNode} from 'react';
import {useEffect, useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './search.module.css';

type SearchPage = {
  title: string;
  section: string;
  route: string;
  headings: string[];
  excerpt: string;
  content: string;
};

type SearchIndex = {
  generatedAt: string;
  pages: SearchPage[];
};

type SearchResult = SearchPage & {score: number};

function occurrenceCount(value: string, term: string): number {
  let count = 0;
  let cursor = 0;
  while ((cursor = value.indexOf(term, cursor)) !== -1) {
    count += 1;
    cursor += term.length;
  }
  return count;
}

function resultScore(page: SearchPage, terms: string[]): number {
  const title = page.title.toLowerCase();
  const headings = page.headings.join(' ').toLowerCase();
  const content = page.content.toLowerCase();

  if (!terms.every((term) => `${title} ${headings} ${content}`.includes(term))) {
    return 0;
  }

  return terms.reduce(
    (score, term) =>
      score +
      occurrenceCount(title, term) * 20 +
      occurrenceCount(headings, term) * 8 +
      Math.min(occurrenceCount(content, term), 12),
    0,
  );
}

function matchingExcerpt(page: SearchPage, terms: string[]): string {
  const content = page.content;
  const lowerContent = content.toLowerCase();
  const positions = terms
    .map((term) => lowerContent.indexOf(term))
    .filter((position) => position >= 0);

  if (positions.length === 0) return page.excerpt;
  const start = Math.max(0, Math.min(...positions) - 90);
  const end = Math.min(content.length, start + 300);
  return `${start > 0 ? '…' : ''}${content.slice(start, end)}${
    end < content.length ? '…' : ''
  }`;
}

export default function Search(): ReactNode {
  const indexUrl = useBaseUrl('/search-index.json');
  const [index, setIndex] = useState<SearchIndex | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    let active = true;
    fetch(indexUrl)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json() as Promise<SearchIndex>;
      })
      .then((value) => {
        if (active) setIndex(value);
      })
      .catch((reason: unknown) => {
        if (active) {
          setError(reason instanceof Error ? reason.message : 'Unknown error');
        }
      });

    return () => {
      active = false;
    };
  }, [indexUrl]);

  const terms = useMemo(
    () =>
      query
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter((term) => term.length > 1),
    [query],
  );

  const results = useMemo<SearchResult[]>(() => {
    if (!index || terms.length === 0) return [];
    return index.pages
      .map((page) => ({...page, score: resultScore(page, terms)}))
      .filter((page) => page.score > 0)
      .sort(
        (left, right) =>
          right.score - left.score || left.title.localeCompare(right.title),
      )
      .slice(0, 50);
  }, [index, terms]);

  return (
    <Layout
      title="Search documentation"
      description="Search the Retail Intelligence architecture and 120-lesson roadmap">
      <main className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <p className={styles.eyebrow}>LOCAL DOCUMENTATION SEARCH</p>
            <h1>Find architecture, lessons, and runbooks</h1>
            <p>
              Search all committed Markdown. No external search account or data
              transfer is required.
            </p>
          </header>

          <label className={styles.searchLabel} htmlFor="docs-search">
            Search terms
          </label>
          <input
            id="docs-search"
            className={styles.searchInput}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try: outbox CDC, data product SLO, L042, RAG guardrails…"
            autoComplete="off"
            autoFocus
          />

          <div className={styles.status} aria-live="polite">
            {error && `Search index could not be loaded: ${error}`}
            {!error && !index && 'Loading the documentation index…'}
            {index && terms.length === 0 && `${index.pages.length} pages indexed.`}
            {index && terms.length > 0 && `${results.length} result(s).`}
          </div>

          <section className={styles.results} aria-label="Search results">
            {results.map((result) => (
              <article className={styles.result} key={result.route}>
                <p className={styles.section}>{result.section}</p>
                <h2>
                  <Link to={result.route}>{result.title}</Link>
                </h2>
                <p>{matchingExcerpt(result, terms)}</p>
              </article>
            ))}
          </section>
        </div>
      </main>
    </Layout>
  );
}
