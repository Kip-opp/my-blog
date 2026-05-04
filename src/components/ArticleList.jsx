import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const articleElements = posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
      image={post.image}
      minutesToRead={post.minutesToRead}
    />
  ));

  return (
    <main className="articles">
      <div className="articles-header">
        <h2 className="section-title">Articles</h2>
        <p className="section-subtitle">Thoughts on technology, code, and self-improvement</p>
      </div>
      {articleElements}
    </main>
  );
}

export default ArticleList;
