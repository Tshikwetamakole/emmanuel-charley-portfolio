import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const response = await fetch(`/api/posts/${slug}`);
        if (response.status === 404) {
          setError("🚫 Post not found.");
          return;
        }
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: PostData = await response.json();
        setPost({
          ...data,
          date: new Date(data.date).toISOString().split('T')[0],
        });
      } catch (err: any) {
        console.error("Error fetching post:", err);
        setError("Failed to load the post. Please try again later.");
      }
    };

    if (slug) {
      loadPost();
    }
  }, [slug]);

  if (error) {
    return (
      <section className="flex items-center justify-center min-h-screen px-4 py-24 text-foreground">
        <p className="text-xl text-center">{error}</p>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="flex items-center justify-center min-h-screen px-4 py-24 text-foreground">
        <p className="text-xl text-center">Loading...</p>
      </section>
    );
  }

  const contentExcerpt = post.excerpt || post.content.slice(0, 160);

  return (
    <section className="max-w-3xl min-h-screen px-4 py-24 mx-auto text-foreground">
      <motion.article
        className="w-full prose dark:prose-invert"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Helmet>
          <title>{post.title} | Charley Raluswinga</title>
          <meta name="description" content={contentExcerpt} />
          <meta name="author" content="Emmanuel 'Charley' Raluswinga" />
          <meta name="robots" content="index, follow, max-image-preview:large" />
          <link rel="canonical" href={`https://charleyraluswinga.space/posts/${slug}`} />

          {/* Open Graph */}
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={contentExcerpt} />
          <meta property="og:image" content={`https://charleyraluswinga.space/og/${slug}.png`} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`https://charleyraluswinga.space/posts/${slug}`} />
          <meta property="og:site_name" content="Charley Raluswinga Portfolio" />
          <meta property="article:published_time" content={post.date} />
          <meta property="article:author" content="Emmanuel 'Charley' Raluswinga" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Tshikwetamakole" />
          <meta name="twitter:creator" content="@Tshikwetamakole" />
          <meta name="twitter:title" content={post.title} />
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

        <h1 className="text-4xl font-bold text-accent">{post.title}</h1>
        <p className="mb-8 text-sm text-secondaryAccent">{post.date}</p>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </motion.article>
    </section>
  );
};

export default Post;