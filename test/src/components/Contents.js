import React from "react";
import * as S from "./Styles";
import Image from "next/image";
import Link from "next/link";

const Contents = ({ data }) => {
  return (
    <S.ContentsStyle>
      <Link href={`/image/${data.id}`}>
        <a>
          <section className="cont">
            {data.data && (
              <Image alt="testImage" src={data.data} width={500} height={500} />
            )}
            <h1 className="title">{data.title}</h1>
            <p className="text">{data.description}</p>
          </section>
        </a>
      </Link>
    </S.ContentsStyle>
  );
};

export default Contents;
