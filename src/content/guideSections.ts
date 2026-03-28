import { sectionManifest, type GuideSectionMeta } from './manifest';
import body01 from './sections/01-javascript.html?raw';
import body02 from './sections/02-css.html?raw';
import body03 from './sections/03-react.html?raw';
import body04 from './sections/04-react-native.html?raw';
import body05 from './sections/05-node.html?raw';
import body06 from './sections/06-backend.html?raw';
import body07 from './sections/07-databases.html?raw';
import body08 from './sections/08-system-design.html?raw';
import body09 from './sections/09-architecture.html?raw';
import body10 from './sections/10-typescript.html?raw';
import body11 from './sections/11-testing.html?raw';
import body12 from './sections/12-git.html?raw';
import body13 from './sections/13-performance.html?raw';
import body14 from './sections/14-security.html?raw';

export type GuideSection = GuideSectionMeta & { html: string };

const bodies = [
  body01,
  body02,
  body03,
  body04,
  body05,
  body06,
  body07,
  body08,
  body09,
  body10,
  body11,
  body12,
  body13,
  body14,
];

export const guideSections: GuideSection[] = sectionManifest.map((meta, i) => ({
  ...meta,
  html: bodies[i]!,
}));
