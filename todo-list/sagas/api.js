import axios from "axios";

export async function getAllTodos() {
  const { data } = await axios.get("/api/todos");
  return data.todos;
}

export async function getCheckedTodo({ id, checked }) {
  await axios.patch(`/api/todos/${id}`, { checked });
}

export async function postCreateTodo(todoData) {
  const { data } = await axios.post("/api/todos", todoData);
  return data;
}

export async function deleteRemoveTodo(id) {
  const { data } = await axios.delete(`/api/todos/${id}`);
  return data;
}

export async function putUpdateTodo({ id, todoData }) {
  const { data } = await axios.put(`/api/todos/${id}`, todoData);
  return data;
}
