import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.div
      className="fixed z-50 bottom-6 right-6 group"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 150 }}
    >
      <a
        href="https://wa.me/27635273250?text=Hi%20Emmanuel!%20I'd%20like%20to%20work%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center text-white transition-all duration-300 bg-green-500 rounded-full shadow-xl w-14 h-14 hover:bg-green-600"
        aria-label="Chat with Emmanuel on WhatsApp"
      >
        <FaWhatsapp size={28} />

        {/* Tooltip */}
        <span className="absolute px-3 py-1 text-xs text-white transition-opacity duration-200 bg-black rounded opacity-0 right-16 group-hover:opacity-100 whitespace-nowrap">
          Chat with Charley
        </span>
      </a>
    </motion.div>
  );
};

export default FloatingWhatsApp;
