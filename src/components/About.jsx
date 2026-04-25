export default function About() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />

      <section id="about" className="bg-gray-900">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          {/* LEFT — Text content */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {/* Eyebrow label */}
            <p className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Full-Stack Engineer
            </p>

            {/* Serif H1 */}
            <h1
              className="text-3xl sm:text-4xl mb-6 font-normal leading-snug"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                color: "#e8e3d5",
              }}
            >
              Hi, I'm Anju.
              <br className="hidden lg:inline-block" />
              I build scalable systems
              <br className="hidden md:inline-block" /> that{" "}
              <span className="text-green-400">solve real problems.</span>
            </h1>

            <p className="mb-5 leading-relaxed text-gray-400">
              I'm a Full-Stack Engineer who enjoys bringing calm and structure
              to complex systems — and turning ideas into shipped products.
            </p>

            <p className="mb-10 leading-relaxed text-gray-400">
              I like building thoughtful software that balances clean
              architecture with real-world usability, especially where developer
              experience and product experience meet. Outside of work, you'll
              usually find me watching sci-fi with my daughter or exploring
              mindfulness over a cup of chai.
            </p>

            {/* CTAs */}
            <div className="flex justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex text-gray-900 bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded font-semibold text-base transition-colors"
              >
                Work With Me
              </a>
              <a
                href="#projects"
                className="inline-flex text-gray-300 bg-gray-800 border border-gray-700 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base transition-colors"
              >
                See My Past Work
              </a>
            </div>
          </div>

          {/* RIGHT — Photo with badge */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
            <img
              className="object-cover object-center rounded-xl w-full"
              alt="Anju Karanji"
              src="./sweater.JPG"
            />
            <div className="absolute -bottom-4 -left-4 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 shadow-lg">
              <span className="block text-green-400 text-xs font-semibold tracking-widest uppercase mb-1">
                Full-Stack
              </span>
              <span className="text-gray-400 text-xs">
                React · TypeScript · Java · AWS
              </span>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div className="border-t border-b border-gray-800">
          <div className="container mx-auto px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800">
            {[
              { num: "~5 yrs", label: "engineering experience" },
              { num: "140+", label: "facilities served" },
              { num: "14M+", label: "records processed" },
              { num: "40+", label: "React components built" },
            ].map(({ num, label }) => (
              <div key={label} className="py-5 px-6 text-center md:text-left">
                <p
                  className="text-xl font-semibold"
                  style={{
                    color: "#e8e3d5",
                    fontFamily: "'DM Serif Display', Georgia, serif",
                  }}
                >
                  {num}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
