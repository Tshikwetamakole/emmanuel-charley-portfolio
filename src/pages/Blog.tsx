import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import matter from "gray-matter";

// No need to extend ImportMeta; Vite provides import.meta.glob globally.

interface BlogPostMeta {
  title: string;
  date: string;
  slug: string;
  externalUrl?: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' });

      const postListPromises = Object.entries(modules).map(async ([path, resolver]) => {
        const rawContent = await resolver() as string;
        const { data } = matter(rawContent);
        const slug = path.split('/').pop()!.replace('.md', '');

        return {
          title: data.title || 'Untitled Post',
          date: data.date ? new Date(data.date).toISOString().split('T')[0] : 'No date',
          slug,
          externalUrl: data.externalUrl || undefined,
        };
      });

      const postList = await Promise.all(postListPromises);

      // Sort posts by date, most recent first
      postList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

      setPosts(postList);
    };

    fetchPosts();
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
              href={post.externalUrl || `/posts/${post.slug}`}
              target={post.externalUrl ? "_blank" : undefined}
              rel={post.externalUrl ? "noopener noreferrer" : undefined}
              className="text-sm transition-colors duration-200 text-accent hover:text-secondaryAccent inline-flex items-center gap-1"
            >
              Read Full →
              {post.externalUrl && (
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
