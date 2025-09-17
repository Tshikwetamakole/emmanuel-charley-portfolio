import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Palette, Smartphone, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Core Technologies",
    description: "Modern development stack",
    skills: [
      { icon: <Code size={28} />, name: "JavaScript/TypeScript", level: "Expert" },
      { icon: <Code size={28} />, name: "React & Next.js", level: "Advanced" },
      { icon: <Palette size={28} />, name: "Tailwind CSS", level: "Advanced" },
    ],
  },
  {
    title: "Backend & Data",
    description: "Server-side solutions",
    skills: [
      { icon: <Database size={28} />, name: "Node.js & Express", level: "Advanced" },
      { icon: <Database size={28} />, name: "PostgreSQL/MongoDB", level: "Intermediate" },
      { icon: <Zap size={28} />, name: "RESTful & GraphQL APIs", level: "Advanced" },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable infrastructure",
    skills: [
      { icon: <Cloud size={28} />, name: "AWS/Vercel", level: "Intermediate" },
      { icon: <Code size={28} />, name: "Docker & CI/CD", level: "Intermediate" },
      { icon: <Zap size={28} />, name: "Serverless Functions", level: "Advanced" },
    ],
  },
  {
    title: "Design & Mobile",
    description: "User experience focus",
    skills: [
      { icon: <Palette size={28} />, name: "UI/UX Design", level: "Advanced" },
      { icon: <Smartphone size={28} />, name: "React Native", level: "Intermediate" },
      { icon: <Palette size={28} />, name: "Figma & Adobe Suite", level: "Advanced" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-wider sm:text-4xl text-accent mb-4">
            Technical Expertise
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A focused toolkit of modern technologies for building scalable, user-centered solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 border rounded-2xl border-borderLine bg-gradient-to-br from-background/50 to-background/90 hover:border-accent/30 transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-foreground/60">
                  {category.description}
                </p>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-accent group-hover:text-secondaryAccent transition-colors duration-200">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-secondaryAccent bg-secondaryAccent/10 px-2 py-1 rounded-full">
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
