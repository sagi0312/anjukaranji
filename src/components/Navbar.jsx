import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToSection = (sectionId) => {
    navigate("/" + sectionId);
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Past Work", section: "projects" },
    { label: "Writings", section: "writings" },
    { label: "Skills", section: "skills" },
  ];

  return (
    <>
      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto flex px-10 py-4 items-center">
          <Link
            to="/"
            className="text-base font-normal transition-colors hover:text-green-400"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              color: "#e8e3d5",
            }}
          >
            Anju Karanji
          </Link>

          {/* Desktop nav */}
          <nav className="md:ml-8 md:pl-8 md:border-l md:border-gray-800 flex items-center gap-6 ml-auto mr-6">
            {navLinks.map(({ label, section }) => (
              <button
                key={section}
                onClick={() => goToSection(section)}
                className="hidden md:block text-xs font-semibold tracking-widest uppercase text-gray-500 hover:text-green-400 transition-colors"
              >
                {label}
              </button>
            ))}
            <a
              href="/Anju-Karanji-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-xs font-semibold tracking-widest uppercase text-gray-500 hover:text-green-400 transition-colors"
            >
              Résumé
            </a>
          </nav>

          {/* Hire Me — desktop */}
          <button
            onClick={() => goToSection("contact")}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-green-400 border border-green-400 border-opacity-40 py-1.5 px-4 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all focus:outline-none"
          >
            Hire Me
            <ArrowRightIcon className="w-3 h-3" />
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden ml-auto text-gray-400 hover:text-green-400 transition-colors focus:outline-none"
          >
            {menuOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-gray-900 px-10 py-6 flex flex-col gap-5 relative z-50">
            {navLinks.map(({ label, section }) => (
              <button
                key={section}
                onClick={() => goToSection(section)}
                className="text-left text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-green-400 transition-colors"
              >
                {label}
              </button>
            ))}
            <a
              href="/Anju-Karanji-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-green-400 transition-colors"
            >
              Résumé
            </a>
            <button
              onClick={() => goToSection("contact")}
              className="self-start inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-green-400 border border-green-400 border-opacity-40 py-1.5 px-4 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all focus:outline-none"
            >
              Hire Me
              <ArrowRightIcon className="w-3 h-3" />
            </button>
          </div>
        )}
      </header>
    </>
  );
}
