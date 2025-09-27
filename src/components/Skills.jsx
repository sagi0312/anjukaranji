import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-12 mx-auto">
        <div className="text-center mb-20">
          <CpuChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Always learning, always building — here are the technologies I work
            with most.
          </p>
        </div>
        <div className="flex flex-wrap w-5/6 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className={`p-2 ${
                index === skills.length - 1 ? "w-full" : "sm:w-1/2 w-full"
              }`}
            >
              <div className="bg-gray-800 rounded flex p-6 h-full items-center transform transition-transform duration-300 hover:scale-105">
                <CheckBadgeIcon className="text-green-400 w-5 h-5 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white text-sm">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
