import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

const Post = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState<{ title: string; date: string } | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      const posts = import.meta.glob('../posts/*.md');
      const path = `../posts/${slug}.md`;

      if (!(path in posts)) {
        setContent("🚫 Post not found.");
        return;
      }

      const file = await posts[path]();
      const fileModule = file as { default: string };
      const raw = await fetch(fileModule.default).then(res => res.text());
      const { content, data } = matter(raw);

      setContent(content);
      setMeta({
        title: typeof data.title === "string" ? data.title : "Untitled",
        date: typeof data.date === "string" ? data.date : "",
      });
    };

    loadPost();
  }, [slug]);

  return (
    <section className="min-h-screen px-4 py-20 sm:px-6 lg:px-8 text-foreground">
      <article className="max-w-3xl mx-auto leading-relaxed prose prose-base md:prose-lg dark:prose-invert">
        {meta ? (
          <>
            <h1 className="mb-2">{meta.title}</h1>
            <p className="mb-6 text-sm text-secondaryAccent">{meta.date}</p>
            <ReactMarkdown>{content}</ReactMarkdown>
          </>
        ) : (
          <p className="text-lg text-center">Loading...</p>
        )}
      </article>
    </section>
  );
};

export default Post;
