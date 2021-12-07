import Head from "next/head";
import { MainStyle } from "../styles/HomeStyle";
import { getAllTodo } from "../api/todo";
import Todo from "../components/Todo";
import Add from "../components/Add";

export const getStaticProps = async () => {
  const data = await getAllTodo();
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

        <Add />

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
