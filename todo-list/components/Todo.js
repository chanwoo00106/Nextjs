import { useDispatch } from "react-redux";
import { check_todo, delete_todo } from "../modules/todo";
import styled from "@emotion/styled";
import { leftTime } from "../lib/leftTime";

function Todo({ todo }) {
  const dispatch = useDispatch();
  const onContextMenu = (e) => {
    e.preventDefault();
    if (confirm("정말 삭제하시겠습니까?")) {
      dispatch(delete_todo(todo.id));
    }
  };

  return (
    <TodoWrapper
      onClick={() => dispatch(check_todo(todo.id))}
      onContextMenu={onContextMenu}
      style={{
        textDecoration: todo.checked && "solid line-through 4px",
      }}
    >
      <h3>{todo.todo}</h3>
      <div>
        <p>{leftTime(new Date(todo.completeDate || todo.createAt))}</p>
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
