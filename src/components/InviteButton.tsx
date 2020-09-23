import styled from "styled-components";
import { myTheme as theme } from "../my-theme";

const InviteButton = styled.a`
  color: ${theme.colors.neutral.white};
  background: linear-gradient(
    to right,
    ${theme.colors.primary.limeGreen},
    ${theme.colors.primary.brightCyan}
  );
  border-radius: 50px;
  padding: 15px 35px;
  /* width: 100px;
  height: 35px; */
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
`;

export default InviteButton;
