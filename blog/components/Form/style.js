import styled from "styled-components";

export const Form = styled.form`
  width: 500px;
  background: #ffff;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  margin: 0 auto;

  .inputBox {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px 0;

    input {
      height: 40px;
      outline: none;
      padding: 0 10px;
      font-size: 1rem;
      border: none;
      border-radius: 100px;
      background: #efefef;
    }
  }

  .buttonBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
