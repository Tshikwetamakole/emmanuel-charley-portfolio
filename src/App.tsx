import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="bg-background text-foreground scroll-smooth">
              <section id="Home">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="services">
                <Services />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="blog">
                <Blog />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </main>
          }
        />
        <Route path="/posts/:slug" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default App;
