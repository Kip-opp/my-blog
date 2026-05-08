import React from "react";

function About({ image = "https://via.placeholder.com/215" }) {
  return (
    <aside className="about-card">
      <div className="section-label">About</div>
      <div className="profile-container">
        <img src={image} alt="blog logo" className="profile-pic" />
        <div className="profile-name">Denis Kipruto</div>
        <div className="profile-role">Software Engineer & Tech Philosopher</div>
      </div>
      <p className="about-text">
        Denis Kipruto is a software engineer and tech philosopher 
        exploring how AI, code, and self-improvement can shape a more 
        thoughtful future for humanity. I'm actively learning artificial intelligence
        and machine learning, driven by a belief that understanding these technologies 
        from the ground up is key to building them responsibly. Through this blog, I 
        share insights on cutting-edge technologies, programming best practices, and personal
        development strategies that help build a more innovative and ethical tech landscape.
      </p>
    </aside>
  );
}

export default About;
