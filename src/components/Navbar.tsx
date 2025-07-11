import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const id = href.substring(1);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu
    }
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 shadow-sm bg-background text-foreground">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo / Name */}
        <motion.div
          className="text-xl font-bold cursor-pointer text-accent"
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection("#home")}
        >
          Charley
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden space-x-6 text-sm font-medium md:flex">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden mt-2 overflow-hidden transition-all duration-300 bg-background rounded-md shadow-md ${
          isOpen ? "max-h-[300px] py-4" : "max-h-0 py-0"
        }`}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
      >
        <ul className="flex flex-col items-center space-y-4 text-sm font-medium">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="transition-colors hover:text-secondaryAccent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
