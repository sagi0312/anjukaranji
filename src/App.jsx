import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Writings from "./components/Writings";
import BlogPost from "./components/BlogPost";
import { posts } from "./posts";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Map URL path to section ID
    const pathToSection = {
      "/projects": "projects",
      "/writings": "writings",
      "/skills": "skills",
      "/contact": "contact",
      "/about": "about",
    };

    const sectionId = pathToSection[location.pathname];
    if (sectionId) {
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.pathname]);

  return (
    <>
      <About />
      <Projects />
      <Writings posts={posts} />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/writings" element={<HomePage />} />
          <Route path="/projects" element={<HomePage />} />
          <Route path="/skills" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/writings/:slug" element={<BlogPost posts={posts} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}
