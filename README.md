# Tech blog

A modern, component-driven blog built with React + Vite. Features client-side routing, category filtering, dark/light mode, a calligraphy-style wordmark, and a profile sidebar — all driven by a central data file with zero backend dependency.

## Screenshot
![App Preview](https://github.com/Kip-opp/my-blog/raw/main/screenshot.png)


# Features

React Router v6 — multi-page navigation with /, /about, /posts/:id routes

Category sidebar — filter articles by topic instantly (AI, Philosophy, Deep Work, etc.)

Search bar — expandable search in the header, filters posts by title and preview

Dark / Light mode — sun/moon toggle, data-theme attribute on <html>, light default

Medium-style wordmark — italic serif tech-chi header with calligraphy aesthetic

Profile sidebar — avatar, article/category/label stats, social links, skills card, live date

External article support — link to third-party articles with source badge

Responsive layout — sidebar collapses to pill row on mobile, cards stack cleanly

# Tech Stack

| Layer          | Tool |
|----------------|------|
| Framework      | React 18 (Vite) |
| Routing        | React Router v6 |
| Styling        | CSS3 — custom properties, Grid, Flexbox |
| Testing        | Vitest + React Testing Library |
| Version Control| Git + GitHub |


# Project Structure

```
src/
├── pages/
│   ├── Home.jsx          # / — category sidebar + article list
│   ├── AboutPage.jsx     # /about — bio + profile sidebar
│   └── BlogPost.jsx      # /posts/:id — full post view
├── components/
│   ├── Header.jsx        # wordmark, nav, search, dark mode toggle
│   ├── CategorySidebar.jsx
│   ├── ArticleList.jsx
│   ├── Article.jsx       # card with category tags
│   ├── ProfileCard.jsx   # stats, skills, socials, date
│   ├── About.jsx
│   └── Footer.jsx
├── data/
│   └── blog.js           # single source of truth for all content
├── App.jsx               # route definitions
└── main.jsx              # BrowserRouter entry point
public/                   # static image assets
```

# Setup & Local Development

1. Clone the repository

```bash
git clone https://github.com/Kip-opp/my-blog.git
cd my-blog
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

4. Run tests

```bash
npm test
```

5. Build for production

```bash
npm run build
```

# Routes

| Path      | Component    | Description |
|-----------|--------------|-------------|
| /         | Home.jsx     | Article list with category sidebar and search |
| /about    | AboutPage.jsx| Author bio, skills card, social links |
| /posts/:id| BlogPost.jsx | Full post — supports HTML content and external source badge |
Adding Content

All posts, categories, profile data, skills, and social links live in `src/data/blog.js`.

To add a new post, append to the posts array:

```js
{
  id: 5,
  title: "Your Post Title",
  date: "May 4, 2026",
  preview: "Short description shown on the card.",
  minutesToRead: 7,
  image: "/your-image.jpg",          // place image in /public
  categories: ["ai", "career"],      // must match category ids
  content: `<p>Full post HTML here...</p>`,
  source: "External Site",           // optional — shows source badge
  sourceUrl: "https://example.com",  // optional
}
```

To add a new category, append to the categories array:

```js
{ id: "security", label: "Security", icon: "🔐" }
```
Component Overview

| Component       | Props | Role |
|----------------|-------|------|
| App            | — | Route shell, dark mode state |
| Header         | isDarkMode, toggleDarkMode | Wordmark, nav, search, toggle |
| CategorySidebar| categories, activeCategory, onSelect | Left-rail category filter |
| ArticleList    | posts, activeCategory | Renders filtered article cards |
| Article        | id, title, date, preview, image, minutesToRead, categories | Single post card with tags |
| ProfileCard    | — | Reads from blog.js — avatar, stats, skills, socials |
| BlogPost       | — | Full post page via useParams |

# Roadmap

Connect to a headless CMS (Contentful / Sanity) or markdown files

Authentication and protected user flows

Comment system per article

RSS feed generation

Pagination or infinite scroll on article list

Deploy to Vercel with proper _redirects for SPA routing

# Contributing
Pull requests are welcome. Open an issue first for major changes.

Maintained by Kip-opp.

