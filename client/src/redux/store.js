import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk"; // only in 2.4.2 version
import reducer from "./reducer";
import { createStoreHook } from "react-redux";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;
