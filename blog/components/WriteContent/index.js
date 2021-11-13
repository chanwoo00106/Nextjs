import { Button } from "../style";
import * as S from "./style";

const WriteContent = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", height: "90vh" }}>
      <S.Wrapper>
        <input type="text" placeholder="제목 입력" className="title" />
        <label className="choiceFile" htmlFor="file">
          사진 선택
        </label>
        <input type="file" id="file" />
        <textarea placeholder="글을 작성해 주세요"></textarea>
        <Button>Submit</Button>
      </S.Wrapper>
    </div>
  );
};

export default WriteContent;
