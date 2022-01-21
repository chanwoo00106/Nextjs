import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import { reducer } from "../modules/index";

const configureSotre = () => {
  const store = createStore(reducer);
  return store;
};

const wrapper = createWrapper(configureSotre, {
  debug: process.env.NODE_ENV === "development,",
});

export default wrapper;
