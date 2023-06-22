import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./Signin2.style"
import { useState } from "react";
import * as T from "../../types/Auth";

const Signin2 = () => {
    const navigater = useNavigate()
    const location = useLocation()
    const [data, setData] = useState<T.SignIn>(location.state)

    const next = () => {
        navigater('/signin3',{state:data})

    }

    return(
        <>
            <S.Body>
                <S.Wrapper>
                    회원가입

                    <S.InputWrapper>
                        닉네임
                        <S.Input onChange={(e)=>{
                        setData({...data, nickname : e.target.value})
                    }}/>
                    </S.InputWrapper>

                    <S.InputWrapper>
                        이메일
                        <S.CheckerWrap>
                            <S.InputWithBtn type="email"
                            onChange={(e)=>{
                                setData({...data, email : e.target.value})
                            }}/>
                            <S.CheckBtn>전송</S.CheckBtn>
                        </S.CheckerWrap>
                    </S.InputWrapper>

                    <S.InputWrapper>
                        <div>인증번호</div>
                        <S.CheckerWrap>
                            <S.InputWithBtn type="email"/>
                            <S.CheckBtn>확인</S.CheckBtn>
                        </S.CheckerWrap>
                    </S.InputWrapper>

                    <S.InputWrapper>
                        연락처
                        <S.Input onChange={(e)=>{
                        setData({...data, tel_number : e.target.value})
                    }}/>
                    </S.InputWrapper>

                    <S.NextBtn onClick={next}>다음 단계</S.NextBtn>

                </S.Wrapper>
            </S.Body>
        </>
    )
}

export default Signin2;