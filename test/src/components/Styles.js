import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10%;
  height: 10vh;
  width: 100%;
  position: fixed;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);

  ul {
    display: flex;
    text-align: center;
    list-style: none;
    height: 40%;

    li {
      display: flex;
      align-items: center;
    }
  }

  .sub-menu {
    font-size: 20px;
    padding: 10px;
    width: 120px;
  }
`;

export const ContentsStyle = styled.div`
  .cont {
    margin: 0 auto;
    padding: 20px;
    width: 600px;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 0 5px 1px rgb(64 60 67 / 16%);

    h1 {
      margin: 5px 0;
    }
    p {
      margin: 5px 0;
    }
  }
`;
