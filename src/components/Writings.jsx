import { Link } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

export default function Writings({ posts }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />

      <section id="writings" className="bg-gray-900">
        <div className="container px-10 py-20 mx-auto">
          {/* Section header */}
          <div className="text-center mb-14">
            <p className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Writing
            </p>
            <h2
              className="text-3xl sm:text-4xl font-normal mb-5"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                color: "#e8e3d5",
              }}
            >
              Writings
            </h2>
            <p className="text-gray-400 text-base leading-relaxed lg:w-2/3 mx-auto">
              Breaking down frontend concepts through stories, metaphors, and
              the occasional analogy.
            </p>
          </div>

          {/* Post cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/writings/${post.slug}`}
                className="group flex flex-col justify-between border border-gray-800 rounded-xl p-6 bg-gray-800 bg-opacity-40 transition-all duration-200 hover:border-green-400 hover:border-opacity-40 hover:-translate-y-0.5 focus:outline-none focus:ring-1 focus:ring-green-400"
                aria-label={`Read ${post.frontmatter.title}`}
              >
                <div>
                  {post.frontmatter.date && (
                    <p className="text-xs font-semibold tracking-widest uppercase text-gray-600 mb-3">
                      {post.frontmatter.date}
                    </p>
                  )}
                  <h3
                    className="text-base font-normal mb-3 group-hover:text-green-400 transition-colors"
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      color: "#e8e3d5",
                    }}
                  >
                    {post.frontmatter.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {post.frontmatter.blurb}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 mt-6 text-xs font-semibold tracking-widest uppercase text-gray-600 group-hover:text-green-400 transition-colors">
                  Read
                  <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
