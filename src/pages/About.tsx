import React from "react";
import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 bg-gradient-to-br from-background via-background to-background/95 text-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f43f5e' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
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
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-accent to-secondaryAccent rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              Innovative and driven full-stack developer with a dynamic background in UI/UX design, software engineering, and digital strategy. Adept in both front-end and back-end development, I specialize in creating scalable, user-centric applications.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              Passionate about leveraging technology to solve real-world problems, particularly in the African context, and committed to continuous learning through hands-on projects.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">4+</div>
                  <div className="text-sm text-foreground/70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondaryAccent mb-2">15+</div>
                  <div className="text-sm text-foreground/70">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">10+</div>
                  <div className="text-sm text-foreground/70">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondaryAccent mb-2">24/7</div>
                  <div className="text-sm text-foreground/70">Support Available</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Award className="w-8 h-8 text-accent" />,
              title: "Years of Experience",
              content: "4+ years of hands-on development & creative design work.",
              delay: 0.1,
            },
            {
              icon: <Users className="w-8 h-8 text-secondaryAccent" />,
              title: "Key Skills",
              content: "UI/UX, Full-Stack Dev, Content Strategy, Publishing",
              delay: 0.2,
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-accent" />,
              title: "Certifications & Achievements",
              content: "Hackathons, NEMISA Digital Literacy, Ongoing Udemy Web Dev, Recognized for innovative solutions",
              delay: 0.3,
            },
          ].map(({ icon, title, content, delay }, index) => (
            <motion.div
              key={index}
              className="group relative p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                  {icon}
                </div>
                <h4 className="font-semibold text-lg text-foreground">{title}</h4>
              </div>
              <p className="text-foreground/70 leading-relaxed">{content}</p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondaryAccent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;


