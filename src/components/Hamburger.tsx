import React from "react";
import hamIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";
import styled from "styled-components";
// import {myTheme as theme} from '../my-theme'

interface HamburgerProps {
  open: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ open, onClick }) => {
  return (
    <HamButton onClick={onClick}>
      <img src={open ? closeIcon : hamIcon} alt="hamburger" />
    </HamButton>
  );
};

export default Hamburger;

const HamButton = styled.button`
  background: none;
  background-color: #fff;
  border: none;
  padding: 0.3rem;
  width: 2rem;
  height: 2rem;
`;
