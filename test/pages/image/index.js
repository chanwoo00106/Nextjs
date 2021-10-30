import React, { useEffect, useState } from "react";
import Header from "../../src/components/Header";
import axios from "axios";
import Image from "next/image";
import * as S from "../../styles/Image.style";
import Link from "next/link";

const ImagePage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    async function get() {
      try {
        const res = await axios.get("http://localhost:3300/");
        setData(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    get();
  }, []);
  return (
    <S.Wrapper>
      <Header />
      {data &&
        data.map((i) => (
          <Link key={i.id} href={`/detail/${i.id}`}>
            <a>
              <Image src={i.data} alt="img" width={500} height={500} />
            </a>
          </Link>
        ))}
    </S.Wrapper>
  );
};

export default ImagePage;
