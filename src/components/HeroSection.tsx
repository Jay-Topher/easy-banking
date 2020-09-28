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

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    font-size: 40px;
  }
`;

const Image = styled.img`
  width: 100%;
  position: relative;
  top: -120px;
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
  margin-top: -10rem;
  text-align: left;

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    width: 90%;
    order: 2;
    margin: 0 auto;
    text-align: center;
  }
`;

const TextWrapper = styled.div`
  @media only screen and (min-width: ${theme.breakpoints.md}) {
    width: 30rem;  
    margin: 0;
  }

  p {
    margin-bottom: 2rem;
    color: ${theme.colors.neutral.grayishBlue};
    line-height: 1.5rem;
  }
`;

const Flexed = styled(FlexedContainer)`
  position: relative;
  height: inherit;
  padding-left: 5rem;
  box-sizing: border-box;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: 360% 70%;
  width: 100%;
  flex-wrap: wrap;
  /* overflow: hidden; */

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    padding-left: 0;
  }
`;

const ImageContainer = styled.div`
  /* width: 50rem; */
  /* height: 50rem; */
  overflow: hidden;

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    order: 1;
    margin-bottom: 2rem;
  }
`;
