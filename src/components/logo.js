import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";
export const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 105, maxHeight: 51) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <div
        css={css`
          width: 6rem;
        `}
      >
        <Img fluid={data.logo.childImageSharp.fluid} />
      </div>
    )}
  />
);
