import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const file = await import(`../../posts/${slug}.md?raw`);
        const { content, data } = matter(file.default);
        setContent(content);
        setTitle(data.title);
        setDate(data.date);
      } catch (error) {
        setContent("Post not found.");
      }
    };

    fetchPost();
  }, [slug]);

  return (
    <section className="max-w-3xl px-6 py-20 mx-auto text-foreground">
      <h1 className="mb-2 text-3xl font-bold">{title}</h1>
      <p className="mb-6 text-sm text-highlight">{date}</p>
     <div className="prose prose-lg prose-slate">
  <ReactMarkdown>{content}</ReactMarkdown>
</div>

    </section>
  );
};

export default Post;
