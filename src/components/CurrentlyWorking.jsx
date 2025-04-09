import { motion } from "framer-motion";
import "../styles/CurrentlyWorking.css";

const currentFocuses = [
  "⚛️ Constantly improving this portfolio project to improve my skills and give the best UX possible!",
  "🧠 Currently taking courses on node.js to expand my backend knowledge to become a full stack developer!",
  "🚀 Starting an internship with JAM Digital Solutions as a front-end dev!",
  // "💪 Building an AI-powered fitness app using React Native & Expo"
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
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default CurrentlyWorking;
