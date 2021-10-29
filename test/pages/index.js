import { Wrapper } from "../styles/Home.styles";
import Head from "next/head";
import Header from "../src/components/Header";
import Contents from "../src/components/Contents";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Main</title>
      </Head>
      <Header />
      <Contents />
    </Wrapper>
  );
}
