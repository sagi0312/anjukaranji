import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { projects, additionalExperience } from "../data";

export default function Projects() {
  return (
    <>
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Apps I've Built
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Over the years, I've had the opportunity to work across a range of
              technologies — from early consulting projects in India to
              large-scale applications at Amazon and Executive Homes. Today, my
              focus is on crafting intuitive frontend applications and scalable
              backend systems. Here are some of the projects I've worked on that
              reflect my journey and passion for solving real-world challenges
              through technology.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <div key={project.title} className="p-4 sm:w-1/2 w-full">
                <div className="h-full flex flex-col justify-between border-4 border-gray-800 bg-gray-900 p-8 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div>
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-1">
                      {project.title}
                    </h1>
                    {project.company && (
                      <h3 className="text-base font-semibold text-indigo-500 mb-3">
                        {project.company}
                      </h3>
                    )}
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                  {project.link ? (
                    <a
                      className="text-yellow-400 leading-relaxed mt-4 break-words"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.link}
                    </a>
                  ) : (
                    <p className="mt-4"></p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Additional Experience */}
          <div className="mt-10 text-gray-400 text-left  pt-4">
            <span className="font-semibold text-green-400">
              {additionalExperience.title}:
            </span>{" "}
            {additionalExperience.description}
          </div>
        </div>
      </section>
    </>
  );
}
