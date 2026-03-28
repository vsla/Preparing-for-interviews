import type { GuideSectionContent, GuideKeyTakeaways, GuideStudyBank, GuideTopic } from './guideContent.types';
import type { Locale } from '../i18n';

type SectionOverride = {
  headerHtml?: string;
  introHtml?: string;
  topicSummaries?: string[];
  keyTakeaways?: Partial<GuideKeyTakeaways>;
  studyBank?: Partial<GuideStudyBank>;
};

type ContentLocaleData = {
  navLabels: string[];
  sections: Record<string, SectionOverride>;
};

const ptBRContent: ContentLocaleData = {
  navLabels: [
    'JavaScript',
    'CSS',
    'React',
    'React Native',
    'Node.js',
    'Princípios de Backend',
    'Bancos de dados',
    'System Design',
    'Arquitetura',
    'TypeScript',
    'Testes',
    'Git e Workflow',
    'Performance Web',
    'Segurança',
  ],
  sections: {
    '01-javascript': {
      headerHtml: '<h2>1. JavaScript (em profundidade) <span class="topic-count">11 tópicos</span></h2>',
      introHtml:
        '<p class="section-intro">JavaScript é a linguagem mais cobrada em entrevistas de frontend. Esta seção cobre os comportamentos sutis do runtime — coercion, closures, event loop, prototype chain e padrões assíncronos — que normalmente diferenciam candidatos medianos de candidatos fortes.</p>',
      topicSummaries: [
        '1.1 Tipos básicos e coercion',
        '1.2 Escopo e closures',
        '1.3 this e contexto',
        '1.4 Prototypes e herança',
        '1.5 Event Loop',
        '1.6 Padrões assíncronos',
        '1.7 Recursos de ES6 até ES2024',
        '1.8 Funções em profundidade',
        '1.9 Memória e performance',
        '1.10 Módulos',
        '1.11 Perguntas capciosas de entrevista',
      ],
      keyTakeaways: {
        title: 'Pontos principais',
      },
    },
    '02-css': {
      headerHtml: '<h2>2. CSS (em profundidade) <span class="topic-count">10 tópicos</span></h2>',
      introHtml:
        '<p class="section-intro">Perguntas de CSS testam tanto teoria quanto resolução prática de layout. Entrevistadores costumam explorar box model, cascade, specificity, Flexbox, Grid, stacking context e responsive design. Uma resposta forte normalmente inclui trade-offs e bugs comuns de navegador.</p>',
      topicSummaries: [
        '2.1 Box Model',
        '2.2 Display e fluxo',
        '2.3 Flexbox (em profundidade)',
        '2.4 Grid (em profundidade)',
        '2.5 Posicionamento',
        '2.6 Specificity e cascade',
        '2.7 Responsive design',
        '2.8 Animations e transitions',
        '2.9 Arquitetura de CSS',
        '2.10 Perguntas capciosas de CSS',
      ],
      keyTakeaways: { title: 'Pontos principais' },
    },
    '03-react': {
      headerHtml: '<h2>3. React (em profundidade) <span class="topic-count">6 tópicos</span></h2>',
      introHtml:
        '<p class="section-intro">React domina entrevistas de frontend. Além de JSX, a cobrança costuma focar em reconciliation, Fiber, lifecycle de hooks, otimização de rendering e trade-offs de state management. Saber explicar o porquê do comportamento do React vale tanto quanto saber usar a API.</p>',
      topicSummaries: [
        '3.1 Conceitos centrais',
        '3.2 Padrões de componentes',
        '3.3 Hooks — visão completa',
        '3.4 State management',
        '3.5 Performance',
        '3.6 Perguntas capciosas de React',
      ],
      keyTakeaways: { title: 'Pontos principais' },
    },
    '04-react-native': {
      headerHtml: '<h2>4. React Native <span class="topic-count">7 tópicos</span></h2>',
      introHtml:
        '<p class="section-intro">Em React Native, a entrevista costuma misturar conhecimento de React com limitações e características do ambiente mobile. O foco normalmente cai em arquitetura, navigation, performance de listas, diferenças entre iOS e Android, e integração com módulos nativos.</p>',
      topicSummaries: [
        '4.1 Arquitetura',
        '4.2 Setup e ambiente',
        '4.3 Navigation',
        '4.4 Estilização',
        '4.5 Componentes centrais',
        '4.6 Performance',
        '4.7 Native modules e bridge',
      ],
      keyTakeaways: { title: 'Pontos principais' },
    },
    '05-node': {
      headerHtml: '<h2>5. Node.js (em profundidade) <span class="topic-count">7 tópicos</span></h2>',
      introHtml:
        '<p class="section-intro">Entrevistas de Node.js costumam validar se você realmente entende single-threaded non-blocking I/O. O diferencial aparece quando você consegue explicar event loop, streams, backpressure, worker threads, cluster e padrões de produção sem cair em simplificações erradas.</p>',
      topicSummaries: [
        '5.1 Event Loop (específico de Node)',
        '5.2 Módulos centrais',
        '5.3 Streams',
        '5.4 Express.js (em profundidade)',
        '5.5 Authentication e authorization',
        '5.6 Padrões de tratamento de erro',
        '5.7 Performance e produção',
      ],
      keyTakeaways: { title: 'Pontos principais' },
    },
    '06-backend': {
      headerHtml: '<h2>6. Princípios de Backend <span class="topic-count">6 tópicos</span></h2>',
      introHtml:
        '<p class="section-intro">Esta seção cobre fundamentos que aparecem em praticamente qualquer entrevista de backend ou fullstack: HTTP, API design, auth, caching, messaging e decisões entre monolith e microservices. O ideal é responder mostrando clareza de contrato, confiabilidade e trade-offs operacionais.</p>',
      topicSummaries: [
        '6.1 Protocolo HTTP',
        '6.2 API design',
        '6.3 Authentication e segurança',
        '6.4 Caching',
        '6.5 Messaging e async',
        '6.6 Microservices versus monolith',
      ],
      keyTakeaways: { title: 'Pontos principais' },
    },
    '07-databases': {
      headerHtml: '<h2>7. Bancos de dados <span class="topic-count">4 tópicos</span></h2>',
      introHtml:
        '<p class="section-intro">Perguntas de bancos de dados normalmente testam modelagem, índices, transactions, consistência e trade-offs entre SQL, NoSQL e cache. Uma resposta forte sempre conecta a escolha do banco ao padrão real de leitura, escrita e crescimento dos dados.</p>',
      topicSummaries: [
        '7.1 Relacional — PostgreSQL',
        '7.2 NoSQL — MongoDB',
        '7.3 Comparação entre bancos',
        '7.4 Redis (em profundidade)',
      ],
      keyTakeaways: { title: 'Pontos principais' },
    },
    '08-system-design': {
      headerHtml: '<h2>8. System Design (em profundidade) <span class="topic-count">7 tópicos</span></h2>',
      introHtml:
        '<p class="section-intro">Entrevistas de System Design avaliam como você pensa em escala, falha, latência, consistência e trade-offs. O mais importante não é desenhar muitos boxes, mas sim clarificar requisitos, estimar volume, identificar gargalos e justificar por que cada componente existe.</p>',
      topicSummaries: [
        '8.1 Fundamentos',
        '8.2 Componentes importantes',
        '8.3 Design de banco em escala',
        '8.4 CAP Theorem',
        '8.5 Padrões de arquitetura',
        '8.6 Exemplos de System Design',
        '8.7 Infraestrutura',
      ],
      keyTakeaways: { title: 'Pontos principais' },
    },
    '09-architecture': {
      headerHtml: '<h2>9. Arquitetura <span class="topic-count">6 tópicos</span></h2>',
      introHtml:
        '<p class="section-intro">Arquitetura de software aparece quando a entrevista sai da sintaxe e entra em mudança, escalabilidade do código e organização de sistemas. Aqui o objetivo é conseguir explicar princípios, patterns e decisões estruturais de forma prática, sem parecer só teoria decorada.</p>',
      topicSummaries: [
        '9.1 Princípios SOLID',
        '9.2 Outros princípios',
        '9.3 Creational patterns',
        '9.4 Structural patterns',
        '9.5 Behavioral patterns',
        '9.6 Padrões arquiteturais',
      ],
      keyTakeaways: { title: 'Pontos principais' },
    },
    '10-typescript': {
      headerHtml: '<h2>10. TypeScript <span class="topic-count">2 tópicos</span></h2>',
      introHtml:
        '<p class="section-intro">TypeScript é muito cobrado não só como sintaxe, mas como ferramenta para modelar domínio, evitar bugs e documentar contratos de código. O diferencial normalmente aparece quando você sabe explicar generics, narrowing, unions, utility types e limites do sistema de tipos.</p>',
      topicSummaries: [
        '10.1 Sistema de tipos',
        '10.2 Perguntas capciosas de TypeScript',
      ],
      keyTakeaways: { title: 'Pontos principais' },
    },
    '11-testing': {
      headerHtml: '<h2>11. Testes <span class="topic-count">4 tópicos</span></h2>',
      introHtml:
        '<p class="section-intro">Boas respostas sobre testes mostram discernimento, não só ferramentas. O importante é saber diferenciar tipos de teste, o que cada um prova, quando usar mocks, e como equilibrar confiança, velocidade e manutenção do suite.</p>',
      topicSummaries: [
        '11.1 Tipos de teste',
        '11.2 Jest',
        '11.3 React Testing Library',
        '11.4 Cypress / Playwright',
      ],
      keyTakeaways: { title: 'Pontos principais' },
    },
    '12-git': {
      headerHtml: '<h2>12. Git e Workflow <span class="topic-count">1 tópico</span></h2>',
      introHtml:
        '<p class="section-intro">Mesmo quando Git parece básico, entrevistas usam esse tema para medir maturidade de colaboração: staging, commits limpos, rebase, merge conflicts, pull requests e segurança ao mexer em histórico compartilhado.</p>',
      topicSummaries: ['12.1 Conceitos centrais de Git e comandos'],
      keyTakeaways: { title: 'Pontos principais' },
    },
    '13-performance': {
      headerHtml: '<h2>13. Performance Web <span class="topic-count">4 tópicos</span></h2>',
      introHtml:
        '<p class="section-intro">Performance web vai muito além de reduzir bundle size. Entrevistas fortes costumam explorar Core Web Vitals, critical rendering path, custo de JavaScript no main thread, imagens, caching e ferramentas de profiling para achar gargalos reais.</p>',
      topicSummaries: [
        '13.1 Core Web Vitals',
        '13.2 Critical Rendering Path e carregamento de scripts',
        '13.3 Otimização de bundle e imagens',
        '13.4 Service Workers e Web Workers',
      ],
      keyTakeaways: { title: 'Pontos principais' },
    },
    '14-security': {
      headerHtml: '<h2>14. Segurança <span class="topic-count">5 tópicos</span></h2>',
      introHtml:
        '<p class="section-intro">Segurança aparece em entrevistas para verificar se você conhece os riscos mais comuns e sabe mitigá-los no dia a dia. O foco costuma cair em HTTPS, TLS, CSP, XSS, CSRF, auth, secrets e segurança de dependências.</p>',
      topicSummaries: [
        '14.1 HTTPS e TLS',
        '14.2 Content Security Policy (CSP)',
        '14.3 Boas práticas de authentication',
        '14.4 OWASP Top 10 e prevenção de injection',
        '14.5 Secrets management e segurança de dependências',
      ],
      keyTakeaways: { title: 'Pontos principais' },
    },
  },
};

const contentByLocale: Partial<Record<Locale, ContentLocaleData>> = {
  'pt-BR': ptBRContent,
};

export function getLocalizedNavLabel(locale: Locale, index: number, fallback: string) {
  return contentByLocale[locale]?.navLabels[index] ?? fallback;
}

export function localizeSectionContent(locale: Locale, content: GuideSectionContent): GuideSectionContent {
  const override = contentByLocale[locale]?.sections[content.slug];
  if (!override) {
    return content;
  }

  const topics: GuideTopic[] = content.topics.map((topic, index) => ({
    ...topic,
    summary: override.topicSummaries?.[index] ?? topic.summary,
  }));

  return {
    ...content,
    headerHtml: override.headerHtml ?? content.headerHtml,
    introHtml: override.introHtml ?? content.introHtml,
    topics,
    keyTakeaways: {
      ...content.keyTakeaways,
      ...override.keyTakeaways,
    },
    studyBank: override.studyBank
      ? {
          ...content.studyBank,
          ...override.studyBank,
        }
      : content.studyBank,
  };
}
