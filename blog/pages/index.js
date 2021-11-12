import Header from "../components/Header/Header.js";
import Meta from "../components/Meta";

export default function Home() {
  return (
    <>
      <Meta title="ChanLog" description="this page is ChanLog" />
      <Header />
      <div>
        <h1>hello</h1>
        <p>this page is main</p>
      </div>
    </>
  );
}
