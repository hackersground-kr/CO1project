import styled from "styled-components";

export const MainForm = styled.nav`
  width: 50%;
  margin: 5rem auto;
`;

export const Title = styled.p`
  width: 100%;
  padding: 1.5rem;
  font-size: 2rem;
  font-weight: 700;
  color: #386cf4;
  border: 2px solid #ebebeb;
  margin-bottom: 3rem;
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

export const SubminButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 3rem;
  background-color: #386cf4;
  color: white;
  border: none;
  box-shadow: none;
  border-radius: 5px;
`;
