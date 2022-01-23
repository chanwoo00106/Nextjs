import axios from "axios";

export async function getAllTodos() {
  const { data } = await axios.get("/api/todos");
  return data.todos;
}

export async function getCheckedTodo({ id, checked }) {
  await axios.patch(`/api/todos/${id}`, { checked });
}
