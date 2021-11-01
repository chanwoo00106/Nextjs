import React from "react";
import Link from "next/link";
import * as S from "./Styles";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
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
                <div
                  className={`sub-menu ${
                    router.pathname === "/" ? "bold" : ""
                  }`}
                >
                  Home
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/image">
              <a>
                <div
                  className={`sub-menu ${
                    router.pathname === "/image" ||
                    router.pathname === "/detail/[id]"
                      ? "bold"
                      : ""
                  }`}
                >
                  Images
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/add">
              <a>
                <div
                  className={`sub-menu ${
                    router.pathname === "/add" ? "bold" : ""
                  }`}
                >
                  Add
                </div>
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
