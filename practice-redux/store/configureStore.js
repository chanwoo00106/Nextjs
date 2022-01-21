import { createWrapper } from "next-redux-wrapper";
import { compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counter from "../modules/counter";

const configureSotre = () => {
  const enhancer = compose(composeWithDevTools());
  const store = createStore(counter, enhancer);
  return store;
};

const wrapper = createWrapper(configureSotre, {
  debug: process.env.NODE_ENV === "development,",
});

export default wrapper;
