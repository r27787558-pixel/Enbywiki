import { Home as HomeIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="animate-in mx-auto flex max-w-xl flex-col items-center justify-center py-24 text-center">
      <span className="font-display text-7xl font-bold trans-text-gradient">{t('notFound.code')}</span>
      <h1 className="mt-6 font-display text-2xl font-bold text-ink-900 dark:text-white">
        {t('notFound.title')}
      </h1>
      <p className="mt-3 text-ink-500 dark:text-ink-400">{t('notFound.message')}</p>
      <Link to="/" className="btn-primary mt-8">
        <HomeIcon className="h-4 w-4" />
        {t('notFound.cta')}
      </Link>
    </div>
  );
}
