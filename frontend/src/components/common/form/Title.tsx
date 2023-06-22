import React from "react";
import * as S from "./Title.style";

interface ITitleFormProps {
  title: string;
  context: string;
  isSearch?: boolean;
}

const Title = (props: ITitleFormProps) => {
  return (
    <nav>
      <S.Title>{props.title}</S.Title>
      <S.Context>{props.context}</S.Context>
    </nav>
  );
};

export default Title;
