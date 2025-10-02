import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

const Post = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [contentExcerpt, setContentExcerpt] = useState("");
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
      setMeta({
        title: typeof data.title === "string" ? data.title : "Untitled",
        date: typeof data.date === "string" ? data.date : "",
        excerpt: typeof data.excerpt === 'string' ? data.excerpt : undefined,
      });
    };

    loadPost();
  }, [slug]);

  return (
    <section className="max-w-3xl px-4 py-20 mx-auto prose dark:prose-invert text-foreground">
      {meta ? (
        <>
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
          <h1>{meta.title}</h1>
          <p className="mb-6 text-sm text-secondaryAccent">{meta.date}</p>
          <ReactMarkdown>{content}</ReactMarkdown>
        </>
      ) : (
        <p className="text-xl text-center">Loading...</p>
      )}
    </section>
  );
};

export default Post;
