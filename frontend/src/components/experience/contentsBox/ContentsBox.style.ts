import styled from "styled-components";

export const MainContainer = styled.nav`
  width: 22rem;
  height: 18rem;
  margin: 1.5rem;
  background-color: white;
  display: inline-block;
  overflow: hidden;
  border-radius: 1.25rem;
  border: 1px solid #b8b8b8;
`;

interface IImgProps {
  url: string;
}

export const ImageArea = styled.div`
  background-image: url(${(props: IImgProps) => props.url});
  background-size: cover;
  width: 100%;
  height: 60%;
  border-bottom: 1px solid #b8b8b8;
`;

export const ImageContents = styled.div`
  display: flex;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const PriceContext = styled.p`
  font-size: 1rem;
`;

export const SubContainer = styled.div`
  padding: 0rem 1.5rem;
`;

export const ImageElement = styled.img`
  margin-right: 0.75rem;
  width: 4rem;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0.3rem 0;
  text-align: left;
  width: 19rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
