import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";
import useIsMobile from "@/hooks/useIsMobile";
import PropTypes from "prop-types";

const SkillCard = ({ icon, name, index }) => {
  const isMobile = useIsMobile();
  const [ref, isVisible] = useScrollReveal({
    threshold: 0.2,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <motion.div
      ref={isMobile ? ref : null}
      className="skill-card"
      initial={isMobile ? { opacity: 0, y: 40 } : false}
      animate={isMobile && isVisible ? { opacity: 1, y: 0 } : false}
      transition={isMobile ? { duration: 0.4, delay: index * 0.1 } : {}}
    >
      {icon}
      <h3>{name}</h3>
    </motion.div>
  );
};

SkillCard.propTypes = {
  icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default SkillCard;
