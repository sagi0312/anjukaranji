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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ProjectsPage() {
  useEffect(() => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return <Projects />;
}

function SkillsPage() {
  useEffect(() => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return <Skills />;
}

function ContactPage() {
  useEffect(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return <Contact />;
}

function HomePage() {
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
      <ScrollToTop />
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/writings" element={<Writings posts={posts} />} />
          <Route path="/writings/:slug" element={<BlogPost posts={posts} />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}
