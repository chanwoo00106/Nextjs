import { ListStyle } from "../styles/HomeStyle";
import { useState } from "react";
import { toggle as toggled } from "../api/todo";

export default function Todo({ todo }) {
  const [toggle, setToggle] = useState(todo.toggle);
  const start_date = new Date(todo.start_date);
  const end_date = new Date(todo.end_date);

  const onClick = async () => {
    setToggle(!toggle);
    toggled(todo.id);
  };

  return (
    <li className="list" onClick={onClick}>
      <h3
        style={{
          textDecoration: toggle ? "solid line-through black 3px" : "",
        }}
      >
        {todo.todo}
      </h3>
      <p>
        {start_date.getMonth() + 1}/{start_date.getDate()} ~{" "}
        {end_date.getMonth() + 1}/{end_date.getDate()}
      </p>
      <style jsx>{ListStyle}</style>
    </li>
  );
}
