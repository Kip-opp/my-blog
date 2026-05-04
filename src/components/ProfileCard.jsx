import React from "react";
import blogData from "../data/blog";

const { profile } = blogData;

// SVG icons inline
const icons = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.337-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  devto: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
    </svg>
  ),
  hashnode: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M13.47 2.055a11.945 11.945 0 0 0-2.94 0C5.44 2.556 1.5 6.68 1.5 12s3.94 9.444 9.03 9.945a11.945 11.945 0 0 0 2.94 0C18.56 21.444 22.5 17.32 22.5 12s-3.94-9.444-9.03-9.945zM12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5z"/>
    </svg>
  ),
};

function ProfileCard() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
    weekday: "long",
  });

  return (
    <div className="profile-sidebar">

      {/* ── Profile ── */}
      <div className="profile-card">
        <img src={blogData.image} alt={profile.name} className="profile-avatar" />
        <h3 className="profile-name">{profile.name}</h3>
        <p className="profile-role">{profile.role}</p>

        {/* Stats */}
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-num">{profile.stats.articles}</span>
            <span className="stat-label">Articles</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">{profile.stats.categories}</span>
            <span className="stat-label">Categories</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">{profile.stats.labels}</span>
            <span className="stat-label">Labels</span>
          </div>
        </div>

        {/* Socials */}
        <div className="social-links">
          {profile.socials.map((s) => (
            <a
              key={s.icon}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={s.label}
              title={s.label}
            >
              {icons[s.icon]}
            </a>
          ))}
        </div>
      </div>

      {/* ── Skills Card ── */}
      <div className="skills-card">
        <h4 className="card-heading">My Skills</h4>
        <div className="skills-list">
          {profile.skills.map((skill) => (
            <span
              key={skill.label}
              className="skill-tag"
              style={{ backgroundColor: skill.color + "22", color: skill.color, borderColor: skill.color + "44" }}
            >
              {skill.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Date Card ── */}
      <div className="date-card">
        <p className="date-today">{dateStr}</p>
        <div className="date-bar" />
      </div>

    </div>
  );
}

export default ProfileCard;