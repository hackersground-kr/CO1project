import React, { Dispatch, SetStateAction } from "react";
import * as S from "./ContentsBox.style";
import LogoImg from "../../../asset/Logo.svg";
import { IServerMentorListValue } from "../../../types/IMentorValue";

const ContentsBox = ({
  setModalActiveState,
  setModalState,
  mentoringId,
  state,
}: {
  setModalActiveState: Dispatch<SetStateAction<boolean>>;
  setModalState: Dispatch<SetStateAction<number>>;
  mentoringId: number;
  state: IServerMentorListValue;
}) => {
  return (
    <S.MainContainer
      onClick={() => {
        setModalActiveState(true);
        setModalState(mentoringId);
      }}
    >
      <S.ImageWrap>
        <S.UserImage src={LogoImg} alt="" />
        <div>
          <S.NameElement>{state.user.nickname}</S.NameElement>
          <S.YearSalesFont>{state.annualSales}</S.YearSalesFont>
        </div>
      </S.ImageWrap>
      <S.PriceWrap>
        <S.PerTimes>1시간 /</S.PerTimes>
        <p>{state.price}</p>
      </S.PriceWrap>
    </S.MainContainer>
  );
};

export default ContentsBox;
