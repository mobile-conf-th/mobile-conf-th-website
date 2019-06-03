import React from "react";
import GenSection from "../components/gen-section";
import { color } from "../components/common";
import { css } from "@emotion/core";

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
    <p>
      Mobile Conf is the conference that gathers people who interested to see
      the future of mobile development. We focus heavily on quality and
      diversity in our topics, no matter what platform you were working on. Last
      year, we have more than 300 attendees and 15 speakers with various
      background and experiences,from CS students to IT Director in one of the
      biggest IT company in Thailand.
    </p>
    <p>
      Our goal is to have MobileConf become one of the biggest tech conferences
      that people can joinfrom around the world and we are expanding it in this
      year.
    </p>
  </GenSection>
);

export default AboutUs;
