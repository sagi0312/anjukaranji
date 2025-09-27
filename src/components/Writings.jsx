import {
  BookOpenIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";

const posts = [
  {
    title: "Design Patterns by Purpose: A Map for Frontend Developers",
    blurb:
      "An overview of design patterns in frontend work, plus a roadmap for exploring them with focus.",
    href: "https://dev.to/sagi0312/part-1-design-patterns-by-purpose-a-developers-map-156c",
  },
  {
    title: "Design Patterns by Purpose: The Factory Pattern in Frontend Life",
    blurb:
      "Breaking down the Factory Pattern with frontend use cases — simplifying object creation.",
    href: "https://dev.to/sagi0312/design-patterns-by-purpose-reuse-part-2-3500",
  },
  {
    title: "Design Patterns by Purpose: The Strategy Pattern in Frontend Life",
    blurb:
      "Exploring the Strategy Pattern and how it helps organize interchangeable behaviors for cleaner UI.",
    href: "https://dev.to/sagi0312/design-patterns-by-purpose-the-strategy-pattern-in-frontend-life-part-3-55i4",
  },
  {
    title: "Design Patterns by Purpose: The Command Pattern in Frontend Life",
    blurb:
      "Learn the Command Pattern through universal remotes, playful cats, and a reusable Undo button.",
    href: "https://dev.to/sagi0312/design-patterns-by-purpose-the-command-pattern-in-frontend-life-part-4-2f35",
  },
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
      <div className="container p-12 mx-auto">
        <div className="text-center mb-7">
          <BookOpenIcon className="w-10 inline-block mb-4 " />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
            Writings
          </h1>
          <p className="text-base mt-10 text-indigo-500">
            Breaking down frontend concepts through stories, metaphors, and the
            occasional analogy.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          {posts.map((post) => (
            <div key={post.title} className="p-2 w-full sm:w-1/3 lg:w-1/4">
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded p-3 h-full transform transition-transform duration-300 hover:scale-105 hover:border-green-500 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label={`Read ${post.title} on dev.to`}
              >
                <h3 className="text-white font-semibold text-sm mb-2">
                  {post.title}
                </h3>
                <p className="text-white/80 text-xs mb-3">{post.blurb}</p>
                <div className="inline-flex items-center text-green-400 hover:text-green-300 text-xs font-medium">
                  Read
                  <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
