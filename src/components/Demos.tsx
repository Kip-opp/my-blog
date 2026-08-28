import { useMemo, useState } from "react";
import type { Lesson } from "../data/llmFundamentals";

/* ──────────────────────────────────────────────────────────
   Demos. Each demo is a self-contained, keyboard-operable
   React component that visualises one idea from a lesson.
   No network calls, no accounts, no analytics.
   ────────────────────────────────────────────────────────── */

type TranscriptRole = "system" | "user" | "assistant" | "tool";

type TranscriptTurn = {
  id: string;
  role: TranscriptRole;
  content: string;
  toolName?: string;
};

const ROLE_LABEL: Record<TranscriptRole, string> = {
  system: "System",
  user: "User",
  assistant: "Assistant",
  tool: "Tool result"
};

const ROLE_DESCRIPTION: Record<TranscriptRole, string> = {
  system: "Standing instructions. Read first, on every turn.",
  user: "The immediate ask. The host appends it before each new request.",
  assistant:
    "The model's reply. If it needs external information, it emits a tool request here.",
  tool: "The host's tool result, packaged so the model can read it on the next turn."
};

/* ── Transcript demo (Lesson 1) ──────────────────────────── */

const SAMPLE_TRANSCRIPT: TranscriptTurn[] = [
  {
    id: "sys-1",
    role: "system",
    content:
      "You are a calm reference desk for LLM fundamentals. Answer in short paragraphs and use diagrams when helpful."
  },
  {
    id: "user-1",
    role: "user",
    content: "What is the difference between a system message and a user message?"
  },
  {
    id: "assistant-1",
    role: "assistant",
    content:
      "The system message holds durable rules. The user message holds the immediate ask. Both travel together in the same transcript."
  },
  {
    id: "user-2",
    role: "user",
    content: "Look up the token count for the phrase 'context window'."
  },
  {
    id: "assistant-2",
    role: "assistant",
    content: "",
    toolName: "count_tokens"
  },
  {
    id: "tool-1",
    role: "tool",
    content: '{"tokens": 4}'
  },
  {
    id: "assistant-3",
    role: "assistant",
    content:
      "The phrase 'context window' costs four tokens in this vocabulary."
  }
];

function TranscriptDemo() {
  const [activeId, setActiveId] = useState<string>(SAMPLE_TRANSCRIPT[0].id);
  const active = SAMPLE_TRANSCRIPT.find((turn) => turn.id === activeId)!;

  return (
    <div className="demo demo-transcript">
      <div className="demo-header">
        <p className="demo-eyebrow">Try it · transcript</p>
        <h3 className="demo-title">Read the transcript in order</h3>
        <p className="demo-lede">
          Each card is one message the model would see. Select a message to
          see its role explained. The transcript is read top-to-bottom, every
          time.
        </p>
      </div>
      <div className="transcript">
        <ol className="transcript-list">
          {SAMPLE_TRANSCRIPT.map((turn) => (
            <li key={turn.id}>
              <button
                type="button"
                className={`transcript-turn transcript-turn-${turn.role} ${
                  turn.id === activeId ? "is-active" : ""
                }`}
                onClick={() => setActiveId(turn.id)}
                aria-pressed={turn.id === activeId}
              >
                <span className="transcript-role">{ROLE_LABEL[turn.role]}</span>
                <span className="transcript-content">
                  {turn.toolName ? (
                    <>
                      <span className="transcript-tool-tag">
                        tool request → {turn.toolName}
                      </span>
                    </>
                  ) : (
                    turn.content
                  )}
                </span>
              </button>
            </li>
          ))}
        </ol>
        <aside className="transcript-explainer" aria-live="polite">
          <p className="transcript-explainer-role">
            {ROLE_LABEL[active.role]}
          </p>
          <p className="transcript-explainer-body">
            {ROLE_DESCRIPTION[active.role]}
          </p>
        </aside>
      </div>
    </div>
  );
}

/* ── Token demo (Lesson 2) ───────────────────────────────── */

type Token = { text: string; id: number };

