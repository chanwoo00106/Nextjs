import Head from "next/head";
import SideBar from "../components/Sidbar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>spotify</title>
      </Head>

      <main>
        <SideBar />
      </main>
      <div></div>
    </div>
  );
}
