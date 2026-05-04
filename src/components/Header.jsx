import React from 'react';

function Header({ name, isDarkMode, toggleDarkMode }) {
  return (
    <header>
      <h1 className="site-title">{name}</h1>
      <div className="header-content">
        <nav className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Articles</a>
          <a href="#" className="nav-link">About</a>
        </nav>
        <button className="theme-switch" onClick={toggleDarkMode} aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
          <span className="theme-switch-thumb"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
