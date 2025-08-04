const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center text-sm text-gray-400 space-y-2 md:space-y-0 md:space-x-6 text-center">
        <span>© {new Date().getFullYear()} Anju Karanji</span>
        <a
          href="https://linkedin.com/in/anju-karanji"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/sagi0312"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
