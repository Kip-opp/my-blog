import React from "react";

function Article({ title, date = "January 1, 1970", preview, image, minutesToRead }) {
  return (
    <a href={`#post-${title}`} className="article-link">
      <article>
        <div className="article-content">
          {image && (
            <img
              src={image}
              alt={title}
              className="article-image"
            />
          )}

          <div className="article-text">
            <div className="article-meta">
              {date} • {minutesToRead} min read
            </div>
            <h3>{title}</h3>
            <p>{preview}</p>
          </div>
        </div>
      </article>
    </a>
  );
}

export default Article;
