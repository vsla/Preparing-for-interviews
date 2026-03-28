import { useRef, useState } from 'react';
import { SectionContent } from './components/SectionContent';
import { guideSections } from './content/guideSections';
import { Sidebar } from './Sidebar';
import { useReadingProgress, useSectionSpy } from './hooks/useGuideChrome';

export default function App() {
  const activeSections = useSectionSpy();
  const { progressRef, backToTopVisible, scrollToTop } = useReadingProgress();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement | null>(null);

  return (
    <div className="layout">
      <Sidebar
        open={sidebarOpen}
        onToggle={() => setSidebarOpen((o) => !o)}
        activeSections={activeSections}
        items={guideSections}
        sidebarRef={sidebarRef}
      />
      <main className="main-content" id="mainContent">
        <div className="progress-bar" id="progressBar" ref={progressRef} />
        <div className="content-header">
          <h1>
            Frontend / Backend / Fullstack
            <br />
            Interview Study Guide
          </h1>
          <p className="subtitle">Comprehensive technical reference — click any section header to expand</p>
        </div>
        {guideSections.map((s) => (
          <section key={s.id} id={s.id} className={s.sectionClass}>
            <SectionContent content={s.content} />
          </section>
        ))}
        <button
          type="button"
          className={`back-to-top${backToTopVisible ? ' visible' : ''}`}
          id="backToTop"
          aria-label="Back to top"
          onClick={scrollToTop}
        >
          ↑
        </button>
      </main>
    </div>
  );
}
