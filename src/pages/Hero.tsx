import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center px-4 py-20 text-center text-foreground"
      style={{
        backgroundImage: `url('/src/assets/hero-background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
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
          <br />I build scalable, user-focused digital experiences with heart
          and precision.
        </p>
        <div className="mt-6 space-x-4">
          <button className="px-6 py-2 transition-transform rounded-lg text-foreground bg-accent hover:scale-105 hover:shadow-lg hover:bg-accent/90">
            Portfolio
          </button>
          <button className="px-6 py-2 transition-transform border rounded-lg text-foreground border-borderLine hover:bg-secondaryAccent hover:border-secondaryAccent hover:scale-105 hover:shadow-lg">
            Hire Me
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
