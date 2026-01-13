// src/data/blog.js
const blogData = {
  name: "The NextGen Coder",
  image: "/rocket.jpg", // Your main profile/sidebar image
  about: "Denis Kipruto is a tech philosopher and software engineer exploring the intersection of AI, self-improvement, and the future of humanity.",
  
  posts: [
    {
     id: 1,
      title: "The Stoic Developer",
      date: "January 13, 2026",
      preview: "How ancient philosophy helps us handle bugs...",
      minutesToRead: 5,
      image: "/stoic.jpg" // matches public/stoic.jpg
    },
    {
      id: 2,
      title: "Deep Work vs. Shallow Living",
      date: "January 5, 2026",
      preview: "In an age of distraction, focus is key...",
      minutesToRead: 12,
      image: "/focus.jpg" // matches public/focus.jpg
    },
    {
      id: 3,
      title: "AI Consciousness",
      date: "December 28, 2025",
      preview: "What does it mean to be alive?",
      minutesToRead: 15,
      image: "/ai.jpg" // matches public/ai.jpg
    }
  ]
};

export default blogData;
