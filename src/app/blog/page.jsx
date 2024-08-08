"use client";

import { useState, useEffect } from "react";

import ArticleController from "../controller/ArticleController";

import ArticleCards from "../components/article-cards";

import Loader from "./loader";

export default function Blog() {
  const articleController = new ArticleController();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      articleController.getAllArticles().then((data) => {
        setArticles(data);
        setLoading(false);
      });
    }, 300);
  }, []);

  return (
    <main className="bg-[#ffd249] min-h-screen">
      <div className="mx-auto grid select-none grid-cols-4 items-start gap-5 p-10">
        {loading ? (
          <Loader />
        ) : (
          articles.map((article) => (
            <ArticleCards key={article.id} {...article} />
          ))
        )}
      </div>
    </main>
  );
}
