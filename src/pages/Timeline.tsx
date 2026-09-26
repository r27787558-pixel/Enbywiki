import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { timelineDocs } from '@/data/docs';

export function Timeline() {
  const { t } = useTranslation();

  return (
    <div className="animate-in mx-auto max-w-3xl space-y-10">
      <header className="space-y-3">
        <span className="chip">{t('timeline.count', { count: timelineDocs.length })}</span>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-5xl">
          {t('timeline.title')}
        </h1>
        <p className="text-ink-500 dark:text-ink-400">{t('timeline.subtitle')}</p>
      </header>

      <ol className="relative space-y-5 border-l-2 border-dashed border-ink-200 pl-6 dark:border-white/15 sm:pl-8">
        {timelineDocs.map((doc, index) => (
          <li key={doc.slug} className="relative">
            <span
              className="absolute -left-[calc(1.5rem+7px)] top-6 h-3 w-3 rounded-full bg-trans-blue ring-4 ring-ink-50 dark:ring-ink-950 sm:-left-[calc(2rem+7px)]"
              style={{ backgroundColor: index % 2 === 0 ? '#5BCEFA' : '#F5A9B8' }}
              aria-hidden="true"
            />
            <Link to={`/docs/${doc.slug}`} className="card card-hover group block p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs font-semibold tabular-nums text-ink-400 dark:text-ink-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="font-display text-xl font-bold text-ink-900 dark:text-white">
                  {t(`docs.${doc.slug}.title`)}
                </h2>
                <span className="text-xs font-semibold uppercase tracking-wide text-trans-blue">
                  {t(`docs.${doc.slug}.period`)}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                {t(`docs.${doc.slug}.description`)}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700 transition-colors group-hover:text-trans-blue dark:text-ink-200">
                {t('actions.readEra')}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
