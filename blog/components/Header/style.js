import styled from "styled-components";

export const Wrapper = styled.div`
  height: 7vh;
  width: 100%;
  z-index: 100;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  box-shadow: 0 0 5px #aaa;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  .login {
    padding: 5px 20px;
    border-radius: 5px;
    background: #efefef;
    transition: 0.2s;

    &:hover {
      background: #0D6EFD;
      color: #fff;
    }
  }

  .title-menu {
    display: flex;

    h1 {
      margin-right: 50px;
    }

    ul {
      display: flex;
      list-style: none;

      li {
        display: flex;
        align-items: center;
        margin: 0 20px;
        font-size: 1.5rem;
      }
    }
  }
`;

export const Margin = styled.div`
  width: 100%;
  height: 7vh;
`;
