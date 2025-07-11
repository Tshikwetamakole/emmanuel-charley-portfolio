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
      setMeta({
        title: typeof data.title === "string" ? data.title : "Untitled",
        date: typeof data.date === "string" ? data.date : "",
      });
    };

    loadPost();
  }, [slug]);

  return (
    <section className="max-w-3xl px-4 py-20 mx-auto prose dark:prose-invert text-foreground">
      {meta ? (
        <>
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
