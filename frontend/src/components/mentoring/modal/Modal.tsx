import React, { useEffect, useState } from "react";
import { IMentorValue } from "../../../types/IMentorValue";
import * as S from "./Modal.style";
import API from "../../../util/API";

const Modal = ({ mentoringId }: { mentoringId: number }) => {
  const [mentorValue, setMentorValue] = useState<IMentorValue>();

  useEffect(() => {
    API.get(`api/mentoring/${mentoringId}`)
      .then((e) => {
        let copy: IMentorValue = e.data;
        setMentorValue(copy);
      })
      .catch((_) => {});
  }, [mentoringId]);

  return (
    <>
      <S.MainContainer>
        <S.ImgContentsWrap>
          <S.UserImage src="" alt="" />
          <S.IntroduceBox>{mentorValue?.job}</S.IntroduceBox>
        </S.ImgContentsWrap>
        <S.CommonFont>{mentorValue?.user.nickname}</S.CommonFont>
        <S.PriceWrap>
          <S.PriceTime>1시간 / </S.PriceTime>
          <S.CommonFont>{mentorValue?.price}</S.CommonFont>
        </S.PriceWrap>
        <S.YearSalesFont>연매출 : {mentorValue?.annualSales}</S.YearSalesFont>
        <S.ContactContainer>{mentorValue?.introduction}</S.ContactContainer>
        <S.RequestButton>요청하기</S.RequestButton>
      </S.MainContainer>
    </>
  );
};

export default Modal;
