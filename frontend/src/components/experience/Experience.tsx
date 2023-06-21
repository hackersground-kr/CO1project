import React, { useState } from "react";
import Title from "../common/form/Title";
import * as S from "../../styles/Form.style";
import ContentsBox from "./contentsBox/ContentsBox";

const Experience = () => {
  const [array, setArray] = useState<string[]>([
    "d",
    "d",
    "d",
    "",
    "d",
    "",
    "d",
    "d",
    "",
    "d",
    "",
    "",
    "",
    "d",
    "",
    "d",
    "d",
    "d",
    "d",
    "d",
    "",
    "d",
  ]);
  return (
    <S.FormBody>
      <Title
        title="경험 공유"
        context="최고의 경험, 다양한 실패, 모두 이곳에서"
      />
      <S.ListWrap>
        {array.map((v, i) => (
          <ContentsBox isInPhoto={v !== ""} id={i} />
        ))}
      </S.ListWrap>
    </S.FormBody>
  );
};

export default Experience;
