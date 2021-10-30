import * as S from "../styles/Home.styles";
import Head from "next/head";
import Header from "../src/components/Header";
import Contents from "../src/components/Contents";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function get() {
      try {
        const res = await axios.get("http://localhost:3300/");
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
    get();
  }, []);

  return (
    <S.Wrapper>
      <Head>
        <title>Main</title>
      </Head>
      <Header />
      {loading ? (
        <h1 className="loading">데이터를 받아오는 중...</h1>
      ) : (
        <>{data && data.map((d) => <Contents key={d.id} data={d} />)}</>
      )}
    </S.Wrapper>
  );
}
