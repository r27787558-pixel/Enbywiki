import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ReadingProgress } from '@/components/ReadingProgress';
import { Sidebar } from '@/components/Sidebar';

export function Layout() {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isHome = pathname === '/';
  const showSidebar = !isHome;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  return (
    <div className="flex min-h-screen flex-col">
      <ReadingProgress />
      <Header onOpenSidebar={() => setSidebarOpen(true)} />

      <div className="mx-auto flex w-full max-w-[1440px] flex-1 gap-10 px-4 sm:px-6 lg:px-8">
        {showSidebar && (
          <aside className="hidden w-72 shrink-0 py-10 lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-10 pr-2">
              <Sidebar />
            </div>
          </aside>
        )}

        <main className="min-w-0 flex-1 py-8 lg:py-10">
          <Outlet />
        </main>
      </div>

      <Footer />

      {/* Mobile navigation drawer */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label={t('nav.close')}
            onClick={() => setSidebarOpen(false)}
            className="absolute inset-0 bg-ink-950/50 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 left-0 flex w-80 max-w-[85vw] flex-col bg-ink-50 shadow-2xl dark:bg-ink-950">
            <div className="flex items-center justify-between border-b border-ink-200/70 px-4 py-3 dark:border-white/10">
              <span className="font-display text-sm font-bold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
                {t('nav.menu')}
              </span>
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                aria-label={t('nav.close')}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-ink-500 hover:bg-trans-soft hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-3 py-5">
              <Sidebar onNavigate={() => setSidebarOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
