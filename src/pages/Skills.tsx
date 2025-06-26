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
    <section id="skills" className="px-6 py-20 bg-background text-foreground">
      <motion.h2 
        className="mb-12 text-3xl font-bold tracking-wider text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>
      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto space-y-12 md:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
            className="p-6 border rounded-xl border-borderLine bg-background/90"
          >
            <h3 className="mb-6 text-xl font-semibold text-secondaryAccent">{category.title}</h3>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="mx-auto transition-colors duration-200 text-foreground/80 group-hover:text-secondaryAccent">
                    {skill.icon}
                  </div>
                  <p className="mt-2 text-sm transition-colors duration-200 text-foreground/80 group-hover:text-foreground">
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
