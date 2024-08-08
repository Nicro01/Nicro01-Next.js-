"use client";

import { useState, useEffect } from "react";

import ArticleController from "@/app/controller/ArticleController";

export default function BlogPage({ params }) {
  const articleController = new ArticleController();

  const slug = params.slug.replaceAll("-", " ");

  const [article, setArticle] = useState({});

  useEffect(() => {
    articleController.getArticle(slug).then((data) => {
      setArticle(data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-start py-16 select-none min-h-screen">
      <h1 className="max-w-4xl mx-auto text-5xl font-bold righteous">
        {article.slug}
      </h1>
      <h2 className="max-w-4xl mx-auto text-lg poppins text-center mt-4">
        {article.subtitle}
      </h2>

      <p className="max-w-6xl mx-auto text-md poppins text-justify mt-12 select-text">
        {article.content}
      </p>
    </div>
  );
}
