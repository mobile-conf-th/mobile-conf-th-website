import React from "react";
import { Container, color as c } from "../components/common";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const sectionContainer = css`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6.25rem 1.5rem;
  width: 100%;
`;

const H2 = styled.h2`
  font-size: 1.875rem;
`;

const Line = styled.hr`
  color: ${c.green};
  height: 0.125rem;
  width: 3.75rem;
  background-color: ${c.green};
  border-radius: 0.125rem;
  margin: 1.875rem 0;
`;

const Section = styled.section`
  width: 100%;
`;

const GenSection = ({ title, children, color, textColor, id, customCss }) => (
  <Section
    id={id}
    css={[
      css`
        background-color: ${color || "white"};
        color: ${textColor || c.darkGray};
        width: 100%;
      `,
      customCss,
    ]}
  >
    <Container css={[sectionContainer]}>
      <H2>{title}</H2>
      <Line />
      <div
        css={css`
          margin-top: 1.3125rem;
          text-align: center;
          width: 100%;
        `}
      >
        {children}
      </div>
    </Container>
  </Section>
);

export default GenSection;
