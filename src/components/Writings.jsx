import {
  BookOpenIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";

const posts = [
  {
    title: "Design Patterns by Purpose: A Map for Frontend Developers",
    blurb:
      "An overview of why design patterns matter in frontend work, plus a roadmap for exploring them with focus.",
    href: "https://dev.to/sagi0312/part-1-design-patterns-by-purpose-a-developers-map-156c",
  },
  {
    title: "Design Patterns by Purpose: The Factory Pattern in Frontend Life",
    blurb:
      "Breaking down the Factory Pattern with frontend use cases—simplifying object creation and keeping code flexible.",
    href: "https://dev.to/sagi0312/design-patterns-by-purpose-reuse-part-2-3500",
  },
  {
    title: "Design Patterns by Purpose: The Strategy Pattern in Frontend Life",
    blurb:
      "Exploring the Strategy Pattern and how it helps organize interchangeable behaviors for cleaner UI logic.",
    href: "https://dev.to/sagi0312/design-patterns-by-purpose-the-strategy-pattern-in-frontend-life-part-3-55i4",
  },
  {
    title: "Design Patterns by Purpose: The Command Pattern in Frontend Life",
    blurb:
      "Learn the Command Pattern through universal remotes, playful cats, and a reusable Undo button built in React.",
    href: "https://dev.to/sagi0312/design-patterns-by-purpose-the-command-pattern-in-frontend-life-part-4-2f35",
  },
];

const storyPosts = [
  {
    title: "Breaking the Rules at Privet Drive: A React Origin Story",
    blurb:
      "A whimsical origin story of React — from JSX skepticism, to Fiber, to Hooks, to the Compiler era.",
    href: "https://dev.to/sagi0312/react-and-the-philosophers-component-4dnk",
  },
  {
    title: "Talking to My Code: React Compiler Saves the Day",
    blurb:
      "From job rejection to innovation and discovering how React Compiler solved my performance issues.",
    href: "https://dev.to/sagi0312/building-a-voice-driven-page-builder-part-1-how-react-compiler-solved-my-performance-crisis-3cpg",
  },
];

export default function Writing() {
  return (
    <section id="writings">
      <div className="container p-12 sm:p-16 lg:p-20 mx-auto">
        <div className="text-center mb-20">
          <BookOpenIcon className="w-10 inline-block mb-4 " />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Writings
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white/80">
            I’m exploring{" "}
            <span className="font-semibold">Design Patterns by Purpose</span> —
            short, practical articles for frontend engineers.
          </p>
        </div>

        <div className="flex flex-wrap justify-center -m-4">
          {posts.map((post) => (
            <div key={post.title} className="p-4 sm:w-1/2 lg:w-1/3">
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="block bg-gray-800 rounded p-6 h-full transform transition-transform duration-300 hover:scale-105 hover:border-green-500 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label={`Read ${post.title} on dev.to`}
              >
                <h3 className="text-white font-semibold text-md sm:text-lg mb-2 h-20 sm:h-24 flex items-start">
                  {post.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">{post.blurb}</p>
                <div className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium">
                  Read on dev.to
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mb-20 mt-16 sm:mt-20 lg:mt-24">
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
            Experiments & Stories
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white/80">
            From wild coding experiments to playful tech tales — exploring ideas
            that probably shouldn't work but somehow do.
          </p>
        </div>

        <div className="flex flex-wrap justify-center -m-4">
          {storyPosts.map((post) => (
            <div key={post.title} className="p-4 sm:w-1/2 lg:w-1/3">
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="block bg-gray-800 rounded p-6 h-full transform transition-transform duration-300 hover:scale-105 hover:border-green-500 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label={`Read ${post.title} on dev.to`}
              >
                <h3 className="text-white font-semibold text-md sm:text-lg mb-2">
                  {post.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">{post.blurb}</p>
                <div className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium">
                  Read on dev.to
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
