import devImage from "../assets/developer-image.svg";
import { motion } from "framer-motion";

const IntroductionSection = () => {
  return (
    <section id="intro" className="intro-section">
      <motion.div
        className="intro-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="intro-title">
          Please allow me to introduce <span className="my-name">myself</span>
        </h2>
        <p className="intro-description">
          I fell in love with programming, and I've been exploring different technologies ever
          since.
        </p>

        <p className="intro-description">
          I have experience in JavaScript, React, and React Native, and I'm always expanding my
          knowledge in both web and mobile development.
        </p>

        <p className="intro-description">
          My interests include building modern web applications, crafting native mobile apps, and
          exploring UI/UX design to create smooth, interactive user experiences.
        </p>

        <p className="intro-description">
          Whenever possible, I also enjoy experimenting with new frameworks and libraries to push
          the boundaries of front-end and mobile development.
        </p>
      </motion.div>
      <motion.div
        className="intro-image"
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

export default IntroductionSection;
