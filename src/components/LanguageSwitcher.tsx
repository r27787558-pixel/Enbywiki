import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/hooks/useLanguage';
import { SUPPORTED_LANGUAGES } from '@/i18n';
import { cn } from '@/lib/utils';

const LABELS: Record<string, string> = {
  en: 'EN',
  zh: '中文',
};

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const { t } = useTranslation();

  return (
    <div
      role="group"
      aria-label={t('actions.language')}
      className="inline-flex items-center rounded-xl border border-ink-200 bg-white/70 p-0.5 dark:border-white/10 dark:bg-white/5"
    >
      {SUPPORTED_LANGUAGES.map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={cn(
              'rounded-lg px-2.5 py-1 text-xs font-semibold transition-all duration-200',
              active
                ? 'bg-trans-gradient text-ink-900 shadow-soft'
                : 'text-ink-500 hover:text-ink-800 dark:text-ink-400 dark:hover:text-white',
            )}
          >
            {LABELS[code] ?? code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
