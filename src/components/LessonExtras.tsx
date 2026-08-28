import { Link } from "react-router-dom";
import type { Lesson } from "../data/llmFundamentals";

export function Insights({ insights }: { insights: Lesson["insights"] }) {
  if (insights.length === 0) return null;
  return (
    <section className="lesson-insights" aria-labelledby="lesson-insights-heading">
      <h2 id="lesson-insights-heading" className="lesson-section-heading">
        Key insights
      </h2>
      <ul className="insight-list">
        {insights.map((insight) => (
          <li key={insight.title} className="insight-item">
            <p className="insight-title">{insight.title}</p>
            <p className="insight-body">{insight.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Pitfalls({ pitfalls }: { pitfalls: Lesson["pitfalls"] }) {
  if (pitfalls.length === 0) return null;
  return (
    <section className="lesson-pitfalls" aria-labelledby="lesson-pitfalls-heading">
      <h2 id="lesson-pitfalls-heading" className="lesson-section-heading">
        Common pitfalls
      </h2>
      <ul className="pitfall-list">
        {pitfalls.map((pitfall) => (
          <li key={pitfall.title} className="pitfall-item">
            <p className="pitfall-title">{pitfall.title}</p>
            <p className="pitfall-body">{pitfall.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function RelatedLessons({ lessons, currentSlug }: { lessons: Lesson[]; currentSlug: string }) {
  const related = lessons.filter((l) => l.slug !== currentSlug);
  if (related.length === 0) return null;
  return (
    <section className="lesson-related" aria-labelledby="lesson-related-heading">
      <h2 id="lesson-related-heading" className="lesson-section-heading">
        Other lessons
      </h2>
      <ul className="related-list">
        {related.map((lesson) => (
          <li key={lesson.slug}>
            <Link
              to={`/learn/llm-fundamentals/${lesson.slug}`}
              className="related-link"
            >
              <span className="related-index">
                {String(lesson.index).padStart(2, "0")}
              </span>
              <span className="related-text">
                <span className="related-title">{lesson.title}</span>
                <span className="related-meta">{lesson.category}</span>
              </span>
              <span className="related-arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
