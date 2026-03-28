import type { RefObject } from 'react';
import { LocaleSwitcher } from './components/LocaleSwitcher';
import type { Locale, UiStrings } from './i18n';
import { closeSidebarOnNavIfMobile } from './hooks/useGuideChrome';

type SidebarProps = {
  open: boolean;
  onToggle: () => void;
  activeSections: ReadonlySet<string>;
  items: Array<{
    id: string;
    navClass: string;
    navLabel: string;
    navCount: string;
  }>;
  sidebarRef: RefObject<HTMLElement | null>;
  strings: UiStrings;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export function Sidebar({ open, onToggle, activeSections, items, sidebarRef, strings, locale, onLocaleChange }: SidebarProps) {
  return (
    <aside
      ref={sidebarRef}
      className={`sidebar${open ? ' open' : ''}`}
      id="sidebar"
    >
      <div className="sidebar-header">
        <div className="sidebar-header-main">
          <span className="sidebar-title">{strings.sidebarTitle}</span>
          <LocaleSwitcher
            strings={strings}
            locale={locale}
            onLocaleChange={onLocaleChange}
            className="sidebar-locale-switcher"
          />
        </div>
        <button
          type="button"
          className="sidebar-toggle"
          id="sidebarToggle"
          aria-label={strings.toggleNavigationAriaLabel}
          onClick={onToggle}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav className="sidebar-nav" aria-label={strings.navAriaLabel}>
        <ul>
          {items.map((item) => (
            <li key={item.id} className={`nav-item ${item.navClass}`}>
              <a
                href={`#${item.id}`}
                className={`nav-link${activeSections.has(item.id) ? ' active' : ''}`}
                data-section={item.id}
                onClick={() => closeSidebarOnNavIfMobile(sidebarRef.current)}
              >
                <span className="nav-dot" />
                <span className="nav-label">{item.navLabel}</span>
                <span className="nav-count">{item.navCount}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
