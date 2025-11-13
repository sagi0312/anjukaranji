import { Link } from "react-router-dom";
import {
  BookOpenIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";

export default function Writings({ posts }) {
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
            <div key={post.slug} className="p-2 w-full sm:w-1/3 lg:w-1/4">
              <Link
                to={`/writings/${post.slug}`}
                className="block rounded p-3 h-full transform transition-transform duration-300 hover:scale-105 hover:border-green-500 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label={`Read ${post.frontmatter.title}`}
              >
                <h3 className="text-white font-semibold text-sm mb-2">
                  {post.frontmatter.title}
                </h3>
                <p className="text-white/80 text-xs mb-3">
                  {post.frontmatter.blurb}
                </p>
                <div className="inline-flex items-center text-green-400 hover:text-green-300 text-xs font-medium">
                  Read
                  <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
