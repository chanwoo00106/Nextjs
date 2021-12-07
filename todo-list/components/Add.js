import { useState } from "react";
import { AddStyle } from "../styles/HomeStyle";
import { add } from "../api/todo";

export default function Add() {
  const [text, setText] = useState({ text: "", date: "" });

  const onChage = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    add({ todo: text.text, end_date: text.date });
  };

  return (
    <form className="wrap" onSubmit={onSubmit}>
      <input type="text" name="text" onChange={onChage} value={text.text} />
      <input type="date" name="date" onChange={onChage} value={text.date} />
      <button>Add</button>
      <style jsx>{AddStyle}</style>
    </form>
  );
}
