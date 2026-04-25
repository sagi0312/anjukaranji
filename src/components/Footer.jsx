const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-xs text-gray-600 tracking-wide">
          Full-Stack Engineer · React · Java · TypeScript · AWS
        </span>
        <span className="text-xs text-gray-600">
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
