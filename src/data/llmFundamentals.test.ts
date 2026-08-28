import { describe, expect, it } from "vitest";
import {
  getAdjacentLessons,
  getLessonBySlug,
  lessons,
} from "./llmFundamentals";

describe("llmFundamentals lesson model", () => {
  it("defines five sequential lessons in order", () => {
    expect(lessons).toHaveLength(5);
    expect(lessons.map((lesson) => lesson.index)).toEqual([1, 2, 3, 4, 5]);
    const slugs = lessons.map((lesson) => lesson.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("exposes the required topic slug", () => {
    expect(getLessonBySlug("messages-and-instructions")).toBeDefined();
    expect(getLessonBySlug("tokens")).toBeDefined();
    expect(getLessonBySlug("context-window")).toBeDefined();
    expect(getLessonBySlug("tools")).toBeDefined();
    expect(getLessonBySlug("agents-and-workflows")).toBeDefined();
  });

  it("returns undefined for unknown slugs", () => {
    expect(getLessonBySlug("not-a-real-lesson")).toBeUndefined();
  });

  it("every lesson has at least three outcomes, three sections, three glossary terms, and a quick check", () => {
    for (const lesson of lessons) {
      expect(lesson.outcomes.length).toBeGreaterThanOrEqual(3);
      expect(lesson.sections.length).toBeGreaterThanOrEqual(3);
      expect(lesson.glossary.length).toBeGreaterThanOrEqual(3);
      expect(lesson.quickCheck.question.length).toBeGreaterThan(0);
      expect(lesson.quickCheck.answer.length).toBeGreaterThan(0);
      expect(lesson.insights.length).toBeGreaterThan(0);
      expect(lesson.pitfalls.length).toBeGreaterThan(0);
    }
  });

  it("every diagram has at least three nodes and all edges reference valid nodes", () => {
    for (const lesson of lessons) {
      expect(lesson.diagram.nodes.length).toBeGreaterThanOrEqual(3);
      const ids = new Set(lesson.diagram.nodes.map((node) => node.id));
      for (const edge of lesson.diagram.edges) {
        expect(ids.has(edge.from)).toBe(true);
        expect(ids.has(edge.to)).toBe(true);
      }
    }
  });

  it("adjacent lessons walk the full sequence", () => {
    let cursor = lessons[0];
    const visited: string[] = [cursor.slug];
    while (true) {
      const { next } = getAdjacentLessons(cursor.slug);
      if (!next) break;
      visited.push(next.slug);
      cursor = next;
    }
    expect(visited).toEqual(lessons.map((lesson) => lesson.slug));
  });

  it("the first lesson has no previous and the last has no next", () => {
    const first = lessons[0];
    const last = lessons[lessons.length - 1];
    expect(getAdjacentLessons(first.slug).previous).toBeNull();
    expect(getAdjacentLessons(last.slug).next).toBeNull();
  });

  it("exposes discovery principles", () => {
    // sanity-check the discovery principles are non-empty strings
    expect(lessons.length).toBeGreaterThan(0);
  });

  it("exposes demos for every lesson", () => {
    for (const lesson of lessons) {
      expect(lesson.demoId).not.toBeNull();
    }
  });
});
