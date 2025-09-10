import {
  BookOpenIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";

const posts = [
  {
    title: "Design Patterns by Purpose: A Map for Frontend Developers",
    blurb:
      "An overview of why design patterns matter in frontend development, and a roadmap for exploring them with purpose.",
    href: "https://dev.to/sagi0312/part-1-design-patterns-by-purpose-a-developers-map-156c",
  },
  {
    title: "Design Patterns by Purpose: The Factory Pattern in Frontend Life",
    blurb:
      "Breaking down the Factory Pattern with frontend use cases — simplifying object creation and keeping code flexible.",
    href: "https://dev.to/sagi0312/design-patterns-by-purpose-reuse-part-2-3500",
  },
  {
    title: "Design Patterns by Purpose: The Strategy Pattern in Frontend Life",
    blurb:
      "Exploring the Strategy Pattern and how it helps structure pluggable component behaviors for cleaner UI code.",
    href: "https://dev.to/sagi0312/design-patterns-by-purpose-the-strategy-pattern-in-frontend-life-part-3-55i4",
  },
];

export default function Writing() {
  return (
    <section id="writings">
      <div className="container px-5 pt-20 pb-24 mx-auto">
        <div className="text-center mb-24">
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-5/6 sm:mx-auto sm:mb-2">
          {posts.map((post) => (
            <a
              key={post.title}
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
          ))}
        </div>
      </div>
    </section>
  );
}
