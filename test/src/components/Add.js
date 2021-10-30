import React from "react";
import * as S from "./Styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const Add = () => {
  const router = useRouter();
  const [input, setInput] = useState({ title: "", text: "", src: "" });
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: "http://localhost:3300/",
      data: {
        title: input.title,
        description: input.text,
        data: input.src,
      },
    });
    router.push("/");
  };

  const onChange = (e) => {
    switch (e.target.name) {
      case "title":
        setInput({ ...input, title: e.target.value });
        break;
      case "text":
        setInput({ ...input, text: e.target.value });
        break;
      case "file":
        const reader = new FileReader();
        reader.onload = function () {
          const result = reader.result;
          setInput({ ...input, src: result });
        };
        reader.readAsDataURL(e.target.files[0]);

      default:
        return;
    }
  };

  return (
    <S.AddStyle onSubmit={onSubmit}>
      <div className="img">
        <label htmlFor="file">
          {input.src ? (
            <Image
              src={input.src}
              alt="sample image"
              name="file"
              width={500}
              height={500}
            />
          ) : (
            <h1>이미지가 없습니다</h1>
          )}
        </label>
        <input type="file" name="file" id="file" onChange={onChange} />
      </div>
      <input
        placeholder="type the title"
        name="title"
        type="text"
        className="title"
        onChange={onChange}
        value={input.title}
      />
      <textarea
        placeholder="type the text"
        name="text"
        className="text"
        onChange={onChange}
        value={input.text}
      />
      <button type="submit">제출</button>
    </S.AddStyle>
  );
};

export default Add;
