import React from 'react';

function Header({ name, isDarkMode, toggleDarkMode }) {
  return (
    <header>
      <div className="header-content">
        <h1>{name}</h1>
        <label className="theme-switch" aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
          <input 
            type="checkbox" 
            checked={!isDarkMode}
            onChange={toggleDarkMode}
          />
          <span className="switch-slider">
            <span className="switch-icon sun">☀️</span>
            <span className="switch-icon moon">🌙</span>
          </span>
        </label>
      </div>
    </header>
  );
}

export default Header;
