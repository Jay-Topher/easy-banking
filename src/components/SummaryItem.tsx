import React from "react";
import styled from "styled-components";
import { myTheme as theme } from "../my-theme";

interface SummaryItemProps {
  icon: string;
  title: string;
  description: string;
}

const SummaryItem: React.FC<SummaryItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <SummaryContainer>
      <div>
        <img alt={title} src={icon} />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </SummaryContainer>
  );
};

export default SummaryItem;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.lg}) {
    /* flex: 1; */
    align-items: flex-start;
    /* padding-right: 1.8rem; */
    width: 22%;

  }

  @media (max-width: ${theme.breakpoints.md}) {
    flex-wrap: wrap;
    width: 44%;
  }

  h4 {
    font-weight: 300;
    font-size: 1.8rem;
    margin: 0;
    margin-top: 1.8rem;
    margin-bottom: 1rem;
  }

  & > p {
    font-size: 1rem;
    line-height: 1.4rem;
  }
`;
