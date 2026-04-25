import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function BlogPost({ posts }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToWritings = () => navigate("/writings");

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center px-5">
        <p className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">
          404
        </p>
        <h1
          className="text-4xl mb-6 font-normal"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            color: "#e8e3d5",
          }}
        >
          Post not found
        </h1>
        <button
          onClick={goToWritings}
          className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to writings
        </button>
      </div>
    );
  }

  const PostContent = post.component;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
        rel="stylesheet"
      />

      <div className="bg-gray-900 min-h-screen">
        <article className="container mx-auto px-5 md:px-10 py-12 max-w-2xl">
          {/* Back button */}
          <button
            onClick={goToWritings}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gray-500 hover:text-green-400 transition-colors mb-12"
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            Writings
          </button>

          {/* Header */}
          <header className="mb-12 border-b border-gray-800 pb-10">
            <p className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-5">
              {post.frontmatter.date}
            </p>
            <h1
              className="text-3xl md:text-4xl font-normal leading-snug mb-4"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                color: "#e8e3d5",
              }}
            >
              {post.frontmatter.title}
            </h1>
            {post.frontmatter.subtitle && (
              <p className="text-lg text-gray-400 leading-relaxed">
                {post.frontmatter.subtitle}
              </p>
            )}
          </header>

          {/* Body */}
          <div
            className="prose prose-invert max-w-none
                        prose-headings:font-normal prose-headings:text-white
                        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                        prose-p:text-gray-400 prose-p:leading-relaxed prose-p:mb-5
                        prose-a:text-green-400 prose-a:no-underline hover:prose-a:text-green-300
                        prose-strong:text-gray-200 prose-strong:font-semibold
                        prose-code:text-green-400 prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:break-words
                        prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700 prose-pre:rounded-xl prose-pre:overflow-x-auto
                        prose-blockquote:border-l-2 prose-blockquote:border-green-400 prose-blockquote:text-gray-400 prose-blockquote:pl-5 prose-blockquote:italic
                        prose-ul:text-gray-400 prose-ol:text-gray-400 prose-li:text-gray-400 prose-li:mb-1
                        prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8"
            style={{
              "--tw-prose-headings-font-family":
                "'DM Serif Display', Georgia, serif",
            }}
          >
            <PostContent />
          </div>

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <button
              onClick={goToWritings}
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-400 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to all writings
            </button>
          </div>
        </article>
      </div>
    </>
  );
}
