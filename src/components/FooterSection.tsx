import React from "react";
import styled from "styled-components";
import { myTheme } from "../my-theme";
import Container from "./Container";
import FlexedContainer from "./FlexedContainer";
import FooterLinkGroup from "./FooterLinkGroup";
import { WhiteLogo } from "./Logo";
import SocialMediaGroup from "./SocialMediaGroup";
import { linkGroup1, linkGroup2 } from "../assets/data.json";
import InviteButton from "./InviteButton";

interface FooterSectionProps {}

const FooterSection: React.FC<FooterSectionProps> = () => {
  return (
    <Footer>
      <Container>
        <Flexed>
          <Div>
            <WhiteLogo />
            <SocialMediaGroup />
          </Div>
          <FooterLinkGroup links={linkGroup1} />
          <FooterLinkGroup links={linkGroup2} />
          <Flex>
            <InviteButton>Request Invite</InviteButton>
            <p>&copy; Easybank. All Rights Reserved</p>
          </Flex>
        </Flexed>
      </Container>
    </Footer>
  );
};

export default FooterSection;

const Footer = styled.footer`
  background-color: ${myTheme.colors.primary.darkBlue};
  color: ${myTheme.colors.neutral.white};
  padding: 3rem 0;
`;

const Flexed = styled(FlexedContainer)`
  justify-content: flex-start;

  @media (max-width: ${myTheme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;

  @media (min-width: ${myTheme.breakpoints.lg}) {
    margin-left: auto;
    align-items: flex-end;
  }

  p {
    margin-top: 1.8rem;
    color: ${myTheme.colors.neutral.grayishBlue};
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${myTheme.breakpoints.md}) {
    margin-bottom: 1rem;
    align-items: canter;
  }
`
