import BlogsPage from "../components/BlogsPage";
import HeaderPage from "../components/HeaderPage";
// import TopTopicsPage from "../components/TopTopicsPage";
import TrendingPage from "../components/TrendingPage";

const Home = () => {
  return (
    <>
      <HeaderPage />
      {/* <TopTopicsPage/> */}
      <TrendingPage />
      <BlogsPage />
    </>
  );
};

export default Home;
