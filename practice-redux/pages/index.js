import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import {
  decrease,
  decreaseDelay,
  increase,
  increaseDelay,
} from "../modules/counter";

export default function Home() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => ({ counter: state.counter }));
  return (
    <div>
      <Head>
        <title>Next Redux practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increase())}>+1</button>
      <button onClick={() => dispatch(decrease())}>-1</button>
      <button onClick={() => dispatch(increaseDelay())}>+1, 1s</button>
      <button onClick={() => dispatch(decreaseDelay())}>-1, 1s</button>
    </div>
  );
}
