import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20 text-center bg-background text-foreground">
      <h2 className="mb-8 text-3xl font-bold tracking-wider">Let's Connect</h2>
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
        <button
          type="submit"
          className="px-6 py-2 transition-transform rounded text-foreground bg-accent hover:scale-105 hover:shadow-lg hover:bg-accent/90"
        >
          Send Message
        </button>
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
      </div>
    </section>

  );
};

export default Contact;
