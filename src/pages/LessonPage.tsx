import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getAdjacentLessons,
  getLessonBySlug,
  getRelatedLessons,
  lessons
} from "../data/llmFundamentals";
import { Flowchart } from "../components/Flowchart";
import { LessonRail } from "../components/LessonRail";
import { ProgressTracker } from "../components/ProgressTracker";
import { Demo } from "../components/Demos";
import {
  Insights,
  Pitfalls,
  RelatedLessons
} from "../components/LessonExtras";

type LessonPageProps = {
  completed: Set<string>;
  onToggle: (slug: string) => void;
};

function scrollToHash() {
  const hash = window.location.hash.slice(1);
  if (!hash) return;
  const target = document.getElementById(hash);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    target.setAttribute("tabindex", "-1");
    (target as HTMLElement).focus({ preventScroll: true });
  }
}

export function LessonPage({ completed, onToggle }: LessonPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const lesson = slug ? getLessonBySlug(slug) : undefined;
  const [isCheckOpen, setIsCheckOpen] = useState(false);

  useEffect(() => {
    scrollToHash();
  }, [slug]);

  if (!lesson) {
    return (
      <div className="lesson-page">
        <div className="home-rail home-rail-left">
          <LessonRail lessons={lessons} completed={completed} />
        </div>
        <div className="home-content">
          <div className="lesson-missing">
            <h1>Lesson not found</h1>
            <p>
              The lesson <code>{slug}</code> is not part of the current
              sequence. <Link to="/">Return to the learning index</Link>.
            </p>
          </div>
        </div>
        <div className="home-rail home-rail-right" />
      </div>
    );
  }

  const { previous, next } = getAdjacentLessons(lesson.slug);
  const isCompleted = completed.has(lesson.slug);
  const related = getRelatedLessons(lesson.slug);

  return (
    <div className="lesson-page">
      <div className="home-rail home-rail-left">
        <LessonRail
          lessons={lessons}
          completed={completed}
          activeSlug={lesson.slug}
        />
        <nav className="lesson-anchor-nav" aria-label="In this lesson">
          <p className="lesson-side-heading">On this page</p>
          <ul>
            <li>
              <a href="#outcomes">Outcomes</a>
            </li>
            <li>
              <a href="#sections">Sections</a>
            </li>
            <li>
              <a href="#diagram">Diagram</a>
            </li>
            {lesson.demoId ? <li><a href="#demo">Try it</a></li> : null}
            <li>
              <a href="#glossary">Glossary</a>
            </li>
          </ul>
        </nav>
      </div>

      <article className="lesson">
        <nav className="lesson-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Learning index</Link>
          <span aria-hidden="true">›</span>
          <Link to="/learn/llm-fundamentals">LLM Fundamentals</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">{lesson.title}</span>
        </nav>

        <header className="lesson-header">
          <p className="lesson-eyebrow">
            <span>Lesson {String(lesson.index).padStart(2, "0")}</span>
            <span aria-hidden="true">·</span>
            <Link
              to={`/learn/llm-fundamentals?category=${lesson.category.toLowerCase()}`}
              className="lesson-category-link"
            >
              {lesson.category}
            </Link>
            <span aria-hidden="true">·</span>
            <span>{lesson.readingMinutes} min</span>
          </p>
          <h1 className="lesson-title">{lesson.title}</h1>
          <p className="lesson-summary">{lesson.summary}</p>

          <div className="lesson-progress" aria-label="Reading progress">
            <div
              className="lesson-progress-bar"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={lesson.sections.length}
              aria-valuenow={isCompleted ? lesson.sections.length : 0}
              aria-label="Lesson reading progress"
            >
              <span
                className="lesson-progress-fill"
                style={{
                  width: isCompleted
                    ? "100%"
                    : `${Math.round(
                        (1 / Math.max(1, lesson.sections.length)) * 100
                      )}%`
                }}
              />
            </div>
            <button
              type="button"
              className={`lesson-mark-button ${isCompleted ? "is-done" : ""}`}
              onClick={() => onToggle(lesson.slug)}
              aria-pressed={isCompleted}
            >
              {isCompleted ? "Reviewed · click to undo" : "Mark reviewed"}
            </button>
          </div>
        </header>

        <section
          id="outcomes"
          className="lesson-outcomes"
          aria-labelledby="lesson-outcomes-heading"
          tabIndex={-1}
        >
          <h2 id="lesson-outcomes-heading" className="lesson-section-heading">
            What you will be able to do
          </h2>
          <ul>
            {lesson.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>

        <section id="sections" className="lesson-sections" tabIndex={-1}>
          {lesson.sections.map((section) => (
            <article key={section.heading} className="lesson-section">
              <h2 className="lesson-section-heading">{section.heading}</h2>
              {section.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </article>
          ))}
        </section>

        <Insights insights={lesson.insights} />

        <section
          id="diagram"
          className="lesson-diagram"
          aria-label="Interactive diagram"
          tabIndex={-1}
        >
          <Flowchart diagram={lesson.diagram} />
        </section>

        {lesson.demoId ? (
          <section id="demo" aria-label="Interactive demo" tabIndex={-1}>
            <Demo demoId={lesson.demoId} />
          </section>
        ) : null}

        <Pitfalls pitfalls={lesson.pitfalls} />

        <section className="lesson-quick-check" aria-label="Quick check">
          <button
            type="button"
            className="quick-check-toggle"
            aria-expanded={isCheckOpen}
            aria-controls={`quick-check-${lesson.slug}`}
            onClick={() => setIsCheckOpen((value) => !value)}
          >
            <span>Quick check</span>
            <span aria-hidden="true">{isCheckOpen ? "−" : "+"}</span>
          </button>
          {isCheckOpen ? (
            <div id={`quick-check-${lesson.slug}`} className="quick-check-body">
              <p className="quick-check-question">
                <strong>Question.</strong> {lesson.quickCheck.question}
              </p>
              <p className="quick-check-answer">
                <strong>Answer.</strong> {lesson.quickCheck.answer}
              </p>
            </div>
          ) : null}
        </section>

        <section
          id="glossary"
          className="lesson-glossary"
          aria-labelledby="lesson-glossary-heading"
          tabIndex={-1}
        >
          <h2 id="lesson-glossary-heading" className="lesson-section-heading">
            Glossary
          </h2>
          <dl>
            {lesson.glossary.map((entry) => {
              const anchorId = `glossary-${lesson.slug}-${entry.term
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`;
              return (
                <div key={entry.term} className="glossary-row" id={anchorId}>
                  <dt>{entry.term}</dt>
                  <dd>{entry.definition}</dd>
                </div>
              );
            })}
          </dl>
        </section>

        <nav className="lesson-pager" aria-label="Lesson navigation">
          {previous ? (
            <Link
              to={`/learn/llm-fundamentals/${previous.slug}`}
              className="lesson-pager-link lesson-pager-prev"
            >
              <span className="lesson-pager-direction">
                <span aria-hidden="true">←</span> Previous
              </span>
              <span className="lesson-pager-title">{previous.title}</span>
            </Link>
          ) : (
            <span className="lesson-pager-link is-disabled" aria-hidden="true">
              <span className="lesson-pager-direction">Start of sequence</span>
              <span className="lesson-pager-title">This is lesson one</span>
            </span>
          )}
          {next ? (
            <Link
              to={`/learn/llm-fundamentals/${next.slug}`}
              className="lesson-pager-link lesson-pager-next"
            >
              <span className="lesson-pager-direction">
                Next <span aria-hidden="true">→</span>
              </span>
              <span className="lesson-pager-title">{next.title}</span>
            </Link>
          ) : (
            <Link to="/" className="lesson-pager-link lesson-pager-next">
              <span className="lesson-pager-direction">End of sequence</span>
              <span className="lesson-pager-title">Back to learning index</span>
            </Link>
          )}
        </nav>

        <a href="#top" className="lesson-back-to-top" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
          ↑ Back to top
        </a>

        <RelatedLessons lessons={related} currentSlug={lesson.slug} />
      </article>

      <div className="home-rail home-rail-right">
        <ProgressTracker completed={completed} />
        <aside className="lesson-side-panel" aria-label="Lesson reference">
          <p className="lesson-side-heading">In this lesson</p>
          <ul>
            {lesson.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </aside>
        <aside className="lesson-side-panel" aria-label="Lesson glossary cue">
          <p className="lesson-side-heading">Key terms</p>
          <ul className="lesson-glossary-cue">
            {lesson.glossary.map((entry) => {
              const anchorId = `glossary-${lesson.slug}-${entry.term
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`;
              return (
                <li key={entry.term}>
                  <a href={`#${anchorId}`}>{entry.term}</a>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </div>
  );
}
