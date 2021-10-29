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
                <div className="sub-menu">Home</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/image">
              <a>
                <div className="sub-menu">Images</div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/add">
              <a>
                <div className="sub-menu">Add</div>
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
