# The NextGen Coder - Personal Tech Blog

A modern, static blog site built with **React**, designed with a "Dark Mode" aesthetic inspired by Apple's design language. This project demonstrates the core concepts of React: **Component Hierarchy** and **Props**.

## 🚀 Features
- **Component-Based Architecture**: Modular design using Header, About, ArticleList, and Article components.
- **Dynamic Props**: Data is passed down from a central data file (`blog.js`) to child components.
- **Responsive Design**: Adapts to different screen sizes with a clean, centered layout.
- **Dark Mode Aesthetic**: Custom CSS variables for a sleek, cohesive look.
- **Reaction Bar**: Articles feature view counts and read time.

## 🛠️ Tech Stack
- **Framework**: React (Vite)
- **Styling**: CSS3 (Custom Variables, Flexbox/Grid)
- **Testing**: Vitest / React Testing Library
- **Version Control**: Git & GitHub

## 📂 Project Structure
```text
src/
├── components/
│   ├── Header.jsx       # Displays blog title
│   ├── About.jsx        # Sidebar with author bio and subscription
│   ├── ArticleList.jsx  # Iterates through post data
│   ├── Article.jsx      # Individual post card component
│   └── Footer.jsx       # Copyright and social links
├── data/
│   └── blog.js          # Mock data source for the application
├── App.jsx              # Main parent component
└── main.jsx             # Entry point
public/                  # Static assets (images)
⚙️ Setup & Installation
Clone the repository

bash
git clone https://github.com/YOUR_USERNAME/react-personal-blog.git
cd react-personal-blog
Install Dependencies

bash
npm install
Run Development Server

bash
npm run dev
Open the link shown in the terminal (usually http://localhost:5173).

Run Tests
To verify that components render correctly with the right props:

bash
npm test
🧩 Component Details
App
The root component. It imports blogData and passes it down to the child components.

Props: None (State/Data originates here).

Header
Displays the main branding of the site.

Props: name (String) - The title of the blog.

About
A sidebar component displaying author information.

Props:

image (String): URL/Path to author photo.

about (String): Short bio text.

authorName (String): Name of the author.

ArticleList
A container component that maps through the array of posts.

Props: posts (Array) - List of blog post objects.

Article
Renders the details of a single blog post.

Props:

title (String)

date (String)

preview (String)

minutesToRead (Number)

image (String)

## 📸 Screenshot

![App Preview] (https://github.com/Kip-opp/my-blog/blob/main/screenshot.png)

Built by Denis Kipruto | Moringa School Lab Project