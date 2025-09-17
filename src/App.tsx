import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import StickyHireMe from "./components/StickyHireMe";
import ConsentBanner from "./components/ConsentBanner";

const HomePage = () => (
  <>
    <Navbar />
    <main>
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="blog"><Blog /></section>
      <section id="contact"><Contact /></section>
      <FloatingWhatsApp />
    </main>
  </>
);

const App = () => {
  return (
    <div className="text-white bg-gray-900 scroll-smooth">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:slug" element={<Post />} />
        </Routes>
      </Router>

      <ThemeToggle />
      <StickyHireMe />
      <ConsentBanner />
    </div>
  );
};

export default App;
