import BlogsPage from "../components/BlogsPage";
import HeaderPage from "../components/HeaderPage";
// import TopTopicsPage from "../components/TopTopicsPage";
import TrendingPage from "../components/TrendingPage";

const Home = () => {
  return (
    <div className="min-h-[70vh]">
      <HeaderPage />
      {/* <TopTopicsPage/> */}
      <TrendingPage />
      <BlogsPage />
    </div>
  );
};

export default Home;
