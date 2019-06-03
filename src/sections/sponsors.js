import React from "react";
import { color } from "../components/common";
import GenSection from "../components/gen-section";

import styled from "@emotion/styled";
import { StaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import { css } from "@emotion/core";

const OurSponsors = styled(() => (
  <StaticQuery
    query={graphql`
      query {
        bg: file(relativePath: { eq: "sponsor-background.jpg" }) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        agoda: file(relativePath: { eq: "sp-agoda.png" }) {
          childImageSharp {
            fixed(width: 113, height: 46) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
        eventPop: file(relativePath: { eq: "sp-event-pop.png" }) {
          childImageSharp {
            fixed(width: 192, height: 38) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
        skooldio: file(relativePath: { eq: "sp-skooldio.png" }) {
          childImageSharp {
            fixed(width: 165, height: 56) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
        gosoft: file(relativePath: { eq: "sp-gosoft.png" }) {
          childImageSharp {
            fixed(width: 146, height: 28) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
        thaiProgrammer: file(relativePath: { eq: "sp-thai-programmer.png" }) {
          childImageSharp {
            fixed(width: 109, height: 53) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
        thailandKotlin: file(relativePath: { eq: "sp-thailand-kotlin.png" }) {
          childImageSharp {
            fixed(width: 182, height: 47) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
        queq: file(relativePath: { eq: "sp-queq.png" }) {
          childImageSharp {
            fixed(width: 127, height: 69) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
        kbtg: file(relativePath: { eq: "sp-kbtg.png" }) {
          childImageSharp {
            fixed(width: 97, height: 56) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
        iosDevTh: file(relativePath: { eq: "sp-ios-dev-th.png" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <BackgroundImage
        Tag="section"
        fluid={data.bg.childImageSharp.fluid}
        backgroundColor={color.darkGray}
      >
        <GenSection
          id="sponsors"
          title="OUR SPONSORS"
          color="transparent"
          textColor="white"
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-around;
              padding: 0.75rem 0;
            `}
          >
            <Img fixed={data.agoda.childImageSharp.fixed} />
            <Img fixed={data.eventPop.childImageSharp.fixed} />
            <Img fixed={data.skooldio.childImageSharp.fixed} />
            <Img fixed={data.gosoft.childImageSharp.fixed} />
          </div>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-around;
              padding: 0.75rem 0;
            `}
          >
            <Img fixed={data.thaiProgrammer.childImageSharp.fixed} />
            <Img fixed={data.thailandKotlin.childImageSharp.fixed} />
            <Img fixed={data.queq.childImageSharp.fixed} />
            <Img fixed={data.kbtg.childImageSharp.fixed} />
            <Img fixed={data.iosDevTh.childImageSharp.fixed} />
          </div>
        </GenSection>
      </BackgroundImage>
    )}
  />
))`
  width: 100%;
  background-position: bottom center;
  background-size: cover;
`;

export default OurSponsors;
