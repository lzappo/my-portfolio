import "../styles/SkillsPage.css";
import skills from "@/data/skills.jsx";

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
