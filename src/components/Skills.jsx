import { coreSkills, awsSkills } from "../data";

export default function Skills() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />

      <section id="skills" className="bg-gray-900">
        <div className="container px-10 py-20 mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Toolbox
            </p>
            <h2
              className="text-3xl sm:text-4xl font-normal mb-5"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                color: "#e8e3d5",
              }}
            >
              Skills &amp; Technologies
            </h2>
            <p className="text-gray-400 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Always learning, always building — here are the technologies I
              work with most.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Categorized core skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {coreSkills.map(({ category, skills }) => (
                <div
                  key={category}
                  className="border border-gray-800 rounded-xl p-5 bg-gray-800 bg-opacity-20"
                >
                  <p className="text-xs font-semibold tracking-widest uppercase text-green-400 mb-4">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs text-gray-400 bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 hover:border-green-400 hover:border-opacity-40 hover:text-gray-200 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* AWS grouped card */}
            <div className="border border-gray-800 rounded-xl p-5 bg-gray-800 bg-opacity-20">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold tracking-widest uppercase text-green-400">
                  Amazon Web Services
                </p>
                <span className="text-xs font-semibold tracking-widest uppercase text-gray-600">
                  Hands-on experience
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {awsSkills.map((service) => (
                  <span
                    key={service}
                    className="text-xs text-gray-400 bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 hover:border-green-400 hover:border-opacity-40 hover:text-gray-200 transition-all cursor-default whitespace-nowrap"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
