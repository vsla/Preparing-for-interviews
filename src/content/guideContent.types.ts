export type GuideTopic = {
  summary: string;
  bodyHtml: string;
};

export type GuideKeyTakeaways = {
  title: string;
  itemsHtml: string[];
};

/** One section file under src/content/json — matches migration script output. */
export type GuideSectionContent = {
  slug: string;
  headerHtml: string;
  introHtml: string;
  topics: GuideTopic[];
  keyTakeaways: GuideKeyTakeaways;
};
