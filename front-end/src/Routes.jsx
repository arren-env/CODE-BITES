
import { Route, Switch } from "react-router-dom";
import { CreateBlogPage, HomePage, LoginPage, RegistrationPage } from "./Pages";
import NotFound from "./Pages/NotFound";
import { ROUTE_CREATE, ROUTE_HOME, ROUTE_LOGIN, ROUTE_NOT_FOUND, ROUTE_REGISTER } from "./store/constants";

function Routes() {
    return (
        <Switch>
            <Route exact path={ROUTE_HOME}>
                <HomePage />
            </Route>
            <Route path={ROUTE_LOGIN}>
                <LoginPage />
            </Route>
            <Route path={ROUTE_REGISTER}>
                <RegistrationPage />
            </Route>
            <Route path={ROUTE_CREATE}>
                <CreateBlogPage />
            </Route>
            {/* <Route path={ROUTE_BLOG}>
                <SingleBlog />
            </Route> */}
            <Route path={ROUTE_NOT_FOUND}>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default Routes;