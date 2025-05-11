import { NewsArticle } from "../types/news";

interface Props {
  newsDetails: NewsArticle;
}

const NewsDetailsCard = ({ newsDetails }: Props) => {
  return <div className="mt-8">{newsDetails.title}</div>;
};

export default NewsDetailsCard;
