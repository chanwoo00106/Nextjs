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
    margin-bottom: 10px;
  }
  .todoList {
    list-style: none;
  }
`;

export const ListStyle = css`
  .list {
    padding: 10px;
  }
`;
