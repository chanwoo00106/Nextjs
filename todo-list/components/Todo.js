import styled from "@emotion/styled";

function leftTime(completeDate) {
  const current = new Date();
}

function Todo({ todo }) {
  return (
    <TodoWrapper>
      <h3>{todo.todo}</h3>
      <p>{new Date(todo.completeDate)}</p>
    </TodoWrapper>
  );
}

export default Todo;

const TodoWrapper = styled.div``;
