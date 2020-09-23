import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Container from "./Container";
import { navLinks } from "../assets/data.json";
import InviteButton from "./InviteButton";
import { myTheme as theme } from "../my-theme";

const Navbar = () => {
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
      </Container>
    </Nav>
  );
};

const UL = styled.ul`
  list-style: none;

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

const Nav = styled.nav`
  background-color: ${theme.colors.neutral.white};
  z-index: 2;
  position: sticky;
  top: 0;
  font-size: 1rem;
`

export default Navbar;
