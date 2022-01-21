import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore } from "redux";

import todo from "./todo";

const reducer = combineReducers({ todo });

const configureSotre = () => {
  const enhancer = composeWithDevTools();
  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureSotre, {
  debug: true,
});

export default wrapper;
