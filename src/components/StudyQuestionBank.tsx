import type { GuideQuestionGroup, GuideStudyBank } from '../content/guideContent.types';
import type { UiStrings } from '../i18n';

function HtmlChunk({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function StudyGroup({ group, strings }: { group: GuideQuestionGroup; strings: UiStrings }) {
  const flashcards = group.items.filter((item) => item.flashcardFront && item.flashcardBackHtml);
  const localizedTitle = strings.studyGroupTitleMap[group.title] ?? group.title;

  return (
    <section className="study-group">
      <div className="study-group-header">
        <h4>{localizedTitle}</h4>
        <span className="study-group-count">{strings.promptCountLabel(group.items.length)}</span>
      </div>

      <ol className="study-question-list">
        {group.items.map((item, index) => (
          <li key={index} className="study-question-card">
            <div className="study-question-topline">
              <p className="study-question">{item.question}</p>
              <span className={`study-difficulty study-difficulty-${item.difficulty}`}>
                {strings.difficultyLabels[item.difficulty] ?? item.difficulty}
              </span>
            </div>
            <div className="study-tags">
              {item.tags.map((tag) => (
                <span key={tag} className="study-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="study-answer">
              <HtmlChunk html={item.answerHtml} />
            </div>
          </li>
        ))}
      </ol>

      {flashcards.length > 0 ? (
        <div className="study-flashcards-wrap">
          <h5>{strings.flashcardsLabel}</h5>
          <div className="study-flashcards">
            {flashcards.map((item, index) => (
              <article key={index} className="study-flashcard">
                <div className="study-flashcard-face study-flashcard-front">
                  <span className="study-flashcard-label">{strings.flashcardFrontLabel}</span>
                  <p>{item.flashcardFront}</p>
                </div>
                <div className="study-flashcard-face study-flashcard-back">
                  <span className="study-flashcard-label">{strings.flashcardBackLabel}</span>
                  <HtmlChunk html={item.flashcardBackHtml!} />
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function StudyQuestionBank({ studyBank, strings }: { studyBank: GuideStudyBank; strings: UiStrings }) {
  if (studyBank.questionGroups.length === 0) {
    return null;
  }

  return (
    <div className="study-bank">
      <h3>{strings.studyBankTitle}</h3>
      <p className="study-bank-intro">{strings.studyBankIntro}</p>
      {studyBank.questionGroups.map((group) => (
        <StudyGroup key={group.title} group={group} strings={strings} />
      ))}
    </div>
  );
}
