// src/data/blog.js
const blogData = {
  name: "tech-chi",
  image: "/rocket.jpg", // Your main profile/sidebar image
  about: "Denis Kipruto is a tech philosopher and software engineer exploring the intersection of AI, self-improvement, and the future of humanity.",

  profile: {
    name: "Denis Kipruto",
    role: "Software Engineer,AI Engineer & Tech Philosopher",
    stats: {
      articles: 5,
      categories: 7,
      labels: 12,
    },
    skills: [
      { label: "Python & Flask", color: "#f59e0b" },
      { label: "React & JavaScript", color: "#3b82f6" },
      { label: "Machine Learning", color: "#313034" },
      { label: "AI & LLM Integration", color: "#8b5cf6" },
      { label: "REST API Design", color: "#10b981" },
      { label: "SQL & Databases", color: "#ef4444" },
      { label: "Technical Writing", color: "#6366f1" },
      { label: "DevOps & CI/CD", color: "#14b8a6" },
      { label: "Cloud Platforms", color: "#67510d" },
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
      image: "https://assets.bytebytego.com/diagrams/0359-the-open-source-ai-stack.png",
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
    {
      id: 5,
      title: "The Future Is Local: How Edge AI Changes The Game",
      date: "January 12, 2026",
      preview: "The next frontier for artificial intelligence is at the edge. Edge AI enables real-time processing on devices like tractors, drones, and medical equipment, overcoming the limitations of cloud computing.",
      minutesToRead: 8,
      image: "/ai.jpg",
      categories: ["ai", "software-engineering"],
      content: `<p>The next frontier for artificial intelligence is at the edge. This is a different place from the frontier of the recent past. By now, we've all grown used to sending data to the cloud to query a voice assistant like Siri, get driving directions or monitor our fitness. This compute happens on the servers, networks and storage hardware of cloud data centers. In other words, it happens far from the edge. But what if it didn't have to? What if the power of AI could be moved into real-life, real-time, local applications? The benefits would be immense.</p>

      <h2>The Edge</h2>
      <p>First things first. What exactly is the edge? It's the real world where data is created—the camera on your phone, in a factory sensor or on a medical device. Take, for example, a tractor that uses onboard sensors while driving along a row of crops. The data collected by those sensors can help a farmer better understand how his crops are doing and how to make them do better. But if the farmer needs to make a quick decision, like whether that strange leaf is a weed that needs to be zapped right now, before the tractor drives on, he doesn't have time to send the sensor data back to the cloud and wait for an answer.</p>

      <h2>Edge AI Solutions</h2>
      <p>This is where edge AI comes in. It solves that problem. Obviously, it's not possible to take all the hardware that makes cloud computing run and put it on a tractor. It's much too heavy and uses far more power than is practical at the edge. Good or bad, the framework on which cloud computation is built runs on von Neumann architectures that utilize large amounts of duplicated resources, memory and power.</p>

      <h2>The Von Neumann Design Challenge</h2>
      <p>This von Neumann design comes with a built-in bottleneck, as it constantly must shuttle data between the processor and the memory. In fact, somewhere between 60% and 84% of a system's total energy is spent on this data movement alone, which is incredibly inefficient. This is a great deal of power being burned just by moving data around and is something that just cannot be afforded on an edge product.</p>

      <p>In a data center, there are hardware and architecture strategies to deal with this. But that inefficiency can be a deal-breaker when it comes to AI at the edge because edge devices must budget power consumption. Those that lean into AI will need to balance small form factor, real-time responses and operation time, often tied to battery life. We call this the SWaP challenge: size, weight and power.</p>

      <h2>In-Memory Computing</h2>
      <p>The currently prevailing approach is to shrink down large AI models so they fit on edge devices. But that can compromise performance, accuracy and, ultimately, utility. If we're to realize the true potential of AI at the edge, we need a new and better way.</p>

      <p>Fortunately, we have one: in-memory computing. Instead of moving data to the processor, in-memory compute does its work directly inside the memory array where the data is stored, which obviates the von Neumann bottleneck. In-memory compute can also run large, highly accurate AI models in very low-power situations without sacrificing performance. To put this in perspective, data centers work with processors that consume kilowatt-hours or megawatt-hours of energy, while edge consumption is measured in watt-hours.</p>

      <h2>Real-World Applications</h2>
      <p>With in-memory computing, AI can start to play in places it's never been before, such as real-time medical imaging analysis, in satellites and industrial drones, even on the battlefield. We're talking high-speed decision-making out in the field, despite limited power, limited bandwidth and no room for error. In-memory compute is ideal for those kinds of environments.</p>

      <p>Let's take a soldier on the front lines equipped with a heads-up display. AI on that edge device can filter through all the data that's pouring in, in real time, and alert the soldier to imminent threats, whether it's an enemy combatant spotted in the tree line 200 meters ahead or an incoming artillery round. It's like giving that soldier a superpower—a sixth sense for danger. And because the chip involved is low-power, the AI can operate on a light, portable person-pack.</p>

      <p>Let's look at another application, drones. Today, most industrial-grade drones need a constant connection to the cloud because they're vulnerable to threats like GPS jamming, which can cause them to crash. But if the drone is outfitted with in-memory compute, it can process data locally, which means it no longer needs that constant connection. Even if its GPS gets jammed, it can complete its mission using its sensors to navigate in real time by following terrain features like buildings, roads and geographic landmarks.</p>

      <p>Now let's go even higher up to satellites. Edge computing is changing what's possible in orbit. Traditionally, satellites have served as data collectors. They gather images and information, then wait until they're over a ground station to transmit it. In-memory compute enables the satellite to process the data it collects onboard in real time at low power. It can identify and track nuclear missiles, suspicious ships or even unusual new constructions on land.</p>

      <p>The takeaway here is succinct but immensely powerful: Data center-level AI is moving out of the cloud and directly onto the edge, a transition that could change our world for the better in profound ways.</p>`,
      source: "Forbes Technology Council",
      sourceUrl: "https://www.forbes.com/sites/forbestechcouncil/2026/01/12/the-future-is-local-how-edge-ai-changes-the-game/",
    },
  ],
};

export default blogData;
