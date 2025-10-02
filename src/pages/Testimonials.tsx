import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mokoena",
    role: "Project Manager",
    company: "TechConnect SA",
    image: "https://ui-avatars.com/api/?name=Sarah+Mokoena&background=f43f5e&color=fff&size=128",
    text: "Emmanuel's technical expertise and attention to detail transformed our vision into reality. The web application he developed exceeded our expectations in both functionality and design.",
    rating: 5,
    project: "Limpopo Connect",
  },
  {
    name: "David Nkuna",
    role: "CEO",
    company: "Far North Youth Development",
    image: "https://ui-avatars.com/api/?name=David+Nkuna&background=22d3ee&color=fff&size=128",
    text: "Working with Charley was a game-changer for our organization. His understanding of our needs and the African context made him the perfect partner for our digital transformation.",
    rating: 5,
    project: "Youth Development Platform",
  },
  {
    name: "Thabo Maluleke",
    role: "CTO",
    company: "Execute Technologies",
    image: "https://ui-avatars.com/api/?name=Thabo+Maluleke&background=f43f5e&color=fff&size=128",
    text: "Charley's full-stack development skills are exceptional. He delivered a beautiful, responsive website that perfectly represents our brand. His communication throughout the project was outstanding.",
    rating: 5,
    project: "Corporate Website",
  },
  {
    name: "Linda Mashaba",
    role: "Founder",
    company: "Miss SA Disability Initiative",
    image: "https://ui-avatars.com/api/?name=Linda+Mashaba&background=22d3ee&color=fff&size=128",
    text: "Emmanuel built a platform that truly celebrates inclusivity. His commitment to accessibility and user experience shines through in every aspect of the website.",
    rating: 5,
    project: "Pageant Platform",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative px-4 py-20 sm:px-6 bg-gradient-to-br from-background via-background/95 to-background text-foreground overflow-hidden"
    >
      {/* Background Pattern */}
      {/* Define CSS variable for SVG pattern */}
      <style>
        {`
          :root {
            --bg-svg-pattern: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322d3ee' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }
        `}
      </style>
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "var(--bg-svg-pattern)",
          }}
        />
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
            Client Testimonials
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
            Don't just take my word for it. Here's what clients and collaborators say about working with me.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote size={48} className="text-accent" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/80 leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent/30">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">
                      {testimonial.role} at {testimonial.company}
                    </p>
                    <p className="text-xs text-secondaryAccent mt-1">
                      Project: {testimonial.project}
                    </p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondaryAccent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
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
          <p className="text-foreground/70 mb-4">Want to be my next success story?</p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-secondaryAccent text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
