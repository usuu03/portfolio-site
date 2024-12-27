import React from "react";
import HeroProjects from "../components/projects/hero";
import Projects from "../components/projects/projectList";

export default function ProjectDisplay() {
  return (
    <div className="flex-col">
      <HeroProjects />
      <Projects />
    </div>
  );
}
