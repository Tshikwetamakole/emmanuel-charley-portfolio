import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="px-6 py-20 text-center bg-background text-foreground">
      <motion.h2 
        className="mb-4 text-3xl font-bold tracking-wider"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed text-foreground/80">
        Innovative and driven full-stack developer with a dynamic background in UI/UX design, software engineering, and digital strategy. Adept in both front-end and back-end development, I specialize in creating scalable, user-centric applications. Passionate about leveraging technology to solve real-world problems, particularly in the African context, and committed to continuous learning through hands-on projects.
      </p>


      <div className="flex flex-wrap justify-center max-w-4xl gap-10 mx-auto mt-8 text-sm text-left">
        <motion.div 
          className="w-64 p-4 border shadow-lg rounded-xl border-borderLine bg-background/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="mb-1 font-bold text-secondaryAccent">Years of Experience</h4>
          <p className="text-foreground/80">4+ years of hands-on development & creative design work.</p>
        </motion.div>
        <motion.div 
          className="w-64 p-4 border shadow-lg rounded-xl border-borderLine bg-background/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="mb-1 font-bold text-secondaryAccent">Key Skills</h4>
          <p className="text-foreground/80">UI/UX, Full-Stack Dev, Content Strategy, Publishing</p>
        </motion.div>
        <motion.div 
          className="w-64 p-4 border shadow-lg rounded-xl border-borderLine bg-background/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="mb-1 font-bold text-secondaryAccent">Certifications & Achievements</h4>
          <p className="text-foreground/80">Hackathons, NEMISA Digital Literacy, Ongoing Udemy Web Dev, Recognized for innovative solutions in custom software development</p>
        </motion.div>


      </div>
    </section>
  );
};

export default About;
