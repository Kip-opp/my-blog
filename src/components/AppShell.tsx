import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { lessons } from "../data/llmFundamentals";

type AppShellProps = {
  children: ReactNode;
  isDarkMode: boolean;
  onToggleTheme: () => void;
};

const TOPIC_REF_URL =
  "https://www.google.com/search?q=llm+fundamentals+guide";

function useThemeAttribute(isDarkMode: boolean) {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);
}

function useKeyboardShortcut(onTrigger: () => void) {
  useEffect(() => {
    function handler(event: KeyboardEvent) {
      const isMeta = event.metaKey || event.ctrlKey;
      if (isMeta && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onTrigger();
      }
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onTrigger]);
}

function SignalMark() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="28"
      height="28"
      role="img"
      aria-label="Signal Library mark"
      className="signal-mark"
    >
      <rect x="2" y="2" width="28" height="28" rx="6" fill="var(--sl-paper, #f7f3ea)" />
      <path
        d="M8 22 L8 10 L13 16 L18 10 L18 22"
        fill="none"
        stroke="var(--sl-ink, #1f2937)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="22" r="2.2" fill="var(--sl-amber, #e8a72e)" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function AppShell({ children, isDarkMode, onToggleTheme }: AppShellProps) {
  useThemeAttribute(isDarkMode);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useKeyboardShortcut(() => setIsSearchOpen(true));

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      setIsSearchOpen(false);
      setQuery("");
    }
    // We intentionally re-run only on path change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return lessons;
    return lessons.filter((lesson) => {
      const haystack = [
        lesson.title,
        lesson.summary,
        lesson.category,
        ...lesson.glossary.map((entry) => `${entry.term} ${entry.definition}`)
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header-inner">
          <Link to="/" className="app-wordmark" aria-label="Signal Library home">
            <SignalMark />
            <span className="app-wordmark-text">
              <span className="app-wordmark-name">Signal Library</span>
              <span className="app-wordmark-tagline">LLM Fundamentals</span>
            </span>
          </Link>

          <nav className="app-nav" aria-label="Primary">
            <NavLink to="/" end className={({ isActive }) => `app-nav-link ${isActive ? "is-active" : ""}`}>
              Learning index
            </NavLink>
            <NavLink
              to="/learn/llm-fundamentals"
              end
              className={({ isActive }) =>
                `app-nav-link ${isActive ? "is-active" : ""}`
              }
            >
              Topic
            </NavLink>
            <a
              className="app-nav-link"
              href={TOPIC_REF_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Reference
            </a>
          </nav>

          <div className="app-header-actions">
            <button
              type="button"
              className="app-icon-button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search (Ctrl/Cmd + K)"
              aria-haspopup="dialog"
            >
              <SearchIcon />
            </button>
            <button
              type="button"
              className="app-icon-button"
              onClick={onToggleTheme}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </header>

      <main className="app-main">{children}</main>

      <footer className="app-footer">
        <div className="app-footer-inner">
          <p className="app-footer-text">
            Signal Library · a calm reference desk for LLM Fundamentals.
          </p>
          <p className="app-footer-text">
            Topic reference:{" "}
            <a
              href={TOPIC_REF_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              LLM Fundamentals (public topic reference)
            </a>
          </p>
        </div>
      </footer>

      {isSearchOpen ? (
        <div
          className="search-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Search lessons"
        >
          <div
            className="search-dialog-scrim"
            onClick={() => setIsSearchOpen(false)}
          />
          <div className="search-dialog-panel">
            <label htmlFor="signal-search-input" className="search-dialog-label">
              Search lessons
            </label>
            <input
              id="signal-search-input"
              ref={inputRef}
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try: tokens, context, agent…"
              className="search-dialog-input"
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setIsSearchOpen(false);
                } else if (event.key === "Enter" && results[0]) {
                  navigate(`/learn/llm-fundamentals/${results[0].slug}`);
                  setIsSearchOpen(false);
                }
              }}
            />
            <ul className="search-dialog-results">
              {results.length === 0 ? (
                <li className="search-dialog-empty">No matching lessons.</li>
              ) : (
                results.map((lesson) => (
                  <li key={lesson.slug}>
                    <button
                      type="button"
                      className="search-dialog-result"
                      onClick={() => {
                        navigate(`/learn/llm-fundamentals/${lesson.slug}`);
                        setIsSearchOpen(false);
                      }}
                    >
                      <span className="search-dialog-result-title">
                        {lesson.title}
                      </span>
                      <span className="search-dialog-result-meta">
                        Lesson {lesson.index} · {lesson.category}
                      </span>
                    </button>
                  </li>
                ))
              )}
            </ul>
            <p className="search-dialog-hint">
              Press <kbd>Esc</kbd> to close. <kbd>Enter</kbd> to open the first result.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
