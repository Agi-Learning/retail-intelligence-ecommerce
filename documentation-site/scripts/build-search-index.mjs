import {mkdir, readdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(scriptDirectory, '..');
const docsRoot = path.resolve(siteRoot, '..', 'docs');
const outputFile = path.resolve(siteRoot, 'static', 'search-index.json');

async function markdownFiles(directory) {
  const entries = await readdir(directory, {withFileTypes: true});
  const files = [];

  for (const entry of entries.sort((left, right) =>
    left.name.localeCompare(right.name),
  )) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await markdownFiles(entryPath)));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(entryPath);
    }
  }

  return files;
}

function removeFrontMatter(markdown) {
  return markdown.replace(/^---\s*\r?\n[\s\S]*?\r?\n---\s*\r?\n/, '');
}

function frontMatterValue(markdown, key) {
  const match = markdown.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return undefined;

  const property = match[1]
    .split(/\r?\n/)
    .find((line) => line.trimStart().startsWith(`${key}:`));
  return property?.split(':').slice(1).join(':').trim().replace(/^['"]|['"]$/g, '');
}

function plainText(markdown) {
  return removeFrontMatter(markdown)
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+[.)]\s+/gm, '')
    .replace(/[|>*_~]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function pageRoute(file) {
  const relative = path.relative(docsRoot, file).split(path.sep).join('/');
  const withoutExtension = relative.replace(/\.md$/, '');

  if (withoutExtension === 'README') return '/docs/';
  if (withoutExtension.endsWith('/README')) {
    return `/docs/${withoutExtension.slice(0, -'/README'.length)}/`;
  }
  return `/docs/${withoutExtension}`;
}

function sectionName(file) {
  const relative = path.relative(docsRoot, file).split(path.sep);
  if (relative.length === 1) return 'Documentation';
  return relative[0]
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

const files = await markdownFiles(docsRoot);
const index = [];

for (const file of files) {
  const markdown = await readFile(file, 'utf8');
  const headings = [...removeFrontMatter(markdown).matchAll(/^#{1,6}\s+(.+)$/gm)]
    .map((match) => match[1].replace(/[*_`]/g, '').trim())
    .filter(Boolean);
  const content = plainText(markdown).slice(0, 160_000);
  const title =
    frontMatterValue(markdown, 'title') ??
    headings[0] ??
    path.basename(file, '.md').replaceAll('-', ' ');

  index.push({
    title,
    section: sectionName(file),
    route: pageRoute(file),
    headings: headings.slice(1, 80),
    excerpt: content.slice(0, 260),
    content,
  });
}

await mkdir(path.dirname(outputFile), {recursive: true});
await writeFile(
  outputFile,
  `${JSON.stringify({generatedAt: new Date().toISOString(), pages: index})}\n`,
  'utf8',
);

console.log(`Search index created: ${index.length} pages -> ${outputFile}`);
