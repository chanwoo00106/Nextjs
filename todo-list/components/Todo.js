import { useDispatch } from "react-redux";
import { check_todo, delete_todo, update_todo } from "../modules/todo";
import styled from "@emotion/styled";
import { leftTime } from "../lib/leftTime";
import { useState } from "react";

function formatDate(date) {
  if (date.getMonth() >= 10)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  return `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;
}

function Todo({ todo }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState({
    todo: todo.todo,
    completeDate: todo.completeDate,
  });
  const onContextMenu = (e) => {
    e.preventDefault();
    if (confirm("정말 삭제하시겠습니까?")) {
      dispatch(delete_todo(todo.id));
    }
  };
  const onChange = (e) => {
    setEditValue({
      ...editValue,
      [e.target.name]: e.target.value,
    });
  };
  const onSumbint = (e) => {
    e.preventDefault();
    dispatch(update_todo(todo.id, editValue));
    setEdit(false);
  };

  if (edit) {
    return (
      <EditTodoWrapper onSubmit={onSumbint}>
        <input
          type="text"
          name="todo"
          value={editValue.todo}
          onChange={onChange}
        />
        <div>
          <input
            type="date"
            name="completeDate"
            value={formatDate(
              new Date(editValue.completeDate || todo.createAt)
            )}
            onChange={onChange}
          />
        </div>
      </EditTodoWrapper>
    );
  }
  return (
    <TodoWrapper
      onClick={() => dispatch(check_todo(todo.id))}
      onDoubleClick={() => setEdit(true)}
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
  margin-bottom: 10px;
  transition: 0.2s;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: rgba(196, 174, 55, 0.4);
  }
`;

const EditTodoWrapper = styled.form`
  background: rgba(196, 174, 55, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 20px;
  margin-bottom: 10px;

  input {
    border: none;
    outline: none;
    font-size: 1rem;
    background: #fefefe;
    border-radius: 20px;
    padding: 5px 10px;
  }
`;
