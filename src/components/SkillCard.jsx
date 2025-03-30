import PropTypes from "prop-types";

const SkillCard = ({ icon, name }) => {
  return (
    <div className="skill-card">
      {icon}
      <h3>{name}</h3>
    </div>
  );
};

SkillCard.propTypes = {
  icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};

export default SkillCard;
