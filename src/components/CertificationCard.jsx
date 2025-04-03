import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";
import useIsMobile from "@/hooks/useIsMobile";
import PropTypes from "prop-types";

const CertificationCard = ({ image, title, issuer, year, index }) => {
  const isMobile = useIsMobile();
  const [ref, isVisible] = useScrollReveal({
    threshold: 0.2,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <motion.div
      ref={isMobile ? ref : null}
      className="cert-card"
      initial={isMobile ? { opacity: 0, y: 40 } : false}
      animate={isMobile && isVisible ? { opacity: 1, y: 0 } : false}
      transition={isMobile ? { duration: 0.4, delay: index * 0.1 } : {}}
    >
      <img src={image} alt={title} className="cert-image" />
      <p className="cert-text">
        <strong>{title}</strong>
        <br />
        {issuer} – {year}
      </p>
    </motion.div>
  );
};

CertificationCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  issuer: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default CertificationCard;
