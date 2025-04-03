import "../styles/TechMarquee.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiMacos, SiTypescript } from "react-icons/si";

const techStack = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaReact />, name: "React Native" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <VscVscode />, name: "VS Code" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <SiMacos />, name: "MacOs" },
];

const TechMarquee = () => {
  const repeatedStack = [...techStack, ...techStack];

  return (
    <div className="tech-marquee">
      <div className="marquee-content">
        {repeatedStack.map((tech, index) => (
          <div className="tech-icon" key={index} title={tech.name}>
            {tech.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
