import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import * as S from "./Detail.style";
import Comment from "./comment/Comment";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../../util/API";
import { IExpCommentValue, IExpValue } from "../../../types/IExpValue";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detailState, setDetailValue] = useState<IExpValue>();
  const [commentArr, setCommentArr] = useState<IExpCommentValue[]>([]);
  useEffect(() => {
    API.get(`api/post/${id}`).then((e) => {
      console.log(e);
      let copyDetail: IExpValue = e.data.post;
      let copyComment: IExpCommentValue[] = [...e.data.comments];
      setDetailValue(copyDetail);
      setCommentArr(copyComment);
    });
  }, []);
  return (
    <S.EntrieWrap>
      <div>
        <S.GoBackButton onClick={() => navigate("/experience")}>
          {"< 뒤로가기"}
        </S.GoBackButton>
        <S.Title>{detailState?.title}</S.Title>
      </div>
      <S.ContentsWrap>
        <p>
          {detailState?.user.nickname} - {detailState?.createDate}
        </p>
      </S.ContentsWrap>
      <ReactMarkdown>{detailState?.body || ""}</ReactMarkdown>
      <Comment postid={id} commentArr={commentArr} />
    </S.EntrieWrap>
  );
};

export default Detail;
