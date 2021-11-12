import * as S from "./style";

const WriteContent = () => {
  return (
    <S.Wrapper>
      <input type="text" placeholder="제목 입력" className="title" />
      <button>Submit</button>
    </S.Wrapper>
  );
};

export default WriteContent;
