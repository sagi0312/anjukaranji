import { useParams, Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function BlogPost({ posts }) {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-5 py-20 text-center">
        <h1 className="text-4xl text-white mb-4">Post not found</h1>
        <Link to="/#writings" className="text-green-400 hover:text-green-300">
          ← Back to writings
        </Link>
      </div>
    );
  }

  const PostContent = post.component;

  return (
    <article className="container mx-auto px-5 md:px-10 py-10 max-w-4xl">
      <Link
        to="/#writings"
        className="inline-flex items-center text-green-400 hover:text-green-300 mb-8"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Back to writings
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {post.frontmatter.title}
        </h1>
        {post.frontmatter.subtitle && (
          <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
            {post.frontmatter.subtitle}
          </h2>
        )}
        <p className="text-indigo-400 text-sm">{post.frontmatter.date}</p>
      </header>

      <div
        className="prose prose-invert prose-lg max-w-none space-y-4
                    prose-headings:text-white 
                    prose-p:text-gray-300 prose-p:mb-4
                    prose-a:text-green-400 prose-a:no-underline hover:prose-a:text-green-300
                    prose-strong:text-white
                    prose-code:text-green-400 prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:break-words
                    prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700 prose-pre:overflow-x-auto
                    prose-blockquote:border-l-green-400 prose-blockquote:text-gray-300
                    prose-ul:text-gray-300
                    prose-ol:text-gray-300
                    prose-li:text-gray-300
                    prose-img:rounded-lg prose-img:shadow-lg"
      >
        <PostContent />
      </div>
    </article>
  );
}
