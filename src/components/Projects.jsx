import { projects, additionalExperience } from "../data";

export default function Projects() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />

      <section id="projects" className="bg-gray-900">
        <div className="container px-10 py-20 mx-auto">
          {/* Section header */}
          <div className="flex flex-col w-full mb-16 text-center">
            <p className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Portfolio
            </p>
            <h2
              className="text-3xl sm:text-4xl mb-5 font-normal"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                color: "#e8e3d5",
              }}
            >
              Apps I've Built
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-400 text-base">
              From early consulting projects in India to large-scale systems at
              Amazon and Executive Homes — here's a selection of work that
              reflects my journey building intuitive frontends and scalable
              backends.
            </p>
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col justify-between border border-gray-800 rounded-xl bg-gray-800 bg-opacity-40 p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-green-400 hover:border-opacity-40"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold tracking-widest uppercase text-green-400">
                      {project.subtitle}
                    </span>
                    {project.company && (
                      <span className="text-xs font-medium text-gray-500 border border-gray-700 rounded-full px-3 py-0.5 ml-2 shrink-0">
                        {project.company}
                      </span>
                    )}
                  </div>

                  <h3
                    className="text-lg font-normal mb-3 group-hover:text-green-400 transition-colors"
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      color: "#e8e3d5",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p className="leading-relaxed text-gray-400 text-sm">
                    {project.description}
                  </p>
                </div>

                {project.link && (
                  <a
                    className="inline-flex items-center gap-1.5 mt-6 text-xs text-green-400 hover:text-green-300 transition-colors break-all"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    {project.link}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Additional experience */}
          <div className="mt-12 border-t border-gray-800 pt-8 text-sm text-gray-400">
            <span
              className="font-semibold text-green-400"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              {additionalExperience.title}:
            </span>{" "}
            {additionalExperience.description}
          </div>
        </div>
      </section>
    </>
  );
}
