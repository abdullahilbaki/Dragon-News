import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";
import { NewsArticle } from "../types/news";

const CategoryNews = () => {
  const { id } = useParams();
  const news = useLoaderData() as NewsArticle[];
  const [categoryNews, setCategoryNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const categoryId = Number(id);

    if (categoryId === 0) {
      setCategoryNews(news);
      console.log(news);
      return;
    } else if (categoryId === 1) {
      const filteredNews = news.filter(
        (data: NewsArticle) => data.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
      console.log(filteredNews);
      return;
    }

    const filteredNews = news.filter(
      (data: NewsArticle) => data.category_id === categoryId
    );
    setCategoryNews(filteredNews);
    console.log(filteredNews);
  }, [news, id]);

  return (
    <div>
      <div className="font-semibold">
        Total <span className="text-pink-700">{categoryNews.length}</span> news
        found
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {categoryNews.map((news: NewsArticle) => (
          <div key={news.id}>
            <NewsCard news={news} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
