
import { Route, Routes as Switch } from "react-router-dom";
import { CreateBlogPage, HomePage, LoginPage, RegistrationPage } from "./Pages";
import NotFound from "./Pages/NotFound";
import { ROUTE_CREATE, ROUTE_HOME, ROUTE_LOGIN, ROUTE_NOT_FOUND, ROUTE_REGISTER } from "./store/constants";

function Routes() {
    return (
        <Switch>
            <Route element={<HomePage />} path={ROUTE_HOME} />
            <Route element={<LoginPage />} path={ROUTE_LOGIN} />
            <Route element={<RegistrationPage />} path={ROUTE_REGISTER} />
            <Route element={<CreateBlogPage />} path={ROUTE_CREATE} />
            {/* <Route element={<SingleBlog />} path={ROUTE_BLOG} /> */}
            <Route element={<NotFound />} path={ROUTE_NOT_FOUND} />
        </Switch>
    );
}

export default Routes;