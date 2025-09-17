import React from "react";
import { motion } from "framer-motion";
import ProjectModal from "../components/ProjectModal";
import portfolioPreview from "../assets/portfolio-preview.png";

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
  const [selected, setSelected] = React.useState<null | any>(null);

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 bg-background text-foreground">
      <motion.h2 
        className="mb-10 text-3xl font-bold tracking-wide text-center sm:text-4xl text-accent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {projects.map((project, index) => (
          <motion.button
            key={index}
            onClick={() => setSelected({ ...project, images: [portfolioPreview] })}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="flex flex-col justify-between p-6 transition border shadow-md rounded-xl border-borderLine bg-background/90 hover:shadow-xl text-left"
          >
            <div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{project.title}</h3>
              <p className="mb-3 text-sm text-foreground/80">{project.description}</p>
              <p className="mb-4 text-xs text-secondaryAccent">Tech: {project.tech}</p>
            </div>

            <div className="mt-4 text-sm font-medium text-accent">Explore →</div>
          </motion.button>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;
