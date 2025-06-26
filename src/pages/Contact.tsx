import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20 text-center bg-background text-foreground">
      <motion.h2 
        className="mb-8 text-3xl font-bold tracking-wider"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Let's Connect
      </motion.h2>
      <motion.p 
        className="max-w-2xl mx-auto mb-8 text-lg text-foreground/80"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the platforms below.
      </motion.p>
      <form
        className="max-w-xl mx-auto space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent! (Functionality not active)");
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded border-borderLine bg-background/90 text-foreground placeholder:text-foreground/60"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded border-borderLine bg-background/90 text-foreground placeholder:text-foreground/60"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded border-borderLine bg-background/90 text-foreground placeholder:text-foreground/60"
          rows={5}
          required
        />
        <motion.button
          type="submit"
          className="px-6 py-2 transition-transform rounded text-foreground bg-accent hover:shadow-lg hover:bg-accent/90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Send Message
        </motion.button>
      </form>

      <div className="mt-8 space-y-2">
        <p>📧 victorraluswinga@gmail.com</p>
        <a
          href="https://wa.me/27635273250"
          target="_blank"
          rel="noopener noreferrer"
          className="block font-medium transition-colors duration-200 text-accent hover:text-secondaryAccent hover:underline"
        >
          📱 WhatsApp Me
        </a>
        <a
          href="https://facebook.com/charley.e.raluswinga"
          target="_blank"
          rel="noopener noreferrer"
          className="block font-medium transition-colors duration-200 text-accent hover:text-secondaryAccent hover:underline"
        >
          📘 Facebook
        </a>
        <a
          href="https://github.com/Tshikwetamakole"
          target="_blank"
          rel="noopener noreferrer"
          className="block font-medium transition-colors duration-200 text-accent hover:text-secondaryAccent hover:underline"
        >
          🐙 GitHub
        </a>
      </div>

    </section>
  );
};

export default Contact;
