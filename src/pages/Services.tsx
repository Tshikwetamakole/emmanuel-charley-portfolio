import React from "react";
import { Code, Paintbrush, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Code size={32} className="text-secondaryAccent" />,

    title: "Full-Stack Development",
    description:
      "I build responsive web and mobile applications using modern front-end and back-end technologies including React, .NET MAUI, and Firebase.",
  },
  {
    icon: <Paintbrush size={32} className="text-secondaryAccent" />,

    title: "UI/UX Design",
    description:
      "From wireframes to polished interfaces, I design user experiences that are both beautiful and functional across all devices.",
  },
  {
    icon: <Lightbulb size={32} className="text-secondaryAccent" />,

    title: "Digital Strategy",
    description:
      "I help organizations craft and execute digital transformation strategies that align with business goals and engage their audiences.",
  },
];

const Services = () => {
  return (
    <section id="services" className="px-6 py-20 text-center bg-background text-foreground">
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
            <h3 className="mb-2 text-xl font-semibold text-foreground">{service.title}</h3>
            <p className="text-sm text-foreground/80">{service.description}</p>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
