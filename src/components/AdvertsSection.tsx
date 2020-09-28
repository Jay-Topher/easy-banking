import React from "react";
import styled from "styled-components";
import { myTheme } from "../my-theme";
import { adverts } from "../assets/data.json";
import Container from "./Container";
import AdvertItem from "./AdvertItem";
import imageCurrency from "../assets/image-currency.jpg";
import imageRestaurant from "../assets/image-restaurant.jpg";
import imageConfetti from "../assets/image-confetti.jpg";
import imagePlane from "../assets/image-plane.jpg";
import FlexedContainer from "./FlexedContainer";

interface AdvertsSectionProps {}

const AdvertsSection: React.FC<AdvertsSectionProps> = () => {
  const images = [imageCurrency, imageRestaurant, imagePlane, imageConfetti];
  return (
    <AdvertContainer>
      <Container>
        <AdvertsMain>
          <h2>Latest Articles</h2>
          <Flexed>
            {adverts.map(({ author, title, description }, index) => (
              <AdvertItem
                author={author}
                title={title}
                description={description}
                photo={images[index]}
              />
            ))}
          </Flexed>
        </AdvertsMain>
      </Container>
    </AdvertContainer>
  );
};

export default AdvertsSection;

const AdvertContainer = styled.section`
  background-color: ${myTheme.colors.neutral.veryLightGray};
`;

const AdvertsMain = styled.section`
  height: inherit;
  padding: 8rem 0;

  h2 {
    font-weight: 400;
    font-size: 2.5rem;
    margin-bottom: 1.9rem;

    @media only screen and (max-width: ${myTheme.breakpoints.lg}) {
      text-align: center;
    }
  }
`;

const Flexed = styled(FlexedContainer)`
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;
