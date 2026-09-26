import { ArrowLeft, ArrowRight, CalendarRange, Clock3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';
import { TableOfContents } from '@/components/TableOfContents';
import { getAdjacent, getDoc } from '@/data/docs';
import { useLanguage } from '@/hooks/useLanguage';
import { extractHeadings, getMarkdown, readingTime, stripLeadingH1 } from '@/lib/markdown';
import { NotFound } from '@/pages/NotFound';

export function Article() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const { lang } = useLanguage();

  const doc = getDoc(slug);
  if (!doc) {
    return <NotFound />;
  }

  const raw = getMarkdown(lang, doc.slug) ?? '';
  const content = stripLeadingH1(raw);
  const headings = extractHeadings(content);
  const minutes = readingTime(content, lang);
  const { prev, next } = getAdjacent(doc.slug);

  return (
    <div className="animate-in mx-auto max-w-3xl xl:max-w-6xl">
      <Link
        to="/timeline"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-trans-blue dark:text-ink-400"
      >
        <ArrowLeft className="h-4 w-4" />
        {t('nav.timeline')}
      </Link>

      <div className="mt-6 xl:grid xl:grid-cols-[minmax(0,1fr)_16rem] xl:gap-12">
        <article className="min-w-0">
          <header className="border-b border-ink-200/70 pb-8 dark:border-white/10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip">{t(`categories.${doc.category}`)}</span>
              <span className="chip">
                <CalendarRange className="h-3.5 w-3.5 text-trans-blue" />
                {t(`docs.${doc.slug}.period`)}
              </span>
              <span className="chip">
                <Clock3 className="h-3.5 w-3.5 text-trans-pink" />
                {t('article.readingTime', { minutes })}
              </span>
            </div>

            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-5xl">
              {t(`docs.${doc.slug}.title`)}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-500 dark:text-ink-300">
              {t(`docs.${doc.slug}.description`)}
            </p>
          </header>

          <div className="mt-8">
            <MarkdownRenderer content={content} />
          </div>

          {(prev || next) && (
            <nav className="mt-14 grid gap-4 border-t border-ink-200/70 pt-8 dark:border-white/10 sm:grid-cols-2">
              {prev ? (
                <Link to={`/docs/${prev.slug}`} className="card card-hover group p-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400 dark:text-ink-500">
                    <ArrowLeft className="h-3.5 w-3.5" />
                    {t('article.previous')}
                  </span>
                  <span className="mt-2 block font-display text-lg font-bold text-ink-900 group-hover:text-trans-blue dark:text-white">
                    {t(`docs.${prev.slug}.title`)}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  to={`/docs/${next.slug}`}
                  className="card card-hover group p-5 text-right sm:col-start-2"
                >
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400 dark:text-ink-500">
                    {t('article.next')}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                  <span className="mt-2 block font-display text-lg font-bold text-ink-900 group-hover:text-trans-blue dark:text-white">
                    {t(`docs.${next.slug}.title`)}
                  </span>
                </Link>
              )}
            </nav>
          )}
        </article>

        {headings.length > 0 && (
          <aside className="mt-12 hidden xl:mt-0 xl:block">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-10">
              <TableOfContents headings={headings} />
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
