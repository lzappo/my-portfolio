import "../styles/SkillsPage.css";
import skills from "@/data/skills.jsx";
import SkillCard from "@/components/SkillCard";
import TechMarquee from "@/components/TechMarquee";

const SkillsPage = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Professional Skillset</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} name={skill.name} index={index} />
        ))}
      </div>
      <TechMarquee />
    </section>
  );
};

export default SkillsPage;
