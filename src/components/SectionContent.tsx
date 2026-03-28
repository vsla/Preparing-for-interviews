import type { GuideSectionContent } from '../content/guideContent.types';
import { StudyQuestionBank } from './StudyQuestionBank';

function HtmlChunk({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export function SectionContent({ content }: { content: GuideSectionContent }) {
  return (
    <>
      <HtmlChunk html={content.headerHtml} />
      <HtmlChunk html={content.introHtml} />
      {content.topics.map((topic, i) => (
        <details key={i}>
          <summary>{topic.summary}</summary>
          <div className="details-body" dangerouslySetInnerHTML={{ __html: topic.bodyHtml }} />
        </details>
      ))}
      <div className="key-takeaways">
        <h3>{content.keyTakeaways.title}</h3>
        <ul>
          {content.keyTakeaways.itemsHtml.map((itemHtml, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: itemHtml }} />
          ))}
        </ul>
      </div>
      <StudyQuestionBank studyBank={content.studyBank} />
    </>
  );
}
