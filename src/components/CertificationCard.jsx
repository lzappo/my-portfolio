import PropTypes from "prop-types";
import certifications from "@/data/certifications";

const CertificationCard = ({ image, title, issuer, year }) => {
  return (
    <div className="cert-card">
      <img src={image} alt={title} className="cert-image" />
      <div className="cert-text">
        <strong>{title}</strong>
        <br />
        {issuer} — {year}
      </div>
    </div>
  );
};

CertificationCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  issuer: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default CertificationCard;
