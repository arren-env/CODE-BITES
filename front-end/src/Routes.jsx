
import { useSelector } from "react-redux";
import { Navigate, useRoutes } from "react-router-dom";
import { CreateBlogPage, HomePage, LoginPage, RegistrationPage } from "./Pages";
import NotFound from "./Pages/NotFound";
import { ROUTE_BLOGS, ROUTE_BLOG_WITH_ID, ROUTE_CREATE, ROUTE_HOME, ROUTE_LOGIN, ROUTE_NOT_FOUND, ROUTE_REGISTER } from "./store/constants";
import SingleBlogPage from "./Pages/SingleBlogPage";
import BlogsPage from "./Pages/BlogsPage";


function Routes() {
    const user = useSelector(state => state.auth.user);
    return useRoutes([
        {
            path: ROUTE_HOME,
            element: <HomePage />,
        },
        {
            path: ROUTE_LOGIN,
            element: <LoginPage />,
        },
        {
            path: ROUTE_REGISTER,
            element: <RegistrationPage />,
        },
        {
            path: ROUTE_BLOGS,
            element: <BlogsPage />
        },
        {
            path: ROUTE_BLOG_WITH_ID,
            element: <SingleBlogPage />
        },
        {
            path: ROUTE_CREATE,
            element: user ? <CreateBlogPage /> : <Navigate to={ROUTE_LOGIN} replace />,
        },
        {
            path: ROUTE_NOT_FOUND,
            element: <NotFound />,
        },
    ]);
}

export default Routes;