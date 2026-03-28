export const locales = ['en', 'pt-BR'] as const;

export type Locale = (typeof locales)[number];

export type UiStrings = {
  appTitleLine1: string;
  appTitleLine2: string;
  subtitle: string;
  sidebarTitle: string;
  toggleNavigationAriaLabel: string;
  closeNavigationAriaLabel: string;
  navAriaLabel: string;
  backToTopAriaLabel: string;
  languageLabel: string;
  languageNames: Record<Locale, string>;
  studyBankTitle: string;
  studyBankIntro: string;
  flashcardsLabel: string;
  flashcardFrontLabel: string;
  flashcardBackLabel: string;
  promptCountLabel: (count: number) => string;
  difficultyLabels: Record<string, string>;
  studyGroupTitleMap: Record<string, string>;
};

export const uiStringsByLocale: Record<Locale, UiStrings> = {
  en: {
    appTitleLine1: 'Frontend / Backend / Fullstack',
    appTitleLine2: 'Interview Study Guide',
    subtitle: 'Comprehensive technical reference — click any section header to expand',
    sidebarTitle: 'Interview Guide',
    toggleNavigationAriaLabel: 'Toggle navigation',
    closeNavigationAriaLabel: 'Close navigation menu',
    navAriaLabel: 'Section navigation',
    backToTopAriaLabel: 'Back to top',
    languageLabel: 'Language',
    languageNames: {
      en: 'EN',
      'pt-BR': 'PT',
    },
    studyBankTitle: 'Interview Drill Bank',
    studyBankIntro: 'Practice these as short-answer prompts first, then expand into deeper whiteboard or debugging explanations.',
    flashcardsLabel: 'Flashcards',
    flashcardFrontLabel: 'Front',
    flashcardBackLabel: 'Back',
    promptCountLabel: (count) => `${count} prompts`,
    difficultyLabels: {
      junior: 'junior',
      mid: 'mid',
      senior: 'senior',
    },
    studyGroupTitleMap: {
      'Core interview questions': 'Core interview questions',
      'Deep-dive follow-ups': 'Deep-dive follow-ups',
      'Scenario and debugging prompts': 'Scenario and debugging prompts',
      'Deep-dive and scenario prompts': 'Deep-dive and scenario prompts',
      'Scenario and workflow prompts': 'Scenario and workflow prompts',
      'Scenario and design prompts': 'Scenario and design prompts',
      'Trick and debugging prompts': 'Trick and debugging prompts',
    },
  },
  'pt-BR': {
    appTitleLine1: 'Frontend / Backend / Fullstack',
    appTitleLine2: 'Guia de estudo para entrevistas',
    subtitle: 'Referência técnica completa — clique em qualquer seção para expandir',
    sidebarTitle: 'Guia de entrevistas',
    toggleNavigationAriaLabel: 'Alternar navegação',
    closeNavigationAriaLabel: 'Fechar menu de navegação',
    navAriaLabel: 'Navegação por seções',
    backToTopAriaLabel: 'Voltar ao topo',
    languageLabel: 'Idioma',
    languageNames: {
      en: 'EN',
      'pt-BR': 'PT',
    },
    studyBankTitle: 'Banco de treino para entrevistas',
    studyBankIntro: 'Use estas perguntas primeiro como respostas curtas e depois aprofunde em explicações de whiteboard, debugging e trade-offs.',
    flashcardsLabel: 'Flashcards',
    flashcardFrontLabel: 'Frente',
    flashcardBackLabel: 'Verso',
    promptCountLabel: (count) => `${count} perguntas`,
    difficultyLabels: {
      junior: 'junior',
      mid: 'pleno',
      senior: 'senior',
    },
    studyGroupTitleMap: {
      'Core interview questions': 'Perguntas principais de entrevista',
      'Deep-dive follow-ups': 'Perguntas de aprofundamento',
      'Scenario and debugging prompts': 'Cenários e prompts de debugging',
      'Deep-dive and scenario prompts': 'Aprofundamento e cenários',
      'Scenario and workflow prompts': 'Cenários e fluxo de trabalho',
      'Scenario and design prompts': 'Cenários e design',
      'Trick and debugging prompts': 'Pegadinhas e debugging',
    },
  },
};

export const localeStorageKey = 'study-guide-locale';
