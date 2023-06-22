import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  overflow: wrap;
  margin-top: 5rem;
`;

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const AddComment = styled.input`
  padding: 2%;
  width: 96%;
  font-size: 1rem;
`;

export const UserImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  border-radius: 5rem;
  background-color: gray;
`;

export const UserNameContents = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const UserContentsWrap = styled.div`
  display: flex;
  margin: 1.5rem 0;
`;

export const AddCommentButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 5px;
  box-shadow: none;
  background-color: #386cf4;
  color: white;
`;
