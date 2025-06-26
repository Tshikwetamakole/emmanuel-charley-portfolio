import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Hyka E-Hailing App",
    description: "A ride-sharing app built during a 2024 hackathon focused on mobility in underserved communities.",
    tech: "React Native, Firebase, Node.js",
    link: "#",
  },
  {
    title: "Execute Technologies Website",
    description: "Corporate site showcasing services and team. Designed and built to reflect a modern tech brand.",
    tech: "HTML, CSS, JavaScript",
    link: "https://execute11.github.io/Execute-Technologies-Website/",
  },
  {
    title: "Community Connect App",
    description: "A real-time safety and reporting app. Managed the project and led development efforts.",
    tech: "C#, .NET MAUI, Firebase",
    link: "#",
  },
  {
    title: "Enterprise Cloud Migration",
    description: "Led a successful migration of legacy systems to cloud infrastructure for a mid-sized enterprise, improving scalability.",
    tech: "AWS, Docker, Kubernetes",
    link: "#",
  },
  {
    title: "API Ecosystem for Retail Chain",
    description: "Designed and implemented a comprehensive API ecosystem connecting POS, inventory, and e-commerce systems.",
    tech: "REST, GraphQL, Node.js",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20 text-center bg-background text-foreground">
      <motion.h2 
        className="mb-10 text-3xl font-bold tracking-wider"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="p-6 text-left transition border shadow-lg rounded-xl border-borderLine bg-background/90 hover:shadow-xl"
          >
            <h3 className="mb-2 text-xl font-semibold text-foreground">{project.title}</h3>
            <p className="mb-3 text-sm text-foreground/80">{project.description}</p>
            <p className="mb-4 text-xs text-secondaryAccent">Tech: {project.tech}</p>
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors duration-200 text-accent hover:text-secondaryAccent hover:underline"
              >
                View Project →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
