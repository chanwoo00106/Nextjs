import Head from "next/head";
import { MainStyle } from "../styles/HomeStyle";
import { getAllTodo } from "../api/todo";
import Todo from "../components/Todo";
import Add from "../components/Add";
import { useRecoilState, useRecoilValue } from "recoil";
import todoState from "../states/todo";

export const getStaticProps = async () => {
  const res = await getAllTodo();
  return {
    props: {
      res,
    },
  };
};

export default function Home({ res }) {
  const [_, setTodos] = useRecoilState(todoState);
  const todos = useRecoilValue(todoState);
  setTodos(res);
  console.log(todos);

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
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
      <style jsx>{MainStyle}</style>
    </div>
  );
}
