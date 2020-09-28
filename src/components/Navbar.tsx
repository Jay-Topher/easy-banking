import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Container from "./Container";
import { navLinks } from "../assets/data.json";
import InviteButton from "./InviteButton";
import { myTheme as theme } from "../my-theme";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleShow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOpen(!open);
  };
  return (
    <Nav>
      <Container>
        <Div>
          <Logo />
          <UL>
            {navLinks.map((nav) => (
              <li key={nav.name}>
                <a href={nav.link}>{nav.name}</a>
              </li>
            ))}
          </UL>
          <InviteButton>Register Here</InviteButton>
        </Div>
        <MobileDiv>
          <Logo />
          <Hamburger open={open} onClick={toggleShow} />
        </MobileDiv>
      </Container>
    </Nav>
  );
};

const UL = styled.ul`
  list-style: none;

  @media (max-width: ${theme.breakpoints.lg}) {
  }

  & > li {
    display: inline;
    margin-right: 20px;

    & > a {
      text-decoration: none;
      color: ${theme.colors.neutral.grayishBlue};
      padding: 25px 0;

      &:hover {
        border-bottom: 3px solid ${theme.colors.primary.limeGreen};
      }
    }
  }
`;

const Div = styled.div`
  display: none;
  padding: 15px 0;

  @media only screen and (min-width: ${theme.breakpoints.md}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Nav = styled.nav`
  background-color: ${theme.colors.neutral.white};
  z-index: 2;
  position: sticky;
  top: 0;
  font-size: 1rem;
`;

const MobileDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 1rem;

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

export default Navbar;
