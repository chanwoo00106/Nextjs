import Link from "next/link";
import * as S from "./style.js";

export default function Header({ title }) {
  return (
    <>
      <S.Wrapper>
        <div className="title-menu">
          <h1>chanlog</h1>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/write">
                <a>About</a>
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
