import { ListStyle } from "../styles/HomeStyle";

export default function Todo({ todo }) {
  const start_date = new Date(todo.start_date);
  const end_date = new Date(todo.end_date);

  return (
    <li className="list">
      <h3
        style={{
          textDecoration: todo.toggle ? "solid line-through black 3px" : "",
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
