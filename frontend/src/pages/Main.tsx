import React, { useEffect } from "react";
import * as S from "./Main.style";
import Main1Pic from "../asset/Main1.svg";
import Main2Pic from "../asset/Main2.svg";
import Main3Pic from "../asset/Main3.svg";
import Main4Pic from "../asset/Main4.svg";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigater = useNavigate();

  /* useEffect(()=>{
    axios.post('https://daeda.azurewebsites.net/api/user/login',{
      id: "abcd",
      password: "abcd"
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[]) */

  return (
    <>
      <S.Main1>
        <S.IntroBox1>
          <S.IntroTextDiv1>
            <S.IntroText11>대구 창업의 모든 것</S.IntroText11>
            <S.IntroText12>창업이 처음이신가요?</S.IntroText12>
          </S.IntroTextDiv1>
          <S.IntroImg1 src={Main1Pic} />
        </S.IntroBox1>
      </S.Main1>

      <S.Main2>
        <S.MainDiv2>
          <S.MainText21>창업이 처음이신가요?</S.MainText21>
          <S.MainText22>다양한 멘토를 만나 조언을 얻어보세요.</S.MainText22>
          <S.Shortcut2
            onClick={() => {
              navigater("/mentor");
            }}
          >
            바로가기
          </S.Shortcut2>
        </S.MainDiv2>
        <S.MainImg2 src={Main2Pic} />
      </S.Main2>

      <S.Main3>
        <S.MainImg3 src={Main3Pic} />
        <S.MainDiv3>
          <S.MainText31>투자가 처음이신가요?</S.MainText31>
          <S.MainText32>
            작은 시도부터 천천히, 소량으로 투자 해봐요
          </S.MainText32>
          <S.Shortcut3>바로가기</S.Shortcut3>
        </S.MainDiv3>
      </S.Main3>

      <S.Main4>
        <S.MainDiv2>
          <S.MainText21>창업에 대한 실패가 두려우신가요?</S.MainText21>
          <S.MainText22>
            여기에 최고의 창업가들의 다양한 경험들이 들어있어요.
          </S.MainText22>
          <S.Shortcut2
            onClick={() => {
              navigater("/experience");
            }}
          >
            바로가기
          </S.Shortcut2>
        </S.MainDiv2>
        <S.MainImg4 src={Main4Pic} />
      </S.Main4>
    </>
  );
}

export default Main;
