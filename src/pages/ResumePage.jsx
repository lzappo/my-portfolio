import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import resumePDF from "../assets/LuiZappitelli_CV.pdf";
import resumeImage from "../assets/resumeTemplate.png";
import "../styles/ResumePage.css";
import CertificationCard from "@/components/CertificationCard";
import certifications from "@/data/certifications";

const ResumePage = () => {
  return (
    <section className="resume-section">
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Resume
      </motion.h2>

      <motion.a
        href={resumePDF}
        download="LuiZappitelli_CV.pdf"
        className="btn resume-download"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <FaDownload /> Download CV
      </motion.a>

      <motion.div
        className="resume-preview"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src={resumeImage} alt="Lui Zappitelli Resume" className="resume-image" />
      </motion.div>

      <div className="certifications-section">
        <motion.h3
          className="certifications-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Certifications & Courses
        </motion.h3>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              image={cert.image}
              title={cert.title}
              issuer={cert.issuer}
              year={cert.year}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
