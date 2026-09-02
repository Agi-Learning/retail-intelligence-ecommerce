import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const journeys = [
  {
    number: '01',
    title: 'Understand the system',
    text: 'Review the boundaries, planes, production rules, and complete end-to-end diagram.',
    to: '/docs/architecture/retail-intelligence-platform-architecture-and-roadmap',
    label: 'Open architecture',
  },
  {
    number: '02',
    title: 'Build lesson by lesson',
    text: 'Follow 24 phases and exactly 120 evidence-based implementation lessons.',
    to: '/docs/roadmap/all-120-lessons',
    label: 'Open roadmap',
  },
  {
    number: '03',
    title: 'Start the repository',
    text: 'Install the required tools, validate the clean scaffold, and complete Phase 1.',
    to: '/docs/getting-started/',
    label: 'Start here',
  },
];

const milestones = [
  ['1–7', '35', 'Web MFE and transactional microservices'],
  ['8–10', '15', 'Reliable event platform'],
  ['11–15', '25', 'Governed lakehouse and data mesh'],
  ['16–20', '25', 'ML and deep learning'],
  ['21–23', '15', 'GenAI and agentic AI'],
  ['24', '5', 'Production capstone'],
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="End-to-End Architecture and Roadmap"
      description="Retail Intelligence Platform architecture and 120-lesson implementation roadmap">
      <main>
        <section className={styles.hero}>
          <div className={`container ${styles.heroGrid}`}>
            <div>
              <p className={styles.eyebrow}>WEB · MICROSERVICES · DATA · ML · AI</p>
              <h1>Retail Intelligence Platform</h1>
              <p className={styles.lead}>
                A production-oriented architecture and learning path from React
                micro-frontends to governed Azure Databricks data products,
                MLflow, RAG, and controlled agents.
              </p>
              <div className={styles.actions}>
                <Link className="button button--primary button--lg" to="/docs/">
                  Read documentation
                </Link>
                <Link className="button button--secondary button--lg" to="/search">
                  Search all pages
                </Link>
              </div>
              <p className={styles.scope}>Web-only frontend. No Flutter or mobile track.</p>
            </div>
            <div className={styles.ruleCard}>
              <p>NON-NEGOTIABLE BOUNDARY</p>
              <h2>Intelligence advises. Domain services decide.</h2>
              <span>
                BI, ML, RAG, and agents never write operational databases.
                Changes return through governed BFF and microservice APIs.
              </span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>THREE ENTRY POINTS</p>
              <h2>Move from design to verified implementation</h2>
            </div>
            <div className={styles.cards}>
              {journeys.map((journey) => (
                <article className={styles.card} key={journey.number}>
                  <span>{journey.number}</span>
                  <h3>{journey.title}</h3>
                  <p>{journey.text}</p>
                  <Link to={journey.to}>{journey.label} →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.milestoneSection}`}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>COMPLETE CURRICULUM</p>
              <h2>24 phases · 120 lessons · six release gates</h2>
            </div>
            <div className={styles.milestones}>
              {milestones.map(([phases, lessons, title]) => (
                <div className={styles.milestone} key={title}>
                  <div>
                    <strong>{phases}</strong>
                    <span>phases</span>
                  </div>
                  <div>
                    <strong>{lessons}</strong>
                    <span>lessons</span>
                  </div>
                  <p>{title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
