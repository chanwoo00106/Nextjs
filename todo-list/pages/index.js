/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useSelector } from "react-redux";
import Todo from "../components/Todo";

export default function Home() {
  const { todos } = useSelector((state) => ({ todos: state.todo }));

  return (
    <div>
      <Head>
        <title>Todo list</title>
        <meta name="description" content="practice todo list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {todos?.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </main>
    </div>
  );
}
