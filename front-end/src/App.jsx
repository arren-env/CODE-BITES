import { BrowserRouter, Switch, Route } from "react-router-dom";
import Routes from "./Routes";
import './index.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
