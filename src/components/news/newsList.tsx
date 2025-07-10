"use client";
import { fetchNews } from "@/lib/fetchNews";
import { NewsItem } from "@/types/news";
import { useEffect, useState } from "react";
import NewsCard from "../shared/NewsCard";
import Category from "./category";
import SearchBar from "./searchBar";

const NewsList = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(category, search);
      setNews(data);
    };

    getNews();
  }, [category, search]);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <SearchBar onSearch={setSearch} />
        <Category onCategoryChange={setCategory} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {news.map((item) => (
          <NewsCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
