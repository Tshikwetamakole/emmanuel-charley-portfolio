import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="px-4 py-20 text-center sm:px-6 bg-background text-foreground">
      <motion.h2 
        className="mb-6 text-3xl font-bold tracking-wider sm:text-4xl text-accent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <p className="max-w-3xl mx-auto text-base leading-relaxed sm:text-lg text-foreground/80">
        Innovative and driven full-stack developer with a dynamic background in UI/UX design, software engineering, and digital strategy. Adept in both front-end and back-end development, I specialize in creating scalable, user-centric applications. Passionate about leveraging technology to solve real-world problems, particularly in the African context, and committed to continuous learning through hands-on projects.
      </p>

      {/* Highlights */}
      <div className="flex flex-wrap justify-center max-w-5xl mx-auto mt-10 text-left gap-x-6 gap-y-6">
        {[
          {
            title: "Years of Experience",
            content: "4+ years of hands-on development & creative design work.",
            delay: 0.1,
          },
          {
            title: "Key Skills",
            content: "UI/UX, Full-Stack Dev, Content Strategy, Publishing",
            delay: 0.2,
          },
          {
            title: "Certifications & Achievements",
            content:
              "Hackathons, NEMISA Digital Literacy, Ongoing Udemy Web Dev, Recognized for innovative solutions in custom software development",
            delay: 0.3,
          },
        ].map(({ title, content, delay }, index) => (
          <motion.div
            key={index}
            className="w-full p-4 border shadow-lg sm:w-72 rounded-xl border-borderLine bg-background/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
          >
            <h4 className="mb-1 font-semibold text-secondaryAccent">{title}</h4>
            <p className="text-sm leading-relaxed text-foreground/80">{content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
