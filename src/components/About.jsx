import React from "react";

function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
      
      {/* Author Name + Rocket Icon */}
      <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
        Denis Kipruto 🚀
      </div>
    </aside>
  );
}

export default About;
