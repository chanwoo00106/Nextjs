import css from "styled-jsx/css";

export const MainStyle = css`
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .main {
    padding: 20px;
    width: 40vw;
    min-height: 50vh;
    max-height: 80vh;
    overflow: auto;
    background: #f1f1f1;
    border-radius: 10px;
  }
  .title {
    text-align: center;
    margin-bottom: 10px;
  }
  .todoList {
    list-style: none;
  }
`;

export const ListStyle = css`
  .list {
    padding: 10px 20px 10px 10px;
    background: #c7c4c4ff;
    margin: 10px 0;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .icons {
    grid-column: 2 / 3;
    grid-row: -3 / -1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    grid-gap: 10px;
  }

  .list:hover {
    background: #aaa6a6;
  }
`;

export const AddStyle = css`
  .wrap {
    display: grid;
    grid-template-columns: 5fr 2.6fr 1fr;
    grid-gap: 10px;
  }

  input {
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 5px 10px;
    font-size: 1rem;
  }

  button {
    outline: none;
    border: none;
    background: #0d6efd;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
  }
`;
