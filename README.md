# Signal Library

A calm, editorial reference desk for the mechanics of large language model
systems. Signal Library presents a five-lesson LLM Fundamentals path with
original explanations, inspectable system diagrams, and locally tracked
reading progress — no backend, no analytics on learning behaviour, no
promotional content.

## What is here

- A typed lesson model in `src/data/llmFundamentals.ts`.
- Five lessons: Messages & instructions, Tokens, Context window, Tools,
  Agents & workflows.
- An accessible, deterministic SVG diagram engine in
  `src/components/Flowchart.tsx`.
- A lesson rail, a progress tracker, and a keyboard-accessible
  `Cmd/Ctrl + K` search dialog in `src/components/`.
- Local-only progress stored in the browser via `src/lib/progress.ts`.
- Legacy redirects from `/about`, `/articles`, `/posts/:id` to `/`.

## Routes

| Path                              | Purpose                          |
| --------------------------------- | -------------------------------- |
| `/`                               | Learning index                   |
| `/learn/llm-fundamentals`         | Same index at a durable URL      |
| `/learn/llm-fundamentals/:slug`   | Focused lesson view              |
| `/about`, `/articles`, `/posts/*` | Redirect to `/`                  |

## Scripts

The brief specifies pnpm; this environment uses npm with the same script
names. The behaviour is identical.

```bash
npm test       # vitest
npm run check  # tsc --noEmit + eslint
npm run build  # vite build
npm run dev    # vite dev server
```

## Source boundary

Lessons, glossary entries, and diagrams are original to this repository.
The only external pointer retained is a neutral topic reference link in
the footer, included solely as a starting point for further reading.
No author pages, social panels, profile cards, hero videos, or external
news sections remain in the product.
