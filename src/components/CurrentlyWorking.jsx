import { motion } from "framer-motion";
import "../styles/CurrentlyWorking.css";

const currentFocuses = [
  {
    icon: "🎮",
    text: "Front-End Developer with Moon Poker",
  },
  {
    icon: "🚀",
    text: (
      <>
        Freelance with{" "}
        <a href="https://www.jamdigitalsolutions.com/" target="_blank" rel="noopener noreferrer">
          JAM Digital Solutions
        </a>{" "}
        as a front-end dev!
      </>
    ),
  },

  { icon: "💪", text: "Building an AI-powered fitness cocahing app using React Native" },

  {
    icon: "⚛️",
    text: "Constantly improving this portfolio project to improve my skills and give the best UX possible!",
  },
  {
    icon: "🧠",
    text: "Currently taking courses on node.js to expand my backend knowledge to become a full stack developer!",
  },
];

const CurrentlyWorking = () => {
  return (
    <motion.section
      className="currently-working"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        What I'm Currently Working On
      </motion.h3>

      <ul>
        {currentFocuses.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="custom-bullet-item"
          >
            <span className="bullet-icon">{item.icon}</span>
            <span className="bullet-text">{item.text}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default CurrentlyWorking;
