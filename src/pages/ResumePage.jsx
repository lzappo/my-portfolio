import "../styles/ResumePage.css";
import { FaDownload } from "react-icons/fa";
import resumePDF from "../assets/LuiZappitelli_CV.pdf";
import resumeImage from "../assets/resumeTemplate.png";
import react1CertImg from "../assets/certifications/react1.png";
import react2CertImg from "../assets/certifications/react2.png";
import js1CertImg from "../assets/certifications/js1.png";
import js2CertImg from "../assets/certifications/js2.png";
import htmlcssCertImg from "../assets/certifications/html-css.png";

const certifications = [
  {
    title: "The Ultimate HTML 5 & CSS3 Series",
    issuer: "CodeWithMosh",
    year: "2024",
    image: htmlcssCertImg,
  },
  {
    title: "Ultimate JavaScript Part 1: Fundamentals",
    issuer: "CodeWithMosh",
    year: "2024",
    image: js1CertImg,
  },
  {
    title: "Ultimate JavaScript Part : Advanced Topics",
    issuer: "CodeWithMosh",
    year: "2025",
    image: js2CertImg,
  },
  {
    title: "React 18 for Beginners",
    issuer: "CodeWithMosh",
    year: "2024",
    image: react1CertImg,
  },
  {
    title: "React 18: Intermediate Topics",
    issuer: "CodeWithMosh",
    year: "2024",
    image: react2CertImg,
  },
];

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
      {/* 📜 Certifications Section */}
      <div className="certifications-section">
        <h3 className="certifications-title">Certifications & Courses</h3>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <img src={cert.image} alt={cert.title} className="cert-image" />
              <p className="cert-text">
                <strong>{cert.title}</strong> - {cert.issuer} ({cert.year})
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
