import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import './index.css';
import { Provider } from "react-redux";
import ConfigureStore from "./store";

const App = () => {
  
  const store = ConfigureStore();

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
