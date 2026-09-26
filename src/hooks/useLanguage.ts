import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, setLanguage, type Language } from '@/i18n';

const languageSet = new Set<string>(SUPPORTED_LANGUAGES);

/** Current UI language plus a setter that persists the choice. */
export function useLanguage(): { lang: Language; setLang: (lang: Language) => void } {
  const { i18n } = useTranslation();
  const base = i18n.resolvedLanguage ?? i18n.language ?? 'en';
  const lang: Language = languageSet.has(base) ? (base as Language) : 'en';
  return { lang, setLang: setLanguage };
}
