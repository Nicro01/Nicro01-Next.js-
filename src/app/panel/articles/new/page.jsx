"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import ArticleController from "@/app/controller/ArticleController";
import { importSPKI } from "jose";

export default function Page() {
  const [tags, setTags] = useState([]);

  const router = useRouter();

  const formData = useState({
    title: "",
    subtitle: "",
    content: "",
    tags: [],
  });

  const allTags = ["tag1", "tag2", "tag3", "tag4", "tag5"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    data.tags = tags;

    const article = new ArticleController();

    console.log(data);

    article.createArticle({ ...data });

    router.push("/panel/articles");
  };

  const handleTagClick = (tag) => {
    const index = tags.indexOf(tag);

    if (index > -1) {
      setTags(tags.filter((_, i) => i !== index));
    } else {
      setTags([...tags, tag]);
    }
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center mt-10">
      <h2 className="text-3xl font-bold">New Article</h2>
      <div className="w-full max-w-4xl mx-auto ">
        <form onSubmit={handleSubmit} className="w-ful flex flex-col gap-5">
          <input
            type="text"
            className="w-full rounded-lg border-neutral-800 bg-neutral-100 border-2 px-4 py-2"
            name="slug"
            placeholder="Title"
          />
          <input
            className="w-full rounded-lg border-neutral-800 bg-neutral-100 border-2 px-4 py-2"
            type="text"
            name="subtitle"
            placeholder="Subtitle"
          />
          <textarea
            className="w-full rounded-lg border-neutral-800 bg-neutral-100 border-2 px-4 py-2"
            name="content"
            placeholder="Content"
          ></textarea>

          {tags.length > 0 ? (
            <div className="flex flex-col gap-2">
              <span className="font-bold text-lg">Current Tags</span>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="button-shadow rounded-full px-4 py-1 cursor-pointer"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="flex flex-col gap-2">
            <span className="font-bold text-lg">All Tags</span>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <div
                  key={tag}
                  className="button-shadow rounded-full px-4 py-1 cursor-pointer"
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <button
            className="w-full rounded-lg text-white border-neutral-800 bg-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 border-2 px-4 py-2 transition-all duration-100 ease-linear"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
