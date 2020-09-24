import React from "react";
import styled from "styled-components";
import { myTheme as theme } from "../my-theme";

interface AdvertItemProps {
  title: string;
  photo: string;
  author: string;
  description: string;
}

const AdvertItem: React.FC<AdvertItemProps> = ({
  title,
  photo,
  author,
  description,
}) => {
  return (
    <Card>
      <ImageContainer>
        <Image src={photo} alt={title} />
      </ImageContainer>
      <CardDescription>
        <small>By {author}</small>
        <h5>{title}</h5>
        <p>{description}</p>
      </CardDescription>
    </Card>
  );
};

export default AdvertItem;

const Card = styled.div`
  background-color: ${theme.colors.neutral.white};
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 25rem;
  border-radius: 0.4rem;
  flex-wrap: wrap;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  /* transition: border 0.4s ease-out; */

  &:hover {
    transform: scale(1.1, 1.1);
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    width: 22%;
    margin: 0;
  }
`;

const ImageContainer = styled.div`
  height: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const CardDescription = styled.div`
  padding: 1.3rem;

  small {
    font-size: 0.6rem;
  }

  h5 {
    font-size: 1.1rem;
    font-weight: 400;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    transition: color 0.3s ease-out;

    &:hover {
      color: ${theme.colors.primary.limeGreen};
    }
  }

  p {
    font-size: 0.8rem;
    color: ${theme.colors.neutral.grayishBlue};
  }
`;
