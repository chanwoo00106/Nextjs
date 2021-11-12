import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;

  .cont {
    transition: all 0.2s;

    div {
      padding: 10px 30px;
      background: #fff;
    }

    &:hover {
      transform: scale(1.03);
    }
  }
`;
