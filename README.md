
# The NextGen Coder — Personal Tech Blog

A modern, component-driven static blog built with React and Vite. The project demonstrates clean component architecture, prop-driven data flow, responsive layout, and a cohesive dark aesthetic.

## Screenshot
![App Preview](https://github.com/Kip-opp/my-blog/raw/main/screenshot.png)

## Key Features
- Component-based UI: reusable `Header`, `About`, `ArticleList`, `Article`, and `Footer` components.
- Prop-driven data: central `blog.js` supplies mock post data that flows into child components.
- Responsive layout: styles adapt for desktop and mobile screens.
- Dark aesthetic: CSS custom properties for consistent theming.
- Lightweight reaction bar: displays views and estimated read time.

## Tech Stack
- React (Vite)
- CSS3 (Custom properties, Flexbox/Grid)
- Vitest & React Testing Library
- Git & GitHub

## Project Structure
```text
src/
├── components/
│   ├── Header.jsx
│   ├── About.jsx
│   ├── ArticleList.jsx
│   ├── Article.jsx
│   └── Footer.jsx
├── data/
│   └── blog.js
├── App.jsx
└── main.jsx
public/  # static assets (images)
```

## Setup & Local Development
1. Clone the repository

```bash
git clone https://github.com/Kip-opp/my-blog.git
cd my-blog
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

Open the URL displayed in the terminal (typically http://localhost:5173).

4. Run tests

```bash
npm test
```

5. Build for production

```bash
npm run build
```

## Component Overview
- `App` — Root component; imports `blog.js` and passes data to children.
- `Header` — Site title and navigation. Props: `name` (string).
- `About` — Author bio and subscription UI. Props: `image`, `about`, `authorName`.
- `ArticleList` — Maps posts into `Article` components. Props: `posts` (array).
- `Article` — Individual post card. Props: `title`, `date`, `preview`, `minutesToRead`, `image`.

## Contribution & Contact
Contributions are welcome. Please open issues or pull requests on the repository. For questions or feedback, create an issue or contact the repository owner.

---

Maintained by The NextGen Coder.

