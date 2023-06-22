import { useState } from "react";
import * as S from "./Signin1.style"
import { useNavigate } from "react-router-dom";
import * as T from "../../types/Auth";

const Signin1 = () => {
    const navigater = useNavigate()
    const [data, setData] = useState<T.SignIn>({
        id: "",
        password: "",
        nickname: "",
        email: "",
        tel_number: "",
        type: "FOUNDER"
    })
    const [checkingPw, setCheckingPw] = useState<string>()

    const next = () => {
        if(checkingPw === data.password){
            navigater('/signin2',{state : data})
        } else {
            alert("비밀번호가 일치하지 않습니다.")
        }
    }

    return(
        <S.Body>
            <S.Wrapper>
                회원가입

                <S.InputWrapper>
                    아이디
                    <S.Input onChange={(e)=>{
                        setData({...data, id : e.target.value})
                    }} />
                </S.InputWrapper>

                <S.InputWrapper>
                    비밀번호
                    <S.Input type="password" onChange={(e)=>{
                        setData({...data, password : e.target.value})
                    }}/>
                </S.InputWrapper>

                <S.InputWrapper>
                    비밀번호 확인
                    <S.Input type="password" onChange={(e)=>{
                        setCheckingPw(e.target.value)
                    }}/>
                </S.InputWrapper>

                <S.NextBtn onClick={next} >다음 단계</S.NextBtn>

            </S.Wrapper>
        </S.Body>
    )
}

export default Signin1;