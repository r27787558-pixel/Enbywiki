import { useEffect, useState } from 'react';
import { List } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { Heading } from '@/lib/markdown';
import { cn } from '@/lib/utils';

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: [0, 1] },
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label={t('article.onThisPage')} className="text-sm">
      <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-400 dark:text-ink-500">
        <List className="h-3.5 w-3.5" />
        {t('article.onThisPage')}
      </p>
      <ul className="space-y-1 border-l border-ink-200 dark:border-white/10">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(
                '-ml-px block border-l-2 py-1 text-ink-500 transition-colors hover:text-ink-900 dark:text-ink-400 dark:hover:text-white',
                heading.level === 3 ? 'pl-6' : 'pl-3',
                activeId === heading.id
                  ? 'border-trans-blue font-semibold text-ink-900 dark:text-white'
                  : 'border-transparent',
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
