import React from "react";
import { Link } from "react-router-dom";
import blogData from "../data/blog";

function getCategoryLabel(id) {
  const cat = blogData.categories.find((c) => c.id === id);
  return cat ? cat.label : id;
}

function Article({ id, title, date = "January 1, 1970", preview, image, minutesToRead, categories = [] }) {
  return (
    <article className="article-card">
      {/* Category tags */}
      {categories.length > 0 && (
        <div className="article-tags">
          {categories.map((cat) => (
            <span key={cat} className={`article-tag tag-${cat}`}>
              {getCategoryLabel(cat)}
            </span>
          ))}
        </div>
      )}

      <Link to={`/posts/${id}`} className="article-link">
        <div className="article-content">
          {image && (
            <img
              src={image}
              alt={title}
              className="article-image"
              loading="lazy"
            />
          )}

          <div className="article-text">
            <div className="article-meta">{date} · {minutesToRead} min read</div>
            <h3>{title}</h3>
            <p>{preview}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default Article;
