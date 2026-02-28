import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer";
import blogData from "./data/blog";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Header 
        name={blogData.name} 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      
      {/* Main content wrapper */}
      <div className="container">
        <About image={blogData.image} />
        <ArticleList posts={blogData.posts} />
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
