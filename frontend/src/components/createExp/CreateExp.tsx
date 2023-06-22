import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import * as S from "./CreateExp.style";
import { useNavigate } from "react-router-dom";
import API from "../../util/API";

const CreateExp = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const naviagte = useNavigate();

  const ServerConnnect = async () => {
    if (window.confirm("게시물을 올리시겠습니까?")) {
      if (title === "" || markdown === "") {
        alert("제목 혹은 내용을 똑바로 입력해주세요.");
        return;
      }
      await API.post(
        "api/post/register",
        { title: title, body: markdown },
        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODgwMTIzNjQsInVzZXJJZCI6Mn0.pygcaqnnSEvBGMFN_OrQ8j0NclCEoJaV__ddqwaUhak`,
          },
        }
      )
        .then((_) => alert("게시물이 올라갔습니다."))
        .catch((_) => {});

      naviagte("/experience");
    }
  };

  return (
    <S.CreateForm>
      <S.Title
        type="text"
        placeholder="제목을 입력하세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <S.SaveBtn onClick={ServerConnnect}>올리기</S.SaveBtn>
      <S.MarkDownViewContainer>
        <S.MarkDownTextArea
          placeholder="내용을 자유롭게 적어주세요. (마크다운 사용가능)"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></S.MarkDownTextArea>
        <S.MarkDownPreview>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </S.MarkDownPreview>
      </S.MarkDownViewContainer>
    </S.CreateForm>
  );
};

export default CreateExp;
