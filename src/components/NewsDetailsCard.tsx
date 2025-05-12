import { FaArrowLeftLong } from "react-icons/fa6";
import { NewsArticle } from "../types/news";
import { Link } from "react-router";

interface Props {
  newsDetails: NewsArticle;
}

const NewsDetailsCard = ({ newsDetails }: Props) => {
  return (
    <div className="mt-4 border border-gray-300 rounded p-6">
      <img
        src={newsDetails.image_url}
        alt={newsDetails.title}
        className="w-full rounded"
      />
      <h3 className="mt-4 font-bold text-gray-700 text-lg">
        {newsDetails.title}
      </h3>
      <p className="mt-4 text-gray-500">{newsDetails.details}</p>
      <Link to={`/category/${newsDetails.category_id}`}>
        <button className="btn mt-4 bg-pink-700 text-white">
          <FaArrowLeftLong />
          All news in this category
        </button>
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
