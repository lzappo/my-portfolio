import React from "react";
import "../styles/AboutPage.css";
import aboutImage from "../assets/about-image.svg";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <section className="about-page">
      <div className="about-content">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="about-description"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hey, I'm Lui Zappitelli, a passionate
          <span className="orange"> Front-End Developer</span> and
          <span className="orange"> React enthusiast</span>. I love building
          sleek, user-friendly web experiences and continuously learning new
          technologies.
        </motion.p>

        <motion.p
          className="about-description"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          When I'm not coding, you’ll find me in the gym, lifting weights and
          <span className="orange"> pushing my limits</span>. I believe in
          <span className="orange"> constant self-improvement</span>, both in
          tech and fitness.
        </motion.p>

        <motion.p
          className="about-description"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          My goal is to
          <span className="orange"> create impactful projects</span> that blend
          aesthetics with performance. Let’s
          <span className="orange"> build something awesome together!</span>
        </motion.p>
      </div>

      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={aboutImage} alt="Lui Zappitelli" />
      </motion.div>
    </section>
  );
};

export default AboutPage;
