import React, { useEffect, useState } from "react";
import Title from "../common/form/Title";
import * as S from "../../styles/Form.style";
import ContentsBox from "./contentsBox/ContentsBox";
import { useNavigate } from "react-router-dom";
import API from "../../util/API";
import { IExpValue } from "../../types/IExpValue";

const Experience = () => {
  const navigate = useNavigate();
  const [array, setArray] = useState<IExpValue[]>([]);

  useEffect(() => {
    API.get("api/post")
      .then((e) => {
        console.log(e);
        let copy: IExpValue[] = [...e.data.postList];
        setArray([...copy]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <S.FormBody>
      <S.AddBtn onClick={() => navigate("/createexperience")}>
        <p>+</p>
      </S.AddBtn>
      <Title
        title="경험 공유"
        context="최고의 경험, 다양한 실패, 모두 이곳에서"
      />
      <S.ListWrap>
        {array.map((value, i) => (
          <ContentsBox
            state={{
              title: value.title,
              postId: value.postId,
              name: value.user.nickname,
            }}
            key={i}
          />
        ))}
      </S.ListWrap>
    </S.FormBody>
  );
};

export default Experience;
