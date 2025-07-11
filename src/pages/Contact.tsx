import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = form.querySelector('input[name="_gotcha"]') as HTMLInputElement;

    // If spam is detected, log it to Webhook.site and block submission
    if (honeypot?.value) {
      const data = {
        type: "spam-detected",
        timestamp: new Date().toISOString(),
        name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
        email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
        message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
        gotcha: honeypot.value,
      };

      fetch("https://webhook.site/c0b50812-dd37-49a0-8a83-7329d48ac561", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setStatus("error");
      return;
    }

    setIsSubmitting(true);

    // Simulate success
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
      form.reset();
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative px-6 py-20 overflow-hidden text-center text-foreground contact-section-bg"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10">
        <motion.h2
          className="mb-8 text-3xl font-bold tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto mb-8 text-lg text-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Send me a message through this form or reach out on WhatsApp.
        </motion.p>

        <form
          action="https://formspree.io/f/xnnvezby"
          method="POST"
          className="max-w-xl mx-auto space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded border-borderLine bg-background/90 text-foreground placeholder:text-foreground/60"
            required
            disabled={isSubmitting}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded border-borderLine bg-background/90 text-foreground placeholder:text-foreground/60"
            required
            disabled={isSubmitting}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 border rounded border-borderLine bg-background/90 text-foreground placeholder:text-foreground/60"
            required
            disabled={isSubmitting}
          />

          {/* Honeypot Field (Invisible to Humans) */}
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            placeholder="Leave this field empty"
            title="Leave this field empty"
          />

          {status === "success" && (
            <div className="p-3 text-green-700 bg-green-100 border border-green-300 rounded">
              ✅ Message sent!
            </div>
          )}
          {status === "error" && (
            <div className="p-3 text-red-700 bg-red-100 border border-red-300 rounded">
              ❌ Spam blocked or error occurred.
            </div>
          )}

          <motion.button
            type="submit"
            className={`px-6 py-2 transition-transform rounded text-foreground ${
              isSubmitting
                ? "bg-accent/50 cursor-not-allowed"
                : "bg-accent hover:shadow-lg hover:bg-accent/90"
            }`}
            whileHover={!isSubmitting ? { scale: 1.05 } : {}}
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        <div className="relative z-10 max-w-md p-6 mx-auto mt-8 space-y-2 border rounded-lg bg-white/10 backdrop-blur-md border-white/20">
          <p>📧 victorraluswinga@gmail.com</p>
          <a
            href="https://wa.me/27635273250"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-medium text-accent hover:text-secondaryAccent hover:underline"
          >
            📱 WhatsApp Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
