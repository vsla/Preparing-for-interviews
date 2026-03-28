import type { GuideQuestionGroup, GuideStudyBank } from '../content/guideContent.types';

function HtmlChunk({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function StudyGroup({ group }: { group: GuideQuestionGroup }) {
  const flashcards = group.items.filter((item) => item.flashcardFront && item.flashcardBackHtml);

  return (
    <section className="study-group">
      <div className="study-group-header">
        <h4>{group.title}</h4>
        <span className="study-group-count">{group.items.length} prompts</span>
      </div>

      <ol className="study-question-list">
        {group.items.map((item, index) => (
          <li key={index} className="study-question-card">
            <div className="study-question-topline">
              <p className="study-question">{item.question}</p>
              <span className={`study-difficulty study-difficulty-${item.difficulty}`}>{item.difficulty}</span>
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
          <h5>Flashcards</h5>
          <div className="study-flashcards">
            {flashcards.map((item, index) => (
              <article key={index} className="study-flashcard">
                <div className="study-flashcard-face study-flashcard-front">
                  <span className="study-flashcard-label">Front</span>
                  <p>{item.flashcardFront}</p>
                </div>
                <div className="study-flashcard-face study-flashcard-back">
                  <span className="study-flashcard-label">Back</span>
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

export function StudyQuestionBank({ studyBank }: { studyBank: GuideStudyBank }) {
  if (studyBank.questionGroups.length === 0) {
    return null;
  }

  return (
    <div className="study-bank">
      <h3>Interview Drill Bank</h3>
      <p className="study-bank-intro">
        Practice these as short-answer prompts first, then expand into deeper whiteboard or debugging explanations.
      </p>
      {studyBank.questionGroups.map((group) => (
        <StudyGroup key={group.title} group={group} />
      ))}
    </div>
  );
}
