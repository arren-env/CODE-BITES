
import { useSelector } from "react-redux";
import { Navigate, useRoutes } from "react-router-dom";
import { CreateBlogPage, HomePage, LoginPage, RegistrationPage } from "./Pages";
import NotFound from "./Pages/NotFound";
import { ROUTE_CREATE, ROUTE_HOME, ROUTE_LOGIN, ROUTE_NOT_FOUND, ROUTE_REGISTER } from "./store/constants";


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