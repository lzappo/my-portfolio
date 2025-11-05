import "../styles/Quote.css";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const Quote = () => {
  return (
    <motion.section
      className="quote-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <FaQuoteLeft className="quote-icon" />
      <blockquote className="quote-text">"Build the temple — and they will come."</blockquote>
      <p className="quote-author">- Lui Zappitelli</p>
    </motion.section>
  );
};

export default Quote;
