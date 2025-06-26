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
      "Transform your infrastructure with comprehensive cloud migration, optimization, and application development services engineered for African connectivity realities.",
  },
  {
    icon: <Lightbulb size={32} className="text-secondaryAccent" />,
    title: "Digital Transformation",
    description:
      "Strategic guidance from current state assessment to future vision with phased implementation planning and ROI analysis tailored to your organization.",
  },
  {
    icon: <Code size={32} className="text-secondaryAccent" />,
    title: "API Development & Integration",
    description:
      "Connect disparate systems through RESTful and GraphQL APIs, creating cohesive technology ecosystems that enhance organizational data flow.",
  },
  {
    icon: <Paintbrush size={32} className="text-secondaryAccent" />,
    title: "Graphic Design",
    description:
      "Creative visual solutions that communicate your brand's message effectively through logos, branding materials, and digital assets.",
  },
];


const Services = () => {
  return (
    <section
      id="services"
      className="px-6 py-20 text-center bg-background text-foreground"
    >
      <motion.h2
        className="mb-10 text-3xl font-bold tracking-wider"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Services I Provide
      </motion.h2>

      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="p-6 transition border shadow-lg rounded-xl border-borderLine bg-background/90 hover:shadow-xl"
          >
            {service.icon}
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="text-sm text-foreground/80">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
