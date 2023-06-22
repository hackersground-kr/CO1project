import React from "react";
import * as S from "./Header.style";
import Logo from "../../../asset/Logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <S.MainHeaderWrap>
      <S.SubHeaderWrap>
        <S.LogoWrap onClick={() => navigate("/")}>
          <S.LogoImg src={Logo} alt="" />
          <span>대다</span>
        </S.LogoWrap>
        <S.ContentsWrap>
          <span onClick={() => navigate("/experience")}>경험 공유</span>
          <span onClick={() => navigate("/mentor")}>멘토링</span>
          <span>투자 모집</span>
          <span>내정보</span>
        </S.ContentsWrap>
      </S.SubHeaderWrap>
    </S.MainHeaderWrap>
  );
};

export default Header;
