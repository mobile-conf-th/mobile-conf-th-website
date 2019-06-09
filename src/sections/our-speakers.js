import React, { useState } from "react";
import { color } from "../components/common";
import GenSection from "../components/gen-section";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import speakersData from '../data/speakers.json';

const Speaker = ({ img, name, title, topic, time, room }) => {
  const [isShowTopic, setShowTopic] = useState(false);
  return (
    <div
      css={css`
        margin: 0.75rem 0;
      `}
    >
      <div
        css={css`
          position: relative;
          margin: 0.625rem;

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
            padding: 1rem;
            ${isShowTopic
              ? `opacity: 0.9;`
              : `
               opacity: 0;
               &:hover: {
                 opacity: 0.9;
               }`};
            background-color: ${color.blue};
            color: #f1f2f2;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          <span
            css={css`
              font-size: 1.25rem;
              font-weight: normal;
              font-style: italic;
              padding: 0.3125rem;
              display: block;
            `}
          >
            - TOPIC -
          </span>
          <span
            css={css`
              font-size: 1.25rem;
              font-weight: normal;
              display: block;
              padding: 0.3125rem;
            `}
          >
            {topic}
          </span>
          <div
            css={css`
              background-color: #f1f2f2;
              width: 3.5rem;
              height: 0.1875rem;
              margin: 0.625rem;
            `}
          />
          <span
            css={css`
              font-size: 1.25rem;
              display: block;
              padding-top: 0.3125rem;
            `}
          >
            {time}
          </span>
          <span
            css={css`
              font-size: 1.25rem;
              display: block;
              padding-bottom: 0.3125rem;
            `}
          >
            {room}
          </span>
        </div>
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
        images: allFile(filter: {
          extension: {regex: "/(jpg)|(jpeg)|(png)/"}
          relativeDirectory: { eq: "speakers" }
        }) {
          edges {
            node {
              id
              name
              childImageSharp {
                fixed(width: 300, height: 275) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
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
          {
            speakersData.map(speaker => (
              data.images.edges
                .filter(({node}) => node.name === speaker.img)
                .map(({node}, index) => (
                  <Speaker
                    key={index}
                    img={node.childImageSharp.fixed}
                    name={speaker.name}
                    title={speaker.title}
                    topic={speaker.topic}
                    time={speaker.time}
                    room={speaker.room}
                  />
                ))
            ))
          }
        </div>
      </GenSection>
    )}
  />
);

export default OurSpeakers;
