import React from "react";
import "../styles/ProjectsPage.css";

const projects = [
  {
    title: "Project 1",
    description: "A cool web application built with React.",
    image: "https://via.placeholder.com/300",
    github: "https://github.com/lzappo/moshifyxlzappo",
    demo: "https://moshifyxlzappo.vercel.app",
  },
  {
    title: "Project 2",
    description: "A unique front-end project showcasing animations.",
    image: "https://via.placeholder.com/300",
    github: "https://github.com/yourusername/project2",
    demo: "https://yourdemo.com/project2",
  },
  {
    title: "Project 3",
    description: "An innovative full-stack project with API integration.",
    image: "https://via.placeholder.com/300",
    github: "https://github.com/yourusername/project3",
    demo: "https://yourdemo.com/project3",
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
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn project-btn"
              >
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
