import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t('actions.toggleTheme')}
      title={t('actions.toggleTheme')}
      aria-pressed={isDark}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl border border-ink-200 bg-white/70 text-ink-600 transition-colors hover:border-trans-blue/60 hover:text-trans-blue focus-visible:outline-none dark:border-white/10 dark:bg-white/5 dark:text-ink-300 dark:hover:text-trans-blue"
    >
      <Sun
        className={`absolute h-4 w-4 transition-all duration-300 ${
          isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-300 ${
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        }`}
      />
    </button>
  );
}
