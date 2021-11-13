import * as S from "./style";

const WriteContent = () => {
  return (
    <S.Wrapper>
      <input type="text" placeholder="제목 입력" className="title" />
      <label className="choiceFile" htmlFor="file">
        사진 선택
      </label>
      <input type="file" id="file" />
      <textarea placeholder="글을 작성해 주세요"></textarea>
      <button>Submit</button>
    </S.Wrapper>
  );
};

export default WriteContent;
