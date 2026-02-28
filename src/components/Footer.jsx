import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>© {year} The Nexus .</p>
        <div className="footer-links">
          <a href="#" className="footer-link">Twitter</a>
          <a href="#" className="footer-link">LinkedIn</a>
          <a href="#" className="footer-link">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
