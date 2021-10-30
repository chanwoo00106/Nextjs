import React from "react";
import Header from "../../src/components/Header";
import { useRouter } from "next/router";

const ImgSubPage = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <h1>Image sub page</h1>
      <p>{router.query.id}</p>
    </div>
  );
};

export default ImgSubPage;
