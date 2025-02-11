import React from "react";
import devImage from "../assets/developer-image.svg";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="about-title">Let me introduce myself</h2>
        <p className="about-description">
          I fell in love with programming, and I’ve been exploring different
          technologies ever since.
        </p>

        <p className="about-description">
          I have experience in JavaScript and React, and I’m always expanding my
          knowledge in frontend development.
        </p>

        <p className="about-description">
          My interests include building modern web applications, exploring UI/UX
          design, and creating smooth, interactive user experiences.
        </p>

        <p className="about-description">
          Whenever possible, I also enjoy experimenting with new frameworks and
          libraries to push the boundaries of web development.
        </p>
      </motion.div>
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <img src={devImage} alt="Lui Zappitelli" />
      </motion.div>
    </section>
  );
};

export default AboutSection;
