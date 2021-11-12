import Header from "../components/Header/Header.js";
import Meta from "../components/Meta";
import WriteContent from "../components/WriteContent/index.js";

const About = () => {
  return (
    <>
      <Meta title="ChanLog | Write" description="write page" />
      <Header />
      <WriteContent />
    </>
  );
};

export default About;
