import Link from "next/link";
import * as S from "./style.js";

export default function Header() {
  return (
    <>
      <S.Wrapper>
        <div className="title-menu">
          <h1>ChanLog</h1>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/write">
                <a>Write</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/login">
          <a className="login">Login</a>
        </Link>
      </S.Wrapper>
      <S.Margin />
    </>
  );
}
