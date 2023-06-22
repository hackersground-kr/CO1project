import * as S from "./Signin3.style"
import Logo from "../../asset/Logo.svg"
import CheckIcon from "../../asset/Check.svg"
import CheckedCheckIcon from "../../asset/CheckedCheckIcon.svg"
import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import * as T from "../../types/Auth";
import API from "../../util/API"

const Signin3 = () => {
    const navigater = useNavigate()
    const location = useLocation()
    const [data, setData] = useState<T.SignIn>(location.state)

    const [type, setType] = useState({
        FOUNDER : false,
        INVESTOR : false
    })

    const submit = () => {
        if(type.FOUNDER){
            setData({...data, type : "FOUNDER"})
        } else if(type.INVESTOR) {
            setData({...data, type : "INVESTOR"})
        }
        console.log(data)
        API.post('/api/user/signup',{data})
        .then((res)=>{
            alert("회원가입 성공")
            navigater('/')
        })
        .catch((err)=>{
            console.error(err)
        })
    }

    return(
        <S.Body>
            
            <S.Info>
                <S.Img src={Logo} ></S.Img>
                <S.Title>대다</S.Title>
            </S.Info>

            <S.Box>
                <S.BoxText1>대다에서 어떤 서비스로<br/>이용하고 싶으세요?</S.BoxText1>
                <S.BoxText2>원하는 회원가입 유형을 선택하세요. <br/>의뢰인으로 가입 후에도 전문가 등록이 가능합니다.</S.BoxText2>
            
                <S.CheckWrapper>
                    투자자로 투자하고 싶다면
                    <S.CheckBtn onClick={()=>{setType({FOUNDER : true, INVESTOR : false})}} >
                        <S.CheckIcon src={type.FOUNDER ? CheckedCheckIcon : CheckIcon }/>
                        투자자로 가입
                    </S.CheckBtn>
                </S.CheckWrapper>

                <S.CheckWrapper>
                    내 아이디어를 빛내고 싶다면 
                    <S.CheckBtn onClick={()=>{setType({FOUNDER : false, INVESTOR : true})}}>
                        <S.CheckIcon src={type.INVESTOR ? CheckedCheckIcon : CheckIcon } />
                        창업인으로 가입
                    </S.CheckBtn>
                </S.CheckWrapper>

                <S.NextBtn onClick={submit}>확인</S.NextBtn>

            </S.Box>

        </S.Body>
    )
}

export default Signin3;