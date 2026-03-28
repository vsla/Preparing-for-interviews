import { useCallback, useEffect, useRef, useState } from 'react';

export function useSectionSpy() {
  const [activeSections, setActiveSections] = useState<ReadonlySet<string>>(() => new Set());

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        setActiveSections((prev) => {
          const next = new Set(prev);
          for (const entry of entries) {
            const id = entry.target.id;
            if (entry.isIntersecting) next.add(id);
            else next.delete(id);
          }
          return next;
        });
      },
      { rootMargin: '-10% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return activeSections;
}

export function useReadingProgress() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      const el = progressRef.current;
      if (el) el.style.transform = `scaleX(${pct})`;
      setBackToTopVisible(scrollTop > 400);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { progressRef, backToTopVisible, scrollToTop };
}

export function closeSidebarOnNavIfMobile(sidebarEl: HTMLElement | null) {
  if (typeof window !== 'undefined' && window.innerWidth <= 900) {
    sidebarEl?.classList.remove('open');
  }
}
