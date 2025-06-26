import React from "react";

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
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20 text-center bg-background text-foreground">
      <h2 className="mb-10 text-3xl font-bold tracking-wider">Featured Projects</h2>
      <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="p-6 text-left transition border shadow-lg rounded-xl border-borderLine bg-background/90 hover:shadow-xl">
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
          </div>
        ))}
      </div>
    </section>

  );
};

export default Projects;
