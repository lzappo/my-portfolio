import "../styles/SkillsPage.css";

import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="skill-icon" /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon" /> },
  { name: "JavaScript", icon: <IoLogoJavascript className="skill-icon" /> },
  { name: "React", icon: <FaReact className="skill-icon" /> },
  { name: "React Native", icon: <FaReact className="skill-icon" /> },
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
