import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="overflow-hidden bg-black h-screen">
      <h1>hello</h1>
      <Sidebar />
    </div>
  );
}
