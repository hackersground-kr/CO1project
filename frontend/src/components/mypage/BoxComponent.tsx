import * as S from "./BoxComponent.style"

const BoxComponent = () => {

    return(
    <S.BoxComponent>
        <S.TextDiv>
            <S.TextTime>17초 전</S.TextTime>
            <S.TextName>배경민</S.TextName>
            <S.TextContent>안녕하세요, 창업에 관심이 많은 배경민입니다. 너무 좋아요</S.TextContent>
        </S.TextDiv>
        <S.StateBtn>
        요청
        </S.StateBtn>
    </S.BoxComponent>
    )
}

export default BoxComponent;