export type GuideTopic = {
  summary: string;
  bodyHtml: string;
};

export type GuideKeyTakeaways = {
  title: string;
  itemsHtml: string[];
};

export type GuideQuestionDifficulty = string;

export type GuideStudyQuestion = {
  question: string;
  answerHtml: string;
  difficulty: GuideQuestionDifficulty;
  tags: string[];
  flashcardFront?: string;
  flashcardBackHtml?: string;
};

export type GuideQuestionGroup = {
  title: string;
  items: GuideStudyQuestion[];
};

export type GuideStudyBank = {
  questionGroups: GuideQuestionGroup[];
};

/** One section file under src/content/json — matches migration script output. */
export type GuideSectionContent = {
  slug: string;
  headerHtml: string;
  introHtml: string;
  topics: GuideTopic[];
  studyBank: GuideStudyBank;
  keyTakeaways: GuideKeyTakeaways;
};
