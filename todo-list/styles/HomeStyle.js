import css from "styled-jsx/css";

export const MainStyle = css`
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .main {
    padding: 10px;
    width: 40vw;
    min-height: 50vh;
    background: #f1f1f1;
    border-radius: 10px;
  }
  .title {
    text-align: center;
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
