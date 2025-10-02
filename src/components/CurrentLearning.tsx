import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Target, Zap, TrendingUp } from "lucide-react";

const learningItems = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Advanced TypeScript",
    description: "Exploring advanced types, generics, and design patterns",
    progress: 75,
    color: "from-blue-500/20 to-blue-500/5",
    progressColor: "bg-blue-500",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Web Development (Udemy)",
    description: "Comprehensive full-stack development course",
    progress: 60,
    color: "from-accent/20 to-accent/5",
    progressColor: "bg-accent",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Cloud Architecture",
    description: "AWS Solutions Architect certification preparation",
    progress: 45,
    color: "from-secondaryAccent/20 to-secondaryAccent/5",
    progressColor: "bg-secondaryAccent",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "AI/ML Fundamentals",
    description: "Machine learning concepts and practical applications",
    progress: 30,
    color: "from-purple-500/20 to-purple-500/5",
    progressColor: "bg-purple-500",
  },
];

const CurrentLearning = () => {
  return (
    <section className="relative px-4 py-16 sm:px-6 bg-gradient-to-br from-background via-background/95 to-background text-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-accent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Currently Learning
          </motion.h2>
          <motion.div
            className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-accent to-secondaryAccent rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-base text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Committed to continuous growth and staying ahead of industry trends
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-accent/30 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color}`}>
                    <div className="text-accent">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-foreground/50">Progress</span>
                    <span className="text-xs font-semibold text-accent">{item.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${item.progressColor} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-foreground/60">
            Always exploring new technologies and methodologies to deliver better solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentLearning;
