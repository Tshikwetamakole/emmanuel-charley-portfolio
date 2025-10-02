import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import matter from "gray-matter";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Clock } from "lucide-react";
import { calculateReadingTime, formatReadingTime } from "../utils/readingTime";

interface BlogPostMeta {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  readingTime: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' });

      const postListPromises = Object.entries(modules)
        .filter(([path]) => !path.endsWith('template.md'))
        .map(async ([path, resolver]) => {
          const rawContent = await resolver() as string;
          const { data, content } = matter(rawContent);
          const slug = path.split('/').pop()!.replace('.md', '');
          const readingMinutes = calculateReadingTime(content);

          return {
            title: data.title || 'Untitled Post',
            date: data.date ? new Date(data.date).toISOString().split('T')[0] : 'No date',
            slug,
            excerpt: data.excerpt || 'No excerpt available.',
            readingTime: formatReadingTime(readingMinutes),
          };
        });

      const postList = await Promise.all(postListPromises);

      postList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setPosts(postList);
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
                  <div className="flex items-center gap-4 mb-2">
                    <p className="text-sm text-secondaryAccent">{post.date}</p>
                    <div className="flex items-center gap-1 text-sm text-foreground/60">
                      <Clock size={14} />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
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
