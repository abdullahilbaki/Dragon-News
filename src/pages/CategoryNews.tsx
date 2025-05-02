import { useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  return <div>CategoryNews - {id}</div>;
};

export default CategoryNews;
