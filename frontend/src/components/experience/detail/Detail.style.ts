import styled from "styled-components";

export const EntrieWrap = styled.nav`
  width: 50%;
  margin: 6rem auto;
  padding: 2rem;
`;

export const Title = styled.div`
  font-size: 2.25rem;
  font-weight: 600;
`;

export const ContentsWrap = styled.div`
  display: flex;
  margin: 0.5rem 0rem;
`;

export const GoBackButton = styled.button`
  font-size: 0.8rem;
  font-weight: 700;
  background-color: white;
  border: none;
  box-shadow: none;
  &:hover {
    color: #5f5f5f;
  }
  &:active {
    color: #929292;
  }
`;
