import React from "react";
export default function About() {
  return (
    <>
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Anju.
              <br className="hidden lg:inline-block" />I love to build amazing
              apps and websites.
            </h1>
            <p className="mb-8 leading-relaxed">
              I began my journey as a Software Engineer after graduating with a
              Bachelor of Engineering in Information Science and Technology in
              2005. I have worked on both front-end and back-end development. I
              have developed Java desktop and web applications, worked on IBM
              Lotus Domino Designer, and React js. I have done software manual
              testing and taught Java programming. <br /> Other than coding, I
              enjoy watching science-fiction movies and tv shows. Inception and
              Dark are my favorites. I am currently watching Supernatural with
              my daughter. I have an overweight tabby cat. I love listening to
              podcasts by Eckhart Tolle. My favorite book is To Sir, With Love.
              I enjoy volunteering my time at hospice and homeless shelters.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./pic-coat.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
