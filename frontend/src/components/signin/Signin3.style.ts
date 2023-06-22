import styled from "styled-components";

export const Body = styled.div`
    width: 100vw;
    height: calc(100vh - 4.5rem);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Img = styled.img`
    width: 2.3rem;
    height: 2.3rem;
`

export const Title = styled.div`
    margin-left: 1rem;

    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 2.5rem;
`

export const Info = styled.div`
    margin-bottom: 2.7rem;

    display: flex;
`

export const Box = styled.div`
    padding: 2rem;
    margin-bottom: 10rem;

    width: 28vw;
    height: 26vw;

    border: 1px solid #B8B8B8;
    border-radius: 10px;


`

export const BoxText1 = styled.div`
    font-family: 'Pretendard';
    font-size: 1.75rem;
    line-height: 2.5rem;
    letter-spacing: 0.02em;
`
export const BoxText2 = styled.div`
    font-family: 'Pretendard';
    font-size: 0.8rem;
    line-height: 1.2rem;
    color: #9293AC;
`

export const CheckWrapper = styled.div`
    margin-top: 2.5rem;

    font-family: 'Pretendard';
    font-size: 1rem;
    letter-spacing: 0.02em;    
`

export const CheckBtn = styled.button`
    margin-top: 0.2rem;

    display: block;

    width: 25rem;
    height: 2.5rem;

    background-color: #ffffff;
    border: 1px solid #B8B8B8;
    border-radius: 5px;

    font-family: 'Pretendard';
    font-size: 1rem;
    text-align: start;
`

export const CheckIcon = styled.img`
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`

export const NextBtn = styled.button`
    margin-top: 10%;

    width: 30%;
    height: 7%;
    
    background: #386CF4;
    border: none;
    border-radius: 5px;

    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 1.5rem;
    color: #FFFFFF;
`
