import { NavLink } from "react-router-dom";
import type { Lesson } from "../data/llmFundamentals";

type LessonRailProps = {
  lessons: Lesson[];
  completed: Set<string>;
  activeSlug?: string;
};

export function LessonRail({ lessons, completed, activeSlug }: LessonRailProps) {
  return (
    <nav className="lesson-rail" aria-label="LLM Fundamentals lessons">
      <p className="lesson-rail-heading">Lessons</p>
      <ol className="lesson-rail-list">
        {lessons.map((lesson) => {
          const isCompleted = completed.has(lesson.slug);
          const isActive = activeSlug === lesson.slug;
          return (
            <li key={lesson.slug}>
              <NavLink
                to={`/learn/llm-fundamentals/${lesson.slug}`}
                className={({ isActive: navActive }) =>
                  [
                    "lesson-rail-item",
                    navActive || isActive ? "is-active" : "",
                    isCompleted ? "is-completed" : ""
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
                end
              >
                <span className="lesson-rail-index" aria-hidden="true">
                  {String(lesson.index).padStart(2, "0")}
                </span>
                <span className="lesson-rail-text">
                  <span className="lesson-rail-title">{lesson.title}</span>
                  <span className="lesson-rail-meta">
                    {lesson.category} · {lesson.readingMinutes} min
                  </span>
                </span>
                <span
                  className={`lesson-rail-mark ${
                    isCompleted ? "is-done" : ""
                  }`}
                  aria-hidden="true"
                >
                  {isCompleted ? "✓" : ""}
                </span>
                <span className="visually-hidden">
                  {isCompleted ? "Completed" : "Not yet completed"}
                </span>
              </NavLink>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
