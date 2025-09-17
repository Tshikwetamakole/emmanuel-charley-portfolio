import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Palette, Smartphone, Zap, Star, Award } from "lucide-react";
import TechRadar from "../components/TechRadar";

const skillCategories = [
  {
    title: "Core Technologies",
    description: "Modern development stack",
    icon: <Code size={24} className="text-accent" />,
    skills: [
      { icon: <Code size={20} />, name: "JavaScript/TypeScript", level: "Expert", proficiency: 95 },
      { icon: <Code size={20} />, name: "React & Next.js", level: "Advanced", proficiency: 90 },
      { icon: <Palette size={20} />, name: "Tailwind CSS", level: "Advanced", proficiency: 85 },
    ],
  },
  {
    title: "Backend & Data",
    description: "Server-side solutions",
    icon: <Database size={24} className="text-secondaryAccent" />,
    skills: [
      { icon: <Database size={20} />, name: "Node.js & Express", level: "Advanced", proficiency: 88 },
      { icon: <Database size={20} />, name: "PostgreSQL/MongoDB", level: "Intermediate", proficiency: 75 },
      { icon: <Zap size={20} />, name: "RESTful & GraphQL APIs", level: "Advanced", proficiency: 90 },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable infrastructure",
    icon: <Cloud size={24} className="text-accent" />,
    skills: [
      { icon: <Cloud size={20} />, name: "AWS/Vercel", level: "Intermediate", proficiency: 70 },
      { icon: <Code size={20} />, name: "Docker & CI/CD", level: "Intermediate", proficiency: 75 },
      { icon: <Zap size={20} />, name: "Serverless Functions", level: "Advanced", proficiency: 85 },
    ],
  },
  {
    title: "Design & Mobile",
    description: "User experience focus",
    icon: <Palette size={24} className="text-secondaryAccent" />,
    skills: [
      { icon: <Palette size={20} />, name: "UI/UX Design", level: "Advanced", proficiency: 88 },
      { icon: <Smartphone size={20} />, name: "React Native", level: "Intermediate", proficiency: 72 },
      { icon: <Palette size={20} />, name: "Figma & Adobe Suite", level: "Advanced", proficiency: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative px-4 py-20 sm:px-6 bg-gradient-to-br from-background via-background/95 to-background text-foreground overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondaryAccent/20 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl text-accent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technical Expertise
          </motion.h2>
          <motion.div
            className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-accent to-secondaryAccent rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            A focused toolkit of modern technologies for building scalable, user-centered solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 border border-white/10 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="group/skill relative p-4 rounded-xl bg-background/30 hover:bg-background/50 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="text-accent group-hover/skill:text-secondaryAccent transition-colors duration-200">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-secondaryAccent bg-secondaryAccent/10 px-2 py-1 rounded-full">
                          {skill.level}
                        </span>
                        {skill.level === "Expert" && <Star size={14} className="text-yellow-500 fill-current" />}
                      </div>
                    </div>

                    {/* Proficiency Bar */}
                    <div className="w-full bg-background/50 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-accent to-secondaryAccent h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-foreground/60 mt-1">
                      <span>Proficiency</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondaryAccent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Interactive Tech Radar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <TechRadar />
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Additional Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git & GitHub", "VS Code", "Postman", "Figma", "Adobe XD", "Photoshop",
              "Linux", "Bash", "Python", "C#", ".NET", "Firebase", "Supabase"
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
