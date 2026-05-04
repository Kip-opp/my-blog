import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CategorySidebar from "../components/CategorySidebar";
import ArticleList from "../components/ArticleList";
import blogData from "../data/blog";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search")?.toLowerCase() || "";

  const filteredPosts = blogData.posts.filter((post) => {
    const matchesCategory =
      activeCategory === "all" || post.categories.includes(activeCategory);
    const matchesSearch =
      !query ||
      post.title.toLowerCase().includes(query) ||
      post.preview.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="home-layout">
      <CategorySidebar
        categories={blogData.categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />
      <div className="home-main">
        {query && (
          <p className="search-results-label">
            {filteredPosts.length} result{filteredPosts.length !== 1 ? "s" : ""} for "<strong>{query}</strong>"
          </p>
        )}
        <ArticleList posts={filteredPosts} activeCategory={activeCategory} />
      </div>
    </div>
  );
}