import { BookText, Flag, Globe2, HeartHandshake, ShieldCheck, Waypoints } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  const flagColors = [
    { key: 'blue', swatch: 'bg-trans-blue', label: 'about.flagBlue' },
    { key: 'pink', swatch: 'bg-trans-pink', label: 'about.flagPink' },
    { key: 'white', swatch: 'bg-white ring-1 ring-ink-200 dark:ring-white/20', label: 'about.flagWhite' },
  ];

  const sections = [
    { icon: HeartHandshake, title: 'about.missionTitle', body: 'about.missionBody' },
    { icon: BookText, title: 'about.methodTitle', body: 'about.methodBody' },
    { icon: Globe2, title: 'about.languagesTitle', body: 'about.languagesBody' },
    { icon: Waypoints, title: 'about.techTitle', body: 'about.techBody' },
    { icon: ShieldCheck, title: 'about.licenseTitle', body: 'about.licenseBody' },
  ];

  return (
    <div className="animate-in mx-auto max-w-3xl space-y-10">
      <header className="space-y-3">
        <span className="chip">
          <Flag className="h-3.5 w-3.5 text-trans-pink" />
          {t('nav.about')}
        </span>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-5xl">
          {t('about.title')}
        </h1>
        <p className="text-lg leading-relaxed text-ink-500 dark:text-ink-300">
          {t('about.subtitle')}
        </p>
      </header>

      <section className="card p-7">
        <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-white">
          {t('about.flagTitle')}
        </h2>
        <div className="mt-5 overflow-hidden rounded-xl shadow-soft ring-1 ring-black/5 dark:ring-white/10">
          <img
            src="/trans-flag.svg"
            alt={t('home.flagAlt')}
            className="block h-auto w-full"
            width={1500}
            height={1000}
          />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
          {t('about.flagBody')}
        </p>
        <dl className="mt-5 grid gap-3 sm:grid-cols-3">
          {flagColors.map((color) => (
            <div
              key={color.key}
              className="rounded-xl border border-ink-200/70 p-4 dark:border-white/10"
            >
              <span className={`block h-6 w-full rounded-md ${color.swatch}`} aria-hidden="true" />
              <dt className="mt-3 text-sm font-semibold text-ink-900 dark:text-white">
                {t(`${color.label}Name`)}
              </dt>
              <dd className="mt-1 text-xs leading-relaxed text-ink-500 dark:text-ink-400">
                {t(color.label)}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="grid gap-5 sm:grid-cols-2">
        {sections.map((section) => (
          <section key={section.title} className="card p-6">
            <section.icon className="h-5 w-5 text-trans-blue" />
            <h2 className="mt-3 font-display text-lg font-bold text-ink-900 dark:text-white">
              {t(section.title)}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              {t(section.body)}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
