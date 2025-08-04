export default function About() {
  return (
    <>
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-6 font-normal text-white">
              Hi, I'm Anju.
              <br className="hidden lg:inline-block" />
              I build scalable web applications
              <br className="hidden md:inline-block" /> that solve real
              problems.
            </h1>

            <p className="mb-8 leading-relaxed">
              I'm a Full-Stack Software Engineer who loves building intuitive
              applications and solving real-world problems through technology.
              My work spans both frontend and backend development — from
              crafting seamless React.js interfaces to architecting backend
              systems with Java and AWS. After earning my Bachelor of
              Engineering in Information Science and Technology, I’ve
              contributed to cloud infrastructure for high-scale environments
              and delivered agile, business-driven software solutions.
            </p>
            <p className="mb-8 leading-relaxed">
              I'm always curious about emerging technologies and new ways to
              build better, more impactful systems. Outside of work, I enjoy
              unwinding with science-fiction shows alongside my daughter.
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
              src="./coffee.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
