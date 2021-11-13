import styled from "styled-components";

export const Wrapper = styled.div`
  width: 65%;
  background: #fff;
  padding: 20px 20px;
  text-align: center;
  margin: 0 auto;
  border-radius: 10px;

  .title {
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 1.5rem;
    outline: none;
    border: none;
    background: #efefef;
    border-radius: 10px;
    margin-bottom: 30px;
  }

  .choiceFile {
    padding: 10px 20px;
    background: #efefef;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: #c5c5c5;
    }
  }

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }

  textarea {
    margin: 30px 0;
    width: 100%;
    height: 400px;
    outline: none;
    border: none;
    border-radius: 10px;
    background: #efefef;
    padding: 20px;
    font-size: 1rem;
    resize: none;
  }
`;
