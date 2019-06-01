import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 105, height: 51) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.logo.childImageSharp.fixed} />}
  />
);
