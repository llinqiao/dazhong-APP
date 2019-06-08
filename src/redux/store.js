import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./modules";
import api from "./middleware/api";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//可以加上enhancer store 强化store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, api))
);

export default store;
