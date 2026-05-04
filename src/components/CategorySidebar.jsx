import React from "react";

function CategorySidebar({ categories, activeCategory, onSelect }) {
  return (
    <aside className="category-sidebar">
      <p className="category-heading">CATEGORIES</p>
      <ul className="category-list">
        {categories.map((cat) => (
          <li key={cat.id}>
            <button
              className={`category-item ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => onSelect(cat.id)}
            >
              <span className="category-icon">{cat.icon}</span>
              <span className="category-label">{cat.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategorySidebar;