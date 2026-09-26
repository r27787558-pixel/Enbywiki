import { Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Brand } from '@/components/Brand';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { ThemeToggle } from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';

export function Header({ onOpenSidebar }: { onOpenSidebar: () => void }) {
  const { t } = useTranslation();

  const links = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/timeline', label: t('nav.timeline'), end: false },
    { to: '/about', label: t('nav.about'), end: false },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-ink-200/70 bg-ink-50/85 backdrop-blur-lg dark:border-white/10 dark:bg-ink-950/85">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onOpenSidebar}
          aria-label={t('nav.menu')}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-ink-200 bg-white/70 text-ink-600 transition-colors hover:border-trans-blue/60 hover:text-trans-blue dark:border-white/10 dark:bg-white/5 dark:text-ink-300 lg:hidden"
        >
          <Menu className="h-4 w-4" />
        </button>

        <Brand />

        <nav className="hidden items-center gap-1 md:ml-auto md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-trans-soft text-ink-900 dark:text-white'
                    : 'text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
      <div className="h-0.5 w-full bg-trans-stripes" aria-hidden="true" />
    </header>
  );
}
