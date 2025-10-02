import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Target, Zap, Code, Users, TrendingUp, Medal } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "2024 Hackathon Winner",
    description: "Built Hyka E-Hailing App - winning solution for underserved communities",
    date: "2024",
    color: "from-yellow-500/20 to-yellow-500/5",
    iconColor: "text-yellow-500",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "NEMISA Digital Literacy Certification",
    description: "Advanced digital skills and technology literacy certification",
    date: "2023",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "15+ Projects Delivered",
    description: "Successfully completed diverse projects ranging from web apps to mobile solutions",
    date: "2020-2024",
    color: "from-secondaryAccent/20 to-secondaryAccent/5",
    iconColor: "text-secondaryAccent",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Impact Award",
    description: "Recognized for technology solutions addressing African community challenges",
    date: "2023",
    color: "from-green-500/20 to-green-500/5",
    iconColor: "text-green-500",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "40% Cost Reduction",
    description: "Led enterprise cloud migration achieving significant operational savings",
    date: "2023",
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-500",
  },
  {
    icon: <Medal className="w-8 h-8" />,
    title: "Client Satisfaction Rate",
    description: "Maintained 100% client satisfaction across all projects",
    date: "Ongoing",
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-500",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative px-4 py-20 sm:px-6 bg-gradient-to-br from-background/95 via-background to-background/95 text-foreground overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondaryAccent/10 rounded-full blur-3xl" />
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
            Achievements & Milestones
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
            A journey of growth, innovation, and impact - celebrating key moments and recognitions along the way.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                {/* Icon Container */}
                <div className={`inline-flex p-4 mb-6 rounded-2xl bg-gradient-to-br ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                  <div className={achievement.iconColor}>
                    {achievement.icon}
                  </div>
                </div>

                {/* Date Badge */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-accent">
                    {achievement.date}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { value: "4+", label: "Years Experience" },
            { value: "15+", label: "Projects Completed" },
            { value: "10+", label: "Happy Clients" },
            { value: "100%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
