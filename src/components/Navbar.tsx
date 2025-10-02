import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, User, Briefcase, Code, BookOpen, Mail, Github } from "lucide-react";

const MotionLink = motion(Link);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (!isHomePage) {
      window.location.href = `/${href}`;
      return;
    }

    const id = href.substring(1);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu
    }
  };

  const navLinks = [
    { href: "#home", label: "Home", icon: <Home size={18} /> },
    { href: "#about", label: "About", icon: <User size={18} /> },
    { href: "#services", label: "Services", icon: <Briefcase size={18} /> },
    { href: "#skills", label: "Skills", icon: <Code size={18} /> },
    { href: "#projects", label: "Projects", icon: <Briefcase size={18} /> },
    { href: "#github", label: "GitHub", icon: <Github size={18} /> },
    { href: "/blog", label: "Blog", icon: <BookOpen size={18} /> },
    { href: "#contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  const linkProps = {
    className: "flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl text-foreground/80 hover:text-accent hover:bg-accent/10",
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  const mobileLinkProps = {
    className: "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl text-foreground/80 hover:text-accent hover:bg-accent/10",
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between max-w-screen-xl px-6 py-4 mx-auto">
        {/* Logo / Name */}
        <motion.div
          className="text-xl font-bold cursor-pointer text-accent hover:text-secondaryAccent transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("#home")}
        >
          Charley
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden space-x-1 md:flex">
          {navLinks.map(link => (
            <li key={link.href}>
              {link.href.startsWith("#") ? (
                <motion.a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  {...linkProps}
                >
                  {link.icon}
                  {link.label}
                </motion.a>
              ) : (
                <MotionLink to={link.href} {...linkProps}>
                  {link.icon}
                  {link.label}
                </MotionLink>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <motion.button
          className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
          onClick={() => setIsOpen(prev => !prev)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} className="text-foreground" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} className="text-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4">
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                        {...mobileLinkProps}
                      >
                        {link.icon}
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        {...mobileLinkProps}
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
