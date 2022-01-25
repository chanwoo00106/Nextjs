import styled from "@emotion/styled";
import { add_todo } from "../modules/todo";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Input() {
  const [value, setValue] = useState({ todo: "", completeDate: "" });
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.todo.trim() === "") {
      alert("todo를 입력해 주세요");
      return;
    }
    setValue({ todo: "", completeDate: "" });
  };

  return (
    <InputForm onSubmit={onSubmit}>
      <InputTodo
        type="text"
        placeholder="todo 입력"
        value={value.todo}
        onChange={(e) => setValue({ ...value, todo: e.target.value })}
      />
      <InputDate
        id="inputdate"
        type="date"
        value={value.completeDate}
        onChange={(e) => setValue({ ...value, completeDate: e.target.value })}
      />
      <SubmitBtn type="submit">추가</SubmitBtn>
    </InputForm>
  );
}

export default Input;

const InputForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  height: 60px;
  padding: 10px;
  gap: 5px;
`;

const InputTodo = styled.input`
  outline: none;
  border: none;
  background: #e2e2e2;
  border-radius: 20px;
  padding: 0 15px;
  font-size: 1.1rem;
  font-weight: bold;
  font-family: inherit;
`;

const InputDate = styled.input`
  border: none;
  outline: none;
  background: #efefef;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0 5px;
`;

const SubmitBtn = styled.button`
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
