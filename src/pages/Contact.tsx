import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("TY8ppfdcp2uPpcD23");
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // EmailJS credentials
      const serviceId = "service_pvidbt8";
      const templateId = "template_tf4osku";
      const publicKey = "TY8ppfdcp2uPpcD23";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Emmanuel Charley",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus({
        type: "success",
        message: "✅ Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "❌ Failed to send message. Please try again or contact me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative px-6 py-20 overflow-hidden text-center text-foreground"
      style={{
        backgroundImage: `url('/charley3.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
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
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out
          through any of the platforms below.
        </motion.p>

        <form className="max-w-xl mx-auto space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded border-borderLine bg-background/90 text-foreground placeholder:text-foreground/60"
            required
            disabled={isSubmitting}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded border-borderLine bg-background/90 text-foreground placeholder:text-foreground/60"
            required
            disabled={isSubmitting}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            className="w-full p-3 border rounded border-borderLine bg-background/90 text-foreground placeholder:text-foreground/60"
            rows={5}
            required
            disabled={isSubmitting}
          />

          {submitStatus.type && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-3 rounded text-sm font-medium ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-200"
                  : "bg-red-100 text-red-800 border border-red-200"
              }`}
            >
              {submitStatus.message}
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 transition-transform rounded text-foreground ${
              isSubmitting
                ? "bg-accent/50 cursor-not-allowed"
                : "bg-accent hover:shadow-lg hover:bg-accent/90"
            }`}
            whileHover={!isSubmitting ? { scale: 1.05 } : {}}
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </div>

      {/* Contact info section with glass morphism effect */}
      <div className="relative z-10 max-w-md p-6 mx-auto mt-8 space-y-2 border rounded-lg bg-white/10 backdrop-blur-md border-white/20">
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
