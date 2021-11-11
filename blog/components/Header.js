import Head from "next/head";
import * as S from "./style.js";

export default function Header({ title }) {
  return (
    <S.Wrapper>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>Header</h1>
    </S.Wrapper>
  );
}
