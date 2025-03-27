import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.svg";

const HeroSection = () => {
  return (
    <section id="home" className="home-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="hero-title">Hi, I'm Luii Zappitelli</h1>
        <p className="hero-subtitle">
          Front-End Developer | React Enthusiast | Bodybuilder | Lifelong
          Learner
        </p>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="#projects" to="/projects" className="btn primary-btn">
            View My Work
          </Link>
          <a
            href="mailto:luizappitelli@gmail.com?subject=Let's%20Connect&body=Hi%20Lui,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!"
            className="btn secondary-btn"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <img src={heroImage} alt="Hero" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
