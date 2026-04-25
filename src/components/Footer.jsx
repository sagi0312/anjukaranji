const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span
          className="text-sm font-normal"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            color: "#e8e3d5",
          }}
        >
          Anju Karanji
        </span>

        <span className="text-xs text-gray-600">
          © {new Date().getFullYear()}
        </span>

        <div className="flex items-center gap-6">
          {[
            { label: "LinkedIn", href: "https://linkedin.com/in/anju-karanji" },
            { label: "GitHub", href: "https://github.com/sagi0312" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold tracking-widest uppercase text-gray-500 hover:text-green-400 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
