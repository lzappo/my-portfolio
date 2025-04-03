import { motion } from "framer-motion";

import projects from "@/data/projects";
import "../styles/ProjectsPage.css";
import ProjectCard from "@/components/ProjectCard";

const ProjectsPage = () => {
  return (
    <section className="projects-section">
      <motion.div
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>
          My Recent <span className="orange">Works</span>
        </h2>
        <p>Here are a few projects I've worked on recently.</p>
      </motion.div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
