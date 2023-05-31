import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers";
import { coreMiddleware } from "./middlewares";

// const enhancers = compose();

const ConfigureStore = () => {
    const store = createStore(reducers, applyMiddleware(...coreMiddleware));
    return store;
}
export default ConfigureStore;