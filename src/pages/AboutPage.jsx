import React from "react";
import About from "../components/About";
import ProfileCard from "../components/ProfileCard";
import blogData from "../data/blog";

export default function AboutPage() {
  return (
    <div className="about-layout">
      <div className="about-main">
        <About image={blogData.image} />
      </div>
      <ProfileCard />
    </div>
  );
}