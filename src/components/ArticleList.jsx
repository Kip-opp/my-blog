import React from "react";
import Article from "./Article";

function ArticleList({ posts, activeCategory }) {
  return (
    <main className="articles">
      <div className="articles-header">
        <h2 className="section-title">
          {activeCategory === "all" || !activeCategory ? "All Articles" : "Filtered Articles"}
        </h2>
        <p className="section-subtitle">
          {posts.length} article{posts.length !== 1 ? "s" : ""}
        </p>
      </div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Article
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            image={post.image}
            minutesToRead={post.minutesToRead}
            categories={post.categories}
          />
        ))
      ) : (
        <div className="empty-state">
          <span className="empty-icon">📭</span>
          <p>No articles in this category yet.</p>
        </div>
      )}
    </main>
  );
}

export default ArticleList;
