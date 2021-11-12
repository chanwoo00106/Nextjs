import Image from "next/image";
import data from "../../db/dummy.json";
import * as S from "./style";

const Contents = () => {
  return (
    <S.Wrapper>
      {data.map((i) => (
        <div className="cont" key={i.id}>
          <Image src={i.url} alt={i.id} width={900} height={500} />
          <div>
            <h2>
              {i.title.length > 20 ? `${i.title.slice(0, 21)}...` : i.title}
            </h2>
            <p>으짜고 저짜고</p>
          </div>
        </div>
      ))}
    </S.Wrapper>
  );
};

export default Contents;
