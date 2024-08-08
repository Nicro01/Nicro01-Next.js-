"use client";

import { useState, useEffect } from "react";

import ArticleController from "@/app/controller/ArticleController";

import { waveform } from "ldrs";

waveform.register();

export default function Page() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      new ArticleController().getAllArticles().then((data) => {
        setArticles(data);
        setLoading(false);
      });
    }, 100);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-bold">Tags</h2>
      <div className="relative overflow-x-auto w-full mt-10">
        {loading ? (
          <div className="w-full h-[40vh] flex justify-center items-center">
            <l-waveform
              size="35"
              stroke="3.5"
              speed="1"
              color="black"
            ></l-waveform>
          </div>
        ) : (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Slug
                </th>
                <th scope="col" className="px-6 py-3">
                  Subtitle
                </th>
                <th scope="col" className="px-6 py-3">
                  Tags
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {articles.map((article) => (
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {article.id}
                  </th>
                  <td className="px-6 py-4">{article.slug}</td>
                  <td className="px-6 py-4">{article.subtitle}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2 items-center">
                      {article.tags.map((tag) => (
                        <div
                          key={tag}
                          className="button-shadow rounded-full px-4 py-1 cursor-pointer"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td classNameName="">
                    <div className="flex gap-2 items-center">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Edit
                      </button>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
