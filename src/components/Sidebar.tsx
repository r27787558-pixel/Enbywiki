import { BookMarked, Landmark, type LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { referenceDocs, timelineDocs, type DocAccent, type DocMeta } from '@/data/docs';
import { cn } from '@/lib/utils';

const accentClass: Record<DocAccent, string> = {
  blue: 'bg-trans-blue',
  pink: 'bg-trans-pink',
  violet: 'bg-violet-400',
};

function DocLink({
  doc,
  index,
  onNavigate,
}: {
  doc: DocMeta;
  index: number;
  onNavigate?: () => void;
}) {
  const { t } = useTranslation();

  return (
    <NavLink
      to={`/docs/${doc.slug}`}
      onClick={onNavigate}
      className={({ isActive }) => cn('sidebar-link group', isActive && 'sidebar-link-active')}
    >
      <span
        className={cn(
          'mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full',
          accentClass[doc.accent],
        )}
        aria-hidden="true"
      />
      <span className="min-w-0">
        <span className="flex items-baseline gap-1.5">
          <span className="font-mono text-[10px] tabular-nums text-ink-400 dark:text-ink-500">
            {String(index).padStart(2, '0')}
          </span>
          <span className="truncate">{t(`docs.${doc.slug}.title`)}</span>
        </span>
        <span className="mt-0.5 block truncate text-[11px] font-normal text-ink-400 dark:text-ink-500">
          {t(`docs.${doc.slug}.period`)}
        </span>
      </span>
    </NavLink>
  );
}

function SidebarGroup({
  title,
  icon: Icon,
  docs,
  startIndex = 1,
  onNavigate,
}: {
  title: string;
  icon: LucideIcon;
  docs: DocMeta[];
  startIndex?: number;
  onNavigate?: () => void;
}) {
  return (
    <div>
      <p className="mb-2 flex items-center gap-2 px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-400 dark:text-ink-500">
        <Icon className="h-3.5 w-3.5" />
        {title}
      </p>
      <div className="space-y-0.5">
        {docs.map((doc, i) => (
          <DocLink key={doc.slug} doc={doc} index={startIndex + i} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
}

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useTranslation();

  return (
    <nav className="space-y-6" aria-label={t('nav.menu')}>
      <SidebarGroup
        title={t('categories.timeline')}
        icon={Landmark}
        docs={timelineDocs}
        startIndex={1}
        onNavigate={onNavigate}
      />
      <SidebarGroup
        title={t('categories.reference')}
        icon={BookMarked}
        docs={referenceDocs}
        startIndex={timelineDocs.length + 1}
        onNavigate={onNavigate}
      />
    </nav>
  );
}
