import React from "react";
import "../styles/ResumePage.css";
import { FaDownload } from "react-icons/fa";
import resumePDF from "../assets/LuiZappitelli_CV.pdf"; // Ensure this is in your assets folder
import resumeImage from "../assets/resumeTemplate.png"; // A screenshot or exported image of your resume

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
    </section>
  );
};

export default ResumePage;
