import { Link } from 'react-router-dom';

/** Flag-mark plus wordmark, linking home. */
export function Brand() {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="Enbywiki home">
      <span className="h-9 w-9 rounded-xl bg-trans-stripes shadow-soft ring-1 ring-black/5 transition-transform duration-300 group-hover:rotate-6 dark:ring-white/10" />
      <span className="leading-tight">
        <span className="block font-display text-lg font-bold tracking-tight text-ink-900 dark:text-white">
          Enby<span className="trans-text-gradient">wiki</span>
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400 dark:text-ink-500">
          Trans history
        </span>
      </span>
    </Link>
  );
}
