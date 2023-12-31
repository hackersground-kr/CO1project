import React, { useState } from "react";
import * as S from "./Comment.style";
import API from "../../../../util/API";
import { IExpCommentValue } from "../../../../types/IExpValue";

interface ICommentProps {
  postid: string | undefined;
  commentArr: IExpCommentValue[];
}

const Comment = (props: ICommentProps) => {
  const [newCommnetValue, setNewCommentValue] = useState<string>("");
  const [isUpload, setIsUpload] = useState<boolean>(true);

  const ServerConnect = () => {
    const Token: string | null = localStorage.getItem("accessToken");
    API.post(
      `api/post/comment/register/${props.postid}`,
      { body: newCommnetValue },
      {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      }
    )
      .then((_) => {
        alert("댓글이 추가되었습니다!");
        setIsUpload(true);
        window.location.reload();
      })
      .catch((_) => {});
  };

  return (
    <S.MainContainer>
      <S.Title>댓글 달기</S.Title>
      {props.commentArr.map((value, i) => (
        <CommentContents
          name={value.user.nickname}
          context={value.body}
          key={i}
        />
      ))}
      <S.AddComment
        type="text"
        placeholder="댓글 달기"
        value={newCommnetValue}
        onChange={(e) => setNewCommentValue(e.target.value)}
      />
      <S.AddCommentButton
        onClick={() => {
          if (isUpload) {
            setIsUpload(false);
            if (window.confirm("댓글을 추가 하시겠습니까?")) {
              ServerConnect();
            }
          }
        }}
      >
        댓글 달기
      </S.AddCommentButton>
    </S.MainContainer>
  );
};

export default Comment;

interface ICommentContentsProps {
  name: string;
  context: string;
}

const CommentContents = (props: ICommentContentsProps) => {
  return (
    <S.UserContentsWrap>
      <S.UserImg src="" alt="" />
      <div>
        <S.UserNameContents>{props.name}</S.UserNameContents>
        <div>{props.context}</div>
      </div>
    </S.UserContentsWrap>
  );
};
