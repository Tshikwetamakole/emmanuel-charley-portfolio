import React from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tech: string;
  link: string;
  images?: string[];
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => setIndex(0), [project]);

  if (!project) return null;

  const images = project.images && project.images.length > 0 ? project.images : ["/src/assets/portfolio-preview.png"];

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60">
      <motion.div className="w-full max-w-3xl p-6 bg-background rounded-lg shadow-2xl" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <button onClick={onClose} className="px-3 py-1 text-sm rounded bg-white/5">Close</button>
        </div>

        <div className="mb-4">
          <img src={images[index]} alt={project.title} className="w-full rounded-md" />
          {images.length > 1 && (
            <div className="flex items-center justify-center gap-2 mt-2">
              <button onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)} className="px-3 py-1 text-sm rounded bg-white/5">←</button>
              <span className="text-xs">{index + 1} / {images.length}</span>
              <button onClick={() => setIndex((i) => (i + 1) % images.length)} className="px-3 py-1 text-sm rounded bg-white/5">→</button>
            </div>
          )}
        </div>

        <p className="mb-3 text-sm text-foreground/80">{project.description}</p>
        <p className="mb-3 text-xs text-secondaryAccent">Tech: {project.tech}</p>

        {project.link !== "#" && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 mt-2 text-sm font-medium text-white rounded bg-accent">Visit Project</a>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectModal;
