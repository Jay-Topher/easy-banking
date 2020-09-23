import React from "react";
import styled from "styled-components";
import { myTheme as theme } from "../my-theme";
import Container from "./Container";
import FlexedContainer from "./FlexedContainer";
import { summaryPoints } from "../assets/data.json";
import SummaryItem from "./SummaryItem";
import iconApi from "../assets/icon-api.svg";
import iconBudgeting from "../assets/icon-budgeting.svg";
import iconOnline from "../assets/icon-online.svg";
import iconOnboarding from "../assets/icon-onboarding.svg";

interface iconObjType {
  iconApi: string;
  iconBudgeting: string;
  iconOnline: string;
  iconOnboarding: string;
}
const SecondSection = () => {
  const iconObj = [iconOnline, iconBudgeting, iconOnboarding, iconApi];
  return (
    <SecondContainer>
      <Container>
        <SecondMain>
          <TitleContainer>
            <h2>Why choose Easybank?</h2>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub.
              <span>Control your finances like never before.</span>
            </p>
          </TitleContainer>
          <Flexed>
            {summaryPoints.map(({ icon, title, description }, index) => (
              <SummaryItem
                icon={iconObj[index]}
                title={title}
                description={description}
                key={icon}
              />
            ))}
          </Flexed>
        </SecondMain>
      </Container>
    </SecondContainer>
  );
};

export default SecondSection;

const SecondContainer = styled.section`
  background-color: ${theme.colors.neutral.lightGrayishBlue};

  p {
    color: ${theme.colors.neutral.grayishBlue};
  }
`;

const SecondMain = styled.div`
  height: inherit;
  padding: 8rem 0;
`;

const Flexed = styled(FlexedContainer)`
  margin-top: 3rem;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const TitleContainer = styled.div`
  h2 {
    font-size: 2.5rem;
    font-weight: 400;
  }

  p {
    color: ${theme.colors.neutral.grayishBlue};
    font-size: 1.2rem;
    line-height: 1.7rem;

    span {
      display: block;
    }
  }
`;
