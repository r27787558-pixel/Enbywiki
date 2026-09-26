import { ArrowRight, BookOpen, Clock3, Globe2, Landmark, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { referenceDocs, timelineDocs } from '@/data/docs';

export function Home() {
  const { t } = useTranslation();

  const stats = [
    { icon: Landmark, value: `${timelineDocs.length}`, label: t('home.stats.eras') },
    { icon: Clock3, value: '5,000+', label: t('home.stats.span') },
    { icon: Globe2, value: '2', label: t('home.stats.languages') },
  ];

  return (
    <div className="animate-in space-y-20 pt-4">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[2rem] border border-ink-200/70 bg-trans-soft p-8 dark:border-white/10 sm:p-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-trans-blue/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-trans-pink/40 blur-3xl" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.45fr_1fr]">
          <div className="space-y-6">
            <span className="chip">
              <Sparkles className="h-3.5 w-3.5 text-trans-pink" />
              {t('home.eyebrow')}
            </span>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 dark:text-white sm:text-5xl lg:text-6xl">
              {t('home.title')}
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-ink-600 dark:text-ink-300 sm:text-lg">
              {t('home.subtitle')}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link to="/timeline" className="btn-primary">
                {t('home.ctaPrimary')}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/docs/key-figures" className="btn-ghost">
                <BookOpen className="h-4 w-4" />
                {t('home.ctaSecondary')}
              </Link>
            </div>
          </div>

          <figure className="mx-auto w-full max-w-xs lg:max-w-none">
            <div className="overflow-hidden rounded-2xl shadow-glow ring-1 ring-black/5 dark:ring-white/10">
              <img
                src="/trans-flag.svg"
                alt={t('home.flagAlt')}
                className="block h-auto w-full"
                width={1500}
                height={1000}
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-ink-500 dark:text-ink-400">
              {t('home.flagCaption')}
            </figcaption>
          </figure>
        </div>

        <dl className="relative mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 rounded-2xl border border-ink-200/70 bg-white/70 px-5 py-4 backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
            >
              <stat.icon className="h-6 w-6 shrink-0 text-trans-blue" />
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-ink-400 dark:text-ink-500">
                  {stat.label}
                </dt>
                <dd className="font-display text-2xl font-bold text-ink-900 dark:text-white">
                  {stat.value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </section>

      {/* Timeline eras */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 dark:text-white">
            {t('home.timelineTitle')}
          </h2>
          <p className="text-ink-500 dark:text-ink-400">{t('home.timelineSubtitle')}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {timelineDocs.map((doc, index) => (
            <Link
              key={doc.slug}
              to={`/docs/${doc.slug}`}
              className="card card-hover group flex flex-col p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold tabular-nums text-ink-400 dark:text-ink-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-1.5 w-10 rounded-full bg-trans-gradient opacity-70 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">
                {t(`docs.${doc.slug}.title`)}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-trans-blue">
                {t(`docs.${doc.slug}.period`)}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                {t(`docs.${doc.slug}.description`)}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-700 transition-colors group-hover:text-trans-blue dark:text-ink-200">
                {t('actions.readEra')}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Reference */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 dark:text-white">
            {t('home.referenceTitle')}
          </h2>
          <p className="text-ink-500 dark:text-ink-400">{t('home.referenceSubtitle')}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {referenceDocs.map((doc) => (
            <Link key={doc.slug} to={`/docs/${doc.slug}`} className="card card-hover group p-5">
              <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">
                {t(`docs.${doc.slug}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                {t(`docs.${doc.slug}.description`)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card p-7">
          <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-white">
            {t('home.whyTitle')}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
            {t('home.whyBody')}
          </p>
        </div>
        <div className="card border-trans-pink/40 bg-trans-pink/5 p-7 dark:border-trans-pink/20">
          <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-white">
            {t('home.noteTitle')}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
            {t('home.noteBody')}
          </p>
        </div>
      </section>
    </div>
  );
}
