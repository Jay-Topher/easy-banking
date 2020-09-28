import React from "react";
import styled from "styled-components";
import { myTheme as theme } from "../my-theme";

interface FooterLinkGroupProps {
  links: {
    name: string;
    link: string;
  }[];
}

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ links }) => {
  return (
    <LinkGroup>
      {links.map(({ name, link }) => (
        <a href={link} key={name}>
          {name}
        </a>
      ))}
    </LinkGroup>
  );
};

export default FooterLinkGroup;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  

  @media (min-width: ${theme.breakpoints.lg}) {
    align-items: flex-start;
    margin-left: 8rem;
  }

  a {
    margin-bottom: 1rem;
    text-decoration: none;
    color: ${theme.colors.neutral.white};
    font-size: .9rem;
  }
`;
