import React, { useEffect, useState } from "react";
import Title from "../common/form/Title";
import * as S from "../../styles/Form.style";
import Modal from "./modal/Modal";
import ContentsBox from "./contentsBox/ContentsBox";
import { useNavigate } from "react-router-dom";
import API from "../../util/API";
import { IServerMentorListValue } from "../../types/IMentorValue";

const Mentoring = () => {
  const navigate = useNavigate();
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [mentoringId, setMentoringId] = useState<number>(0);
  const [array, setArray] = useState<IServerMentorListValue[]>([]);
  useEffect(() => {
    API.get(`api/mentoring/all`)
      .then((e) => {
        let copy: IServerMentorListValue[] = [...e.data];
        setArray(copy);
      })
      .catch((_) => {});
  }, []);
  return (
    <>
      {isModalActive && (
        <S.Background
          onClick={() => {
            setIsModalActive(false);
            setMentoringId(0);
          }}
        />
      )}
      <S.FormBody>
        <S.AddBtn onClick={() => navigate("/creatementoring")}>
          <p>+</p>
        </S.AddBtn>
        {isModalActive && <Modal mentoringId={mentoringId} />}
        <Title title="멘토링" context="다양한 멘토를 만나보세요." />
        <S.ListWrap>
          {array.map((value, i) => (
            <ContentsBox
              key={i}
              setModalActiveState={setIsModalActive}
              setModalState={setMentoringId}
              mentoringId={value.mentoringId}
              state={value}
            />
          ))}
        </S.ListWrap>
      </S.FormBody>
    </>
  );
};

export default Mentoring;
