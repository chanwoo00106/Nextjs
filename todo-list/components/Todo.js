import { ListStyle } from "../styles/HomeStyle";
import { useState } from "react";
import { remove, toggle as toggled } from "../api/todo";

export default function Todo({ todo }) {
  const [toggle, setToggle] = useState(todo.toggle);
  const start_date = new Date(todo.start_date);
  const end_date = new Date(todo.end_date);

  const onClick = async () => {
    toggled({ id: todo.id, toggle: !toggle });
    setToggle(!toggle);
  };

  const onContextMenu = async (e) => {
    e.preventDefault();
    if (confirm("삭제하시겠습니까?")) {
      await remove({ id: todo.id });
    }
  };

  return (
    <li className="list" onClick={onClick} onContextMenu={onContextMenu}>
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
