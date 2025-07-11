import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = form.querySelector('input[name="_gotcha"]') as HTMLInputElement;

    // If spam is detected, log it
    if (honeypot?.value) {
      fetch("https://webhook.site/c0b50812-dd37-49a0-8a83-7329d48ac561", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "spam-detected",
          timestamp: new Date().toISOString(),
          name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
          email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
          message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
          gotcha: honeypot.value,
        }),
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
      className="relative px-4 py-20 text-center sm:px-6 bg-background text-foreground"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10">
        <motion.h2
          className="mb-6 text-3xl font-bold tracking-wide sm:text-4xl text-accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto mb-8 text-base sm:text-lg text-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Send me a message through this form or reach out on WhatsApp.
        </motion.p>

        <form
          action="https://formspree.io/f/xnnvezby"
          method="POST"
          className="max-w-xl mx-auto space-y-4 text-left"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md border-borderLine bg-background/90 text-foreground placeholder:text-foreground/60"
            required
            disabled={isSubmitting}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md border-borderLine bg-background/90 text-foreground placeholder:text-foreground/60"
            required
            disabled={isSubmitting}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 border rounded-md border-borderLine bg-background/90 text-foreground placeholder:text-foreground/60"
            required
            disabled={isSubmitting}
          />

          {/* Honeypot Field */}
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            title="Leave this field empty"
            placeholder="Leave this field empty"
          />

          {status === "success" && (
            <div className="p-3 text-green-700 bg-green-100 border border-green-300 rounded">
              ✅ Message sent successfully!
            </div>
          )}
          {status === "error" && (
            <div className="p-3 text-red-700 bg-red-100 border border-red-300 rounded">
              ❌ Spam blocked or error occurred.
            </div>
          )}

          <motion.button
            type="submit"
            className={`w-full py-3 font-semibold transition-transform rounded-md text-foreground ${
              isSubmitting
                ? "bg-accent/50 cursor-not-allowed"
                : "bg-accent hover:bg-accent/90 hover:shadow-lg"
            }`}
            whileHover={!isSubmitting ? { scale: 1.03 } : {}}
            whileTap={!isSubmitting ? { scale: 0.97 } : {}}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        {/* Contact Box */}
        <div className="relative z-10 max-w-md p-6 mx-auto mt-10 space-y-2 text-sm border rounded-lg bg-white/10 backdrop-blur-md border-white/20 sm:text-base">
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
