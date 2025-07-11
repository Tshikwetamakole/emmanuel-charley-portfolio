import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="text-white bg-gray-900 scroll-smooth">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="blog"><Blog /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
};

export default App;
