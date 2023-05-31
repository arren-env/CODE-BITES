import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers";
import { coreMiddleware } from "./middlewares";

const enhancers = compose(applyMiddleware(...coreMiddleware));

const ConfigureStore = () => {
    const store = createStore(reducers,enhancers);
    return store;
}
export default ConfigureStore;