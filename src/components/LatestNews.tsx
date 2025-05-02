import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-2 bg-gray-200 p-2 font-semibold">
      <p className="bg-pink-700 text-white px-3 py-1">Latest</p>
      <Marquee autoFill pauseOnHover>
        <div className="px-4">
          <p>Match Highlights: Germany vs Spain — as it happened!</p>
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
