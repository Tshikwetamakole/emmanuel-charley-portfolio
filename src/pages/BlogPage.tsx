import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface BlogPostMeta {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data: BlogPostMeta[] = await response.json();

        const formattedPosts = data.map(post => ({
            ...post,
            date: new Date(post.date).toISOString().split('T')[0]
        }));

        // The API already returns posts sorted by date, but sorting again client-side is safe.
        formattedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog | Charley Raluswinga</title>
        <meta name="description" content="Read the latest articles on software development, AI, and technology in Africa from Charley Raluswinga's blog." />
      </Helmet>
      <section
        id="blog-page"
        className="min-h-screen px-6 py-24 text-left bg-background text-foreground"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="mb-4 text-4xl font-bold tracking-wider text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            The Blog
          </motion.h1>
          <motion.p
            className="mb-12 text-lg text-center text-secondaryAccent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Thoughts on code, technology, and life.
          </motion.p>
          <div className="space-y-12">
            {posts.map((post, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <Link to={`/posts/${post.slug}`} className="block group">
                  <p className="text-sm text-secondaryAccent">{post.date}</p>
                  <h2 className="mb-2 text-3xl font-semibold transition-colors duration-300 text-accent group-hover:text-secondaryAccent">
                    {post.title}
                  </h2>
                  <p className="mb-4 text-foreground/80">{post.excerpt}</p>
                  <span className="font-semibold transition-colors duration-300 text-accent group-hover:text-secondaryAccent">
                    Read Full Post →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
