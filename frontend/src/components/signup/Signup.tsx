import { ReactElement, useState, useEffect } from "react";
import * as S from "./Signup.style"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Signup = ():ReactElement => {
    const navigate = useNavigate()
    const [id, setId] = useState<string>();
    const [pw, setPw] = useState<string>();

    const postAccount = () => {
        axios.post('https://daeda.azurewebsites.net/api/user/login',{
          id: id,
          password: pw,
        })
        .then((res)=>{
          localStorage.setItem("accessToken",res.data.accessToken)
          alert("로그인 성공")
          navigate('/')
        })
        .catch((err)=>{
          console.log(err)
        })
    }

    return(
        <S.Body>
            <S.Wrapper>
                <S.Title>로그인</S.Title>

                <S.InputWrapper>
                    아이디
                    <S.Input onChange={(e)=>{setId(e.target.value)}}/>
                </S.InputWrapper>

                <S.InputWrapper>
                    비밀번호
                    <S.Input onChange={(e)=>{setPw(e.target.value)}}/>
                </S.InputWrapper>

                <S.Hint onClick={()=>{navigate('/signin1')}}>계정이 없으신가요?</S.Hint>

                <S.LoginBtn onClick={postAccount}>로그인</S.LoginBtn>

            </S.Wrapper>
        </S.Body>
    )
}

export default Signup;