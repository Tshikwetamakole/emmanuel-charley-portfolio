import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { calculateReadingTime, formatReadingTime } from "../utils/readingTime";

const Post = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [contentExcerpt, setContentExcerpt] = useState("");
  const [readingTime, setReadingTime] = useState("");
  const [meta, setMeta] = useState<{ title: string; date: string; excerpt?: string } | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      const posts = import.meta.glob('../posts/*.md', {
        query: '?raw',
        import: 'default',
      });

      const path = `../posts/${slug}.md`;

      if (!(path in posts)) {
        setContent("🚫 Post not found.");
        return;
      }

      const raw = await posts[path]();
      const { content, data } = matter(raw as string);

      setContent(content);
      setContentExcerpt((data.excerpt && typeof data.excerpt === 'string') ? data.excerpt : content.slice(0, 160));
      const readingMinutes = calculateReadingTime(content);
      setReadingTime(formatReadingTime(readingMinutes));
      setMeta({
        title: typeof data.title === "string" ? data.title : "Untitled",
        date: typeof data.date === "string" ? new Date(data.date).toISOString().split('T')[0] : "",
        excerpt: typeof data.excerpt === 'string' ? data.excerpt : undefined,
      });
    };

    loadPost();
  }, [slug]);

  return (
    <section className="max-w-3xl min-h-screen px-4 py-24 mx-auto text-foreground">
      {meta ? (
        <motion.article
          className="w-full prose dark:prose-invert"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Helmet>
            <title>{meta.title} | Charley Raluswinga</title>
            <meta name="description" content={contentExcerpt} />
            <meta name="author" content="Emmanuel 'Charley' Raluswinga" />
            <meta name="robots" content="index, follow, max-image-preview:large" />
            <link rel="canonical" href={`https://charleyraluswinga.space/posts/${slug}`} />
            
            {/* Open Graph */}
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={contentExcerpt} />
            <meta property="og:image" content={`https://charleyraluswinga.space/og/${slug}.png`} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={`https://charleyraluswinga.space/posts/${slug}`} />
            <meta property="og:site_name" content="Charley Raluswinga Portfolio" />
            <meta property="article:published_time" content={meta.date} />
            <meta property="article:author" content="Emmanuel 'Charley' Raluswinga" />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@Tshikwetamakole" />
            <meta name="twitter:creator" content="@Tshikwetamakole" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={contentExcerpt} />
            <meta name="twitter:image" content={`https://charleyraluswinga.space/og/${slug}.png`} />
          </Helmet>

          <div className="mb-8">
            <Link
              to="/blog"
              className="flex items-center gap-2 transition-colors duration-300 text-accent hover:text-secondaryAccent"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-accent">{meta.title}</h1>
          <div className="flex items-center gap-4 mb-8">
            <p className="text-sm text-secondaryAccent">{meta.date}</p>
            <div className="flex items-center gap-1 text-sm text-foreground/60">
              <Clock size={14} />
              <span>{readingTime}</span>
            </div>
          </div>
          <ReactMarkdown>{content}</ReactMarkdown>
        </motion.article>
      ) : (
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-xl text-center">{content || "Loading..."}</p>
        </div>
      )}
    </section>
  );
};

export default Post;
