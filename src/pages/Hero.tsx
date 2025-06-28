import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import heroBackground from "../assets/hero-background.jpg";

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
      className="relative flex items-center justify-center min-h-screen px-4 text-center text-foreground dark:text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

      {/* Glass container */}
      <motion.div
        className="relative z-10 max-w-2xl w-full bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="Charley Raluswinga"
          className="w-32 h-32 mx-auto mb-6 rounded-full object-cover border-4 border-accent shadow-lg"
        />
        <h1 className="text-3xl font-bold tracking-wide">
          Emmanuel 'Charley' Raluswinga
          <br />
          <span className="block mt-2 text-xl font-medium bg-gradient-to-r from-accent to-secondaryAccent bg-clip-text text-transparent">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "UI/UX Designer",
                "Creative Strategist",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="mt-4 text-lg text-foreground/80 dark:text-white/70">
          I create sleek, scalable, and human-centered digital experiences that
          connect brands and people — across Africa and beyond.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <motion.button
            onClick={handleDownload}
            className="px-6 py-2 rounded-lg bg-accent text-foreground shadow-md hover:shadow-xl hover:bg-accent/90 transition-all"
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
            className="px-6 py-2 border border-borderLine rounded-lg text-foreground hover:bg-secondaryAccent hover:border-secondaryAccent hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hire Me
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
