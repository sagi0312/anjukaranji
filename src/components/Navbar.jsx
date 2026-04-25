import { Link, useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const navigate = useNavigate();

  const goToSection = (sectionId) => {
    navigate("/" + sectionId);
  };

  const navLinks = [
    { label: "Past Work", section: "projects" },
    { label: "Writings", section: "writings" },
    { label: "Skills", section: "skills" },
  ];

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
      <div className="container mx-auto flex px-10 py-4 items-center">
        {/* Logo */}
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

        {/* Nav links */}
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

        {/* CTA */}
        <button
          onClick={() => goToSection("contact")}
          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-green-400 border border-green-400 border-opacity-40 py-1.5 px-4 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all focus:outline-none"
        >
          Hire Me
          <ArrowRightIcon className="w-3 h-3" />
        </button>
      </div>
    </header>
  );
}
