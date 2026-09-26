import { Heart, Scale } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Brand } from '@/components/Brand';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-ink-200/70 bg-white/60 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="h-0.5 w-full bg-trans-stripes" aria-hidden="true" />
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div className="space-y-4">
          <Brand />
          <p className="max-w-xl text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            {t('footer.disclaimer')}
          </p>
          <p className="text-xs text-ink-400 dark:text-ink-500">
            © {year} Enbywiki · {t('footer.builtWith')}
          </p>
        </div>

        <div className="space-y-3 lg:justify-self-end">
          <p className="flex items-center gap-2 text-sm text-ink-500 dark:text-ink-400">
            <Scale className="h-4 w-4 text-trans-blue" />
            {t('footer.license')}
          </p>
          <p className="flex items-center gap-2 text-sm text-ink-500 dark:text-ink-400">
            <Heart className="h-4 w-4 text-trans-pink" />
            {t('app.tagline')}
          </p>
          <div className="flex items-center gap-1.5 pt-1" aria-hidden="true">
            <span className="h-2 w-8 rounded-full bg-trans-blue" />
            <span className="h-2 w-8 rounded-full bg-trans-pink" />
            <span className="h-2 w-8 rounded-full bg-white ring-1 ring-ink-200 dark:ring-white/20" />
            <span className="h-2 w-8 rounded-full bg-trans-pink" />
            <span className="h-2 w-8 rounded-full bg-trans-blue" />
          </div>
        </div>
      </div>
    </footer>
  );
}
