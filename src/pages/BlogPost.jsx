import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../data/blog";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogData.posts.find((p) => p.id === Number(id));

  if (!post) return (
    <div className="container">
      <p>Post not found.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );

  return (
    <div className="container post-page">
      <Link to="/articles" className="back-link">← All Articles</Link>

      {post.image && (
        <img src={post.image} alt={post.title} className="post-hero-image" loading="lazy" />
      )}

      {post.categories?.length > 0 && (
        <div className="article-tags" style={{ margin: "1rem 0" }}>
          {post.categories.map((cat) => (
            <span key={cat} className={`article-tag tag-${cat}`}>
              {blogData.categories.find((c) => c.id === cat)?.label ?? cat}
            </span>
          ))}
        </div>
      )}

      <h1 className="post-title">{post.title}</h1>
      <p className="article-meta">{post.date} · {post.minutesToRead} min read</p>

      {post.source && (
        <a
          href={post.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="source-badge"
        >
          📖 Read original on {post.source} ↗
        </a>
      )}

      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content ?? `<p>${post.preview}</p>` }}
      />
    </div>
  );
}