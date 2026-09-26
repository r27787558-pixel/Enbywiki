export type DocCategory = 'timeline' | 'reference';
export type DocAccent = 'blue' | 'pink' | 'violet';

export interface DocMeta {
  slug: string;
  category: DocCategory;
  order: number;
  accent: DocAccent;
}

/**
 * The archive's table of contents. Titles, periods and descriptions live in the
 * i18n JSON files (`docs.<slug>.*`) so this manifest stays language-neutral.
 */
export const docs: DocMeta[] = [
  { slug: 'ancient-world', category: 'timeline', order: 1, accent: 'blue' },
  { slug: 'sacred-traditions', category: 'timeline', order: 2, accent: 'pink' },
  { slug: 'medieval-early-modern', category: 'timeline', order: 3, accent: 'violet' },
  { slug: 'colonial-suppression', category: 'timeline', order: 4, accent: 'blue' },
  { slug: 'birth-of-sexology', category: 'timeline', order: 5, accent: 'pink' },
  { slug: 'weimar-institute', category: 'timeline', order: 6, accent: 'violet' },
  { slug: 'midcentury', category: 'timeline', order: 7, accent: 'blue' },
  { slug: 'stonewall-liberation', category: 'timeline', order: 8, accent: 'pink' },
  { slug: 'aids-and-90s', category: 'timeline', order: 9, accent: 'violet' },
  { slug: 'twenty-first-century', category: 'timeline', order: 10, accent: 'blue' },
  { slug: 'key-figures', category: 'reference', order: 11, accent: 'pink' },
  { slug: 'glossary', category: 'reference', order: 12, accent: 'violet' },
  { slug: 'transgender-in-lgbtq', category: 'reference', order: 13, accent: 'blue' },
];

export const timelineDocs: DocMeta[] = docs
  .filter((doc) => doc.category === 'timeline')
  .sort((a, b) => a.order - b.order);

export const referenceDocs: DocMeta[] = docs
  .filter((doc) => doc.category === 'reference')
  .sort((a, b) => a.order - b.order);

export function getDoc(slug: string | undefined): DocMeta | undefined {
  return docs.find((doc) => doc.slug === slug);
}

export function getAdjacent(slug: string): { prev?: DocMeta; next?: DocMeta } {
  const index = timelineDocs.findIndex((doc) => doc.slug === slug);
  if (index === -1) return {};
  return {
    prev: index > 0 ? timelineDocs[index - 1] : undefined,
    next: index < timelineDocs.length - 1 ? timelineDocs[index + 1] : undefined,
  };
}
