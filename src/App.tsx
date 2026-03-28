import { useEffect, useMemo, useRef, useState } from 'react';
import { LocaleSwitcher } from './components/LocaleSwitcher';
import { SectionContent } from './components/SectionContent';
import { getGuideSections } from './content/guideSections';
import { localeStorageKey, type Locale, uiStringsByLocale } from './i18n';
import { Sidebar } from './Sidebar';
import { useReadingProgress, useSectionSpy } from './hooks/useGuideChrome';

export default function App() {
  const activeSections = useSectionSpy();
  const { progressRef, backToTopVisible, scrollToTop } = useReadingProgress();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem(localeStorageKey);
    return saved === 'pt-BR' ? 'pt-BR' : 'en';
  });
  const sidebarRef = useRef<HTMLElement | null>(null);
  const strings = uiStringsByLocale[locale];
  const guideSections = useMemo(() => getGuideSections(locale), [locale]);

  useEffect(() => {
    localStorage.setItem(localeStorageKey, locale);
    document.documentElement.lang = locale === 'pt-BR' ? 'pt-BR' : 'en';
  }, [locale]);

  return (
    <div className="layout">
      <Sidebar
        open={sidebarOpen}
        onToggle={() => setSidebarOpen((o) => !o)}
        activeSections={activeSections}
        items={guideSections}
        sidebarRef={sidebarRef}
        strings={strings}
        locale={locale}
        onLocaleChange={setLocale}
      />
      <main className="main-content" id="mainContent">
        <div className="mobile-toolbar" role="banner">
          <button
            type="button"
            className="mobile-menu-button"
            aria-expanded={sidebarOpen}
            aria-controls="sidebar"
            aria-label={strings.toggleNavigationAriaLabel}
            onClick={() => setSidebarOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
          <LocaleSwitcher strings={strings} locale={locale} onLocaleChange={setLocale} className="mobile-locale-switcher" />
        </div>
        {sidebarOpen ? (
          <button
            type="button"
            className="sidebar-backdrop"
            aria-label={strings.closeNavigationAriaLabel}
            onClick={() => setSidebarOpen(false)}
          />
        ) : null}
        <div className="progress-bar" id="progressBar" ref={progressRef} />
        <div className="content-header">
          <h1>
            {strings.appTitleLine1}
            <br />
            {strings.appTitleLine2}
          </h1>
          <p className="subtitle">{strings.subtitle}</p>
        </div>
        {guideSections.map((s) => (
          <section key={s.id} id={s.id} className={s.sectionClass}>
            <SectionContent content={s.content} strings={strings} />
          </section>
        ))}
        <button
          type="button"
          className={`back-to-top${backToTopVisible ? ' visible' : ''}`}
          id="backToTop"
          aria-label={strings.backToTopAriaLabel}
          onClick={scrollToTop}
        >
          ↑
        </button>
      </main>
    </div>
  );
}
