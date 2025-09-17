import React from "react";
import { Code, Paintbrush, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Code size={32} className="text-accent" />,
    title: "Custom Software Development",
    description:
      "Bespoke applications that address specific business challenges with user-centered design, scalable architecture, and comprehensive support.",
    features: ["Full-Stack Development", "API Integration", "Database Design", "Performance Optimization"],
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: <Paintbrush size={32} className="text-secondaryAccent" />,
    title: "Cloud Solutions",
    description:
      "Transform your infrastructure with cloud migration, optimization, and application development — tailored for African connectivity realities.",
    features: ["Cloud Migration", "Infrastructure Setup", "Scalability Planning", "Cost Optimization"],
    color: "from-secondaryAccent/20 to-secondaryAccent/5",
  },
  {
    icon: <Lightbulb size={32} className="text-accent" />,
    title: "Digital Transformation",
    description:
      "Strategic guidance from current state assessment to implementation planning with ROI-focused delivery for your organization.",
    features: ["Strategy Consulting", "Process Automation", "Technology Assessment", "Change Management"],
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: <Code size={32} className="text-secondaryAccent" />,
    title: "API Development & Integration",
    description:
      "RESTful and GraphQL APIs that connect systems into cohesive ecosystems to streamline your operations and data flow.",
    features: ["RESTful APIs", "GraphQL", "Third-party Integrations", "API Documentation"],
    color: "from-secondaryAccent/20 to-secondaryAccent/5",
  },
  {
    icon: <Paintbrush size={32} className="text-accent" />,
    title: "Graphic Design",
    description:
      "Creative visuals including branding, logos, social media kits, and product mockups that align with your unique story.",
    features: ["Brand Identity", "Logo Design", "Marketing Materials", "UI/UX Design"],
    color: "from-accent/20 to-accent/5",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative px-4 py-20 sm:px-6 bg-gradient-to-br from-background via-background/95 to-background text-foreground overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f43f5e' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
            Services I Provide
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
            Comprehensive solutions tailored to transform your ideas into reality with cutting-edge technology and creative excellence.
          </motion.p>
        </motion.div>

        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10"
            >
              {/* Service Header */}
              <div className="p-8 pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <ArrowRight size={20} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-foreground/70 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* Features List */}
              <div className="px-8 pb-8">
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.05), duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle size={16} className="text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
            <p className="text-foreground/70 mb-6 max-w-md">
              Let's discuss how we can bring your vision to life with innovative solutions and exceptional results.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-secondaryAccent text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
