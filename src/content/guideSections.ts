import { sectionManifest, type GuideSectionMeta } from './manifest';
import type { GuideSectionContent } from './guideContent.types';

import json01 from './json/01-javascript.json';
import json02 from './json/02-css.json';
import json03 from './json/03-react.json';
import json04 from './json/04-react-native.json';
import json05 from './json/05-node.json';
import json06 from './json/06-backend.json';
import json07 from './json/07-databases.json';
import json08 from './json/08-system-design.json';
import json09 from './json/09-architecture.json';
import json10 from './json/10-typescript.json';
import json11 from './json/11-testing.json';
import json12 from './json/12-git.json';
import json13 from './json/13-performance.json';
import json14 from './json/14-security.json';

const contents: GuideSectionContent[] = [
  json01,
  json02,
  json03,
  json04,
  json05,
  json06,
  json07,
  json08,
  json09,
  json10,
  json11,
  json12,
  json13,
  json14,
];

const expectedSlugs = [
  '01-javascript',
  '02-css',
  '03-react',
  '04-react-native',
  '05-node',
  '06-backend',
  '07-databases',
  '08-system-design',
  '09-architecture',
  '10-typescript',
  '11-testing',
  '12-git',
  '13-performance',
  '14-security',
] as const;

expectedSlugs.forEach((slug, i) => {
  if (contents[i]?.slug !== slug) {
    throw new Error(`guideSections: expected slug "${slug}" at index ${i}, got "${contents[i]?.slug}"`);
  }
});

export type GuideSection = GuideSectionMeta & {
  content: GuideSectionContent;
};

export const guideSections: GuideSection[] = sectionManifest.map((meta, i) => {
  const content = contents[i]!;
  return {
    ...meta,
    navCount: String(content.topics.length),
    content,
  };
});
