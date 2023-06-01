
import BlogsSection from "../Components/Sections/BlogsSection";
import HeaderSection from "../Components/Sections/HeaderSection";
import TrendingSection from "../Components/Sections/TrendingSection";
import Layout from "../Layouts";

const HomePage = () => {
  return (
    <Layout>
      <HeaderSection />
      {/* <TrendingSection /> */}
      <BlogsSection />
    </Layout>
  );
};

export default HomePage;
