import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>© {year} The Nexus. Built by Denis Kipruto.</p>
        <div style={styles.links}>
          <a href="#" style={styles.link}>Twitter</a>
          <a href="#" style={styles.link}>LinkedIn</a>
          <a href="#" style={styles.link}>GitHub</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    borderTop: '1px solid #333',
    marginTop: '40px',
    padding: '20px 0',
    color: '#888',
    fontSize: '0.9rem'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '800px', // Matches your main content width if set
    margin: '0 auto',
    padding: '0 20px'
  },
  links: {
    display: 'flex',
    gap: '15px'
  },
  link: {
    color: '#888',
    textDecoration: 'none',
    transition: 'color 0.2s'
  }
};

export default Footer;
