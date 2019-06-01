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

const H2 = styled.h2`
  font-size: 30px;
`;

const Line = styled.hr`
  color: ${color.green};
  height: 2px;
  width: 60px;
  background-color: ${color.green};
  border-radius: 2px;
  margin: 30px 0;
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
        color: ${textColor || "black"};
      `,
      customCss
    ]}
  >
    <Container css={[sectionContainer]}>
      <H2>{title}</H2>
      <Line />
      <div
        css={css`
          margin-top: 21px;
          max-width: 800px;
          text-align: center;
        `}
      >
        {children}
      </div>
    </Container>
  </Section>
);

export default GenSection;
