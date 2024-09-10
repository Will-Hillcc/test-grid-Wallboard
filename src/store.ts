import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers";

const composeEnhancers =
  (typeof window !== "undefined" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  allReducers,

  composeEnhancers(applyMiddleware()) 
);

export default store;