const SAMPLE_VOCAB: Record<string, number> = {
  "<s>": 0,
  "</s>": 1,
  "▁the": 10,
  "▁context": 11,
  "▁window": 12,
  "▁is": 13,
  "▁shared": 14,
  "▁by": 15,
  "▁input": 16,
  "▁and": 17,
  "▁output": 18,
  ".": 19,
  "▁LLM": 20,
  "▁fundamentals": 21
};

function tokenize(input: string): Token[] {
  const cleaned = input.trim().toLowerCase();
  if (!cleaned) return [];
  const pieces: string[] = [];
  let i = 0;
  while (i < cleaned.length) {
    const rest = cleaned.slice(i);
    const match = Object.keys(SAMPLE_VOCAB).find((k) => {
      if (k.startsWith("▁")) {
        return (
          rest === k.slice(1) || rest.startsWith(k.slice(1) + " ") ||
          rest.startsWith(k.slice(1) + ".")
        );
      }
      return rest.startsWith(k);
    });
    if (match) {
      pieces.push(match);
      i += match.startsWith("▁") ? match.length - 1 : match.length;
    } else {
      pieces.push("▁" + cleaned[i]);
      i += 1;
    }
  }
  return pieces.map((text, index) => ({
    text,
    id: SAMPLE_VOCAB[text] ?? 9000 + index
  }));
}

function TokensDemo() {
  const [text, setText] = useState(
    "The context window is shared by input and output."
  );
  const tokens = useMemo(() => tokenize(text), [text]);

  return (
    <div className="demo demo-tokens">
      <div className="demo-header">
        <p className="demo-eyebrow">Try it · tokenizer</p>
        <h3 className="demo-title">See how text becomes tokens</h3>
        <p className="demo-lede">
          A small, illustrative vocabulary is used here so you can watch the
          encoding. Real tokenizers cover tens of thousands of tokens.
        </p>
      </div>
      <label htmlFor="token-input" className="demo-label">
        Type a sentence
      </label>
      <textarea
        id="token-input"
        className="demo-textarea"
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={3}
      />
      <div className="tokens-result" aria-live="polite">
        <p className="tokens-count">
          <span className="tokens-count-num">{tokens.length}</span>
          <span className="tokens-count-label">tokens</span>
        </p>
        <ol className="tokens-list">
          {tokens.map((token, index) => (
            <li key={index} className="token-chip">
              <span className="token-text">{token.text}</span>
              <span className="token-id">id {token.id}</span>
            </li>
          ))}
          {tokens.length === 0 ? (
            <li className="token-empty">Start typing to see tokens.</li>
          ) : null}
        </ol>
      </div>
    </div>
  );
}

/* ── Context budget demo (Lesson 3) ──────────────────────── */

const WINDOW_TOTAL = 100;

function ContextDemo() {
  const [instructions, setInstructions] = useState(15);
  const [history, setHistory] = useState(35);
  const [evidence, setEvidence] = useState(20);
  const [output, setOutput] = useState(20);

  const used = instructions + history + evidence + output;
  const remaining = Math.max(0, WINDOW_TOTAL - used);
  const isOver = used > WINDOW_TOTAL;

  return (
    <div className="demo demo-context">
      <div className="demo-header">
        <p className="demo-eyebrow">Try it · context budget</p>
        <h3 className="demo-title">Share a fixed window</h3>
        <p className="demo-lede">
          Drag the sliders. The whole pool is one hundred tokens; everything
          you reserve reduces the model's room to answer.
        </p>
      </div>
      <div className="context-bar" aria-hidden="true">
        <span
          className="context-bar-segment context-bar-instructions"
          style={{ flex: instructions }}
        >
          {instructions > 6 ? "Instructions" : ""}
        </span>
        <span
          className="context-bar-segment context-bar-history"
          style={{ flex: history }}
        >
          {history > 6 ? "History" : ""}
        </span>
        <span
          className="context-bar-segment context-bar-evidence"
          style={{ flex: evidence }}
        >
          {evidence > 6 ? "Evidence" : ""}
        </span>
        <span
          className="context-bar-segment context-bar-output"
          style={{ flex: output }}
        >
          {output > 6 ? "Output" : ""}
        </span>
        {remaining > 0 ? (
          <span
            className="context-bar-segment context-bar-free"
            style={{ flex: remaining }}
            title="Unused"
          />
        ) : null}
      </div>
      <p className="context-status" aria-live="polite">
        Used <strong>{used}</strong> of {WINDOW_TOTAL} tokens
        {isOver ? " — over budget, the host must trim" : ""}.
      </p>
      <div className="context-controls">
        {(
          [
            ["instructions", "Instructions", instructions, setInstructions],
            ["history", "History", history, setHistory],
            ["evidence", "Evidence", evidence, setEvidence],
            ["output", "Output budget", output, setOutput]
          ] as const
        ).map(([key, label, value, setter]) => (
          <label key={key} className="context-control">
            <span className="context-control-label">
              <span>{label}</span>
              <span className="context-control-value">{value}</span>
            </span>
            <input
              type="range"
              min={0}
              max={WINDOW_TOTAL}
              value={value}
              onChange={(event) => setter(Number(event.target.value))}
              aria-label={label}
            />
          </label>
        ))}
      </div>
    </div>
  );
}

