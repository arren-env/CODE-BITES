
import BlogsSection from "../Components/Sections/BlogsSection";
import HeaderSection from "../Components/Sections/HeaderSection";
import TrendingSection from "../Components/Sections/TrendingSection";
import Layout from "../Layouts";
import { ROUTE_HOME } from "../store/constants";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Layout>
            <h2>Not Found</h2>
            <Link to={ROUTE_HOME}>Go to Home</Link>
        </Layout>
    );
};

export default NotFound;
