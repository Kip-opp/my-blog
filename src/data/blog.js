// src/data/blog.js
const blogData = {
  name: "tech-chi",
  image: "/rocket.jpg", // Your main profile/sidebar image
  about: "Denis Kipruto is a tech philosopher and software engineer exploring the intersection of AI, self-improvement, and the future of humanity.",

  profile: {
    name: "Denis Kipruto",
    role: "Software Engineer & Tech Philosopher",
    stats: {
      articles: 3,
      categories: 7,
      labels: 12,
    },
    skills: [
      { label: "Python & Flask", color: "#f59e0b" },
      { label: "React & JavaScript", color: "#3b82f6" },
      { label: "AI & LLM Integration", color: "#8b5cf6" },
      { label: "REST API Design", color: "#10b981" },
      { label: "SQL & Databases", color: "#ef4444" },
      { label: "Technical Writing", color: "#6366f1" },
      { label: "DevOps & CI/CD", color: "#14b8a6" },
    ],
    socials: [
      { label: "GitHub", icon: "github", url: "https://github.com/Kip-opp" },
      { label: "LinkedIn", icon: "linkedin", url: "https://linkedin.com" },
      { label: "Twitter/X", icon: "x", url: "https://x.com" },
      { label: "Dev.to", icon: "devto", url: "https://dev.to" },
      { label: "Hashnode", icon: "hashnode", url: "https://hashnode.com" },
    ],
  },

  categories: [
    { id: "all", label: "All Articles", icon: "📋" },
    { id: "ai", label: "AI & Machine Learning", icon: "🧠" },
    { id: "software-engineering", label: "Software Engineering", icon: "💻" },
    { id: "self-improvement", label: "Self Improvement", icon: "🌱" },
    { id: "philosophy", label: "Philosophy", icon: "🔮" },
    { id: "deep-work", label: "Deep Work & Focus", icon: "🎯" },
    { id: "devtools", label: "DevTools & Productivity", icon: "⚙️" },
    { id: "career", label: "Career & Growth", icon: "📈" },
  ],

  posts: [
    {
     id: 1,
      title: "The Stoic Developer",
      date: "January 13, 2026",
      preview: "How ancient philosophy helps us handle bugs, deadlines, and the chaos of building software.",
      minutesToRead: 5,
      image: "/stoic.jpg",
      categories: ["philosophy", "software-engineering"],
      content: `# The Stoic Developer

In the world of software development, where bugs are inevitable and deadlines loom like dark clouds, ancient philosophy offers timeless wisdom.

## Embracing Impermanence

Code is never perfect. Just as the Stoics taught that change is the only constant, developers must accept that refactoring and iteration are part of the journey.

## Controlling What You Can

Focus on your code quality and problem-solving skills. The rest—user feedback, project timelines—is often outside your control.

## Virtue in Debugging

Patience and persistence turn debugging from a chore into a meditative practice. Each error is an opportunity to learn.`,
    },
    {
      id: 2,
      title: "Deep Work vs. Shallow Living",
      date: "January 5, 2026",
      preview: "In an age of distraction, focus is the rarest and most valuable skill a developer can cultivate.",
      minutesToRead: 12,
      image: "/focus.jpg",
      categories: ["deep-work", "self-improvement"],
      content: `# Deep Work vs. Shallow Living

Our digital age rewards shallow interactions over meaningful concentration. But true innovation requires deep work.

## The Cost of Distraction

Notifications, social media, and multitasking fragment our attention. Studies show it takes 23 minutes to refocus after an interruption.

## Building Deep Work Habits

1. Schedule focused time blocks
2. Eliminate distractions
3. Practice mindfulness in coding

## Shallow Living's Toll

Constant connectivity leads to anxiety and burnout. Reclaim your mental space for creative, focused work.`,
    },
    {
      id: 3,
      title: "AI Consciousness",
      date: "December 28, 2025",
      preview: "What does it mean to be alive? Exploring the blurred lines between intelligence and sentience.",
      minutesToRead: 15,
      image: "/ai.jpg",
      categories: ["ai", "philosophy"],
      content: `# AI Consciousness

As AI systems grow more sophisticated, questions about consciousness and sentience become increasingly relevant.

## Defining Consciousness

Consciousness involves self-awareness, qualia, and intentionality. Current AI lacks these qualities, but future systems might.

## Ethical Implications

If AI becomes conscious, how should we treat it? The rights of digital beings challenge our understanding of personhood.

## The Future of Human-AI Relations

We must prepare for a world where AI companions are not just tools, but entities with their own experiences.`,
    },
    {
      id: 4,
      title: "The Open Source AI Stack",
      date: "May 4, 2026",
      preview: "You don't need to spend a fortune to build an AI application. Explore the best open-source tools and frameworks — from LLMs to RAG to deployment.",
      minutesToRead: 6,
      image: "https://bytebytego.com/og-images/guides/the-open-source-ai-stack.jpg",
      categories: ["ai", "software-engineering"],
      externalUrl: "https://bytebytego.com/guides/the-open-source-ai-stack/",
      content: `<p>You don't need to spend a fortune to build an AI application. The best AI developer tools are open-source, and an excellent ecosystem is evolving that makes AI accessible to everyone.</p>

        <h2>Frontend</h2>
        <p>To build beautiful AI UIs, frameworks like <strong>NextJS</strong> and <strong>Streamlit</strong> are extremely useful. Vercel can help with deployment.</p>

        <h2>Embeddings & RAG Libraries</h2>
        <p>Embedding models and RAG libraries like <strong>Nomic</strong>, <strong>JinaAI</strong>, <strong>Cognito</strong>, and <strong>LLMAware</strong> help developers build accurate search and retrieval-augmented generation features.</p>

        <h2>Backend & Model Access</h2>
        <p>For backend development, rely on frameworks like <strong>FastAPI</strong>, <strong>Langchain</strong>, and <strong>Netflix Metaflow</strong>. For model access, <strong>Ollama</strong> and <strong>Hugging Face</strong> are top picks.</p>

        <h2>Data & Retrieval</h2>
        <p>For data storage and retrieval: <strong>Postgres</strong>, <strong>Milvus</strong>, <strong>Weaviate</strong>, <strong>PGVector</strong>, and <strong>FAISS</strong> are all solid choices depending on scale.</p>

        <h2>Large Language Models</h2>
        <p>Open-source models like <strong>Llama</strong>, <strong>Mistral</strong>, <strong>Qwen</strong>, <strong>Phi</strong>, and <strong>Gemma</strong> are great alternatives to proprietary LLMs like GPT and Claude — often matching them on benchmarks.</p>`,
      source: "ByteByteGo",
      sourceUrl: "https://bytebytego.com/guides/the-open-source-ai-stack/",
    },
  ],
};

export default blogData;
