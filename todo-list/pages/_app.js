import wrapper from "../modules";
import "../styles/globals.css";
import { useDispatch } from "react-redux";
import { init_todo } from "../modules/todo";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  dispatch(init_todo());
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
