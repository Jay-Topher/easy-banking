import styled from "styled-components";
import { myTheme as theme } from "../my-theme";

const Container = styled.section`
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.lg}) {
    max-width: ${theme.screens.lg};
  }
  @media (max-width: ${theme.breakpoints.xl}) {
    max-width: ${theme.screens.xl};
  }
  @media (max-width: ${theme.breakpoints.md}) {
    max-width: ${theme.screens.md};
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    max-width: ${theme.screens.sm};
  } ;
`;

export default Container;
