import React from "react";
import { Container, color } from "../components/common";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const sectionContainer = css`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
`;

const H2 = styled.h2``;

const Line = styled.hr`
  color: ${color.green};
  height: 2px;
  width: 60px;
  background-color: ${color.green};
  border-radius: 2px;
`;

const Section = styled.section`
  width: 100%;
`;

const GenSection = ({ title, children, color, id }) => (
  <Section
    id={id}
    css={css`
      background-color: ${color || "white"};
    `}
  >
    <Container css={[sectionContainer]}>
      <H2>{title}</H2>
      <Line />
      <p
        css={css`
          max-width: 800px;
          text-align: center;
        `}
      >
        {children}
      </p>
    </Container>
  </Section>
);

export default GenSection;
