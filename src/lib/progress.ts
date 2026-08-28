import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "signal-library.completed-lessons.v1";

function readCompleted(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return new Set(parsed.filter((value): value is string => typeof value === "string"));
    }
    return new Set();
  } catch {
    return new Set();
  }
}

function writeCompleted(values: Set<string>): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(values)));
  } catch {
    /* storage unavailable; ignore */
  }
}

export function useLessonProgress() {
  const [completed, setCompleted] = useState<Set<string>>(() => readCompleted());

  useEffect(() => {
    writeCompleted(completed);
  }, [completed]);

  const markReviewed = useCallback((slug: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.add(slug);
      return next;
    });
  }, []);

  const markUnreviewed = useCallback((slug: string) => {
    setCompleted((prev) => {
      if (!prev.has(slug)) return prev;
      const next = new Set(prev);
      next.delete(slug);
      return next;
    });
  }, []);

  const toggle = useCallback((slug: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  }, []);

  return { completed, markReviewed, markUnreviewed, toggle };
}

export function countCompleted(completed: Set<string>): number {
  return completed.size;
}
