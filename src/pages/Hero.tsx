import React from "react";
import { motion } from "framer-motion";
import heroBackground from "../assets/hero-background.jpg"; // Adjust path if needed

const Hero = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center px-4 py-20 text-center text-foreground"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl">
        <img
          src="/profile.jpg"
          alt="Charley Raluswinga"
          className="object-cover w-40 h-40 mx-auto mb-6 rounded-full shadow-lg"
          loading="lazy"
          decoding="async"
        />
        <h1 className="text-4xl font-bold tracking-wider">
          Emmanuel 'Charley' Raluswinga
        </h1>
        <p className="mt-3 text-lg text-foreground/80">
          Full-Stack Developer | Graphic Designer | Digital Strategist
          <br />
          I build scalable, user-focused digital experiences with heart and
          precision for African markets and beyond.
        </p>
        <div className="mt-6 space-x-4">
          <motion.button
            className="px-6 py-2 transition-transform rounded-lg text-foreground bg-accent hover:shadow-lg hover:bg-accent/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => (window.location.href = "#projects")}
          >
            Portfolio
          </motion.button>
          <motion.button
            className="px-6 py-2 transition-transform border rounded-lg text-foreground border-borderLine hover:bg-secondaryAccent hover:border-secondaryAccent hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => (window.location.href = "#contact")}
          >
            Hire Me
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
