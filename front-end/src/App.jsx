import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Registration from "../components/Registration";
import CreateBlog from "../components/CreateBlog";
import SingleBlog from "../components/SingleBlog";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration/>
          </Route>
          <Route path="/create">
            <CreateBlog/>
          </Route>
          <Route path="/blog">
            <SingleBlog/>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
