import type { RefObject } from 'react';
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
};

export function Sidebar({ open, onToggle, activeSections, items, sidebarRef }: SidebarProps) {
  return (
    <aside
      ref={sidebarRef}
      className={`sidebar${open ? ' open' : ''}`}
      id="sidebar"
    >
      <div className="sidebar-header">
        <span className="sidebar-title">Interview Guide</span>
        <button
          type="button"
          className="sidebar-toggle"
          id="sidebarToggle"
          aria-label="Toggle navigation"
          onClick={onToggle}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav className="sidebar-nav" aria-label="Section navigation">
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
