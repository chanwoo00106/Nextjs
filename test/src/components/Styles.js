import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10%;
  height: 10vh;
  width: 100%;
  position: fixed;
  box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%);
  z-index: 100;
  background: #ffffffff;

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
  .bold {
    font-weight: bold;
  }
`;

export const ContentsStyle = styled.div`
  width: 600px;
  margin: 0 auto 30px;

  .cont {
    padding: 20px;
    width: 100%;
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

export const AddStyle = styled.form`
  width: 600px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px rgb(64 60 67 / 16%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .img {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    label {
      display: flex;
      flex-direction: column;
    }
    h1 {
      text-align: center;
      cursor: pointer;
    }

    input {
      display: none;
    }
  }

  input {
    width: 100%;
    font-size: 1rem;
    height: 40px;
    margin: 20px 0;
    padding: 5px 10px;
    outline: none;
    border-radius: 10px;
    border: none;
    background: #dfe6e9;
  }

  textarea {
    width: 100%;
    background: #dfe6e9;
    resize: none;
    outline: none;
    border: none;
    border-radius: 10px;
    height: 100px;
    padding: 10px;
    font-size: 0.8rem;
  }

  button {
    width: 70px;
    padding: 7px 5px;
    color: white;
    background: #00a8ff;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
  }
`;
