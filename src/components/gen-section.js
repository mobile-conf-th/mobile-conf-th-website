import React from "react";
import { Container, color as c } from "../components/common";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const sectionContainer = css`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 24px;
  width: 100%;
`;

const H2 = styled.h2`
  font-size: 30px;
`;

const Line = styled.hr`
  color: ${c.green};
  height: 2px;
  width: 60px;
  background-color: ${c.green};
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
        color: ${textColor || c.darkGray};
        width: 100%;
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
