import Head from "next/head";
import { MainStyle } from "../styles/HomeStyle";
import axios from "axios";
import Todo from "../components/Todo";

export const getStaticProps = async () => {
  const { data } = await axios.get("http://localhost:4000");
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  return (
    <div className="wrap">
      <div className="main">
        <Head>
          <title>todo list</title>
          <meta name="description" content="todo list" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="title">Todo List</h1>

        <ul className="todoList">
          {data.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
      <style jsx>{MainStyle}</style>
    </div>
  );
}
