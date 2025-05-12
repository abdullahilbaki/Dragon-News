import { Link, useLoaderData, useNavigation, useParams } from "react-router";
import Header from "../components/Header";
import RightAside from "../components/RightAside";
import { NewsArticle } from "../types/news";
import NewsDetailsCard from "../components/NewsDetailsCard";
import ScrollToTop from "../components/ScrollToTop";

const NewsDetails = () => {
  const navigation = useNavigation();
  const { id } = useParams();
  const news = useLoaderData() as NewsArticle[];
  const newsDetails = news.find((data) => data.id === id?.toString());

  return (
    <div className="container mx-auto p-4">
      <ScrollToTop />
      <header>
        <Header />
      </header>

      <main className="grid lg:grid-cols-12 gap-4">
        <section className="main col-span-9">
          <h3 className="font-semibold">
            <Link to={"/"} className="hover:underline">
              Dragon News
            </Link>
          </h3>
          {navigation.state === "loading" ? (
            <span className="loading loading-bars loading-xl mx-auto block mt-8"></span>
          ) : newsDetails ? (
            <NewsDetailsCard newsDetails={newsDetails} />
          ) : (
            <p className="text-red-500 mt-8">News article not found.</p>
          )}
        </section>
        <aside className="right-nav col-span-3 lg:sticky lg:top-0 lg:h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
