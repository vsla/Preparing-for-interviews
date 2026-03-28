import type { Locale, UiStrings } from '../i18n';

type LocaleSwitcherProps = {
  strings: UiStrings;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  className?: string;
};

export function LocaleSwitcher({ strings, locale, onLocaleChange, className }: LocaleSwitcherProps) {
  return (
    <div
      className={['locale-switcher', className].filter(Boolean).join(' ')}
      role="group"
      aria-label={strings.languageLabel}
    >
      <button
        type="button"
        className={`locale-button${locale === 'en' ? ' active' : ''}`}
        onClick={() => onLocaleChange('en')}
      >
        {strings.languageNames.en}
      </button>
      <button
        type="button"
        className={`locale-button${locale === 'pt-BR' ? ' active' : ''}`}
        onClick={() => onLocaleChange('pt-BR')}
      >
        {strings.languageNames['pt-BR']}
      </button>
    </div>
  );
}
