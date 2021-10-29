import React from "react";
import * as S from "./Styles";
import Image from "next/image";
import { useState } from "react";

const Add = () => {
  const [src, setSrc] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    const reader = new FileReader();

    reader.onload = function () {
      const result = reader.result;
      console.log(result);
      setSrc(result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <S.AddStyle onSubmit={onSubmit}>
      <div className="img">
        <label htmlFor="file">
          {src ? (
            <Image src={src} alt="sample image" width={100} height={300} />
          ) : (
            <h1>이미지가 없습니다</h1>
          )}
        </label>
        <input type="file" id="file" onChange={onChange} />
      </div>
      <input placeholder="type the title" type="text" className="title" />
      <textarea placeholder="type the text" className="text" />
      <button type="submit">제출</button>
    </S.AddStyle>
  );
};

export default Add;
