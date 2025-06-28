import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import heroBackground from "../assets/hero-background.jpg"; // Adjust if needed

const Hero = () => {
  const handleDownload = () => {
    const confirmed = confirm(
      "You're about to download Emmanuel Charley's PDF resume. Do you want to continue?"
    );
    if (confirmed) {
      const link = document.createElement("a");
      link.href = `${import.meta.env.BASE_URL}resume.pdf`;
      link.download = "Emmanuel-Raluswinga-Resume.pdf";
      link.click();
    }
  };

  return (
    <motion.section
      className="relative flex flex-col items-center justify-center px-4 py-20 text-center text-foreground dark:text-white"
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
      <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl">
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="Charley Raluswinga"
          className="object-cover w-40 h-40 mx-auto mb-6 rounded-full shadow-lg"
          loading="lazy"
          decoding="async"
        />
        <h1 className="text-4xl font-bold tracking-wider">
          Emmanuel 'Charley' Raluswinga
          <br />
          <span className="block text-secondaryAccent mt-2 text-xl">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Graphic Designer",
                "Digital Strategist",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="mt-4 text-lg text-foreground/80 dark:text-white/70">
          I build scalable, user-focused digital experiences with heart and
          precision for African markets and beyond.
        </p>

        <div className="mt-6 space-x-4">
          <motion.button
            onClick={handleDownload}
            className="px-6 py-2 transition-transform rounded-lg text-foreground bg-accent hover:shadow-lg hover:bg-accent/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Portfolio
          </motion.button>

          <motion.a
            href="https://wa.me/27635273250"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 transition-transform border rounded-lg text-foreground border-borderLine hover:bg-secondaryAccent hover:border-secondaryAccent hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            H
            
