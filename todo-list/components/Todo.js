import { ListStyle } from "../styles/HomeStyle";
import { useState } from "react";
import { remove, toggle as toggled } from "../api/todo";
import {
  IoCheckmarkCircle,
  IoTrash,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

export default function Todo({ todo }) {
  const [toggle, setToggle] = useState(todo.toggle);
  const start_date = new Date(todo.start_date);
  const end_date = new Date(todo.end_date);

  const onClick = async () => {
    toggled({ id: todo.id, toggle: !toggle });
    setToggle(!toggle);
  };

  const onRemove = async () => await remove(todo.id);

  return (
    <li className="list">
      <h3
        style={{
          textDecoration: toggle ? "solid line-through black 3px" : "",
        }}
      >
        {todo.todo}
      </h3>
      <p id="date">
        {start_date.getMonth() + 1}/{start_date.getDate()} ~{" "}
        {end_date.getMonth() + 1}/{end_date.getDate()}
      </p>
      <div className="icons">
        {toggle ? (
          <IoCheckmarkCircle size="24" onClick={onClick} />
        ) : (
          <IoCheckmarkCircleOutline size="24" onClick={onClick} />
        )}
        <IoTrash size="24" onClick={onRemove} />
      </div>
      <style jsx>{ListStyle}</style>
    </li>
  );
}
