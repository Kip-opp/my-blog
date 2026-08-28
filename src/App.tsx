import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { AppShell } from "./components/AppShell";
import { Home } from "./pages/Home";
import { LessonPage } from "./pages/LessonPage";
import { useLessonProgress } from "./lib/progress";
import "./styles/signal.css";

const THEME_KEY = "signal-library.theme.v1";

function readInitialTheme(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === "dark") return true;
    if (stored === "light") return false;
  } catch {
    /* ignore */
  }
  if (typeof window.matchMedia === "function") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false;
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => readInitialTheme());
  const { completed, toggle } = useLessonProgress();

  useEffect(() => {
    try {
      window.localStorage.setItem(THEME_KEY, isDarkMode ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }, [isDarkMode]);

  return (
    <AppShell
      isDarkMode={isDarkMode}
      onToggleTheme={() => setIsDarkMode((value) => !value)}
    >
      <Routes>
        <Route path="/" element={<Home completed={completed} />} />
        <Route
          path="/learn"
          element={<Navigate to="/learn/llm-fundamentals" replace />}
        />
        <Route
          path="/learn/llm-fundamentals"
          element={<Home completed={completed} />}
        />
        <Route
          path="/learn/llm-fundamentals/:slug"
          element={
            <LessonPage completed={completed} onToggle={toggle} />
          }
        />
        <Route path="/articles" element={<Navigate to="/" replace />} />
        <Route path="/articles/*" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/posts/:id" element={<Navigate to="/" replace />} />
        <Route path="/posts/*" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Analytics />
    </AppShell>
  );
}
