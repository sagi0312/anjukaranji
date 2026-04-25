import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const goToSection = (sectionId) => {
    navigate("/" + sectionId);
  };

  return (
    <header className="bg-gray-800 sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap pt-4 pl-5 pb-4 pl-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <Link to="/" className="ml-3 text-xl">
            Anju Karanji
          </Link>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <button
            onClick={() => goToSection("projects")}
            className="mr-5 hover:text-white"
          >
            Past Work
          </button>
          <button
            onClick={() => goToSection("writings")}
            className="mr-5 hover:text-white"
          >
            Writings
          </button>
          <button
            onClick={() => goToSection("skills")}
            className="mr-5 hover:text-white"
          >
            Skills
          </button>
          <a
            href="/Anju-Karanji-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 hover:text-white"
          >
            Résumé
          </a>
        </nav>
        <button
          onClick={() => goToSection("contact")}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-green-400 text-base mt-4 md:mt-0"
        >
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </button>
      </div>
    </header>
  );
}
