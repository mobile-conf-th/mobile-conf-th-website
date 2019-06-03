import React, { useState } from "react";
import { color } from "../components/common";
import GenSection from "../components/gen-section";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";

const Speaker = ({ img, name, title }) => {
  const [isShowTopic, setShowTopic] = useState(false);
  return (
    <div
      css={css`
        margin: 12px 0;
      `}
    >
      <div
        css={css`
          position: relative;
          margin: 10px;

          div:hover {
            opacity: 0.9;
          }
        `}
        onClick={() => setShowTopic(!isShowTopic)}
        onMouseLeave={() => setShowTopic(false)}
      >
        <Img fixed={img} />
        <div
          css={css`
            transition: opacity 0.3s ease;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            ${isShowTopic
              ? `opacity: 0.9;`
              : `
               opacity: 0;
               &:hover: {
                 opacity: 0.9;
               }`};
            background-color: ${color.blue};
          `}
        />
      </div>
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
};
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
      <GenSection id="speakers" title="OUR SPEAKERS" color={color.gray}>
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
