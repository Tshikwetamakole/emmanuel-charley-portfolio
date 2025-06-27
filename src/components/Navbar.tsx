import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (href: string) => {
    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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
    <nav
      className="fixed z-50 flex items-center justify-between w-full px-6 py-4 shadow bg-background text-foreground"
      role="navigation"
      aria-label="Main navigation"
    >
      <motion.div
        className="text-xl font-bold cursor-pointer text-accent"
        whileHover={{ scale: 1.1, color: "#00bcd4" }}
        transition={{ type: "spring", stiffness: 300 }}
        tabIndex={0}
        aria-label="Homepage"
        onClick={() => scrollToSection("#home")}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            scrollToSection("#home");
          }
        }}
      >
        Emmanuel Charley
      </motion.div>

      {/* Desktop Menu */}
      <ul
        className="hidden space-x-6 text-sm font-medium md:flex"
        role="menubar"
      >
        {navLinks.map((link) => (
          <motion.li
            key={link.href}
            whileHover={{ scale: 1.1, color: "#00bcd4" }}
            transition={{ type: "spring", stiffness: 300 }}
            role="none"
          >
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="transition-colors duration-200 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              role="menuitem"
              tabIndex={0}
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="md:hidden focus:outline-none text-foreground"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls="mobile-menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute left-0 w-full overflow-hidden shadow-lg top-16 bg-background md:hidden"
      >
        <ul
          className="flex flex-col items-center py-4 space-y-4 text-sm font-medium"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                className="transition-colors duration-200 rounded hover:text-secondaryAccent focus:outline-none focus:ring-2 focus:ring-accent"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                  setIsOpen(false);
                }}
                role="menuitem"
                tabIndex={isOpen ? 0 : -1}
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
