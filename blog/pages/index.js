import Header from "../components/Header/Header.js";
import Meta from "../components/Meta";
import Contents from "../components/Contents";

export default function Home() {
  return (
    <>
      <Meta title="ChanLog" description="this page is ChanLog" />
      <Header />
      <Contents />
    </>
  );
}
