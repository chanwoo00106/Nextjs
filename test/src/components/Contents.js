import React from "react";
import * as S from "./Styles";
import Image from "next/image";
import Link from "next/link";

const Contents = () => {
  return (
    <S.ContentsStyle>
      <Link href={`/about/1`}>
        <a>
          <section className="cont">
            <Image
              alt="testImage"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              width={100}
              height={300}
            />
            <h1 className="title">title</h1>
            <p className="text">contents</p>
          </section>
        </a>
      </Link>
    </S.ContentsStyle>
  );
};

export default Contents;
