import React from "react";
import * as S from "./ContentsBox.style";
import LogoImg from "../../../asset/Logo.svg";
import { useNavigate } from "react-router-dom";

interface IExpProps {
  state: {
    title: string;
    postId: number;
    name: string;
  };
}

const ContentsBox = (props: IExpProps) => {
  const navigate = useNavigate();
  return (
    <S.MainContainer
      onClick={() => navigate(`/experience/${props.state.postId}`)}
    >
      <S.SubContainer>
        <S.Title>{props.state.title} </S.Title>
        <S.ImageContents>
          <S.ImageElement src={LogoImg} alt="" />
          <div>
            <p>{props.state.name}</p>
            <S.PriceContext>price</S.PriceContext>
          </div>
        </S.ImageContents>
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default ContentsBox;
