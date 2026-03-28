export type GuideSectionMeta = {
  id: string;
  sectionClass: string;
  navClass: string;
  navLabel: string;
  navCount: string;
};

/** Nav labels, theme classes, and sidebar topic counts — edit here without touching section HTML. */
export const sectionManifest: GuideSectionMeta[] = [
  { id: 'section-1', sectionClass: 'section-js', navClass: 'section-js-nav', navLabel: 'JavaScript', navCount: '11' },
  { id: 'section-2', sectionClass: 'section-css', navClass: 'section-css-nav', navLabel: 'CSS', navCount: '10' },
  { id: 'section-3', sectionClass: 'section-react', navClass: 'section-react-nav', navLabel: 'React', navCount: '6' },
  { id: 'section-4', sectionClass: 'section-rn', navClass: 'section-rn-nav', navLabel: 'React Native', navCount: '7' },
  { id: 'section-5', sectionClass: 'section-node', navClass: 'section-node-nav', navLabel: 'Node.js', navCount: '7' },
  { id: 'section-6', sectionClass: 'section-backend', navClass: 'section-backend-nav', navLabel: 'Backend Principles', navCount: '6' },
  { id: 'section-7', sectionClass: 'section-db', navClass: 'section-db-nav', navLabel: 'Databases', navCount: '4' },
  { id: 'section-8', sectionClass: 'section-sd', navClass: 'section-sd-nav', navLabel: 'System Design', navCount: '7' },
  { id: 'section-9', sectionClass: 'section-arch', navClass: 'section-arch-nav', navLabel: 'Architecture', navCount: '6' },
  { id: 'section-10', sectionClass: 'section-ts', navClass: 'section-ts-nav', navLabel: 'TypeScript', navCount: '2' },
  { id: 'section-11', sectionClass: 'section-test', navClass: 'section-test-nav', navLabel: 'Testing', navCount: '4' },
  { id: 'section-12', sectionClass: 'section-git', navClass: 'section-git-nav', navLabel: 'Git & Workflow', navCount: '1' },
  { id: 'section-13', sectionClass: 'section-perf', navClass: 'section-perf-nav', navLabel: 'Web Performance', navCount: '4' },
  { id: 'section-14', sectionClass: 'section-sec', navClass: 'section-sec-nav', navLabel: 'Security', navCount: '5' },
];
