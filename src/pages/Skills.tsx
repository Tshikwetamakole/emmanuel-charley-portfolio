import React from "react";
import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiSharp, SiDotnet, SiFirebase, SiTailwindcss } from "react-icons/si";
import { FaServer, FaPaintBrush, FaMobile } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { icon: <SiReact size={40} />, name: "React" },
      { icon: <SiTypescript size={40} />, name: "TypeScript" },
      { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { icon: <SiSharp size={40} />, name: "C# / .NET" },
      { icon: <FaServer size={40} />, name: "Node.js" },
      { icon: <SiFirebase size={40} />, name: "Firebase" },
    ],
  },
  {
    title: "Mobile & Design",
    skills: [
      { icon: <SiDotnet size={40} />, name: ".NET MAUI" },
      { icon: <FaMobile size={40} />, name: "React Native" },
      { icon: <FaPaintBrush size={40} />, name: "UI/UX Design" },
    ],
  },
  {
    title: "Cloud & API Solutions",
    skills: [
      { icon: <FaServer size={40} />, name: "AWS Cloud" },
      { icon: <SiSharp size={40} />, name: "RESTful APIs" },
      { icon: <SiFirebase size={40} />, name: "GraphQL" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 bg-background text-foreground">
      <motion.h2 
        className="mb-12 text-3xl font-bold tracking-wider text-center sm:text-4xl text-accent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>

      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
            viewport={{ once: true }}
            className="p-6 border rounded-xl border-borderLine bg-background/90"
          >
            <h3 className="mb-6 text-lg font-semibold text-center text-secondaryAccent md:text-left">
              {category.title}
            </h3>
            <div className="grid grid-cols-3 gap-y-6 place-items-center sm:grid-cols-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="transition-colors duration-200 text-foreground/80 group-hover:text-secondaryAccent">
                    {skill.icon}
                  </div>
                  <p className="mt-2 text-sm text-foreground/80 group-hover:text-foreground">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