/* ── Tool simulator (Lesson 4) ───────────────────────────── */

type ToolDef = {
  name: string;
  description: string;
  schema: string;
  run: (args: Record<string, string>) => string;
};

const TOOLS: ToolDef[] = [
  {
    name: "count_tokens",
    description: "Estimate the token count of a phrase.",
    schema: '{ phrase: string }',
    run: (args) => {
      const phrase = args.phrase ?? "";
      const approx = Math.max(1, Math.ceil(phrase.length / 4));
      return `{"tokens": ${approx}}`;
    }
  },
  {
    name: "lookup_lesson",
    description: "Find a lesson by keyword.",
    schema: '{ keyword: string }',
    run: (args) => {
      const keyword = (args.keyword ?? "").toLowerCase();
      const match = [
        "messages-and-instructions",
        "tokens",
        "context-window",
        "tools",
        "agents-and-workflows"
      ].find((slug) => slug.includes(keyword));
      if (!match) {
        return '{"error": "no_lesson_found"}';
      }
      return `{"slug": "${match}"}`;
    }
  }
];

function ToolsDemo() {
  const [selected, setSelected] = useState<ToolDef>(TOOLS[0]);
  const [args, setArgs] = useState<Record<string, string>>({ phrase: "context window" });
  const [log, setLog] = useState<
    { request: string; result: string; ok: boolean }[]
  >([]);

  function runTool() {
    let ok = true;
    let result = "";
    try {
      const parsedArgs: Record<string, string> = {};
      for (const [k, v] of Object.entries(args)) {
        if (!v.trim()) {
          ok = false;
          result = `{"error": "missing_argument", "field": "${k}"}`;
          break;
        }
        parsedArgs[k] = v;
      }
      if (ok) {
        result = selected.run(parsedArgs);
      }
    } catch {
      ok = false;
      result = `{"error": "execution_failed"}`;
    }
    setLog((prev) => [
      {
        request: `${selected.name}(${JSON.stringify(args)})`,
        result,
        ok
      },
      ...prev
    ].slice(0, 4));
  }

  return (
    <div className="demo demo-tools">
      <div className="demo-header">
        <p className="demo-eyebrow">Try it · tool call</p>
        <h3 className="demo-title">Run a tool and see the result</h3>
        <p className="demo-lede">
          Choose a tool, supply the arguments, and watch the host validate
          and run it. The result becomes a tool message for the model.
        </p>
      </div>
      <div className="tools-grid">
        <div className="tools-picker" role="radiogroup" aria-label="Available tools">
          {TOOLS.map((tool) => (
            <button
              key={tool.name}
              type="button"
              role="radio"
              aria-checked={selected.name === tool.name}
              className={`tools-pick ${selected.name === tool.name ? "is-active" : ""}`}
              onClick={() => {
                setSelected(tool);
                if (tool.name === "count_tokens") {
                  setArgs({ phrase: "context window" });
                } else {
                  setArgs({ keyword: "tokens" });
                }
              }}
            >
              <span className="tools-pick-name">{tool.name}</span>
              <span className="tools-pick-desc">{tool.description}</span>
              <code className="tools-pick-schema">{tool.schema}</code>
            </button>
          ))}
        </div>
        <div className="tools-runner">
          <p className="tools-runner-label">Arguments</p>
          {Object.keys(args).map((key) => (
            <label key={key} className="tools-arg">
              <span>{key}</span>
              <input
                type="text"
                value={args[key]}
                onChange={(event) =>
                  setArgs((prev) => ({ ...prev, [key]: event.target.value }))
                }
              />
            </label>
          ))}
          <button type="button" className="tools-run" onClick={runTool}>
            Run tool →
          </button>
        </div>
        <div className="tools-log" aria-live="polite">
          <p className="tools-runner-label">Recent tool messages</p>
          {log.length === 0 ? (
            <p className="tools-log-empty">No calls yet.</p>
          ) : (
            <ol className="tools-log-list">
              {log.map((entry, index) => (
                <li
                  key={index}
                  className={`tools-log-entry ${entry.ok ? "is-ok" : "is-error"}`}
                >
                  <p className="tools-log-request">
                    <span className="tools-log-tag">tool request</span>
                    <code>{entry.request}</code>
                  </p>
                  <p className="tools-log-result">
                    <span className="tools-log-tag">
                      {entry.ok ? "tool result" : "tool error"}
                    </span>
                    <code>{entry.result}</code>
                  </p>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Agent step trace (Lesson 5) ─────────────────────────── */

type AgentStep = {
  thought: string;
  action: { tool: string; args: string };
  observation: string;
};

const STEPS: AgentStep[] = [
  {
    thought: "Plan: list the open lesson, count tokens, summarise, return.",
    action: { tool: "list_lessons", args: "{}" },
    observation: '["messages", "tokens", "context", "tools", "agents"]'
  },
  {
    thought: "Count tokens for the next reply.",
    action: { tool: "count_tokens", args: '{"phrase": "next reply"}' },
    observation: '{"tokens": 3}'
  },
  {
    thought: "Stop rule reached: produced the final answer.",
    action: { tool: "final_answer", args: '{"text": "Five lessons are ready."}' },
    observation: "stop"
  }
];

function AgentDemo() {
  const [current, setCurrent] = useState(0);
  const step = STEPS[current];
  const atEnd = current === STEPS.length - 1;

  return (
    <div className="demo demo-agent">
      <div className="demo-header">
        <p className="demo-eyebrow">Try it · agent loop</p>
        <h3 className="demo-title">Step through an agent</h3>
        <p className="demo-lede">
          Walk through a single agent loop. Each step is a thought, an
          action, and an observation. The loop ends when the stop rule fires.
        </p>
      </div>
      <div className="agent-trace">
        <ol className="agent-steps" aria-label="Agent steps">
          {STEPS.map((s, index) => (
            <li
              key={index}
              className={`agent-step ${index === current ? "is-active" : ""} ${
                index < current ? "is-done" : ""
              }`}
            >
              <span className="agent-step-num">{index + 1}</span>
              <span className="agent-step-name">
                {s.action.tool === "final_answer" ? "Final answer" : s.action.tool}
              </span>
            </li>
          ))}
        </ol>
        <div className="agent-detail" aria-live="polite">
          <p className="agent-line">
            <span className="agent-line-tag">thought</span>
            {step.thought}
          </p>
          <p className="agent-line">
            <span className="agent-line-tag">action</span>
            <code>
              {step.action.tool}({step.action.args})
            </code>
          </p>
          <p className="agent-line">
            <span className="agent-line-tag">observation</span>
            <code>{step.observation}</code>
          </p>
        </div>
        <div className="agent-controls">
          <button
            type="button"
            className="agent-button"
            disabled={current === 0}
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          >
            ← Previous
          </button>
          <button
            type="button"
            className="agent-button agent-button-primary"
            disabled={atEnd}
            onClick={() => setCurrent((c) => Math.min(STEPS.length - 1, c + 1))}
          >
            {atEnd ? "Stop rule reached" : "Next step →"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Public dispatch ─────────────────────────────────────── */

export function Demo({ demoId }: { demoId: NonNullable<Lesson["demoId"]> }) {
  switch (demoId) {
    case "transcript":
      return <TranscriptDemo />;
    case "tokens":
      return <TokensDemo />;
    case "context":
      return <ContextDemo />;
    case "tools":
      return <ToolsDemo />;
    case "agent":
      return <AgentDemo />;
  }
}
