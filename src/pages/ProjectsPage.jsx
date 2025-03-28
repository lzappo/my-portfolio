import projects from "@/data/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "../styles/ProjectsPage.css";

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
            {project.tags && (
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn project-btn"
              >
                <FaGithub /> GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn project-btn"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
