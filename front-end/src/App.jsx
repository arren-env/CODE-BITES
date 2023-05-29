import { BrowserRouter, Switch, Route } from "react-router-dom";
import Routes from "./Routes";
import './index.css';
import { AuthContextProvider } from "./store/contexts";

const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
};

export default App;
