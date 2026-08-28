export type LessonCategory =
  | "Messages"
  | "Tokens"
  | "Context"
  | "Tools"
  | "Agents";

export type GlossaryTerm = {
  term: string;
  definition: string;
};

export type QuickCheck = {
  question: string;
  answer: string;
};

export type KeyInsight = {
  title: string;
  body: string;
};

export type Pitfall = {
  title: string;
  body: string;
};

export type DiagramNode = {
  id: string;
  label: string;
  description: string;
  /** Optional column hint (0-based) used to lay nodes out left-to-right. */
  column?: number;
  /** Optional row hint (0-based) used to stack nodes vertically within a column. */
  row?: number;
};

export type DiagramEdge = {
  from: string;
  to: string;
  label?: string;
};

export type Diagram = {
  title: string;
  caption: string;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
};

export type LessonSection = {
  heading: string;
  body: string[];
};

export type Lesson = {
  /** Sequential position starting at 1. */
  index: number;
  /** URL-safe route slug. */
  slug: string;
  title: string;
  category: LessonCategory;
  readingMinutes: number;
  summary: string;
  outcomes: string[];
  sections: LessonSection[];
  diagram: Diagram;
  quickCheck: QuickCheck;
  glossary: GlossaryTerm[];
  /** Short, memorable insight callouts. */
  insights: KeyInsight[];
  /** Common mistakes learners make on this topic. */
  pitfalls: Pitfall[];
  /** ID of the demo component to render below the diagram. */
  demoId:
    | "transcript"
    | "tokens"
    | "context"
    | "tools"
    | "agent"
    | null;
};

