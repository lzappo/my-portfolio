import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.svg";
import bodybuilderImage from "../assets/developer-image.svg";
import { motion } from "framer-motion";
import "../styles/HomePage.css";
import FindMeOn from "@/components/FindMeOn";
import ContactButton from "@/components/ContactButton";

const HomePage = () => {
  return (
    <>
      <section id="home" className="home-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-title">Hi, I'm Lui Zappitelli!</h1>
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
            I have experience in JavaScript and React, and I’m always expanding
            my knowledge in frontend development.
          </p>

          <p className="about-description">
            My interests include building modern web applications, exploring
            UI/UX design, and creating smooth, interactive user experiences.
          </p>

          <p className="about-description">
            Whenever possible, I also enjoy experimenting with new frameworks
            and libraries to push the boundaries of web development.
          </p>
        </motion.div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img src={bodybuilderImage} alt="Lui Zappitelli" />
        </motion.div>
      </section>
      <FindMeOn />
    </>
  );
};

export default HomePage;
