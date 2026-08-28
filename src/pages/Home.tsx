import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  discoveryPrinciples,
  lessons,
  type Lesson
} from "../data/llmFundamentals";
import { LessonRail } from "../components/LessonRail";
import { ProgressTracker } from "../components/ProgressTracker";
import { SystemDiagram } from "../components/SystemDiagram";

type HomeProps = {
  completed: Set<string>;
};

const CATEGORIES: { id: "all" | Lesson["category"]; label: string }[] = [
  { id: "all", label: "All" },
  { id: "Messages", label: "Messages" },
  { id: "Tokens", label: "Tokens" },
  { id: "Context", label: "Context" },
  { id: "Tools", label: "Tools" },
  { id: "Agents", label: "Agents" }
];

function LessonCard({
  lesson,
  isCompleted
}: {
  lesson: Lesson;
  isCompleted: boolean;
}) {
  return (
    <article className="lesson-card">
      <div className="lesson-card-index" aria-hidden="true">
        {String(lesson.index).padStart(2, "0")}
      </div>
      <div className="lesson-card-body">
        <p className="lesson-card-meta">
          <span className="lesson-card-category">{lesson.category}</span>
          <span aria-hidden="true">·</span>
          <span>{lesson.readingMinutes} min</span>
          {isCompleted ? (
            <span className="lesson-card-status">· reviewed</span>
          ) : null}
        </p>
        <h2 className="lesson-card-title">
          <Link to={`/learn/llm-fundamentals/${lesson.slug}`}>
            {lesson.title}
          </Link>
        </h2>
        <p className="lesson-card-summary">{lesson.summary}</p>
        <ul className="lesson-card-outcomes">
          {lesson.outcomes.slice(0, 3).map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
        <div className="lesson-card-footer">
          <Link
            className="lesson-card-link"
            to={`/learn/llm-fundamentals/${lesson.slug}`}
          >
            Open lesson →
          </Link>
          <Link
            className="lesson-card-link lesson-card-link-secondary"
            to={`/learn/llm-fundamentals/${lesson.slug}#glossary`}
          >
            Jump to glossary
          </Link>
        </div>
      </div>
    </article>
  );
}

export function Home({ completed }: HomeProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get("category") || "all") as
    | "all"
    | Lesson["category"];
  const [activeCategory, setActiveCategory] =
    useState<"all" | Lesson["category"]>(initialCategory);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return lessons;
    return lessons.filter((lesson) => lesson.category === activeCategory);
  }, [activeCategory]);

  const glossaryEntries = useMemo(() => {
    const map = new Map<string, { term: string; definition: string; slug: string }>();
    for (const lesson of lessons) {
      for (const entry of lesson.glossary) {
        if (!map.has(entry.term)) {
          map.set(entry.term, { ...entry, slug: lesson.slug });
        }
      }
    }
    return Array.from(map.values()).sort((a, b) =>
      a.term.localeCompare(b.term)
    );
  }, []);

  function selectCategory(id: "all" | Lesson["category"]) {
    setActiveCategory(id);
    if (id === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: id });
    }
  }

  return (
    <div className="home-page" id="top">
      <div className="home-rail home-rail-left">
        <LessonRail lessons={lessons} completed={completed} />
        <aside className="home-mini-glossary" aria-label="All glossary terms">
          <p className="lesson-side-heading">Glossary</p>
          <ul>
            {glossaryEntries.slice(0, 8).map((entry) => (
              <li key={entry.term}>
                <a
                  href={`/learn/llm-fundamentals/${entry.slug}#glossary-${entry.slug}-${entry.term
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")}`}
                >
                  {entry.term}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="home-content">
        <header className="home-intro">
          <p className="home-eyebrow">Five lessons · one system</p>
          <h1 className="home-title">LLM Fundamentals</h1>
          <p className="home-lede">
            A calm, original reference desk for the mechanics of large language
            model systems. Read the diagrams first, then the prose — every
            lesson is short, inspectable, and free of marketing.
          </p>
          <div className="home-hero-actions">
            <Link
              to="/learn/llm-fundamentals/messages-and-instructions"
              className="home-cta"
            >
              Start at lesson one →
            </Link>
            <a
              href="https://www.google.com/search?q=llm+fundamentals+guide"
              target="_blank"
              rel="noopener noreferrer"
              className="home-cta-secondary"
            >
              Public topic reference ↗
            </a>
          </div>
        </header>

        <section className="home-system" aria-labelledby="home-system-heading">
          <div className="home-system-copy">
            <p className="home-panel-eyebrow">The shape of the system</p>
            <h2 id="home-system-heading" className="home-panel-title">
              One transcript, many parts
            </h2>
            <p className="home-panel-body">
              Every LLM application is built from the same five pieces. Each
              lesson in this path inspects one of them. The diagram below
              shows how they fit together; the lessons explain how to read
              it.
            </p>
            <ul className="home-system-legend">
              <li>
                <span className="legend-swatch legend-swatch-amber" />
                Active path
              </li>
              <li>
                <span className="legend-swatch legend-swatch-slate" />
                System or context
              </li>
              <li>
                <span className="legend-swatch legend-swatch-tool" />
                Tool surface
              </li>
            </ul>
          </div>
          <div className="home-system-canvas">
            <SystemDiagram ariaLabel="User, transcript, model, and tool, with a context window at the centre" />
          </div>
        </section>

        <section className="home-panel" aria-labelledby="home-discovery-heading">
          <p className="home-panel-eyebrow">How to read these lessons</p>
          <h2 id="home-discovery-heading" className="home-panel-title">
            Discovery principles
          </h2>
          <ul className="discovery-list">
            {discoveryPrinciples.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </section>

        <section
          className="home-filters"
          aria-label="Filter lessons by category"
        >
          <p className="home-panel-eyebrow">Browse</p>
          <div className="home-chip-row" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`home-chip ${activeCategory === cat.id ? "is-active" : ""}`}
                onClick={() => selectCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        <section className="home-lessons" aria-label="Lessons">
          {filtered.length === 0 ? (
            <p className="home-empty">No lessons in this category yet.</p>
          ) : (
            filtered.map((lesson) => (
              <LessonCard
                key={lesson.slug}
                lesson={lesson}
                isCompleted={completed.has(lesson.slug)}
              />
            ))
          )}
        </section>

        <section className="home-glossary" aria-labelledby="home-glossary-heading">
          <p className="home-panel-eyebrow">Reference</p>
          <h2 id="home-glossary-heading" className="home-panel-title">
            Glossary index
          </h2>
          <p className="home-panel-body">
            Every term used across the five lessons, linked to the lesson
            where it is defined.
          </p>
          <ul className="home-glossary-grid">
            {glossaryEntries.map((entry) => (
              <li key={entry.term}>
                <a
                  href={`/learn/llm-fundamentals/${entry.slug}#glossary-${entry.slug}-${entry.term
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")}`}
                  className="home-glossary-link"
                >
                  <span className="home-glossary-term">{entry.term}</span>
                  <span className="home-glossary-def">{entry.definition}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="home-rail home-rail-right">
        <ProgressTracker completed={completed} />
        <aside className="home-reference" aria-label="Topic reference">
          <p className="home-reference-heading">Topic reference</p>
          <p className="home-reference-body">
            A neutral, public reference that outlines the same five topics.
            Signal Library does not copy it; it is included only as a pointer
            for further reading.
          </p>
          <a
            className="home-reference-link"
            href="https://www.google.com/search?q=llm+fundamentals+guide"
            target="_blank"
            rel="noopener noreferrer"
          >
            LLM Fundamentals (public topic reference) ↗
          </a>
        </aside>
        <aside className="home-mini-glossary" aria-label="At a glance">
          <p className="lesson-side-heading">At a glance</p>
          <ul>
            <li>5 lessons</li>
            <li>~35 min total</li>
            <li>5 interactive diagrams</li>
            <li>5 hands-on demos</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
