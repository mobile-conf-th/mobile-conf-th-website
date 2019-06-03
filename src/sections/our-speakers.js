import React from "react";
import { color } from "../components/common";
import GenSection from "../components/gen-section";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";

const Speaker = ({ img, name, title }) => (
  <div
    css={css`
      margin: 12px 0;
    `}
  >
    <Img
      fixed={img}
      css={css`
        margin: 10px;
      `}
    />
    <span
      css={css`
        display: block;
        font-weight: 600;
      `}
    >
      {name}
    </span>
    <span
      css={css`
        font-size: 13.5;
      `}
    >
      {title}
    </span>
  </div>
);
const OurSpeakers = () => (
  <StaticQuery
    query={graphql`
      query {
        speaker: file(relativePath: { eq: "speaker-1.jpg" }) {
          childImageSharp {
            fixed(width: 300, height: 275) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <GenSection id="sponsors" title="OUR SPEAKERS" color={color.gray}>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          `}
        >
          <Speaker
            img={data.speaker.childImageSharp.fixed}
            name="Pitiphong Phongpattranont"
            title="iOS developer, Agoda"
          />
          <Speaker
            img={data.speaker.childImageSharp.fixed}
            name="Pitiphong Phongpattranont"
            title="iOS developer, Agoda"
          />
          <Speaker
            img={data.speaker.childImageSharp.fixed}
            name="Pitiphong Phongpattranont"
            title="iOS developer, Agoda"
          />
          <Speaker
            img={data.speaker.childImageSharp.fixed}
            name="Pitiphong Phongpattranont"
            title="iOS developer, Agoda"
          />
          <Speaker
            img={data.speaker.childImageSharp.fixed}
            name="Pitiphong Phongpattranont"
            title="iOS developer, Agoda"
          />
          <Speaker
            img={data.speaker.childImageSharp.fixed}
            name="Pitiphong Phongpattranont"
            title="iOS developer, Agoda"
          />
        </div>
      </GenSection>
    )}
  />
);

export default OurSpeakers;
