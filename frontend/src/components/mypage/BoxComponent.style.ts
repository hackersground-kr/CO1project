import styled from "styled-components";


export const BoxComponent = styled.div`
    margin-top: 0.5rem;

    padding: 1rem;
    width: calc(22.5rem - 2.5rem);
    height: calc(9rem - 2.5rem);

    border: 2px solid #897C7C;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    background: #FAFAFC;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 14rem;
    min-height: 8rem;

`

export const TextTime = styled.div`
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 0.8rem;
    color: #666666;

`

export const TextName = styled.div`
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 1rem;
`

export const TextContent = styled.div`
font-size: 0.8rem;
color: #666666;
font-weight: 700;
`

export const StateBtn = styled.button`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;

    background: #646EF8;

    border: none;

    font-weight: 700;
    font-size: 1.2rem;
    text-align: center;
    color: #FFFFFF;
`