export const lessons: Lesson[] = [
  {
    index: 1,
    slug: "messages-and-instructions",
    title: "Messages and Instructions",
    category: "Messages",
    readingMinutes: 7,
    summary:
      "A conversation is a sequence of messages. One message sets standing instructions; the rest are inputs and tool results. The model reads the whole ordered list and produces the next message.",
    outcomes: [
      "Identify the three message roles a model sees during a turn",
      "Explain why standing instructions and user input must be ordered explicitly",
      "Trace how a single tool request is generated, executed, and returned"
    ],
    sections: [
      {
        heading: "The model does not see a conversation",
        body: [
          "A language model is stateless. Each request contains the entire transcript the model is allowed to read at that moment, ordered, and labelled by role.",
          "The transcript begins with a system message that sets standing instructions, then alternates user and assistant messages, and may include tool messages that report results."
        ]
      },
      {
        heading: "Standing instructions vs. user input",
        body: [
          "The system message holds the durable contract: tone, refusal rules, output format. The user message holds the immediate ask.",
          "Keeping the two roles separate prevents the model's behaviour from drifting every time a new question arrives."
        ]
      },
      {
        heading: "When a tool is involved",
        body: [
          "If the model decides it needs external information, it emits a tool request inside an assistant message rather than answering directly.",
          "The host application executes the tool, packages the result into a tool message, and continues the conversation so the model can finish the turn."
        ]
      }
    ],
    diagram: {
      title: "A single conversational turn",
      caption:
        "Standing instructions and user input travel together; a tool request is evaluated, executed by the host, and returned as evidence.",
      nodes: [
        {
          id: "system",
          label: "System",
          description:
            "Standing instructions. Tone, refusal rules, output shape, and any durable policy live here.",
          column: 0,
          row: 0
        },
        {
          id: "user",
          label: "User input",
          description:
            "The immediate ask. Appended to the transcript before each new request to the model.",
          column: 0,
          row: 1
        },
        {
          id: "model",
          label: "Model",
          description:
            "Reads the ordered transcript and emits either a final answer or a tool request.",
          column: 1,
          row: 0
        },
        {
          id: "host",
          label: "Host",
          description:
            "The application around the model. Validates the tool request and runs the tool.",
          column: 2,
          row: 0
        },
        {
          id: "tool",
          label: "Tool",
          description:
            "A bounded function such as a search, lookup, or calculation defined by a schema.",
          column: 2,
          row: 1
        },
        {
          id: "result",
          label: "Tool result",
          description:
            "Returned to the model as a new tool message so the model can produce its final answer.",
          column: 1,
          row: 1
        }
      ],
      edges: [
        { from: "system", to: "model" },
        { from: "user", to: "model" },
        { from: "model", to: "host", label: "tool request" },
        { from: "host", to: "tool" },
        { from: "tool", to: "result" },
        { from: "result", to: "model" }
      ]
    },
    quickCheck: {
      question:
        "A user asks a question that requires live data. Where does the live data enter the model?",
      answer:
        "The host runs the tool and appends a tool message containing the result; the model only ever reads the ordered transcript, never the tool directly."
    },
    glossary: [
      {
        term: "Message",
        definition: "A labelled unit in a transcript: system, user, assistant, or tool."
      },
      {
        term: "System message",
        definition: "The standing instructions that set durable behaviour for the model."
      },
      {
        term: "Tool request",
        definition:
          "An assistant message that asks the host to call a named function with specific arguments."
      },
      {
        term: "Tool result",
        definition: "A tool message that returns the output of a function call to the model."
      }
    ],
    insights: [
      {
        title: "The model reads everything every time",
        body:
          "There is no memory between calls. If a fact is not in the transcript, the model cannot use it."
      },
      {
        title: "Tools enter the transcript, not the model",
        body:
          "A tool result is a tool message; the host runs the tool and the model only reads the result."
      }
    ],
    pitfalls: [
      {
        title: "Putting instructions in the user message",
        body:
          "Durable rules belong in the system message. If they live in user messages they will drift as the conversation grows."
      },
      {
        title: "Trusting the tool result without echoing it back",
        body:
          "The model can only reason about what is in the transcript. Make sure the tool message carries the result the model needs."
      }
    ],
    demoId: "transcript"
  },
  {
    index: 2,
    slug: "tokens",
    title: "Tokens: The Model's Native Unit",
    category: "Tokens",
    readingMinutes: 6,
    summary:
      "Models do not read characters or words. They read tokens — fixed pieces of text drawn from a vocabulary. Understanding tokens explains cost, latency, and the limits of the context window.",
    outcomes: [
      "Describe the encode → predict → decode loop the model performs on every turn",
      "Explain why the same sentence can cost different numbers of tokens in different languages",
      "Recognise how tokenisation shapes the limits of the context window"
    ],
    sections: [
      {
        heading: "From text to integers",
        body: [
          "Before the model sees text, a tokenizer chops the input into tokens and replaces each one with the integer id that names it in the model's vocabulary.",
          "Common short words usually become a single token; rare words, numbers, and code characters often split into two or more."
        ]
      },
      {
        heading: "Predicting the next unit",
        body: [
          "The model takes the sequence of integer ids and assigns a probability to every token in the vocabulary for the next position.",
          "Sampling, temperature, and top-p all act on that probability distribution to pick the next token."
        ]
      },
      {
        heading: "From integers back to text",
        body: [
          "Each predicted integer is mapped back to its token, and tokens are concatenated into the visible output.",
          "The loop continues until the model emits a stop token or hits a configured token budget."
        ]
      }
    ],
    diagram: {
      title: "Token encode, predict, decode",
      caption:
        "Input text is encoded into token units; the model predicts output units; those are decoded into usable output.",
      nodes: [
        {
          id: "text",
          label: "Input text",
          description:
            "The raw string written by the user or assembled by the host.",
          column: 0,
          row: 0
        },
        {
          id: "encode",
          label: "Tokenizer",
          description:
            "Splits the text into tokens and replaces each with an integer id from the vocabulary.",
          column: 1,
          row: 0
        },
        {
          id: "model",
          label: "Model",
          description:
            "Predicts the next token id given the sequence of ids it has seen so far.",
          column: 2,
          row: 0
        },
        {
          id: "decode",
          label: "Detokenizer",
          description:
            "Maps each predicted id back to its token and joins them into output text.",
          column: 3,
          row: 0
        },
        {
          id: "output",
          label: "Output text",
          description: "The completed string returned to the host and the user.",
          column: 3,
          row: 1
        }
      ],
      edges: [
        { from: "text", to: "encode" },
        { from: "encode", to: "model" },
        { from: "model", to: "decode" },
        { from: "decode", to: "output" }
      ]
    },
    quickCheck: {
      question:
        "Why does the same question in English and in a less common language often cost a different number of tokens?",
      answer:
        "The tokenizer assigns tokens based on patterns in the training corpus. Languages and scripts with more training coverage tend to be encoded more efficiently."
    },
    glossary: [
      {
        term: "Token",
        definition:
          "The smallest unit a model reads or writes, drawn from a fixed vocabulary."
      },
      {
        term: "Tokenizer",
        definition: "The component that converts text to a sequence of token ids."
      },
      {
        term: "Vocabulary",
        definition: "The complete set of tokens a model recognises, indexed by integer id."
      },
      {
        term: "Stop token",
        definition: "A special token that signals the model has finished its turn."
      }
    ],
    insights: [
      {
        title: "Tokens are not words",
        body:
          "A single short word is usually one token; a rare word or a long number often splits into two or more."
      },
      {
        title: "Cost follows tokens, not characters",
        body:
          "Pricing, latency, and context budgets are measured in tokens, so a different language or formatting can change the bill."
      }
    ],
    pitfalls: [
      {
        title: "Counting characters to estimate cost",
        body:
          "Characters and tokens are not the same. Use a tokenizer, not a character count, when you plan a budget."
      },
      {
        title: "Assuming one word equals one token",
        body:
          "Code, numbers, and punctuation frequently split into several tokens. The token visualizer in this lesson shows why."
      }
    ],
    demoId: "tokens"
  },
  {
    index: 3,
    slug: "context-window",
    title: "The Context Window",
    category: "Context",
    readingMinutes: 7,
    summary:
      "The context window is the model's working memory. It is finite, it is shared by every input and every output, and it is the most common reason a long conversation starts to feel forgetful.",
    outcomes: [
      "List the three categories of content that share the context window",
      "Explain why output budget is subtracted from the same pool as input",
      "Design a curriculum prompt that fits the available tokens"
    ],
    sections: [
      {
        heading: "Three things share one budget",
        body: [
          "Standing instructions, the selected history, and any retrieved evidence all consume the same finite pool of tokens.",
          "Every token the model will need to emit for its answer is also subtracted from the same pool, in advance."
        ]
      },
      {
        heading: "When the window is full",
        body: [
          "If the assembled transcript would exceed the window, the host must decide what to drop or summarise before sending the request.",
          "Trimming is the most common reason a model appears to 'forget' instructions given earlier in a long session."
        ]
      },
      {
        heading: "Designing for the budget",
        body: [
          "Treat the window as a deliberate curriculum: durable rules first, then the evidence the model needs, then the recent turns, and finally the room the model needs to answer.",
          "Curating this order is the host's main job; the model has no other view of the conversation."
        ]
      }
    ],
    diagram: {
      title: "Sharing one context window",
      caption:
        "Curated instructions, selected history, and evidence share finite capacity with the required output budget.",
      nodes: [
        {
          id: "instructions",
          label: "Instructions",
          description:
            "System prompt and any durable policy. Keep it short, specific, and stable.",
          column: 0,
          row: 0
        },
        {
          id: "history",
          label: "Selected history",
          description:
            "Only the recent turns that still inform the answer. Older turns are dropped or summarised.",
          column: 0,
          row: 1
        },
        {
          id: "evidence",
          label: "Evidence",
          description:
            "Retrieved documents, tool results, or user-supplied data needed to answer accurately.",
          column: 0,
          row: 2
        },
        {
          id: "window",
          label: "Context window",
          description:
            "A fixed token budget shared by everything to the left and the answer on the right.",
          column: 1,
          row: 1
        },
        {
          id: "budget",
          label: "Output budget",
          description:
            "Tokens reserved for the model's reply. The model cannot exceed the remaining window.",
          column: 2,
          row: 1
        }
      ],
      edges: [
        { from: "instructions", to: "window" },
        { from: "history", to: "window" },
        { from: "evidence", to: "window" },
        { from: "window", to: "budget" }
      ]
    },
    quickCheck: {
      question:
        "A long session suddenly ignores a rule set in the system prompt. What is the most likely cause?",
      answer:
        "The host assembled a transcript longer than the window and the system message was trimmed or summarised to make room."
    },
    glossary: [
      {
        term: "Context window",
        definition:
          "The maximum number of tokens the model can read and write in a single request."
      },
      {
        term: "Output budget",
        definition:
          "The share of the context window reserved for the model's reply."
      },
      {
        term: "Trimming",
        definition:
          "The host's act of removing or summarising older turns to fit the window."
      }
    ],
    insights: [
      {
        title: "The window is one shared pool",
        body:
          "Instructions, history, evidence, and the model's reply all draw from the same finite budget."
      },
      {
        title: "Forgetfulness is a trim, not a bug",
        body:
          "When the model seems to forget a rule, the most likely cause is that the host trimmed the system message to make room."
      }
    ],
    pitfalls: [
      {
        title: "Forgetting the output budget",
        body:
          "If you reserve the entire window for input, the model has no room to answer. Always leave space for the reply."
      },
      {
        title: "Stuffing the window with old turns",
        body:
          "Recent, relevant turns beat old, irrelevant ones. Curate the history instead of appending everything."
      }
    ],
    demoId: "context"
  },
  {
    index: 4,
    slug: "tools",
    title: "Tools: Extending the Model",
    category: "Tools",
    readingMinutes: 7,
    summary:
      "Tools are bounded, schema-described functions the model can call. They do not change the model; they change the evidence the model sees on its next turn.",
    outcomes: [
      "Read a tool schema and predict which arguments the model should supply",
      "Distinguish between a successful tool result and a tool error in the transcript",
      "Explain why tool selection is the host's responsibility, not the model's"
    ],
    sections: [
      {
        heading: "Tools are described, not invented",
        body: [
          "Each tool comes with a schema: its name, the arguments it accepts, and a description of when it should be used.",
          "The model does not learn new skills at runtime; it picks the closest fit among the tools it has been told about."
        ]
      },
      {
        heading: "The host runs the tool",
        body: [
          "When the model emits a tool request, the host validates the arguments against the schema and then executes the function.",
          "The host is responsible for timeouts, retries, permission checks, and any side effects such as writing to a database."
        ]
      },
      {
        heading: "Result or error becomes evidence",
        body: [
          "A successful return is added to the transcript as a tool message so the model can incorporate it into its next answer.",
          "A structured error is added the same way; the model can read it and try a different tool, a different argument, or answer that it could not complete the task."
        ]
      }
    ],
    diagram: {
      title: "Selecting, running, and returning a tool",
      caption:
        "Schemas and task input inform model selection; the host validates and executes; result or error becomes new evidence.",
      nodes: [
        {
          id: "schemas",
          label: "Tool schemas",
          description:
            "Names, arguments, and descriptions of every tool the model is allowed to call.",
          column: 0,
          row: 0
        },
        {
          id: "task",
          label: "Task input",
          description:
            "The user request and recent transcript. The model reads both before deciding.",
          column: 0,
          row: 1
        },
        {
          id: "select",
          label: "Model selection",
          description:
            "The model picks a tool and emits a request with arguments that match its schema.",
          column: 1,
          row: 0
        },
        {
          id: "validate",
          label: "Host validation",
          description:
            "The host checks the arguments against the schema before running anything.",
          column: 2,
          row: 0
        },
        {
          id: "execute",
          label: "Tool execution",
          description:
            "The bounded function runs and returns either a result or a structured error.",
          column: 2,
          row: 1
        },
        {
          id: "evidence",
          label: "New evidence",
          description:
            "The result or error is appended as a tool message and read by the model on its next turn.",
          column: 1,
          row: 1
        }
      ],
      edges: [
        { from: "schemas", to: "select" },
        { from: "task", to: "select" },
        { from: "select", to: "validate" },
        { from: "validate", to: "execute" },
        { from: "execute", to: "evidence" }
      ]
    },
    quickCheck: {
      question:
        "A tool returns a structured error. What should the host do with that error?",
      answer:
        "Append it to the transcript as a tool message so the model can read it, decide whether to retry with different arguments, or report the failure to the user."
    },
    glossary: [
      {
        term: "Schema",
        definition:
          "A structured description of a tool's name, arguments, and intended use."
      },
      {
        term: "Tool request",
        definition:
          "An assistant message that names a tool and supplies its arguments."
      },
      {
        term: "Tool error",
        definition:
          "A structured failure returned by a tool that the model can read and reason about."
      }
    ],
    insights: [
      {
        title: "Tools are described, not invented",
        body:
          "The model can only call tools it has been told about. Add a tool by adding its schema to the prompt."
      },
      {
        title: "The host owns the side effects",
        body:
          "Validation, retries, timeouts, and writes to a database are the host's job, not the model's."
      }
    ],
    pitfalls: [
      {
        title: "Giving the model raw database or filesystem access",
        body:
          "Tools should be narrow, validated functions. The narrower the tool, the safer the agent."
      },
      {
        title: "Letting the model invent tool arguments",
        body:
          "If the model produces arguments that fail validation, the host should return a structured error so the model can correct itself."
      }
    ],
    demoId: "tools"
  },
  {
    index: 5,
    slug: "agents-and-workflows",
    title: "Agents and Workflows",
    category: "Agents",
    readingMinutes: 8,
    summary:
      "A workflow is a path the application controls. An agent is a loop the model controls within bounds. The difference is who decides what happens next.",
    outcomes: [
      "Distinguish an application-controlled workflow from a model-controlled agent loop",
      "State the stop rule that prevents an agent loop from running forever",
      "Choose the right pattern for a task based on its predictability and cost"
    ],
    sections: [
      {
        heading: "Workflow: the application drives",
        body: [
          "In a workflow, the host defines the steps in advance: extract fields, call a tool, summarise, return.",
          "The model is called in fixed places with fixed inputs. The path is known; the model only fills in the values."
        ]
      },
      {
        heading: "Agent: the model drives within bounds",
        body: [
          "In an agent, the host gives the model a goal, a set of tools, and a stop rule, and lets the model choose the next action.",
          "The model reads the latest observation, picks a tool, and repeats until the stop rule fires."
        ]
      },
      {
        heading: "Stop rules keep agents bounded",
        body: [
          "A stop rule can be a maximum number of steps, a final answer token, a confidence threshold, or an external timeout.",
          "Without a stop rule, an agent loop can spend tokens indefinitely. With one, the loop has a predictable cost ceiling."
        ]
      }
    ],
    diagram: {
      title: "Workflow path vs. agent loop",
      caption:
        "An application-controlled workflow follows a known path; an agent selects bounded actions from observations until a stop rule applies.",
      nodes: [
        {
          id: "wf-start",
          label: "Workflow start",
          description:
            "The application defines the steps, tools, and inputs up front.",
          column: 0,
          row: 0
        },
        {
          id: "wf-step",
          label: "Fixed step",
          description:
            "Each step calls the model with a specific prompt and passes the output to the next step.",
          column: 1,
          row: 0
        },
        {
          id: "wf-done",
          label: "Workflow end",
          description:
            "The final step returns the assembled result. The path is known in advance.",
          column: 2,
          row: 0
        },
        {
          id: "ag-goal",
          label: "Agent goal",
          description:
            "The application hands the model a goal, a tool set, and a stop rule.",
          column: 0,
          row: 2
        },
        {
          id: "ag-observe",
          label: "Observe",
          description:
            "The model reads the latest tool result and the goal.",
          column: 1,
          row: 2
        },
        {
          id: "ag-act",
          label: "Choose action",
          description:
            "The model selects the next bounded action from the available tools.",
          column: 2,
          row: 2
        },
        {
          id: "ag-stop",
          label: "Stop rule",
          description:
            "A step limit, final-answer token, or timeout ends the loop with a predictable cost.",
          column: 3,
          row: 2
        }
      ],
      edges: [
        { from: "wf-start", to: "wf-step" },
        { from: "wf-step", to: "wf-done" },
        { from: "ag-goal", to: "ag-observe" },
        { from: "ag-observe", to: "ag-act" },
        { from: "ag-act", to: "ag-observe", label: "loop" },
        { from: "ag-act", to: "ag-stop" }
      ]
    },
    quickCheck: {
      question:
        "When should you choose a workflow over an agent?",
      answer:
        "When the steps are predictable and the cost of surprise is high. Workflows are easier to test, audit, and budget; agents earn their cost when the path cannot be written down in advance."
    },
    glossary: [
      {
        term: "Workflow",
        definition:
          "A sequence of steps the application controls, with the model called in fixed places."
      },
      {
        term: "Agent",
        definition:
          "A loop in which the model picks the next bounded action from observations until a stop rule applies."
      },
      {
        term: "Stop rule",
        definition:
          "A bounded condition — step limit, token, or timeout — that ends an agent loop."
      },
      {
        term: "Observation",
        definition:
          "The latest tool result and state the model reads before choosing its next action."
      }
    ],
    insights: [
      {
        title: "The difference is who drives",
        body:
          "In a workflow, the application controls the path. In an agent, the model controls the path within bounds."
      },
      {
        title: "Stop rules are the cost ceiling",
        body:
          "Without a stop rule, an agent loop can run forever. With one, the loop has a predictable cost."
      }
    ],
    pitfalls: [
      {
        title: "Reaching for an agent when a workflow would do",
        body:
          "If you can write the steps down in advance, a workflow is easier to test, audit, and budget than an agent."
      },
      {
        title: "Forgetting the stop rule",
        body:
          "An unbounded agent loop will spend tokens indefinitely. Always define a stop rule before the loop starts."
      }
    ],
    demoId: "agent"
  }
];

export const lessonsBySlug: Record<string, Lesson> = Object.fromEntries(
  lessons.map((lesson) => [lesson.slug, lesson])
);

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessonsBySlug[slug];
}

export function getAdjacentLessons(slug: string): {
  previous: Lesson | null;
  next: Lesson | null;
} {
  const index = lessons.findIndex((lesson) => lesson.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }
  return {
    previous: index > 0 ? lessons[index - 1] : null,
    next: index < lessons.length - 1 ? lessons[index + 1] : null
  };
}

export const discoveryPrinciples: string[] = [
  "Read the diagram first; the prose explains the relationships it already shows.",
  "Treat the context window as a curriculum, not a dump.",
  "Use the smallest tool that returns enough evidence to answer.",
  "Choose a workflow when the path is known; choose an agent when it is not."
];

export function getRelatedLessons(slug: string): Lesson[] {
  const lesson = getLessonBySlug(slug);
  if (!lesson) return [];
  return lessons.filter(
    (other) => other.slug !== slug && other.category === lesson.category
  );
}
