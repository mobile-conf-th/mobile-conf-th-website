import React from "react";
import GenSection from "../components/gen-section";
import { color, onMobile } from "../components/common";
import { css } from "@emotion/core";

const textStyle = css`
  line-height: 1.4rem;
  letter-spacing: 0.02rem;

  ${onMobile} {
    text-align: left;
  }
`;
const AboutUs = () => (
  <GenSection
    id="about"
    title="ABOUT US"
    color={color.blue}
    textColor="white"
    customCss={css`
      padding-top: 1.875rem;
    `}
  >
    <p css={textStyle}>
      Mobile Conf is the conference that gathers people who interested to see
      the future of mobile development. We focus heavily on quality and
      diversity in our topics, no matter what platform you were working on. Last
      year, we have more than 300 attendees and 15 speakers with various
      background and experiences,from CS students to IT Director in one of the
      biggest IT company in Thailand.
    </p>
    <p css={textStyle}>
      Our goal is to have MobileConf become one of the biggest tech conferences
      that people can joinfrom around the world and we are expanding it in this
      year.
    </p>
  </GenSection>
);

export default AboutUs;
