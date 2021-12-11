import Head from "next/head";
import SideBar from "../components/Sidbar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is a Test</h1>

      <main>
        <SideBar />
      </main>
      <div></div>
    </div>
  );
}
