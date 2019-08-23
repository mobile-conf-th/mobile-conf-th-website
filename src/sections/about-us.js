import React from "react";
import GenSection from "../components/gen-section";
import { color, onMobile } from "../components/common";
import { css } from "@emotion/core";

const textStyle = css`
  line-height: 1.765rem;
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
      the future of mobile development and meet up people with the same
      interest. We focus heavily on quality and diversity in our topics, no
      matter what platform you are working on. Last year, we were successfully
      held the conference with more than 300 attendees with various background
      and experiences, from CS students to Mobile Director in one of the biggest
      tech company in Thailand.
    </p>
    <p css={textStyle}>
      Our main goal is to have Mobile Conf become one of the biggest tech
      conference that attendees are from around the world and we are working so
      hard to make it to the next level every year.
    </p>
  </GenSection>
);

export default AboutUs;
