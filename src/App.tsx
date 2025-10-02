import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Eagerly import components that are always needed
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import StickyHireMe from "./components/StickyHireMe";
import ConsentBanner from "./components/ConsentBanner";
import Preloader from "./components/Preloader";

// Lazy load page sections and pages
const Hero = lazy(() => import("./pages/Hero"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const GitHub = lazy(() => import("./pages/GitHub"));
const BlogPreview = lazy(() => import("./components/BlogPreview"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const Contact = lazy(() => import("./pages/Contact"));
const Post = lazy(() => import("./pages/Post"));

const HomePage = () => (
  <>
    <Suspense fallback={<Preloader />}>
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="github"><GitHub /></section>
      <BlogPreview />
      <section id="contact"><Contact /></section>
    </Suspense>
  </>
);

const App = () => {
  return (
    <div className="text-white bg-gray-900 scroll-smooth">
      <Router>
        <Navbar />
        <main>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/posts/:slug" element={<Post />} />
            </Routes>
          </Suspense>
        </main>
        <FloatingWhatsApp />
      </Router>

      <ThemeToggle />
      <StickyHireMe />
      <ConsentBanner />
    </div>
  );
};

export default App;
