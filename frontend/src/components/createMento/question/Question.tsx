import React, { Dispatch, SetStateAction } from "react";
import * as S from "./Question.style";

interface IQuestionProps {
  title: string;
  context: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

const Question = (props: IQuestionProps) => {
  return (
    <S.MainWrap>
      <S.Title>{props.title}</S.Title>
      <S.Context>{props.context}</S.Context>
      <S.InputContents
        type="text"
        value={props.state}
        onChange={(e) => props.setState(e.target.value)}
      />
    </S.MainWrap>
  );
};

export default Question;
