import { IoEye } from "react-icons/io5";
import { NewsArticle } from "../types/news";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useState } from "react";
import { SlShare } from "react-icons/sl";

const NewsCard = ({ news }: { news: NewsArticle }) => {
  const formattedDate = new Date(
    news.author.published_date
  ).toLocaleDateString();

  const [isBookmarked, setBookmarked] = useState(false);

  return (
    <div className="border-2 border-gray-100 rounded">
      {/* author section */}
      <div className="flex items-center justify-between bg-gray-100 p-3">
        <div className="flex items-center gap-2">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 rounded-full"
          />
          <div>
            <p className="font-medium">{news.author.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div
            className="cursor-pointer transition-transform duration-300 transform hover:scale-120 active:scale-110 text-lg"
            onClick={() => setBookmarked(!isBookmarked)}
          >
            {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
          </div>

          <SlShare className="cursor-pointer transition-transform duration-300 transform hover:scale-120 active:scale-110 text-lg" />
        </div>
      </div>

      {/* main section */}
      <div className="space-y-4 p-3">
        <h3 className="font-bold text-gray-700 text-lg cursor-pointer hover:underline">
          {news.title}
        </h3>
        <img
          src={news.image_url}
          alt={news.title}
          className="w-full object-cover rounded"
        />

        <p className="border-b-2 border-gray-100 pb-3">
          {news.details.length > 200
            ? news.details.slice(0, 200)
            : news.details}
          ...
          <p className="text-orange-500 font-medium cursor-pointer hover:underline">
            Read More
          </p>
        </p>

        <div className="flex items-center justify-between">
          {/* rating  */}
          <div className="flex items-center gap-2">
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <input
                  key={star}
                  type="radio"
                  name={`rating-${news.title}`}
                  className="mask mask-star-2 bg-orange-400"
                  aria-label={`${star} star`}
                  defaultChecked={Math.round(news.rating.number) === star}
                />
              ))}
            </div>
            <p className="text-gray-500 font-medium text-xl">
              {news.rating.number}
            </p>
          </div>

          {/* views */}
          <div className="flex items-center gap-2 text-gray-500 font-medium text-lg">
            <IoEye /> <p>{news.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
