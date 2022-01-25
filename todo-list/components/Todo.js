import { useDispatch } from "react-redux";
import { check_todo } from "../modules/todo";
import styled from "@emotion/styled";

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
  align-items: center;
  background: rgba(196, 174, 55, 0.3);
  padding: 0 20px;
  border-radius: 20px;
  transition: 0.2s;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background: rgba(196, 174, 55, 0.4);
  }
`;
