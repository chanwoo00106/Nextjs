/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useSelector } from "react-redux";
import Todo from "../components/Todo";
import styled from "@emotion/styled";
import Input from "../components/Input";

export default function Home() {
  const { todos } = useSelector((state) => ({ todos: state.todo }));

  return (
    <MainWrapper>
      <Head>
        <title>Todo list</title>
        <meta name="description" content="practice todo list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TodoMain>
        <Title>chan woo의 Todo list</Title>
        <Input />
        {todos?.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </TodoMain>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e2e2e2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoMain = styled.main`
  background-color: #fff;
  width: 600px;
  height: 700px;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`;
