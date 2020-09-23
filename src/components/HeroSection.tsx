import React from "react";
import styled from "styled-components";
// import Container from "./Container";
import FlexedContainer from "./FlexedContainer";
import InviteButton from "./InviteButton";
import mobile from "../assets/image-mockups.png";
import bgImage from "../assets/bg-intro-desktop.svg";
import { myTheme as theme } from "../my-theme";

const HeroSection = () => {
  return (
    <Hero>
      <Flexed>
        <TextChild>
          <TextWrapper>
            <H1>Next generation digital banking</H1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
          </TextWrapper>
          <InviteButton href="/">Request Invite</InviteButton>
        </TextChild>
        
        <ImageContainer>
          <Image src={mobile} alt="mobile mockup" />
        </ImageContainer>
      </Flexed>
    </Hero>
  );
};

export default HeroSection;

const H1 = styled.h1`
  font-weight: 400;
  font-size: 60px;
  margin-top: 0px;
  margin-bottom: 20px;
`;

// const ImageContainer = styled.div`
//   flex: 1;
//   margin-left: 20px;
//   position: absolute;
//   right: -200px;
//   width: 50rem;
//   /* background-image: url(${bgImage});
//   background-repeat: no-repeat;
//   background-size: 122%;
//   background-position: center top; */
//   /* background-image: url(${mobile});
//   background-repeat: no-repeat;
//   background-position: center center;
//   background-size: cover; */
//   /* min-height: 44rem; */

//   /* &::before {
//     content: "";
//     position: absolute;
//     height: 100%;
//     background-image: url(${bgImage});
//     background-repeat: no-repeat;
//     background-size: 122%;
//     width: 150%;
//     display: inline-block;
//     background-position: 0% 93%;
//   } */

//   /* &::after {
//     content: "";
//     position: absolute;
//     left: 30%;
//     height: 122%;
//     background-image: url(${mobile});
//     background-repeat: no-repeat;
//     background-size: 110%;
//     width: 100%;
//     display: inline-block;
//     background-position: 20% 83%;
//   } */
// `;

const Image = styled.img`
  width: 100%;
  position: relative;
  top: 20px;
  right: -130px;
  /* height: 100%; */
`;

const Hero = styled.section`
  height: 80vh;
  background-image: url(${bgImage});
  background-position: 125% -310%;
  background-repeat: no-repeat;
  font-size: 1rem;
  background-color: ${theme.colors.neutral.veryLightGray};
  /* overflow-x: hidden; */
`;

const TextChild = styled.div`
  /* width: 50%; */
  flex: 1;
  margin-right: 20px;
`;

const TextWrapper = styled.div`
  width: 550px;
`;

const Flexed = styled(FlexedContainer)`
  position: relative;
  height: inherit;
  padding-left: 5rem;
  box-sizing: border-box;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: 360% 70%;
  /* overflow: hidden; */
`;

const ImageContainer = styled.div`
  /* width: 50rem; */
  /* height: 50rem; */
  overflow: hidden;
`;
