import { motion } from "framer-motion";

import "../styles/AboutPage.css";
import aboutImage from "../assets/about-image.svg";
import FindMeOn from "@/components/FindMeOn";
import ContactForm from "@/components/ContactForm";

const AboutPage = () => {
  return (
    <section>
      <div className="about-page">
        <div className="about-content">
          <motion.h2
            className="about-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            About Me
          </motion.h2>

          {[
            `Hey, I'm Lui Zappitelli — a passionate`,
            `I'm constantly leveling up my skills — whether it's diving deeper into UI/UX, experimenting with animations and APIs, or just shipping clean, scalable code.`,
            `When I'm not coding, you'll find me at the gym pushing my limits. I believe in self-improvement through discipline — in tech, fitness, and life.`,
            `My goal is to create impactful projects that blend aesthetics with performance. Let’s build something awesome together!`,
          ].map((text, index) => (
            <motion.p
              key={index}
              className="about-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {text}
            </motion.p>
          ))}

          <motion.p
            className="about-easter-egg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 1, delay: 3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Fun fact: I can deadlift more than I can <span className="orange">console.log()</span>{" "}
            😄
          </motion.p>
        </div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={aboutImage} alt="Lui Zappitelli" />
        </motion.div>
      </div>

      <motion.div
        className="about-section-find-me-on"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <FindMeOn />
      </motion.div>

      <motion.h4
        className="form-divider-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Or reach out directly 👇
      </motion.h4>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ContactForm />
      </motion.div>
    </section>
  );
};

export default AboutPage;
