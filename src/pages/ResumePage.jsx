import { FaDownload } from "react-icons/fa";
import resumePDF from "../assets/LuiZappitelli_CV.pdf";
import resumeImage from "../assets/resumeTemplate.png";
import "../styles/ResumePage.css";
import CertificationCard from "@/components/CertificationCard";
import certifications from "@/data/certifications";

const ResumePage = () => {
  return (
    <section className="resume-section">
      <h2 className="resume-title">My Resume</h2>

      <a
        href={resumePDF}
        download="LuiZappitelli_CV.pdf"
        className="btn resume-download"
      >
        <FaDownload /> Download CV
      </a>

      <div className="resume-preview">
        <img
          src={resumeImage}
          alt="Lui Zappitelli Resume"
          className="resume-image"
        />
      </div>

      <div className="certifications-section">
        <h3 className="certifications-title">Certifications & Courses</h3>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              image={cert.image}
              title={cert.title}
              issuer={cert.issuer}
              year={cert.year}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
