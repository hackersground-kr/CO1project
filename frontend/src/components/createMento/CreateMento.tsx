import React, { useState } from "react";
import * as S from "./CreateMento.style";
import Question from "./question/Question";
import { useNavigate } from "react-router-dom";
import API from "../../util/API";

const CreateMento = () => {
  const navigate = useNavigate();
  const [sales, setSales] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [introduce, setIntroduce] = useState<string>("");

  const ServerConnect = async () => {
    if (window.confirm("멘토 신청을 하시겠습니까?")) {
      await API.post(
        "api/mentoring/create",
        {
          annualSales: sales,
          price: price,
          job: position,
          introduction: introduce,
        },
        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODgwMTIzNjQsInVzZXJJZCI6Mn0.pygcaqnnSEvBGMFN_OrQ8j0NclCEoJaV__ddqwaUhak`,
          },
        }
      )
        .then((_) => {
          alert("신청되었습니다.");
        })
        .catch((_) => {});
      navigate("/mentor");
    }
  };

  return (
    <S.MainForm>
      <S.GoBackButton onClick={() => navigate("/mentor")}>
        {"< 뒤로가기"}
      </S.GoBackButton>
      <S.Title>멘토링 작성하기</S.Title>
      <Question
        title="연매출이 어떻게 되시나요?"
        context="연매출이 사람을 표현하는 모든것이 아니에요, 한번 사람들에게 자신을 어필해봐요."
        setState={setSales}
        state={sales}
      />
      <Question
        title="당신의 가치는 어느 정도인가요?"
        context="1시간 마다 받을 금액을 입력해주세요."
        setState={setPrice}
        state={price}
      />
      <Question
        title="어떤 직무이신가요?"
        context="구체적으로 다른 사람에게 자신을 소개 한다고 상상해보세요."
        setState={setPosition}
        state={position}
      />
      <Question
        title="당신에 대해서 간략하게 설명해주세요"
        context="당신을 뭐라고 하는 사람은 없습니다. 당당하게 자신을 소개하듯이 글을 작성해주세요."
        setState={setIntroduce}
        state={introduce}
      />
      <S.SubminButton onClick={ServerConnect}>멘토링 작성하기</S.SubminButton>
    </S.MainForm>
  );
};

export default CreateMento;
