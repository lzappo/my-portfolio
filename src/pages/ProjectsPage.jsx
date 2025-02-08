import React from "react";
import "../styles/ProjectsPage.css";
import worldImage from "../assets/world-image.svg";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Moshify",
    description: "A website built with just HTML and CSS alongside Mosh.",
    image: "https://moshifyxlzappo.vercel.app/images/banner@2x.webp",
    github: "https://github.com/lzappo/moshifyxlzappo",
    demo: "https://moshifyxlzappo.vercel.app",
  },
  {
    title: "Game-Hub",
    description: "An intensive videogame database with filtering abilities",
    image: "https://lui-game-hub.vercel.app/assets/logo-ff4914e6.webp",
    github: "https://github.com/lzappo/game-hub",
    demo: "https://lui-game-hub.vercel.app/",
  },
  {
    title: "My-Portfolio",
    description: "This portfolio project :)",
    image: worldImage,
    github: "https://github.com/lzappo/my-portfolio",
    demo: "https://luizappitelli.vercel.app",
  },
];

const ProjectsPage = () => {
  return (
    <section className="projects-section">
      <div className="projects-title">
        <h2>
          My Recent <span className="orange">Works</span>
        </h2>
        <p>Here are a few projects I've worked on recently.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn project-btn"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn project-btn"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
