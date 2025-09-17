import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Code } from "lucide-react";
import ProjectModal from "../components/ProjectModal";

const projects = [
  {
    title: "Hyka E-Hailing App",
    description: "A ride-sharing app built during a 2024 hackathon focused on mobility in underserved communities. Features real-time tracking, secure payments, and user-friendly interface.",
    tech: ["React Native", "Firebase", "Node.js"],
    link: "#",
    github: "#",
    category: "Mobile App",
    featured: true,
  },
  {
    title: "Execute Technologies Website",
    description: "Corporate site showcasing services and team. Designed and built to reflect a modern tech brand with responsive design and smooth animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://execute11.github.io/Execute-Technologies-Website/",
    github: "#",
    category: "Web Development",
    featured: false,
  },
  {
    title: "Community Connect App",
    description: "A real-time safety and reporting app. Managed the project and led development efforts with focus on community engagement and emergency response.",
    tech: ["C#", ".NET MAUI", "Firebase"],
    link: "#",
    github: "#",
    category: "Mobile App",
    featured: true,
  },
  {
    title: "Enterprise Cloud Migration",
    description: "Led a successful migration of legacy systems to cloud infrastructure for a mid-sized enterprise, improving scalability and reducing costs by 40%.",
    tech: ["AWS", "Docker", "Kubernetes"],
    link: "#",
    github: "#",
    category: "Cloud Solutions",
    featured: false,
  },
  {
    title: "API Ecosystem for Retail Chain",
    description: "Designed and implemented a comprehensive API ecosystem connecting POS, inventory, and e-commerce systems for seamless operations.",
    tech: ["REST", "GraphQL", "Node.js"],
    link: "#",
    github: "#",
    category: "Backend Development",
    featured: false,
  },
  {
    title: "AI-Powered Content Platform",
    description: "Modern content management system with AI-driven recommendations and automated publishing workflows for digital media companies.",
    tech: ["React", "Python", "MongoDB"],
    link: "#",
    github: "#",
    category: "Full-Stack",
    featured: true,
  },
];

const Projects = () => {
  const [selected, setSelected] = React.useState<null | any>(null);
  const [filter, setFilter] = React.useState("All");

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 bg-gradient-to-br from-background via-background/95 to-background text-foreground overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondaryAccent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
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
            Featured Projects
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
            A showcase of innovative solutions and creative projects that demonstrate my expertise across different technologies and domains.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "bg-white/5 hover:bg-white/10 text-foreground/70 hover:text-foreground border border-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 ${
                project.featured ? "ring-2 ring-accent/20" : ""
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}portfolio-preview.png`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    onClick={() => setSelected({ ...project, images: [`${import.meta.env.BASE_URL}portfolio-preview.png`] })}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye size={20} className="text-white" />
                  </motion.button>
                  {project.link !== "#" && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} className="text-white" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-secondaryAccent/10 text-secondaryAccent rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-foreground/70 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <motion.button
                  onClick={() => setSelected({ ...project, images: [`${import.meta.env.BASE_URL}portfolio-preview.png`] })}
                  className="w-full py-3 bg-gradient-to-r from-accent to-secondaryAccent text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Code size={16} />
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;
