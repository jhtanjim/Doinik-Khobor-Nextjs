import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import { NewsItem } from "@/types/news";

const Home = async () => {
  const data = await fetch("http://localhost:3000/data/db.json");
  const news = await data.json();
  return (
    <div className="my-10">
      <Banner />
      <div className="my-12">
        <h1 className="text-2xl font-bold">Latest News</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {news.slice(0, 3).map((item: NewsItem) => (
            <NewsCard key={item._id} item={item} />
          ))}
          {/* Example NewsCard component */}
        </div>
      </div>
    </div>
  );
};

export default Home;
