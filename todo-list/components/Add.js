import { useState } from "react";
import { AddStyle } from "../styles/HomeStyle";
import { add } from "../api/todo";
import { useRecoilState } from "recoil";
import todoState from "../states/todo";

export default function Add() {
  const [todos, setTodos] = useRecoilState(todoState);
  const [text, setText] = useState({ text: "", date: "" });

  const onChage = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await add({ todo: text.text, end_date: text.date });

    setTodos([
      ...todos,
      {
        id: 1000,
        todo: text.text,
        end_date: text.date,
      },
    ]);

    setText({ ...text, text: "" });
  };

  return (
    <form className="wrap" onSubmit={onSubmit}>
      <input
        placeholder="todo 입력"
        type="text"
        name="text"
        onChange={onChage}
        value={text.text}
      />
      <input type="date" name="date" onChange={onChage} value={text.date} />
      <button>Add</button>
      <style jsx>{AddStyle}</style>
    </form>
  );
}
