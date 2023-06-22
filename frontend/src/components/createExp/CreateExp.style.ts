import styled from "styled-components";

export const CreateForm = styled.div`
  width: 50%;
  margin: 5rem auto;
`;

export const Title = styled.input`
  padding: 3%;
  font-size: 1.5rem;
  width: 94%;
  border: none;
  border-bottom: 2px solid #b8b8b8;
`;

export const MarkDownViewContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const MarkDownTextArea = styled.textarea`
  width: 44%;
  height: 40rem;
  padding: 3%;
  font-size: 1rem;
  border: none;
  resize: none;
  background-color: #e9e9e9;
`;

export const MarkDownPreview = styled.nav`
  width: 44%;
  height: 40rem;
  padding: 3%;
  font-size: 1rem;
  background-color: #f4f4f4;
`;

export const SaveBtn = styled.button`
  margin-left: 5rem;
  position: absolute;
  padding: 1rem 2.5rem;
  border-radius: 5rem;
  box-shadow: none;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  background-color: #386cf4;
  &:hover {
    background-color: #295ee8;
  }
  &:active {
    background-color: #1c4ecf;
  }
`;
