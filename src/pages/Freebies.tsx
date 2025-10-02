import React from "react";
import { motion } from "framer-motion";
import { Gift, Sparkles, Download, ExternalLink, Zap, Brain, MessageSquare } from "lucide-react";

const freebies = [
  {
    icon: <Brain size={32} className="text-accent" />,
    title: "AI Agents Collection",
    description:
      "A curated collection of AI agents designed to automate tasks, enhance productivity, and streamline workflows for developers and businesses.",
    features: ["Task Automation", "Natural Language Processing", "Custom Integrations", "Open Source"],
    link: "#",
    category: "AI Tools",
    color: "from-accent/20 to-accent/5",
    comingSoon: true,
  },
  {
    icon: <Zap size={32} className="text-secondaryAccent" />,
    title: "Development Tools",
    description:
      "Free tools and utilities to boost your development workflow. From code generators to testing frameworks and productivity enhancers.",
    features: ["Code Generators", "Testing Tools", "API Utilities", "Performance Analyzers"],
    link: "#",
    category: "Developer Tools",
    color: "from-secondaryAccent/20 to-secondaryAccent/5",
    comingSoon: true,
  },
  {
    icon: <MessageSquare size={32} className="text-accent" />,
    title: "Chatbot Templates",
    description:
      "Ready-to-use chatbot templates for customer support, lead generation, and user engagement. Easily customizable for your brand.",
    features: ["Multiple Platforms", "Custom Responses", "Analytics Dashboard", "Easy Integration"],
    link: "#",
    category: "Templates",
    color: "from-accent/20 to-accent/5",
    comingSoon: true,
  },
  {
    icon: <Sparkles size={32} className="text-secondaryAccent" />,
    title: "UI Component Library",
    description:
      "Beautiful, responsive UI components built with React and Tailwind CSS. Copy, paste, and customize to fit your project needs.",
    features: ["React Components", "Tailwind CSS", "Dark Mode Support", "Accessibility First"],
    link: "#",
    category: "UI/UX",
    color: "from-secondaryAccent/20 to-secondaryAccent/5",
    comingSoon: true,
  },
  {
    icon: <Gift size={32} className="text-accent" />,
    title: "Design Resources",
    description:
      "Free design assets including icons, illustrations, and templates for your next project. High-quality and ready to use.",
    features: ["Icons Pack", "Illustrations", "Templates", "Mockups"],
    link: "#",
    category: "Design",
    color: "from-accent/20 to-accent/5",
    comingSoon: true,
  },
  {
    icon: <Download size={32} className="text-secondaryAccent" />,
    title: "Code Snippets",
    description:
      "Useful code snippets and boilerplates for common development tasks. Save time and focus on building amazing features.",
    features: ["JavaScript/TypeScript", "React Hooks", "API Integration", "Database Queries"],
    link: "#",
    category: "Code",
    color: "from-secondaryAccent/20 to-secondaryAccent/5",
    comingSoon: true,
  },
];

const Freebies = () => {
  return (
    <section
      id="freebies"
      className="relative px-4 py-20 sm:px-6 bg-gradient-to-br from-background via-background/95 to-background text-foreground overflow-hidden min-h-screen"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f43f5e' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-accent/20 to-secondaryAccent/20 border border-accent/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Gift size={20} className="text-accent" />
            <span className="text-sm font-medium text-foreground/80">Free Resources</span>
          </motion.div>

          <motion.h2
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl text-accent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Free Digital Resources
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
            Your hub for free digital resources, tools, and AI agents. Everything you need to accelerate your development and creative projects — completely free.
          </motion.p>
        </motion.div>

        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {freebies.map((freebie, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10"
            >
              {/* Coming Soon Badge */}
              {freebie.comingSoon && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-accent to-secondaryAccent text-white">
                    Coming Soon
                  </span>
                </div>
              )}

              {/* Freebie Header */}
              <div className="p-8 pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${freebie.color} group-hover:scale-110 transition-transform duration-300`}>
                    {freebie.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {freebie.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-2">{freebie.category}</p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  {freebie.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {freebie.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <motion.a
                  href={freebie.link}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    freebie.comingSoon
                      ? 'bg-white/5 text-foreground/40 cursor-not-allowed'
                      : 'bg-gradient-to-r from-accent/20 to-secondaryAccent/20 hover:from-accent/30 hover:to-secondaryAccent/30 text-accent border border-accent/30'
                  }`}
                  whileHover={freebie.comingSoon ? {} : { scale: 1.05 }}
                  whileTap={freebie.comingSoon ? {} : { scale: 0.95 }}
                  onClick={(e) => freebie.comingSoon && e.preventDefault()}
                >
                  {freebie.comingSoon ? (
                    <>
                      <Sparkles size={16} />
                      Notify Me
                    </>
                  ) : (
                    <>
                      <Download size={16} />
                      Download Free
                      <ExternalLink size={16} />
                    </>
                  )}
                </motion.a>
              </div>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">Want More Free Resources?</h3>
            <p className="text-foreground/70 mb-6 max-w-md">
              Subscribe to get notified when new tools, templates, and resources are added to the collection.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-secondaryAccent text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Stay Updated
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Freebies;
