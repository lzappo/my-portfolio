import "../styles/AboutPage.css";
import aboutImage from "../assets/about-image.svg";
import { motion } from "framer-motion";
import FindMeOn from "@/components/FindMeOn";

const AboutPage = () => {
  return (
    <section>
      <div className="about-page">
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
            Hey, I'm Lui Zappitelli — a passionate
            <span className="orange">
              {" "}
              Front-End & Mobile App Developer
            </span>{" "}
            with a love for crafting modern, user-friendly experiences using
            <span className="orange"> React</span> and
            <span className="orange"> React Native</span>.
          </motion.p>

          <motion.p
            className="about-description"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I’m constantly <span className="orange">leveling up</span> my skills
            — whether it’s diving <span className="orange">deeper</span> into
            UI/UX, experimenting with animations and APIs, or just shipping
            <span className="orange"> clean</span>,
            <span className="orange"> scalable</span> code.
          </motion.p>

          <motion.p
            className="about-description"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            When I’m not coding, you’ll find me at the gym
            <span className="orange"> pushing my limits</span>. I believe in
            <span className="orange">
              {" "}
              self-improvement through discipline
            </span>{" "}
            — in tech, fitness, and life.
          </motion.p>

          <motion.p
            className="about-description"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            My goal is to
            <span className="orange"> create impactful projects</span> that
            blend aesthetics with performance. Let’s
            <span className="orange"> build something awesome together!</span>
          </motion.p>

          <motion.p
            className="about-easter-egg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 1, delay: 3, ease: "easeOut" }}
          >
            Fun fact: I can deadlift more than I can{" "}
            <span className="orange">console.log()</span> 😄
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
      </div>
      <div className="about-section-find-me-on">
        <h3 className="connect-heading">Let’s Connect</h3>
        <FindMeOn />
      </div>
    </section>
  );
};

export default AboutPage;
