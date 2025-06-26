import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// No need to extend ImportMeta; Vite provides import.meta.glob globally.

interface BlogPostMeta {
  title: string;
  date: string;
  slug: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);

  useEffect(() => {
    // Placeholder data for blog posts until TypeScript configuration for import.meta.glob is resolved
    const placeholderPosts = [
      { title: "AI in African Schools", date: "2023-10-15", slug: "ai-in-african-schools" },
      { title: "Tech Trends in South Africa", date: "2023-09-20", slug: "tech-trends-south-africa" },
    ];
    setPosts(placeholderPosts);
  }, []);


  return (
    <section
      id="blog"
      className="px-6 py-20 text-center bg-background text-foreground"
    >
      <motion.h2 
        className="mb-10 text-3xl font-bold tracking-wider"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        From the Blog
      </motion.h2>
      <div className="grid max-w-4xl gap-8 mx-auto md:grid-cols-2">
        {posts.map((post, idx) => (
          <motion.div 
            key={idx} 
            className="p-5 text-left border shadow rounded-xl bg-background/90 border-borderLine"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-secondaryAccent">{post.date}</p>
            <h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
            <a
              href={`/posts/${post.slug}`}
              className="text-sm transition-colors duration-200 text-accent hover:text-secondaryAccent"
            >
              Read Full →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
