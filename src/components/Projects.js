import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <>
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <CodeIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Apps I've Built
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              I started my career with Java web based programming and worked on
              IBM Lotus Domino and then Java Desktop Application development. I
              have done software manual testing, wordpress website development
              and currently work as a computer programming tutor. Here are some
              of my favorite projects.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <h2 key={project.title} className="sm:w-1/2 w-100">
                <div className="flex relative">
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <h1 className="title-font text-lg font-medium text-white mb-3"></h1>
                    <p className="leading-relaxed">{project.description}</p>
                    {project.link ? (
                      <>
                        <a
                          className="text-yellow-400 leading-relaxed"
                          href={project.link}
                        >
                          https://www.kbwc.org
                        </a>
                      </>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>
              </h2>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
