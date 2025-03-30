import projects from "@/data/projects";

import "../styles/ProjectsPage.css";
import ProjectCard from "@/components/ProjectCard";

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
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
