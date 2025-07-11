import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/27635273250?text=Hi%20Emmanuel!%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
      className="fixed z-50 p-4 text-white transition-colors duration-300 bg-green-500 rounded-full shadow-lg bottom-6 right-6 hover:bg-green-600"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
