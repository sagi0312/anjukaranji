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
            {/* Core skills — 2 cols on mobile, 3 on sm+ */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {coreSkills.map((skill) => (
                <div
                  key={skill}
                  className="group flex items-center gap-3 bg-gray-800 bg-opacity-40 border border-gray-800 rounded-xl px-4 py-3.5 transition-all duration-200 hover:border-green-400 hover:border-opacity-40 hover:-translate-y-0.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* AWS grouped card */}
            <div className="border border-gray-800 rounded-xl p-6 bg-gray-800 bg-opacity-20">
              <div className="flex flex-col gap-1 mb-5">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  <span
                    className="text-sm font-normal"
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      color: "#e8e3d5",
                    }}
                  >
                    Amazon Web Services
                  </span>
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase text-gray-600 pl-[18px]">
                  hands-on experience
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
