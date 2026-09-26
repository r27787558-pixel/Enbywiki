import type { Language } from '@/i18n';

const enModules = import.meta.glob('../content/en/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

const zhModules = import.meta.glob('../content/zh/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function toSlugMap(modules: Record<string, string>): Record<string, string> {
  const map: Record<string, string> = {};
  for (const [path, content] of Object.entries(modules)) {
    const file = path.split('/').pop() ?? path;
    map[file.replace(/\.md$/, '')] = content;
  }
  return map;
}

const contentByLanguage: Record<Language, Record<string, string>> = {
  en: toSlugMap(enModules),
  zh: toSlugMap(zhModules),
};

/** Return the raw markdown for a slug, falling back to English when a translation is missing. */
export function getMarkdown(lang: Language, slug: string): string | undefined {
  return contentByLanguage[lang]?.[slug] ?? contentByLanguage.en?.[slug];
}

export function hasMarkdown(lang: Language, slug: string): boolean {
  return Boolean(contentByLanguage[lang]?.[slug]);
}

/** Remove a leading level-1 heading so pages can render their own titles. */
export function stripLeadingH1(markdown: string): string {
  return markdown.replace(/^\s*#\s+.*(?:\r?\n)+/, '');
}

/** Remove markdown syntax before counting. */
function plainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_~|-]/g, ' ');
}

/** Rough reading time in minutes, tuned separately for Latin and CJK text. */
export function readingTime(markdown: string, lang: Language): number {
  const text = plainText(markdown);
  if (lang === 'zh') {
    const han = (text.match(/[\u4e00-\u9fff]/g) ?? []).length;
    return Math.max(1, Math.round(han / 320));
  }
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 210));
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

/** GitHub-style anchor slug; mirrors rehype-slug closely enough for in-page links. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-');
}

/** Collect h2/h3 headings for the table of contents. */
export function extractHeadings(markdown: string): Heading[] {
  const headings: Heading[] = [];
  let inCodeBlock = false;

  for (const line of markdown.split('\n')) {
    if (line.trimStart().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    const match = /^(#{2,3})\s+(.+)$/.exec(line);
    if (match) {
      const text = match[2].replace(/[*`_]/g, '').trim();
      headings.push({ id: slugify(text), text, level: match[1].length });
    }
  }

  return headings;
}
