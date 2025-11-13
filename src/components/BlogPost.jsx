import React from 'react';

const BlogPost = ({ title, subtitle, content, author, date }) => {
  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <h1 className="blog-post-title">{title}</h1>
        <h2 className="blog-post-subtitle">{subtitle}</h2>
        {author && date && (
          <div className="blog-post-meta">
            <span className="blog-post-author">{author}</span>
            <span className="blog-post-date">{date}</span>
          </div>
        )}
      </header>
      <div className="blog-post-content">
        {content}
      </div>
    </article>
  );
};

export default BlogPost;
