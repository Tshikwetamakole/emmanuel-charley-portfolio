import React from "react";
import { motion } from "framer-motion";

const StickyHireMe: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/27635273250"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="fixed left-6 bottom-6 z-40 px-4 py-2 text-sm font-medium text-white rounded-full shadow-lg bg-gradient-to-r from-accent to-secondaryAccent hover:scale-105 hover:shadow-2xl">
      Hire Me
    </motion.a>
  );
};

export default StickyHireMe;
