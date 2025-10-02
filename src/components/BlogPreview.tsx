import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import matter from "gray-matter";
import { Link } from "react-router-dom";

interface BlogPostMeta {
  title: string;
  date: string;
  slug: string;
}

const BlogPreview = () => {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' });

      const postListPromises = Object.entries(modules)
        .filter(([path]) => !path.endsWith('template.md'))
        .map(async ([path, resolver]) => {
        const rawContent = await resolver() as string;
        const { data } = matter(rawContent);
        const slug = path.split('/').pop()!.replace('.md', '');

        return {
          title: data.title || 'Untitled Post',
          date: data.date ? new Date(data.date).toISOString().split('T')[0] : 'No date',
          slug,
        };
      });

      const postList = await Promise.all(postListPromises);

      // Sort posts by date, most recent first, and take the top 3
      postList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setPosts(postList.slice(0, 3));
    };

    fetchPosts();
  }, []);

  return (
    <section
      id="blog-preview"
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
      <div className="grid max-w-4xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
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
      <div className="mt-12">
        <Link to="/blog" className="px-6 py-3 font-semibold transition-colors duration-300 rounded-lg bg-accent text-background hover:bg-secondaryAccent">
          View All Posts
        </Link>
      </div>
    </section>
  );
};

export default BlogPreview;