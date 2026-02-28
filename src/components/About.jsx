import React from "react";

function About({ image = "https://via.placeholder.com/215" }) {
  return (
    <aside className="about-card">
      <div className="profile-container">
        <img src={image} alt="blog logo" className="profile-pic" />
        <h2 className="section-title">About</h2>
      </div>
      
      {/* Author Name + Rocket Icon */}
      <div style={{ marginTop: '10px', fontWeight: 'bold', textAlign: 'center' }}>
        Denis Kipruto 🚀
      </div>
      
      {/* Bio */}
      <p style={{ marginTop: '15px', textAlign: 'center', lineHeight: '1.6', fontSize: '0.95rem' }}>
        Denis Kipruto is a software engineer and tech philosopher exploring how AI, code, and self‑improvement can shape a more thoughtful future for humanity.
      </p>
    </aside>
  );
}

export default About;
