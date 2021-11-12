import Image from "next/image";
import data from "../../db/dummy.json";
import * as S from "./style";

const Contents = () => {
  return (
    <S.Wrapper>
      {data.map((i) => (
        <div className="cont" key={i.id}>
          <Image src={i.url} alt={i.id} width={900} height={500} />
        </div>
      ))}
    </S.Wrapper>
  );
};

export default Contents;
