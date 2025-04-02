import { motion } from "framer-motion";

const WavingHand = () => {
  return (
    <motion.span
      role="img"
      aria-label="waving hand"
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
      style={{ display: "inline-block", originX: 0.7, originY: 0.7 }}
    >
      👋🏼
    </motion.span>
  );
};

export default WavingHand;
