"use client";

import { useRouter } from "next/navigation";

export default function ArticleCards({ slug, content, tags }) {
  const router = useRouter();

  return (
    <article className="button-shadow break-words rounded-lg border border-gray-200 bg-white p-6 shadow-md">
      <h2 className="righteous text-2xl font-bold">{slug}</h2>

      <p className="poppins my-4 line-clamp-5 text-justify text-gray-600">
        {content}
      </p>

      <div className="my-2 flex flex-wrap items-center gap-2">
        <p>Tags: </p>

        {tags.map((tag, index) => (
          <div
            key={index}
            className="tag-shadow rounded-full border-2 border-black bg-white px-4 py-1 text-center"
          >
            {tag}
          </div>
        ))}
      </div>

      <button
        type="button"
        className="button-shadow rounded-md mt-8 w-full border-2 text-center cursor-pointer border-black bg-white px-6 py-2"
        onClick={() => router.push("/blog/" + slug.replaceAll(" ", "-"))}
      >
        Read Article
      </button>
    </article>
  );
}
