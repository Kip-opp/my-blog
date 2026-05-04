# Tech Blog

A modern, component-driven static blog built with React and Vite. The project demonstrates clean component architecture, prop-driven data flow, responsive layout, and a cohesive dark aesthetic.

## Project Status

This project is currently under active development. The current version is a static blog interface focused on layout, component structure, and presentation, while dynamic features such as client-side routing and authentication are still being built.

### In Progress
- Route-based navigation
- Authentication and protected user flows
- Expanded interactive blog functionality

### Current Scope
- Static blog homepage
- Component-based UI architecture
- Mock data rendered through props
- Responsive layout and reusable styling

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

3. Start the development server

```bash
npm run dev
```

Open the URL displayed in the terminal, typically `http://localhost:5173`.

4. Run tests

```bash
npm test
```

5. Build for production

```bash
npm run build
```

## Component Overview
- `App` — Root component; imports `blog.js` and passes data to child components.
- `Header` — Site title and navigation. Props: `name`.
- `About` — Author bio and subscription UI. Props: `image`, `about`, `authorName`.
- `ArticleList` — Maps posts into `Article` components. Props: `posts`.
- `Article` — Individual post card. Props: `title`, `date`, `preview`, `minutesToRead`, `image`.

## Roadmap
- Add React Router for multi-page navigation
- Implement authentication flows
- Introduce protected routes for user-specific features
- Connect static blog content to a dynamic backend or CMS
- Expand article interactions and content management features

## Contribution & Contact
Contributions are welcome. Please open an issue or submit a pull request through the repository. For questions or feedback, create an issue on GitHub.

---

Maintained by Kip-opp.