import styled from "@emotion/styled";
import { add_todo } from "../modules/todo";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Input() {
  const [value, setValue] = useState({ todo: "", completeDate: "" });
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(add_todo([value]));
    setValue({ todo: "", completeDate: "" });
  };

  return (
    <InputForm onSubmit={onSubmit}>
      <input
        type="text"
        value={value.todo}
        onChange={(e) => setValue({ ...value, todo: e.target.value })}
      />
      <input
        type="date"
        value={value.completeDate}
        onChange={(e) => setValue({ ...value, completeDate: e.target.value })}
      />
      <button type="submit">추가</button>
    </InputForm>
  );
}

export default Input;

const InputForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  height: 50px;
  padding: 10px;
  gap: 5px;
`;
