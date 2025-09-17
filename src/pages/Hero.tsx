import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Download, Eye, MessageCircle, ArrowDown } from "lucide-react";
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

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 text-center text-foreground dark:text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-[2px]" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondaryAccent/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/5 rounded-full blur-lg animate-bounce delay-500" />
      </div>

      {/* Glass container with enhanced styling */}
      <motion.div
        className="relative z-10 w-full max-w-4xl p-6 sm:p-8 md:p-12 bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          srcSet={`${import.meta.env.BASE_URL}profile.jpg 1x, ${import.meta.env.BASE_URL}charley2.jpg 2x`}
          loading="lazy"
          decoding="async"
          alt="Emmanuel 'Charley' Raluswinga — profile photo"
          className="object-cover w-32 h-32 mx-auto mb-8 border-4 border-accent/50 rounded-full shadow-2xl ring-4 ring-white/10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
        />

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Emmanuel 'Charley' Raluswinga
          <br />
          <span className="block mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-gradient-to-r from-accent via-secondaryAccent to-accent bg-clip-text bg-300% animate-gradient">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "UI/UX Designer",
                "Creative Strategist",
                "Digital Innovator",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto mb-8 text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          I create sleek, scalable, and human-centered digital experiences that
          connect brands and people — across Africa and beyond.
        </motion.p>

        {/* Enhanced Lottie Animation */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <LottieIcon animation={animationData} className="w-40 h-40 sm:w-48 sm:h-48" />
        </motion.div>

        {/* Enhanced Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.button
            onClick={handleView}
            className="group w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-white font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Eye size={20} />
            View Resume
          </motion.button>

          <motion.button
            onClick={handleDownload}
            className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-accent to-secondaryAccent hover:from-accent/90 hover:to-secondaryAccent/90 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-white font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Download size={20} />
            Download Resume
          </motion.button>

          <motion.a
            href="https://wa.me/27635273250"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-8 py-4 bg-green-500/80 hover:bg-green-500 border border-green-400/50 hover:border-green-400 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 text-white font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MessageCircle size={20} />
            Hire Me
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
