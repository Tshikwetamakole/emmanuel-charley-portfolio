import React from "react";
import { Code, Paintbrush, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Code size={32} className="text-secondaryAccent" />,
    title: "Custom Software Development",
    description:
      "Bespoke applications that address specific business challenges with user-centered design, scalable architecture, and comprehensive support.",
  },
  {
    icon: <Paintbrush size={32} className="text-secondaryAccent" />,
    title: "Cloud Solutions",
    description:
      "Transform your infrastructure with cloud migration, optimization, and application development — tailored for African connectivity realities.",
  },
  {
    icon: <Lightbulb size={32} className="text-secondaryAccent" />,
    title: "Digital Transformation",
    description:
      "Strategic guidance from current state assessment to implementation planning with ROI-focused delivery for your organization.",
  },
  {
    icon: <Code size={32} className="text-secondaryAccent" />,
    title: "API Development & Integration",
    description:
      "RESTful and GraphQL APIs that connect systems into cohesive ecosystems to streamline your operations and data flow.",
  },
  {
    icon: <Paintbrush size={32} className="text-secondaryAccent" />,
    title: "Graphic Design",
    description:
      "Creative visuals including branding, logos, social media kits, and product mockups that align with your unique story.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="px-4 py-20 text-center sm:px-6 bg-background text-foreground"
    >
      <motion.h2
        className="mb-12 text-3xl font-bold tracking-wider sm:text-4xl text-accent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Services I Provide
      </motion.h2>

      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="p-6 transition border shadow-md rounded-xl border-borderLine bg-background/90 hover:shadow-xl"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div>{service.icon}</div>
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/80">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
