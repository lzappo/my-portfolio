import "../styles/SkillsPage.css";

import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReact, SiTypescript } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="skill-icon" /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon" /> },
  { name: "JavaScript", icon: <IoLogoJavascript className="skill-icon" /> },
  { name: "TypeScript", icon: <SiTypescript className="skill-icon" /> },
  { name: "React", icon: <SiReact className="skill-icon" /> },
  { name: "React Native📱", icon: <SiReact className="skill-icon" /> }, // subtle but clear
];

const SkillsPage = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Professional Skillset</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
