import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { check_todo } from "../modules/todo";

function leftTime(completeDate) {
  const current = new Date();
}

function viewDate(date) {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

function Todo({ todo }) {
  const dispatch = useDispatch();

  return (
    <TodoWrapper
      onClick={() => dispatch(check_todo(todo.id))}
      style={{ textDecoration: todo.checked && "line-through" }}
    >
      <h3>{todo.todo}</h3>
      <div>
        <p>{viewDate(new Date(todo.createAt))}</p>
      </div>
    </TodoWrapper>
  );
}

export default Todo;

const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
