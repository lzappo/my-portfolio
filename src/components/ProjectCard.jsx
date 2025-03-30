import PropTypes from "prop-types";
import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";
import useIsMobile from "@/hooks/useIsMobile";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const isMobile = useIsMobile();
  const [ref, isVisible] = useScrollReveal({
    threshold: 0.2,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <motion.div
      ref={isMobile ? ref : null}
      className="project-card"
      initial={isMobile ? { opacity: 0, y: 50 } : false}
      animate={isMobile && isVisible ? { opacity: 1, y: 0 } : false}
      transition={isMobile ? { duration: 0.5, delay: index * 0.1 } : {}}
    >
      <img src={project.image} alt={project.title} className="project-image" />
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
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    github: PropTypes.string.isRequired,
    demo: PropTypes.string,
  }),
  index: PropTypes.number.isRequired,
};

export default ProjectCard;
