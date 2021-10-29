import React from "react";
import Link from "next/link";
import * as S from "./Styles";

const Header = () => {
  return (
    <>
      <S.HeaderStyle>
        <Link href="/">
          <a>
            <h1 className="logo">blog</h1>
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>
                <div className="sub-menu">home</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/image">
              <a>
                <div className="sub-menu">image</div>
              </a>
            </Link>
          </li>
        </ul>
      </S.HeaderStyle>
      <div style={{ height: "10vh", marginBottom: "30px" }}></div>
    </>
  );
};

export default Header;
