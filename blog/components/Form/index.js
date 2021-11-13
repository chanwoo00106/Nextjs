import Link from "next/link";
import { Button } from "../style";
import * as S from "./style";

export default function Form({ type }) {
  return (
    <div style={{ display: "flex", alignItems: "center", height: "80vh" }}>
      <S.Form>
        <h1 className="title">{type === "login" ? "로그인" : "회원가입"}</h1>

        <div className="inputBox">
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          {type === "register" && (
            <input placeholder="비밀번호 확인" type="password" />
          )}
        </div>

        <div className="buttonBox">
          <div></div>
          <Button type="submit">submit</Button>
          <Link href={`/${type === "login" ? "register" : "login"}`}>
            <a>{type === "login" ? "회원가입" : "로그인"}</a>
          </Link>
        </div>
      </S.Form>
    </div>
  );
}
