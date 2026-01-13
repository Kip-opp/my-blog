import React from "react";

function Article({ title, date = "January 1, 1970", preview, image, minutesToRead }) {
  return (
    // Make the whole card clickable. href="#" is a placeholder for now.
    <a href={`#post-${title}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <article style={{ border: '1px solid #333', padding: '15px', marginBottom: '20px', borderRadius: '8px' }}>
        
        {/* Container for Image + Content side-by-side (optional simple flex) */}
        <div style={{ display: 'flex', gap: '15px', alignItems: 'start' }}>
          
          {/* Small Blog Pic */}
          {image && (
            <img 
              src={image} 
              alt={title} 
              style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '6px' }} 
            />
          )}

          <div>
            <h3 style={{ marginTop: 0 }}>{title}</h3>
            
            <small>
              {date} • {minutesToRead} min read
            </small>
            
            <p>{preview}</p>
          </div>
        
        </div>
      </article>
    </a>
  );
}

export default Article;
