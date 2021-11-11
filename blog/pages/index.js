import Head from "next/head";
import Header from "../components/Header.js";

export default function Home() {
  return (
    <>
      <Header title={"제목입니다"} />
      <div>
        <h1>hello</h1>
        <p>this page is main</p>
      </div>
    </>
  );
}
