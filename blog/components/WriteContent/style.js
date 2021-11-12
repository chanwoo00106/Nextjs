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
    padding: 0 10px;
    font-size: 1.5rem;
    margin-bottom: 30px;
    outline: none;
    border: none;
    background: #efefef;
    border-radius: 10px;
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: #cecccc;
    }
  }
`;
