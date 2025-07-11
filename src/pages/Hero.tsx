import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import heroBackground from "../assets/hero-background.jpg";
import animationData from "../assets/animations/wired-arrow.json";
import LottieIcon from "../components/LottieIcon";

const Hero = () => {
  const handleDownload = () => {
    const confirmed = window.confirm(
      "You're about to download Emmanuel Charley's PDF resume. Do you want to continue?"
    );
    if (confirmed) {
      const resumeURL = `${import.meta.env.BASE_URL}resume.pdf`;
      const link = document.createElement("a");
      link.href = resumeURL;
      link.setAttribute("download", "Emmanuel-Raluswinga-Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleView = () => {
    const resumeURL = `${import.meta.env.BASE_URL}resume.pdf`;
    window.open(resumeURL, "_blank");
  };

  return (
    <motion.section
      className="relative flex items-center justify-center min-h-[90vh] px-4 sm:px-6 text-center text-foreground dark:text-white overflow-hidden"
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
      <div className="absolute inset-0 z-0 bg-black/60 backdrop-blur-sm" />

      {/* Glass container */}
      <motion.div
        className="relative z-10 w-full max-w-3xl p-6 border shadow-2xl sm:p-10 md:p-12 bg-white/10 dark:bg-white/5 backdrop-blur-md border-white/20 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="Charley Raluswinga"
          className="object-cover w-24 h-24 mx-auto mb-6 border-4 rounded-full shadow-lg sm:w-28 sm:h-28 md:w-32 md:h-32 border-accent"
        />

        <h1 className="text-2xl font-bold tracking-wide sm:text-3xl md:text-4xl">
          Emmanuel 'Charley' Raluswinga
          <br />
          <span className="block mt-2 text-lg font-medium text-transparent sm:text-xl md:text-2xl bg-gradient-to-r from-accent to-secondaryAccent bg-clip-text">
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
        <p className="mt-4 text-base sm:text-lg md:text-xl text-foreground/80 dark:text-white/70">
          I create sleek, scalable, and human-centered digital experiences that
          connect brands and people — across Africa and beyond.
        </p>

        {/* Buttons */}
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 mt-6 sm:flex-row">
          {/* View Resume */}
          <motion.button
            onClick={handleView}
            className="w-full px-6 py-2 transition-all rounded-lg shadow-md sm:w-auto bg-accent text-foreground hover:shadow-xl hover:bg-accent/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            View Resume
          </motion.button>

          {/* Download Resume */}
          <motion.button
            onClick={handleDownload}
            className="w-full px-6 py-2 transition-all border rounded-lg sm:w-auto border-accent text-accent hover:bg-accent hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Download Resume
          </motion.button>

          {/* Hire Me */}
          <motion.a
            href="https://wa.me/27635273250"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-6 py-2 transition-all border rounded-lg sm:w-auto border-borderLine text-foreground hover:bg-secondaryAccent hover:border-secondaryAccent hover:shadow-lg"
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
