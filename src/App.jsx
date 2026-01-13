import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import Footer from "./components/Footer"; // Import here
import blogData from "./data/blog";
import "./App.css"; 

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      
      {/* Main content wrapper */}
      <div className="container">
        <About image={blogData.image} about={blogData.about} />
        <ArticleList posts={blogData.posts} />
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
